import { state } from "../../js/state.js";
import { FRAMEWORKS } from "../../data/frameworks.js";
import { escapeHtml } from "../utils.js";

export function renderFrameworks() {
  if (state.currentSubTab === "overview") {
    return `
      <section class="section-header">
        <h2>Frameworks</h2>
        <p>대표 프롬프트 프레임워크를 카드 형태로 확인할 수 있습니다.</p>
      </section>

      <section class="card-grid">
        ${FRAMEWORKS.map(item => `
          <article class="card framework-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.shortDesc)}</p>
            <div class="meta"><strong>활용 시점:</strong> ${escapeHtml(item.useWhen || "-")}</div>
            <div class="meta"><strong>빠른 예시:</strong> ${escapeHtml(item.quickExample || "-")}</div>
          </article>
        `).join("")}
      </section>
    `;
  }

  const item = FRAMEWORKS.find(f => f.id === state.currentSubTab);

  if (!item) {
    return `<section><p>데이터를 찾을 수 없습니다.</p></section>`;
  }

  return `
    <section class="detail-view">
      <button type="button" class="back-btn" id="back-to-fw-overview">← 전체로 돌아가기</button>

      <div class="detail-card">
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.shortDesc)}</p>
      </div>

      <div class="detail-card">
        <h3>언제 사용하나요?</h3>
        <p>${escapeHtml(item.useWhen || "-")}</p>
      </div>

      <div class="detail-card">
        <h3>빠른 예시</h3>
        <p>${escapeHtml(item.quickExample || "-")}</p>
      </div>

      <div class="detail-card">
        <h3>프롬프트 구조</h3>
        <pre>${escapeHtml(item.prompt || "-")}</pre>
      </div>
    </section>
  `;
}