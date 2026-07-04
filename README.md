# NeuroNex

A small static, multi-page nonprofit site about Alzheimer's awareness.

## Structure

- `index.html` — Awareness home page (stages, warning signs, prevention, caregivers)
- `research-database.html` — Searchable/filterable database of Alzheimer's research
- `contact.html` — Contact form + "Share your story" form
- `styles.css` — Shared fonts, colors, and layout for all pages
- `nav.js` — Mobile hamburger menu behavior (shared)
- `forms.js` — Formspree AJAX submission handling for the contact/story forms
- `awareness.js`, `database.js` — Page-specific scripts

## Before you go live: connect Formspree

The forms in `contact.html` point at placeholder Formspree endpoints. To make them work:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create one form for "Contact" and another for "Share your story" (or reuse one for both).
3. Copy each form's endpoint URL (looks like `https://formspree.io/f/abcdwxyz`).
4. In `contact.html`, replace:
   - `https://formspree.io/f/YOUR_CONTACT_FORM_ID` with your contact form's endpoint
   - `https://formspree.io/f/YOUR_STORY_FORM_ID` with your story form's endpoint
5. Commit and push — GitHub Pages will pick up the change automatically.

Until you do this, submitting either form will show an inline reminder instead of sending.

## Local preview

Just open `index.html` in a browser, or serve the folder with any static file server.
