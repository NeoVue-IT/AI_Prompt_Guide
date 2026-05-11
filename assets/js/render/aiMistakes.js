import { aiMistakes } from "../../data/aiMistakes.js";
import { escapeHtml } from "../utils.js";

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
    .join("");
}

function renderMistakeCard(item) {
  return `
    <article class="guide-item">
      <div class="guide-item-header">
        <h3>${escapeHtml(item.title)}</h3>
        <div class="tag-row">
          <span class="mini-tag">${escapeHtml(difficultyLabels[item.difficulty] || "기본")}</span>
          <span class="mini-tag">위험도: ${escapeHtml(severityLabels[item.severity] || "보통")}</span>
          ${renderTags(item.tags)}
        </div>
      </div>

      <p><strong>실수:</strong> ${escapeHtml(item.mistake)}</p>
      <p><strong>문제점:</strong> ${escapeHtml(item.problem)}</p>
      <p><strong>개선 방법:</strong> ${escapeHtml(item.better)}</p>

      <div class="prompt-box">
        <strong>나쁜 예시</strong>
        <p>${escapeHtml(item.badPrompt)}</p>
      </div>

      <div class="prompt-box">
        <strong>좋은 예시</strong>
        <p>${escapeHtml(item.goodPrompt)}</p>
      </div>

      <p><strong>Tip:</strong> ${escapeHtml(item.tip)}</p>
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