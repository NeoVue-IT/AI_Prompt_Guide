import { hallucinationGuide } from "../../data/bestPractices/hallucinationGuide.js";
import { escapeHtml } from "../utils.js";

function renderDetailList(details = []) {
  return `
    <ul class="guide-list">
      ${details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
    </ul>
  `;
}

function renderHallucinationCard(item) {
  return `
    <article class="guide-item hallucination-card">
      <div class="guide-item-header">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
      </div>

      <div class="guide-block">
        <strong>주요 내용</strong>
        ${renderDetailList(item.details)}
      </div>

      <div class="guide-block">
        <strong>예시</strong>
        <p>${escapeHtml(item.example)}</p>
      </div>

      <div class="tip-box">
        <strong>예방 방법</strong>
        <span>${escapeHtml(item.prevention)}</span>
      </div>
    </article>
  `;
}

function renderHallucinationSection(section) {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(section.section)}</h2>
        <p>${escapeHtml(section.description)}</p>
      </div>

      <div class="content-stack">
        ${section.items.map(renderHallucinationCard).join("")}
      </div>
    </section>
  `;
}

export function renderHallucinationGuide() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">Hallucination Guide</p>
      <h1>AI 환각 방지 가이드</h1>
      <p>
        AI가 그럴듯하지만 부정확한 답변을 생성하는 상황을 이해하고,
        업무에서 안전하게 검증하는 방법을 정리한 가이드입니다.
      </p>
    </section>

    <div class="content-stack">
      ${hallucinationGuide.map(renderHallucinationSection).join("")}
    </div>
  `;
}