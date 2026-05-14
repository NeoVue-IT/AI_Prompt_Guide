import { escapeHtml } from "../../utils.js";
import { recommendedAgents } from "../../../data/wrksai/recommendedAgents.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderPreviewSection,
  renderSectionJumpNav
} from "./wrksAIRenderUtils.js";

// const recommendedAgentsJumpLinks = [
//   { id: "agents-overview", label: "개요" },
//   { id: "agents-it", label: "IT" },
//   { id: "agents-office", label: "사무" },
//   { id: "agents-production", label: "생산" },
//   { id: "agents-quality", label: "품질" },
//   { id: "agents-summary", label: "요약" }
// ];

export function renderRecommendedAgents() {
  return `
    ${renderHero(recommendedAgents)}

    <div class="guide-layout">
        
      ${renderCoreMessage(recommendedAgents.coreMessage)}
      ${renderPreviewSection(recommendedAgents)}
      ${renderAgentPrinciples()}
      ${renderAgentCards()}
      ${renderAgentChecklist()}
      ${renderAgentExamples()}
      ${renderAgentPromptTemplate()}
      ${renderAgentMistakes()}
      ${renderAgentQuickRules()}
    </div>
  `;
}


function renderAgentPrinciples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Agent Design Principles</h2>
        <p>업무용 에이전트를 설계할 때 적용해야 하는 기본 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${recommendedAgents.principles.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAgentCards() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Recommended Enterprise Agents</h2>
        <p>회사 업무에서 우선적으로 만들면 좋은 에이전트 예시입니다.</p>
      </div>

      <div class="content-stack">
        ${recommendedAgents.agents.map(agent => `
          <article class="guide-item">
            <div class="guide-item-header">
              <span class="badge badge-id">${escapeHtml(agent.department)}</span>
              <h3>${escapeHtml(agent.title)}</h3>
              <p>${escapeHtml(agent.purpose)}</p>
            </div>

            <div class="guide-block">
              <strong>Best For</strong>
              ${renderList(agent.bestFor)}
            </div>

            <div class="guide-block">
              <strong>Output Format</strong>
              <p>${escapeHtml(agent.outputFormat)}</p>
            </div>

            <div class="guide-block">
              <strong>Recommended Model Type</strong>
              <p>${escapeHtml(agent.modelType)}</p>
            </div>

            <div class="guide-block">
              <strong>Caution</strong>
              <p>${escapeHtml(agent.caution)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAgentChecklist() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Agent Creation Checklist</h2>
        <p>에이전트를 만들기 전에 반드시 정리해야 하는 항목입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Checklist</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            ${recommendedAgents.creationChecklist.map(row => `
              <tr>
                <td>${escapeHtml(row.item)}</td>
                <td>${escapeHtml(row.detail)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAgentExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Before / After Prompt Examples</h2>
        <p>에이전트에 넣기 좋은 요청 방식과 부족한 요청 방식을 비교합니다.</p>
      </div>

      <div class="content-stack">
        ${recommendedAgents.examples.map(example => `
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

function renderAgentPromptTemplate() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(recommendedAgents.promptTemplate.title)}</h2>
        <p>새 에이전트를 만들 때 기본 지침으로 사용할 수 있는 템플릿입니다.</p>
      </div>

      <article class="guide-item">
        ${renderPromptBox(recommendedAgents.promptTemplate.prompt)}
      </article>
    </section>
  `;
}

function renderAgentMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>에이전트를 만들 때 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(recommendedAgents.mistakes)}
      </article>
    </section>
  `;
}

function renderAgentQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>업무용 에이전트를 만들 때 빠르게 참고할 수 있는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${recommendedAgents.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}