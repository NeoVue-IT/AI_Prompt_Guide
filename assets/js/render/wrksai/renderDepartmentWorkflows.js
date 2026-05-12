import { escapeHtml } from "../../utils.js";
import { departmentWorkflows } from "../../../data/wrksai/departmentWorkflows.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox
} from "./wrksAIRenderUtils.js";

export function renderDepartmentWorkflows() {
  return `
    ${renderHero(departmentWorkflows)}

    <div class="guide-layout">
      ${renderCoreMessage(departmentWorkflows.coreMessage)}
      ${renderDepartmentCards()}
      ${renderDepartmentWorkflowMatrix()}
      ${renderDepartmentPromptPatterns()}
      ${renderDepartmentMistakes()}
      ${renderDepartmentQuickRules()}
    </div>
  `;
}

function renderDepartmentCards() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Department Workflow Cards</h2>
        <p>부서별 주요 AI 활용 목적, 반복 업무, 추천 Workflow, 추천 Agent를 정리합니다.</p>
      </div>

      <div class="content-stack">
        ${departmentWorkflows.departments.map(dept => `
          <article class="guide-item">
            <div class="guide-item-header">
              <span class="badge badge-id">${escapeHtml(dept.name)}</span>
              <h3>${escapeHtml(dept.purpose)}</h3>
            </div>

            <div class="guide-block">
              <strong>Common Tasks</strong>
              ${renderList(dept.commonTasks)}
            </div>

            <div class="guide-block">
              <strong>Recommended Workflow</strong>
              <p>${escapeHtml(dept.recommendedWorkflow)}</p>
            </div>

            <div class="guide-block">
              <strong>Recommended Agents</strong>
              ${renderList(dept.recommendedAgents)}
            </div>

            <div class="guide-block">
              <strong>Output Examples</strong>
              ${renderList(dept.outputExamples)}
            </div>

            <div class="guide-block">
              <strong>Caution</strong>
              <p>${escapeHtml(dept.caution)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDepartmentWorkflowMatrix() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Department Workflow Matrix</h2>
        <p>부서별 대표 AI 활용 업무, 추천 모델 유형, 추천 에이전트를 빠르게 확인할 수 있는 표입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Best Use</th>
              <th>Recommended Model Type</th>
              <th>Recommended Agent</th>
            </tr>
          </thead>
          <tbody>
            ${departmentWorkflows.workflowMatrix.map(row => `
              <tr>
                <td>${escapeHtml(row.department)}</td>
                <td>${escapeHtml(row.bestUse)}</td>
                <td>${escapeHtml(row.modelType)}</td>
                <td>${escapeHtml(row.agent)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderDepartmentPromptPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Department Workflow Prompt Patterns</h2>
        <p>부서별 AI 활용 구조를 만들 때 사용할 수 있는 프롬프트 예시입니다.</p>
      </div>

      <div class="content-stack">
        ${departmentWorkflows.promptPatterns.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDepartmentMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>부서별 AI 적용 시 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(departmentWorkflows.mistakes)}
      </article>
    </section>
  `;
}

function renderDepartmentQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>부서별 AI Workflow를 설계할 때 빠르게 참고할 수 있는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${departmentWorkflows.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}