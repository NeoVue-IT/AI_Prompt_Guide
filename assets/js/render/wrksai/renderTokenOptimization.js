import { escapeHtml } from "../../utils.js";
import { tokenOptimization } from "../../../data/wrksai/tokenOptimization.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderPreviewSection,
  renderWorkflowSteps,
  renderSectionJumpNav
} from "./wrksAIRenderUtils.js";

// const tokenOptimizationJumpLinks = [
//   { id: "token-basics", label: "기본 원칙" },
//   { id: "token-waste", label: "낭비 사례" },
//   { id: "token-prompts", label: "절약 문장" },
//   { id: "token-files", label: "파일 사용" },
//   { id: "token-summary", label: "요약" }
// ];


export function renderTokenOptimization() {
  return `
    ${renderHero(tokenOptimization)}

    <div class="guide-layout">
      
      ${renderCoreMessage(tokenOptimization.coreMessage)}
      ${renderPreviewSection(tokenOptimization)}
      ${renderTokenPrinciples()}
      ${renderTokenStrategies()}
      ${renderWorkflowSteps(tokenOptimization.workflow)}
      ${renderCostWasteCases()}
      ${renderTokenPromptPatterns()}
      ${renderTokenMistakes()}
      ${renderTokenQuickRules()}
    </div>
  `;
}


function renderTokenPrinciples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Token Optimization Principles</h2>
        <p>토큰 사용량을 줄이기 위한 기본 운영 원칙입니다.</p>
      </div>

      <div class="overview-grid">
        ${tokenOptimization.principles.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTokenStrategies() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Optimization Strategies</h2>
        <p>실제 업무에서 토큰 낭비를 줄이는 대표적인 개선 방식입니다.</p>
      </div>

      <div class="content-stack">
        ${tokenOptimization.strategies.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>

            <div class="compare-grid">
              <div class="compare-card compare-bad">
                <strong>Before</strong>
                <p>${escapeHtml(item.bad)}</p>
              </div>

              <div class="compare-card compare-good">
                <strong>After</strong>
                <p>${escapeHtml(item.good)}</p>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTokenWorkflow() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Recommended Token-Saving Workflow</h2>
        <p>업무를 단계별로 나누면 불필요한 재시도와 입력 토큰을 줄일 수 있습니다.</p>
      </div>

      <div class="content-stack">
        ${tokenOptimization.workflow.map(item => `
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

function renderCostWasteCases() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Cost Waste Cases</h2>
        <p>기업 환경에서 자주 발생하는 AI 비용 낭비 사례와 개선 방법입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Case</th>
              <th>Impact</th>
              <th>Fix</th>
            </tr>
          </thead>
          <tbody>
            ${tokenOptimization.costWasteCases.map(row => `
              <tr>
                <td>${escapeHtml(row.case)}</td>
                <td>${escapeHtml(row.impact)}</td>
                <td>${escapeHtml(row.fix)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderTokenPromptPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Token-Saving Prompt Patterns</h2>
        <p>반복적으로 사용할 수 있는 토큰 절약형 프롬프트 예시입니다.</p>
      </div>

      <div class="content-stack">
        ${tokenOptimization.promptPatterns.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTokenMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>토큰 최적화 단계에서 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(tokenOptimization.mistakes)}
      </article>
    </section>
  `;
}

function renderTokenQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>업무자가 바로 적용할 수 있는 토큰 절약 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${tokenOptimization.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}