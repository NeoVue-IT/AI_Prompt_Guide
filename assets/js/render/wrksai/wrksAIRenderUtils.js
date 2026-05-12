import { escapeHtml } from "../../utils.js";

export function renderHero(section) {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <h1>${escapeHtml(section.title)}</h1>
      <p>${escapeHtml(section.description)}</p>
    </section>
  `;
}

export function renderCoreMessage(coreMessage) {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(coreMessage.title)}</h2>
        <p>${escapeHtml(coreMessage.body)}</p>
      </div>
    </section>
  `;
}

export function renderSectionHeader(title, body) {
  return `
    <div class="section-card">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

export function renderList(items = []) {
  return `
    <ul class="guide-list">
      ${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

export function renderFlowRow(items = []) {
  return `
    <div class="flow-row">
      ${items.map((item, index) => `
        <span class="flow-pill">${escapeHtml(item)}</span>
        ${index < items.length - 1 ? `<span class="flow-arrow">→</span>` : ""}
      `).join("")}
    </div>
  `;
}

export function renderBeforeAfter(before, after) {
  return `
    <div class="compare-grid">
      <div class="compare-card compare-bad">
        <strong>Before</strong>
        <p>${escapeHtml(before)}</p>
      </div>

      <div class="compare-card compare-good">
        <strong>After</strong>
        <p>${escapeHtml(after)}</p>
      </div>
    </div>
  `;
}

export function renderPromptBox(prompt) {
  return `
    <div class="copy-box">
      <pre><code>${escapeHtml(prompt)}</code></pre>
    </div>
  `;
}