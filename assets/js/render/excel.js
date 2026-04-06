import { state } from "../state.js";
import { EXCEL_PROMPTS } from "../../data/excelPrompts.js";
import { escapeHtml } from "../utils.js";

export function renderExcel() {
  if (state.currentExcelPromptId) {
    return renderExcelPromptDetail();
  }

  return renderExcelOverview();
}

function getCurrentExcelPrompt() {
  for (const category of EXCEL_PROMPTS) {
    const found = category.prompts.find(p => p.id === state.currentExcelPromptId);
    if (found) return found;
  }
  return null;
}

function renderExcelOverview() {
  const categoryButtons = EXCEL_PROMPTS.map((cat, index) => `
    <button
      class="excel-cat-btn ${index === state.currentExcelCategory ? "active" : ""}"
      type="button"
      data-excel-category="${index}"
    >
      ${escapeHtml(cat.category)}
    </button>
  `).join("");

  const currentCategory = EXCEL_PROMPTS[state.currentExcelCategory] || EXCEL_PROMPTS[0];

  const promptCards = currentCategory.prompts.map(item => `
    <article class="fw-card">
      <div class="badge-row">
        <span class="badge badge-id">EXCEL</span>
        <span class="badge badge-easy">${escapeHtml(currentCategory.category)}</span>
      </div>

      <h3>${escapeHtml(item.title)}</h3>
      <div class="fullname">${escapeHtml(item.shortDesc || "")}</div>
      <p>${escapeHtml(item.useCase || "")}</p>

      <div class="strengths">
        <span class="strength-tag">사용 상황</span>
        <span class="strength-tag">빠른 질문</span>
        <span class="strength-tag">복붙용</span>
      </div>

      <button
        class="view-btn"
        type="button"
        data-excel-id="${escapeHtml(item.id)}"
      >
        상세 보기 →
      </button>
    </article>
  `).join("");

  return `
    <button type="button" class="back-btn" id="back-to-overview-from-excel">← 전체 개요로 돌아가기</button>

    <div class="detail-hero">
      <div class="detail-top">
        <div class="detail-icon">📊</div>
        <div class="detail-title-wrap">
          <h2>Excel Prompt Library</h2>
          <div class="detail-subtitle">실무에서 바로 사용하는 엑셀 업무 프롬프트 모음</div>
        </div>
      </div>
    </div>

    <div class="excel-category-bar">${categoryButtons}</div>
    <div class="overview-grid">${promptCards}</div>
  `;
}

function renderExcelPromptDetail() {
  const item = getCurrentExcelPrompt();
  if (!item) return renderExcelOverview();

  const categoryButtons = EXCEL_PROMPTS.map((cat, index) => `
    <button
      class="excel-cat-btn ${index === state.currentExcelCategory ? "active" : ""}"
      type="button"
      data-excel-category="${index}"
    >
      ${escapeHtml(cat.category)}
    </button>
  `).join("");

  const currentCategory = EXCEL_PROMPTS[state.currentExcelCategory] || EXCEL_PROMPTS[0];

  const promptNavCards = currentCategory.prompts.map(prompt => `
    <button
      class="strategy-tab doc ${prompt.id === item.id ? "active" : ""}"
      type="button"
      data-excel-id="${escapeHtml(prompt.id)}"
      style="padding:16px 18px"
    >
      <div class="strategy-tab-head">
        <span>📊</span>
        <span>${escapeHtml(prompt.title)}</span>
      </div>
      <div class="strategy-tab-body">${escapeHtml(prompt.shortDesc || "")}</div>
    </button>
  `).join("");

  return `
    <button type="button" class="back-btn" id="back-to-excel-list">← Excel 목록으로 돌아가기</button>

    <div class="detail-hero">
      <div class="detail-top">
        <div class="detail-icon">📈</div>
        <div class="detail-title-wrap">
          <h2>${escapeHtml(item.title)}</h2>
          <div class="detail-subtitle">${escapeHtml(item.shortDesc || "")}</div>
        </div>
      </div>
    </div>

    <div class="excel-category-bar">${categoryButtons}</div>

    <div class="section-block">
      <div class="section-head">
        <div>
          <h3>📚 같은 카테고리의 다른 Excel 프롬프트</h3>
          <p>상세 화면에서도 바로 다른 카드로 이동할 수 있습니다.</p>
        </div>
      </div>
      <div class="overview-grid">${promptNavCards}</div>
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

        <h4 style="margin-top:16px">🧠 추천 프롬프트</h4>
        <div class="prompt-box">${escapeHtml(item.prompt || "-")}</div>
      </div>

      <div class="content-card">
        <h4>✅ 예상 결과</h4>
        <div class="result-box">${escapeHtml(item.expectedOutput || "-")}</div>

        <div style="margin-top:16px">
          <h4>📌 예시</h4>
          <div class="result-box">${escapeHtml(item.example || "-")}</div>
        </div>

        <div style="margin-top:16px">
          <h4>💡 활용 팁</h4>
          <div class="result-box">${escapeHtml(item.tip || "-")}</div>
        </div>
      </div>
    </div>
  `;
}