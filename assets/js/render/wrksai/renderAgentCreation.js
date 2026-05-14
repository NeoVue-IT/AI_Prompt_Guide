import { escapeHtml } from "../../utils.js";
import { agentCreation } from "../../../data/wrksai/agentCreation.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderPreviewSection,
  renderWorkflowSteps,
  renderSectionJumpNav
} from "./wrksAIRenderUtils.js";

// const agentCreationJumpLinks = [
//   { id: "agent-concept", label: "개념" },
//   { id: "agent-structure", label: "구성" },
//   { id: "agent-instructions", label: "지시문" },
//   { id: "agent-examples", label: "예시" },
//   { id: "agent-checklist", label: "체크리스트" }
// ];

export function renderAgentCreation() {
  return `
    ${renderHero(agentCreation)}

    <div class="guide-layout">

      ${renderCoreMessage(agentCreation.coreMessage)}
      ${renderPreviewSection(agentCreation)}
      ${renderAgentCreationPrinciples()}
      ${renderWorkflowSteps(agentCreation.creationSteps)}
      ${renderAgentTypes()}
      ${renderAgentInstructionTemplate()}
      ${renderAgentCreationExamples()}
      ${renderAgentValidationChecklist()}
      ${renderAgentCreationMistakes()}
      ${renderAgentCreationQuickRules()}
    </div>
  `;
}

function renderAgentCreationPrinciples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Agent Creation Principles</h2>
        <p>업무용 에이전트를 만들 때 적용해야 하는 기본 설계 원칙입니다.</p>
      </div>

      <div class="overview-grid">
        ${agentCreation.principles.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAgentCreationSteps() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>How to Create an Agent</h2>
        <p>반복 업무를 에이전트로 전환하는 기본 절차입니다.</p>
      </div>

      <div class="content-stack">
        ${agentCreation.creationSteps.map(item => `
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

function renderAgentTypes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Agent Types</h2>
        <p>회사 업무에서 자주 사용할 수 있는 에이전트 유형입니다.</p>
      </div>

      <div class="content-stack">
        ${agentCreation.agentTypes.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(item.type)}</h3>
              <p>${escapeHtml(item.purpose)}</p>
            </div>

            <div class="guide-block">
              <strong>Examples</strong>
              ${renderList(item.examples)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAgentInstructionTemplate() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(agentCreation.instructionTemplate.title)}</h2>
        <p>새 에이전트를 만들 때 기본 지침으로 사용할 수 있는 템플릿입니다.</p>
      </div>

      <article class="guide-item">
        ${renderPromptBox(agentCreation.instructionTemplate.prompt)}
      </article>
    </section>
  `;
}

function renderAgentCreationExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Agent Examples</h2>
        <p>실제 업무에 적용하기 쉬운 에이전트 설계 예시입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Agent</th>
              <th>Role</th>
              <th>Input</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            ${agentCreation.examples.map(row => `
              <tr>
                <td>${escapeHtml(row.title)}</td>
                <td>${escapeHtml(row.role)}</td>
                <td>${escapeHtml(row.input)}</td>
                <td>${escapeHtml(row.output)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAgentValidationChecklist() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Validation Checklist</h2>
        <p>에이전트를 배포하거나 반복 사용하기 전에 확인해야 할 기준입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(agentCreation.validationChecklist)}
      </article>
    </section>
  `;
}

function renderAgentCreationMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>에이전트를 만들 때 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(agentCreation.mistakes)}
      </article>
    </section>
  `;
}

function renderAgentCreationQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>업무용 에이전트 설계 시 빠르게 참고할 수 있는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${agentCreation.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}