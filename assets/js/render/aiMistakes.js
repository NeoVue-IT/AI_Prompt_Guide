import { aiMistakes } from "../../data/bestPractices/aiMistakes.js";
import { escapeHtml, copyBox } from "../utils.js";

const difficultyLabels = {
  beginner: "초급",
  intermediate: "중급",
  advanced: "고급"
};

const severityLabels = {
  low: "낮음",
  medium: "보통",
  high: "높음",
  critical: "매우 높음"
};

function renderTags(tags = []) {
  return tags
    .map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`)
    .join(" ");
}

function renderMistakeCard(item) {
  return `
    <article class="guide-item ai-mistake-card">
      <div class="guide-item-header">
        <h3>${escapeHtml(item.title)}</h3>

        <div class="tag-row">
          <span class="mini-tag">${escapeHtml(difficultyLabels[item.difficulty] || "기본")}</span>
          <span class="mini-tag">위험도: ${escapeHtml(severityLabels[item.severity] || "보통")}</span>
          ${renderTags(item.tags)}
        </div>
      </div>

      <div class="mistake-summary">
        <p><strong>실수</strong><span>${escapeHtml(item.mistake)}</span></p>
        <p><strong>문제점</strong><span>${escapeHtml(item.problem)}</span></p>
        <p><strong>개선 방법</strong><span>${escapeHtml(item.better)}</span></p>
      </div>

      <div class="prompt-compare">
        <div class="prompt-example-col">
          <div class="guide-label">나쁜 예시</div>
          ${copyBox(`mistake-bad-${item.id}`, escapeHtml(item.badPrompt))}
        </div>

        <div class="prompt-example-col">
          <div class="guide-label">좋은 예시</div>
          ${copyBox(`mistake-good-${item.id}`, escapeHtml(item.goodPrompt))}
        </div>
      </div>

      <div class="tip-box">
        <strong>Tip</strong>
        <span>${escapeHtml(item.tip)}</span>
      </div>
    </article>
  `;
}

function renderMistakeSection(section) {
  return `
    <section class="guide-section">
      <div class="section-heading">
        <h2>${escapeHtml(section.section)}</h2>
        <p>${escapeHtml(section.description)}</p>
      </div>

      <div class="guide-grid">
        ${section.items.map(renderMistakeCard).join("")}
      </div>
    </section>
  `;
}

export function renderAiMistakes() {
  return `
    <section class="page-hero">
      <p class="eyebrow">AI Usage Mistakes</p>
      <h1>AI 사용 시 흔한 실수</h1>
      <p>
        LLM, ChatGPT, Gemini, Claude, 에이전트 등을 사용할 때 자주 발생하는 실수와
        더 나은 사용 방법을 정리한 가이드입니다.
      </p>
    </section>

    <div class="content-stack">
      ${aiMistakes.map(renderMistakeSection).join("")}
    </div>
  `;
}