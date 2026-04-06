import { state } from "../state.js";
import { QUICK_PROMPTS } from "../../data/quickPrompts.js";
import { escapeHtml, copyBox } from "../utils.js";

export function renderQuickPrompts() {
  if (!state.currentQuickPromptId) {
    return renderQuickPromptOverview();
  }

  const item = QUICK_PROMPTS.find(x => x.id === state.currentQuickPromptId);
  if (!item) {
    return renderQuickPromptOverview();
  }

  return renderQuickPromptDetail(item);
}

function renderQuickPromptOverview() {
  return `
    <button type="button" class="back-btn" id="back-to-overview-from-quick">← Back to Overview</button>

    <div class="detail-hero">
      <div class="detail-top">
        <div class="detail-icon">⚡</div>
        <div class="detail-title-wrap">
          <h2>Quick Prompt Library</h2>
          <div class="detail-subtitle">실무에서 바로 쓰는 6개 프롬프트 카드</div>
        </div>
      </div>
    </div>

    <div class="overview-grid">
      ${QUICK_PROMPTS.map(item => `
        <article class="fw-card">
          <div class="badge-row">
            <span class="badge badge-id">QUICK</span>
            <span class="badge badge-easy">실무형</span>
          </div>

          <h3>${escapeHtml(item.title)}</h3>
          <div class="fullname">${escapeHtml(item.shortDesc || "")}</div>
          <p>${escapeHtml(item.useCase || "")}</p>

          <div class="strengths">
            <span class="strength-tag">빠른 활용</span>
            <span class="strength-tag">복붙용</span>
            <span class="strength-tag">실무형</span>
          </div>

          <button
            type="button"
            class="view-btn"
            data-quick-id="${escapeHtml(item.id)}"
          >
            상세 보기 →
          </button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderQuickPromptDetail(item) {
  const navCards = QUICK_PROMPTS.map(prompt => `
    <button
      class="strategy-tab doc ${prompt.id === item.id ? "active" : ""}"
      type="button"
      data-quick-nav-id="${escapeHtml(prompt.id)}"
      style="padding:16px 18px"
    >
      <div class="strategy-tab-head">
        <span>⚡</span>
        <span>${escapeHtml(prompt.title)}</span>
      </div>
      <div class="strategy-tab-body">${escapeHtml(prompt.shortDesc || "")}</div>
    </button>
  `).join("");

  return `
    <button type="button" class="back-btn" id="back-to-quick-list">← 빠른 프롬프트로 돌아가기</button>

    <div class="detail-hero">
      <div class="detail-top">
        <div class="detail-icon">⚡</div>
        <div class="detail-title-wrap">
          <h2>${escapeHtml(item.title)}</h2>
          <div class="detail-subtitle">${escapeHtml(item.shortDesc || "")}</div>
        </div>
      </div>
    </div>

    <div class="section-block">
      <div class="section-head">
        <div>
          <h3>📚 다른 빠른 프롬프트</h3>
          <p>상세 화면에서도 바로 다른 카드로 이동할 수 있습니다.</p>
        </div>
      </div>
      <div class="overview-grid">${navCards}</div>
    </div>

    <div class="detail-content-grid">
      <div class="content-card">
        <h4>🧭 사용 가이드</h4>

        <div class="prompt-guide">
          <div class="guide-item use-when">
            <span class="guide-label">사용 상황</span>
            <div class="guide-text">${escapeHtml(item.useCase || "-")}</div>
          </div>

          <div class="guide-item quick-example">
            <span class="guide-label">빠른 질문</span>
            <div class="guide-text quick-example-text">${escapeHtml(item.quickQuestion || "-")}</div>
          </div>
        </div>

        <div style="margin-top:16px">
          <h4>✅ 예상 결과</h4>
          <div class="result-box">${escapeHtml(item.expectedOutput || "-")}</div>
        </div>

        <div style="margin-top:16px">
          <h4>📌 예시</h4>
          <div class="result-box">${escapeHtml(item.example || "-")}</div>
        </div>

        <div style="margin-top:16px">
          <h4>💡 활용 팁</h4>
          <div class="result-box">${escapeHtml(item.tip || "-")}</div>
        </div>
      </div>

      <div class="content-card">
        <h4>🧠 추천 프롬프트</h4>
        ${copyBox(`quick-${item.id}`, escapeHtml(item.prompt || "-"))}

        ${item.imageDesc ? `
          <div style="margin-top:16px">
            <h4>🖼️ 설명</h4>
            <div class="result-box">${escapeHtml(item.imageDesc)}</div>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}