import { escapeHtml } from "../../utils.js";
import { usagePrinciples } from "../../../data/wrksai/usagePrinciples.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderWorkflowSteps,
  renderSectionJumpNav
} from "./wrksAIRenderUtils.js";

const usagePrinciplesJumpLinks = [
  { id: "core-message", label: "핵심 기준" },
  { id: "principle-cards", label: "사용 원칙" },
  { id: "safe-use-rules", label: "안전 규칙" },
  { id: "do-dont-table", label: "Do / Don't" },
  { id: "workflow-steps", label: "진행 흐름" },
  { id: "risk-cases", label: "위험 사례" },
  { id: "usage-prompt-patterns", label: "프롬프트" },
  { id: "usage-mistakes", label: "실수" },
  { id: "usage-quick-rules", label: "요약" }
];

export function renderUsagePrinciples() {
  return `
    ${renderHero(usagePrinciples)}

    <div class="guide-layout">
      ${renderSectionJumpNav(usagePrinciplesJumpLinks)}
      ${renderCoreMessage(usagePrinciples.coreMessage)}
      ${renderPrincipleCards()}
      ${renderSafeUseRules()}
      ${renderDoDontTable()}
      ${renderWorkflowSteps(usagePrinciples.workflow)}
      ${renderRiskCases()}
      ${renderUsagePromptPatterns()}
      ${renderUsageMistakes()}
      ${renderUsageQuickRules()}
    </div>
  `;
}

function renderPrincipleCards() {
  return `
    <section id="principle-cards" class="guide-section">
      <div class="section-card">
        <h2>Core Usage Principles</h2>
        <p>회사 업무에서 AI를 사용할 때 기본적으로 지켜야 하는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${usagePrinciples.principles.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSafeUseRules() {
  return `
    <section id="safe-use-rules" class="guide-section">
      <div class="section-card">
        <h2>Safe Use Rules</h2>
        <p>입력 전, 출력 후 반드시 확인해야 하는 안전 사용 기준입니다.</p>
      </div>

      <div class="content-stack">
        ${usagePrinciples.safeUseRules.map(item => `
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

function renderDoDontTable() {
  return `
    <section id="do-dont-table" class="guide-section">
      <div class="section-card">
        <h2>Do / Don't</h2>
        <p>업무자가 바로 참고할 수 있는 올바른 사용 방식과 피해야 할 방식입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Do</th>
              <th>Don't</th>
            </tr>
          </thead>
          <tbody>
            ${usagePrinciples.doDont.map(row => `
              <tr>
                <td>${escapeHtml(row.do)}</td>
                <td>${escapeHtml(row.dont)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderUsageWorkflow() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Recommended AI Usage Flow</h2>
        <p>AI를 사용하기 전부터 결과 검토까지의 기본 업무 흐름입니다.</p>
      </div>

      <div class="content-stack">
        ${usagePrinciples.workflow.map(item => `
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

function renderRiskCases() {
  return `
    <section id="risk-cases" class="guide-section">
      <div class="section-card">
        <h2>Risk Cases & Prevention</h2>
        <p>AI 사용 시 발생할 수 있는 주요 위험과 예방 기준입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Risk</th>
              <th>Prevention</th>
            </tr>
          </thead>
          <tbody>
            ${usagePrinciples.riskCases.map(row => `
              <tr>
                <td>${escapeHtml(row.case)}</td>
                <td>${escapeHtml(row.risk)}</td>
                <td>${escapeHtml(row.prevention)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderUsagePromptPatterns() {
  return `
    <section id="usage-prompt-patterns" class="guide-section">
      <div class="section-card">
        <h2>Safe Prompt Patterns</h2>
        <p>안전한 업무용 AI 사용을 위해 반복적으로 사용할 수 있는 프롬프트입니다.</p>
      </div>

      <div class="content-stack">
        ${usagePrinciples.promptPatterns.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderUsageMistakes() {
  return `
    <section id="usage-mistakes" class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>AI 사용 원칙을 지키지 않을 때 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(usagePrinciples.mistakes)}
      </article>
    </section>
  `;
}

function renderUsageQuickRules() {
  return `
    <section id="usage-quick-rules" class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>모든 직원이 기억해야 할 기본 AI 사용 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${usagePrinciples.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}