import { escapeHtml } from "../../utils.js";
import { costOptimization } from "../../../data/wrksai/costOptimization.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderBeforeAfter,
  renderWorkflowSteps,
  renderSectionJumpNav
} from "./wrksAIRenderUtils.js";

// const costOptimizationJumpLinks = [
//   { id: "cost-basics", label: "비용 기준" },
//   { id: "cost-models", label: "모델별 비용" },
//   { id: "cost-workflows", label: "업무별 절감" },
//   { id: "cost-rules", label: "관리 규칙" },
//   { id: "cost-summary", label: "요약" }
// ];

export function renderCostOptimization() {
  return `
    ${renderHero(costOptimization)}

    <div class="guide-layout">

      ${renderCoreMessage(costOptimization.coreMessage)}
      ${renderCostPrinciples()}
      ${renderCostDrivers()}
      ${renderUsageTiers()}
      ${renderWorkflowSteps(costOptimization.optimizationWorkflow)}
      ${renderGovernanceRules()}
      ${renderCostWasteExamples()}
      ${renderCostPromptPatterns()}
      ${renderCostMistakes()}
      ${renderCostQuickRules()}
    </div>
  `;
}

function renderCostPrinciples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Cost Optimization Principles</h2>
        <p>AI 비용을 줄이면서도 업무 효과를 유지하기 위한 기본 원칙입니다.</p>
      </div>

      <div class="overview-grid">
        ${costOptimization.principles.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCostDrivers() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Major Cost Drivers</h2>
        <p>회사 AI 사용량이 불필요하게 증가하는 주요 원인과 통제 방법입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Cost Driver</th>
              <th>Impact</th>
              <th>Control Method</th>
            </tr>
          </thead>
          <tbody>
            ${costOptimization.costDrivers.map(row => `
              <tr>
                <td>${escapeHtml(row.driver)}</td>
                <td>${escapeHtml(row.impact)}</td>
                <td>${escapeHtml(row.control)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderUsageTiers() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Usage Tiers</h2>
        <p>업무 가치와 난이도에 따라 AI 사용 단계를 구분합니다.</p>
      </div>

      <div class="content-stack">
        ${costOptimization.usageTiers.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <span class="badge badge-id">${escapeHtml(item.modelType)}</span>
              <h3>${escapeHtml(item.tier)}</h3>
              <p>${escapeHtml(item.rule)}</p>
            </div>

            <div class="guide-block">
              <strong>Recommended Tasks</strong>
              ${renderList(item.tasks)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCostWorkflow() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Cost Optimization Workflow</h2>
        <p>업무 요청부터 반복 사용 구조화까지의 비용 최적화 절차입니다.</p>
      </div>

      <div class="content-stack">
        ${costOptimization.optimizationWorkflow.map(item => `
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

function renderGovernanceRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Governance Rules</h2>
        <p>회사 차원에서 AI 사용 비용을 안정적으로 관리하기 위한 운영 기준입니다.</p>
      </div>

      <div class="content-stack">
        ${costOptimization.governanceRules.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(item.rule)}</h3>
              <p>${escapeHtml(item.detail)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCostWasteExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Before / After Cost Examples</h2>
        <p>비용 낭비가 발생하는 방식과 개선된 사용 방식을 비교합니다.</p>
      </div>

      <div class="content-stack">
        ${costOptimization.costWasteExamples.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderBeforeAfter(item.bad, item.good)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCostPromptPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Cost Optimization Prompt Patterns</h2>
        <p>비용 효율적인 AI 사용 구조를 만들 때 사용할 수 있는 프롬프트입니다.</p>
      </div>

      <div class="content-stack">
        ${costOptimization.promptPatterns.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCostMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>AI 비용 관리 과정에서 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(costOptimization.mistakes)}
      </article>
    </section>
  `;
}

function renderCostQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>AI 비용을 줄이기 위해 업무자가 바로 적용할 수 있는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${costOptimization.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}