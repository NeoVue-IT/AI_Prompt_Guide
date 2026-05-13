import { escapeHtml } from "../../utils.js";
import { workflowChains } from "../../../data/wrksai/workflowChains.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderPreviewSection,
  renderWorkflowSteps
} from "./wrksAIRenderUtils.js";

export function renderWorkflowChains() {
  return `
    ${renderHero(workflowChains)}

    <div class="guide-layout">
      ${renderCoreMessage(workflowChains.coreMessage)}
      ${renderPreviewSection(workflowChains)}
      ${renderWorkflowChainPrinciples()}
      ${renderChainPatterns()}
      ${renderWorkflowSteps(workflowChains.workflowSteps)}
      ${renderWorkflowChainExamples()}
      ${renderRecommendedChains()}
      ${renderWorkflowChainPrompts()}
      ${renderWorkflowChainMistakes()}
      ${renderWorkflowChainQuickRules()}
    </div>
  `;
}

function renderWorkflowChainPrinciples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Workflow Chain Principles</h2>
        <p>AI 업무 체인을 설계할 때 적용해야 하는 기본 원칙입니다.</p>
      </div>

      <div class="overview-grid">
        ${workflowChains.principles.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderChainPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Recommended Chain Patterns</h2>
        <p>회사 업무에서 반복적으로 사용할 수 있는 대표 AI Workflow Chain입니다.</p>
      </div>

      <div class="content-stack">
        ${workflowChains.chainPatterns.map(pattern => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(pattern.title)}</h3>
              <p>${escapeHtml(pattern.useCase)}</p>
            </div>

            <div class="flow-row">
              ${pattern.flow.map((step, index) => `
                <span class="flow-pill">${escapeHtml(step)}</span>
                ${index < pattern.flow.length - 1 ? `<span class="flow-arrow">→</span>` : ""}
              `).join("")}
            </div>

            <p>${escapeHtml(pattern.explanation)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderWorkflowChainSteps() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>How to Build a Workflow Chain</h2>
        <p>업무 목적에서 최종 산출물까지 연결하는 기본 설계 절차입니다.</p>
      </div>

      <div class="content-stack">
        ${workflowChains.workflowSteps.map(item => `
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

function renderWorkflowChainExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Before / After Examples</h2>
        <p>단발성 질문 방식과 Workflow Chain 방식의 차이를 비교합니다.</p>
      </div>

      <div class="content-stack">
        ${workflowChains.examples.map(example => `
          <article class="guide-item">
            <h3>${escapeHtml(example.title)}</h3>

            <div class="compare-grid">
              <div class="compare-card compare-bad">
                <strong>Before</strong>
                <p>${escapeHtml(example.bad)}</p>
              </div>

              <div class="compare-card compare-good">
                <strong>After</strong>
                <p>${escapeHtml(example.good)}</p>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderRecommendedChains() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Department Workflow Examples</h2>
        <p>부서별로 적용하기 쉬운 대표 Workflow Chain 예시입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Recommended Chain</th>
              <th>Expected Output</th>
            </tr>
          </thead>
          <tbody>
            ${workflowChains.recommendedChains.map(row => `
              <tr>
                <td>${escapeHtml(row.department)}</td>
                <td>${escapeHtml(row.chain)}</td>
                <td>${escapeHtml(row.output)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderWorkflowChainPrompts() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Workflow Prompt Patterns</h2>
        <p>Workflow Chain을 설계하거나 검토할 때 사용할 수 있는 프롬프트 예시입니다.</p>
      </div>

      <div class="content-stack">
        ${workflowChains.promptPatterns.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderWorkflowChainMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>AI Workflow Chain을 만들 때 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(workflowChains.mistakes)}
      </article>
    </section>
  `;
}

function renderWorkflowChainQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>Workflow Chain을 설계할 때 빠르게 참고할 수 있는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${workflowChains.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}