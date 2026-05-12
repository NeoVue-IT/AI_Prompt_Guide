import { escapeHtml } from "../../utils.js";
import { modelSelection } from "../../../data/wrksai/modelSelection.js";
import {
  renderHero,
  renderSectionHeader
} from "./wrksAIRenderUtils.js";

export function renderModelSelection() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(modelSelection.eyebrow)}</p>
      <h1>${escapeHtml(modelSelection.title)}</h1>
      <p>${escapeHtml(modelSelection.description)}</p>
    </section>

    <div class="guide-layout">
      ${renderCoreMessage()}
      ${renderModelCategories()}
      ${renderTaskMatrix()}
      ${renderWorkflow()}
      ${renderMistakes()}
      ${renderQuickDecisions()}
    </div>
  `;
}

function renderCoreMessage() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(modelSelection.coreMessage.title)}</h2>
        <p>${escapeHtml(modelSelection.coreMessage.body)}</p>
      </div>
    </section>
  `;
}

function renderModelCategories() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Model Categories</h2>
        <p>모델 이름보다 먼저 업무 성격을 기준으로 모델 유형을 선택합니다.</p>
      </div>

      <div class="content-stack">
        ${modelSelection.categories.map(category => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(category.title)}</h3>
              <p>${escapeHtml(category.purpose)}</p>
            </div>

            <div class="guide-block">
              <strong>Best For</strong>
              ${renderList(category.bestFor)}
            </div>

            <div class="guide-block">
              <strong>Avoid For</strong>
              ${renderList(category.avoidFor)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTaskMatrix() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Task → Model Matrix</h2>
        <p>업무 유형에 따라 어떤 모델 유형을 우선 선택할지 빠르게 확인하는 기준표입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Recommended Model</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            ${modelSelection.matrix.map(row => `
              <tr>
                <td>${escapeHtml(row.task)}</td>
                <td>${escapeHtml(row.recommended)}</td>
                <td>${escapeHtml(row.reason)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderWorkflow() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Recommended Workflow Strategy</h2>
        <p>처음부터 가장 강한 모델을 쓰기보다, 가벼운 모델에서 시작하고 필요할 때만 상위 모델로 전환합니다.</p>
      </div>

      <div class="content-stack">
        ${modelSelection.workflow.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <span class="badge badge-id">STEP ${escapeHtml(item.step)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.body)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>모델 선택 단계에서 자주 발생하는 비용 낭비와 품질 저하 사례입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(modelSelection.mistakes)}
      </article>
    </section>
  `;
}

function renderQuickDecisions() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Decision Cards</h2>
        <p>업무자가 빠르게 모델 유형을 고를 수 있도록 만든 간단한 판단 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${modelSelection.quickDecisions.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.question)}</h3>
            <p>${escapeHtml(item.answer)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderList(items = []) {
  return `
    <ul class="guide-list">
      ${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}