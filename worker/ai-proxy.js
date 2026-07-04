// NeuroNex "Ask the Research" — Cloudflare Worker proxy
//
// Why this exists: GitHub Pages only serves static files, so the chat page
// (ai.html / ai.js) cannot safely call the Anthropic API directly — any API
// key placed in that client-side code would be visible to every visitor.
// This Worker runs on Cloudflare's servers, holds the API key as a secret,
// and is the only thing that ever talks to Anthropic.
//
// SETUP:
// 1. Create a free account at https://dash.cloudflare.com
// 2. Go to Workers & Pages -> Create -> Create Worker. Name it e.g. "neuronex-ai-proxy".
// 3. Click "Edit code", delete the placeholder, and paste in this entire file. Deploy.
// 4. Go to the Worker's Settings -> Variables and Secrets -> Add:
//      Name: ANTHROPIC_API_KEY
//      Value: your key from https://console.anthropic.com
//      Type: Secret (encrypted)
// 5. In Settings -> Variables and Secrets, also add a plain variable:
//      Name: ALLOWED_ORIGIN
//      Value: https://ksy74.github.io   (no trailing slash)
// 6. Copy the Worker's URL (shown at the top of its dashboard page, looks like
//    https://neuronex-ai-proxy.<your-subdomain>.workers.dev) and paste it into
//    AI_PROXY_URL at the top of ai.js in the NeuronEx repo.
// 7. Set a spending cap / usage alert on console.anthropic.com so a traffic
//    spike or abuse can't run up an unexpected bill.

const MODEL = 'claude-sonnet-5';
const MAX_TOKENS = 1000;

// Best-effort per-IP rate limit (resets whenever Cloudflare recycles this
// Worker instance — it is a deterrent, not a hard guarantee. The spending
// cap in step 7 above is your real safety net).
const RATE_LIMIT = 20; // requests
const RATE_WINDOW_MS = 60 * 60 * 1000; // per hour
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT;
}

function corsHeaders(origin, allowedOrigin) {
  const headers = { 'Vary': 'Origin' };
  if (origin === allowedOrigin) {
    headers['Access-Control-Allow-Origin'] = allowedOrigin;
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
  }
  return headers;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowedOrigin = env.ALLOWED_ORIGIN || '';
    const headers = corsHeaders(origin, allowedOrigin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (origin !== allowedOrigin) {
      return new Response(JSON.stringify({ error: { message: 'Origin not allowed.' } }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: { message: 'Method not allowed.' } }), {
        status: 405,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({ error: { message: 'Too many requests. Please try again later.' } }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: { message: 'Invalid request body.' } }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    const { system, messages } = body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: { message: 'Missing messages.' } }), {
        status: 400,
        headers: { ...headers, 'Content-Type': 'application/json' }
      });
    }

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system,
        messages
      })
    });

    const data = await anthropicResponse.text();
    return new Response(data, {
      status: anthropicResponse.status,
      headers: { ...headers, 'Content-Type': 'application/json' }
    });
  }
};
