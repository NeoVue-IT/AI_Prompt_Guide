import { PROMPT_PATTERNS } from "../../data/promptPatterns.js";
import { state } from "../state.js";
import { qs } from "../utils.js";
import { renderApp } from "../app.js";

function renderList(items = []) {
  return items.map(item => `<li>${item}</li>`).join("");
}

function renderPatternItem(item) {
  const mode = state.promptPatternsLangMode || "both";
  const showEN = mode === "en" || mode === "both";
  const showKO = mode === "ko" || mode === "both";

  return `
    <article class="prompt-pattern-card">
      <div class="pattern-header">
        <div class="pattern-badge">${item.number}</div>
        <div class="pattern-heading">
          ${showEN ? `<h3>${item.title.en}</h3>` : ""}
          ${showKO ? `<h3>${item.title.ko}</h3>` : ""}
        </div>
      </div>

      <div class="pattern-content ${mode === "both" ? "split-mode" : "single-mode"}">
        ${showEN ? `
          <section class="pattern-panel">
            <div class="mini-label">EN</div>
            <p>${item.summary.en}</p>

            <div class="pattern-block">
              <strong>Why it helps</strong>
              <ul>${renderList(item.why.en)}</ul>
            </div>

            <div class="pattern-block">
              <strong>Example Prompt</strong>
              <pre><code>${item.example.en}</code></pre>
            </div>
          </section>
        ` : ""}

        ${showKO ? `
          <section class="pattern-panel">
            <div class="mini-label">KO</div>
            <p>${item.summary.ko}</p>

            <div class="pattern-block">
              <strong>효과</strong>
              <ul>${renderList(item.why.ko)}</ul>
            </div>

            <div class="pattern-block">
              <strong>예시 프롬프트</strong>
              <pre><code>${item.example.ko}</code></pre>
            </div>
          </section>
        ` : ""}
      </div>
    </article>
  `;
}

export function renderPromptPatterns() {
  const mode = state.promptPatternsLangMode || "both";
  const showEN = mode === "en" || mode === "both";
  const showKO = mode === "ko" || mode === "both";

  return `
    <section class="prompt-patterns-page">
      <div class="section-header">
        <div class="section-header-text">
          ${showEN ? `<h2>${PROMPT_PATTERNS.title.en}</h2>` : ""}
          ${showKO ? `<h2>${PROMPT_PATTERNS.title.ko}</h2>` : ""}
        </div>

        <div class="language-controls">
          <button
            type="button"
            class="lang-btn ${mode === "both" ? "active" : ""}"
            data-pattern-lang="both"
          >
            EN + KO
          </button>
          <button
            type="button"
            class="lang-btn ${mode === "en" ? "active" : ""}"
            data-pattern-lang="en"
          >
            EN
          </button>
          <button
            type="button"
            class="lang-btn ${mode === "ko" ? "active" : ""}"
            data-pattern-lang="ko"
          >
            KO
          </button>
        </div>
      </div>

      <div class="prompt-pattern-intro ${mode === "both" ? "split-mode" : "single-mode"}">
        ${showEN ? `
          <div class="intro-panel">
            <p>${PROMPT_PATTERNS.intro.en}</p>
          </div>
        ` : ""}

        ${showKO ? `
          <div class="intro-panel">
            <p>${PROMPT_PATTERNS.intro.ko}</p>
          </div>
        ` : ""}
      </div>

      <div class="prompt-pattern-list">
        ${PROMPT_PATTERNS.items.map(renderPatternItem).join("")}
      </div>
    </section>
  `;
}
