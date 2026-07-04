// Replace with your deployed Cloudflare Worker URL (see worker/ai-proxy.js for setup instructions).
// The Worker holds the Anthropic API key server-side — never put an API key in this file.
const AI_PROXY_URL = 'https://neuronex-ai-proxy.funsportsyk.workers.dev';

const SYSTEM_PROMPT = `You are the NeuroNex Research Assistant — an AI built by the NeuroNex nonprofit to help patients, families, and caregivers understand Alzheimer's disease.

Your role:
- Answer questions about Alzheimer's disease, dementia, caregiving, research, treatments, biomarkers, policy, and brain health
- Ground every answer in real, peer-reviewed science when relevant (cite specific studies, trials, or organizations by name — e.g. FINGER trial, CLARITY-AD, Alzheimer's Association)
- Translate complex scientific concepts into plain, warm, accessible language a non-scientist family member can understand
- Be honest about what science does and does not yet know
- When relevant, mention NeuroNex resources (the Research Database has plain-language research summaries, the Advocacy Tracker covers current legislation)

Tone: Warm, clear, and direct. Not clinical or cold. Not overly casual. Like a knowledgeable friend who respects the reader's intelligence.

Format: Use short paragraphs. Use bold for key terms or findings. Use bullet lists only when listing multiple items. Keep answers focused — 150 to 350 words unless the question genuinely needs more.

Always end responses that involve diagnosis, treatment decisions, or medication with a brief note that the person should speak with a physician or neurologist for personal medical decisions.

Never diagnose. Never recommend specific medications for a specific person. Never make promises about outcomes.`;

let history = [];
let isLoading = false;

const chatArea = document.getElementById('chatArea');
const input = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
let emptyState = document.getElementById('emptyState');

input.addEventListener('input', () => {
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 160) + 'px';
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

sendBtn.addEventListener('click', sendMessage);

document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    input.value = btn.getAttribute('data-q');
    document.getElementById('suggestionsArea').style.display = 'none';
    sendMessage();
  });
});

function appendMsg(role, html, showSource) {
  if (emptyState) { emptyState.remove(); emptyState = null; }

  const wrap = document.createElement('div');
  wrap.className = `msg ${role}`;

  const roleLabel = document.createElement('div');
  roleLabel.className = 'msg-role';
  roleLabel.textContent = role === 'user' ? 'You' : 'NeuroNex AI';
  wrap.appendChild(roleLabel);

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.innerHTML = html;

  if (showSource && role === 'ai') {
    const src = document.createElement('div');
    src.className = 'source-tag';
    src.textContent = 'Powered by Claude · NeuroNex Research Assistant · Not medical advice';
    bubble.appendChild(src);
  }

  wrap.appendChild(bubble);
  chatArea.appendChild(wrap);
  chatArea.scrollTop = chatArea.scrollHeight;
  return bubble;
}

function showTyping() {
  const wrap = document.createElement('div');
  wrap.className = 'msg ai';
  wrap.id = 'typingWrap';
  const roleLabel = document.createElement('div');
  roleLabel.className = 'msg-role';
  roleLabel.textContent = 'NeuroNex AI';
  const t = document.createElement('div');
  t.className = 'typing';
  t.innerHTML = '<span></span><span></span><span></span>';
  wrap.appendChild(roleLabel);
  wrap.appendChild(t);
  chatArea.appendChild(wrap);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typingWrap');
  if (t) t.remove();
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatResponse(text) {
  let html = escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .split('\n\n').map(para => {
      para = para.trim();
      if (!para) return '';
      if (para.includes('\n- ') || para.startsWith('- ')) {
        const items = para.split('\n').filter(l => l.trim());
        return '<ul>' + items.map(l => '<li>' + l.replace(/^- /, '') + '</li>').join('') + '</ul>';
      }
      return '<p>' + para.replace(/\n/g, ' ') + '</p>';
    }).filter(Boolean).join('');
  return html;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text || isLoading) return;

  const sugArea = document.getElementById('suggestionsArea');
  if (sugArea) sugArea.style.display = 'none';

  isLoading = true;
  sendBtn.disabled = true;
  input.value = '';
  input.style.height = 'auto';

  appendMsg('user', '<p>' + escapeHtml(text) + '</p>', false);
  history.push({ role: 'user', content: text });

  showTyping();

  try {
    const response = await fetch(AI_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ system: SYSTEM_PROMPT, messages: history })
    });

    const data = await response.json();
    removeTyping();

    if (!response.ok || data.error) {
      const message = (data && data.error && data.error.message) || 'The AI proxy is not set up yet.';
      appendMsg('ai', '<div class="error-msg">Something went wrong: ' + escapeHtml(message) + '</div>', false);
    } else {
      const reply = data.content.map(b => b.type === 'text' ? b.text : '').join('');
      history.push({ role: 'assistant', content: reply });
      appendMsg('ai', formatResponse(reply), true);
    }
  } catch (err) {
    removeTyping();
    appendMsg('ai', '<div class="error-msg">Could not reach the AI. Please check your connection and try again.</div>', false);
  }

  isLoading = false;
  sendBtn.disabled = false;
  input.focus();
  chatArea.scrollTop = chatArea.scrollHeight;
}
