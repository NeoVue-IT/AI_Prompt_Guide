import { escapeHtml } from "../../utils.js";
import { enterpriseExamples } from "../../../data/wrksai/enterpriseExamples.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderFlowRow,
  renderWorkflowSteps,
  renderSectionJumpNav
} from "./wrksAIRenderUtils.js";

// const enterpriseExamplesJumpLinks = [
//   { id: "enterprise-overview", label: "개요" },
//   { id: "enterprise-cases", label: "사례" },
//   { id: "enterprise-before-after", label: "전후 비교" },
//   { id: "enterprise-lessons", label: "시사점" },
//   { id: "enterprise-summary", label: "요약" }
// ];

export function renderEnterpriseExamples() {
  return `
    ${renderHero(enterpriseExamples)}

    <div class="guide-layout">

      ${renderCoreMessage(enterpriseExamples.coreMessage)}
      ${renderEnterpriseExampleCards()}
      ${renderWorkflowSteps(enterpriseExamples.implementationSteps)}
      ${renderEnterpriseValueMatrix()}
      ${renderEnterprisePromptPatterns()}
      ${renderEnterpriseMistakes()}
      ${renderEnterpriseQuickRules()}
    </div>
  `;
}

function renderEnterpriseExampleCards() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Enterprise AI Use Cases</h2>
        <p>회사 업무에 적용 가능한 대표 AI 활용 사례입니다.</p>
      </div>

      <div class="content-stack">
        ${enterpriseExamples.examples.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <span class="badge badge-id">${escapeHtml(item.department)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.situation)}</p>
            </div>

            <div class="guide-block">
              <strong>Workflow Chain</strong>
              ${renderFlowRow(item.workflow)}
            </div>

            <div class="guide-block">
              <strong>Recommended Models</strong>
              ${renderList(item.recommendedModels)}
            </div>

            <div class="guide-block">
              <strong>Recommended Agent</strong>
              <p>${escapeHtml(item.recommendedAgent)}</p>
            </div>

            <div class="guide-block">
              <strong>Expected Output</strong>
              <p>${escapeHtml(item.output)}</p>
            </div>

            <div class="guide-block">
              <strong>Caution</strong>
              <p>${escapeHtml(item.caution)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderEnterpriseImplementationSteps() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>How to Build Enterprise Examples</h2>
        <p>일반 업무를 AI 적용 사례로 전환하는 절차입니다.</p>
      </div>

      <div class="content-stack">
        ${enterpriseExamples.implementationSteps.map(item => `
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

function renderEnterpriseValueMatrix() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>AI Use Case Value Matrix</h2>
        <p>각 활용 사례의 시간 절감, 품질 영향, 적용 우선순위를 비교합니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Example</th>
              <th>Time Saving</th>
              <th>Quality Impact</th>
              <th>Recommended Priority</th>
            </tr>
          </thead>
          <tbody>
            ${enterpriseExamples.valueMatrix.map(row => `
              <tr>
                <td>${escapeHtml(row.example)}</td>
                <td>${escapeHtml(row.timeSaving)}</td>
                <td>${escapeHtml(row.qualityImpact)}</td>
                <td>${escapeHtml(row.recommendedPriority)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderEnterprisePromptPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Enterprise Example Prompt Patterns</h2>
        <p>회사 업무 사례를 AI 활용 예시로 정리할 때 사용할 수 있는 프롬프트입니다.</p>
      </div>

      <div class="content-stack">
        ${enterpriseExamples.promptPatterns.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderEnterpriseMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>Enterprise Example을 만들 때 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(enterpriseExamples.mistakes)}
      </article>
    </section>
  `;
}

function renderEnterpriseQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>회사 업무 적용 사례를 만들 때 빠르게 참고할 수 있는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${enterpriseExamples.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}