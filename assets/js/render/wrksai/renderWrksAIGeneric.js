import { state } from "../../state.js";
import { escapeHtml } from "../../utils.js";
import { renderHero } from "./wrksAIRenderUtils.js";



const GENERIC_SECTION_MAP = {

};

export function renderWrksAIGeneric() {
  const section = GENERIC_SECTION_MAP[state.currentSubTab];

  if (!section) {
    return `
      <section class="page-hero page-hero-card">
        <p class="eyebrow">웍스AI Guide</p>
        <h1>Section Not Found</h1>
        <p>요청한 섹션을 찾을 수 없습니다.</p>
      </section>
    `;
  }

  return `
    ${renderHero(section)}

    <div class="guide-layout">
      <section class="guide-section">
        <div class="content-stack">
          ${(section.sections || []).map(item => `
            <article class="guide-item">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.body)}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}