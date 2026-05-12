import { escapeHtml } from "../../utils.js";
import { wrksAIOverview } from "../../../data/wrksai/overview.js";
import { renderHero } from "./wrksAIRenderUtils.js";

export function renderWrksAIOverview() {
  return `
    ${renderHero(wrksAIOverview)}

    <div class="overview-grid">
      ${wrksAIOverview.cards.map(item => `
        <article class="fw-card">
          <div class="badge-row">
            <span class="badge badge-id">WRKSAI</span>
            <span class="badge badge-easy">Enterprise</span>
          </div>

          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.desc)}</p>

          <button
            type="button"
            class="view-btn"
            data-wrksai-id="${escapeHtml(item.id)}"
          >
            상세 보기 →
          </button>
        </article>
      `).join("")}
    </div>
  `;
}