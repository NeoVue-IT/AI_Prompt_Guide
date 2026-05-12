// assets/js/render/promptPatterns.js
import { PROMPT_PATTERNS } from "../../data/bestPractices/promptPatterns.js";
import { state } from "../state.js";
import { escapeHtml, copyBox } from "../utils.js";

function renderList(items = []) {
  return `
    <ul class="guide-list">
      ${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderPatternCard(item) {
  const mode = state.promptPatternsLangMode || "both";
  const showEN = mode === "en" || mode === "both";
  const showKO = mode === "ko" || mode === "both";

  return `
    <article class="guide-item prompt-pattern-card">
      <div class="guide-item-header">
        <div class="tag-row">
          <span class="mini-tag">Pattern ${escapeHtml(String(item.number))}</span>
          ${showEN ? `<span class="mini-tag">${escapeHtml(item.title.en)}</span>` : ""}
          ${showKO ? `<span class="mini-tag">${escapeHtml(item.title.ko)}</span>` : ""}
        </div>

        <h3>
          ${showKO ? escapeHtml(item.title.ko) : escapeHtml(item.title.en)}
        </h3>
      </div>

      <div class="prompt-compare">
        ${showEN ? `
          <div class="prompt-example-col">
            <div class="guide-label">EN Summary</div>
            <p class="guide-text">${escapeHtml(item.summary.en)}</p>

            <div class="guide-block">
              <strong>Why it helps</strong>
              ${renderList(item.why.en)}
            </div>

            <div class="guide-block">
              <strong>Example Prompt</strong>
              ${copyBox(`pattern-en-${item.id}`, item.example.en)}
            </div>
          </div>
        ` : ""}

        ${showKO ? `
          <div class="prompt-example-col">
            <div class="guide-label">KO Summary</div>
            <p class="guide-text">${escapeHtml(item.summary.ko)}</p>

            <div class="guide-block">
              <strong>효과</strong>
              ${renderList(item.why.ko)}
            </div>

            <div class="guide-block">
              <strong>예시 프롬프트</strong>
              ${copyBox(`pattern-ko-${item.id}`, item.example.ko)}
            </div>
          </div>
        ` : ""}
      </div>
    </article>
  `;
}

export function renderPromptPatterns() {
  const mode = state.promptPatternsLangMode || "both";

  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">Prompt Patterns</p>
      <h1>${escapeHtml(PROMPT_PATTERNS.title.ko)}</h1>
      <p>${escapeHtml(PROMPT_PATTERNS.intro.ko)}</p>

      <div class="language-controls">
        <button type="button" class="lang-btn ${mode === "both" ? "active" : ""}" data-pattern-lang="both">
          EN + KO
        </button>
        <button type="button" class="lang-btn ${mode === "en" ? "active" : ""}" data-pattern-lang="en">
          EN
        </button>
        <button type="button" class="lang-btn ${mode === "ko" ? "active" : ""}" data-pattern-lang="ko">
          KO
        </button>
      </div>
    </section>

    <div class="content-stack">
      ${PROMPT_PATTERNS.items.map(renderPatternCard).join("")}
    </div>
  `;
}
