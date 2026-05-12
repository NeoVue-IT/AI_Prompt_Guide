import { state } from "../../state.js";
import { escapeHtml } from "../../utils.js";

import { wrksAIOverview } from "../../../data/wrksai/overview.js";
import { usagePrinciples } from "../../../data/wrksai/usagePrinciples.js";
import { modelSelection } from "../../../data/wrksai/modelSelection.js";
import { modelSwitching } from "../../../data/wrksai/modelSwitching.js";
import { workflowChains } from "../../../data/wrksai/workflowChains.js";
import { agentCreation } from "../../../data/wrksai/agentCreation.js";
import { tokenOptimization } from "../../../data/wrksai/tokenOptimization.js";
import { departmentWorkflows } from "../../../data/wrksai/departmentWorkflows.js";
import { recommendedAgents } from "../../../data/wrksai/recommendedAgents.js";
import { costOptimization } from "../../../data/wrksai/costOptimization.js";
import { failureCases } from "../../../data/wrksai/failureCases.js";
import { advancedPrompting } from "../../../data/wrksai/advancedPrompting.js";
import { enterpriseExamples } from "../../../data/wrksai/enterpriseExamples.js";

const WRKSAI_SECTION_MAP = {
  "usage-principles": usagePrinciples,
  "model-selection": modelSelection,
  "model-switching": modelSwitching,
  "workflow-chains": workflowChains,
  "agent-creation": agentCreation,
  "token-optimization": tokenOptimization,
  "department-workflows": departmentWorkflows,
  "recommended-agents": recommendedAgents,
  "cost-optimization": costOptimization,
  "failure-cases": failureCases,
  "advanced-prompting": advancedPrompting,
  "enterprise-examples": enterpriseExamples
};

export function renderWrksAI() {
  if (state.currentSubTab === "overview") {
    return renderWrksAIOverview();
  }

  if (state.currentSubTab === "model-selection") {
    return renderModelSelection();
  }

  if (state.currentSubTab === "model-switching") {
    return renderModelSwitching();
  }

  if (state.currentSubTab === "token-optimization") {
    return renderTokenOptimization();
  }

  const section = WRKSAI_SECTION_MAP[state.currentSubTab];

  if (!section) {
    return renderWrksAIOverview();
  }

  return renderGenericWrksAISection(section);
}

function renderWrksAIOverview() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(wrksAIOverview.eyebrow)}</p>
      <h1>${escapeHtml(wrksAIOverview.title)}</h1>
      <p>${escapeHtml(wrksAIOverview.description)}</p>
    </section>

    <div class="overview-grid">
      ${wrksAIOverview.cards.map(item => `
        <article class="fw-card">
          <div class="badge-row">
            <span class="badge badge-id">WRKSAI</span>
            <span class="badge badge-easy">Enterprise</span>
          </div>

          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.desc)}</p>

          <button
            type="button"
            class="view-btn"
            data-wrksai-id="${escapeHtml(item.id)}"
          >
            상세 보기 →
          </button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderGenericWrksAISection(section) {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <h1>${escapeHtml(section.title)}</h1>
      <p>${escapeHtml(section.description)}</p>
    </section>

    <div class="guide-layout">
      <section class="guide-section">
        <div class="content-stack">
          ${(section.sections || []).map(item => `
            <article class="guide-item">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.body)}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderModelSelection() {
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

function renderModelSwitching() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(modelSwitching.eyebrow)}</p>
      <h1>${escapeHtml(modelSwitching.title)}</h1>
      <p>${escapeHtml(modelSwitching.description)}</p>
    </section>

    <div class="guide-layout">
      ${renderSwitchingCoreMessage()}
      ${renderWhySwitchingMatters()}
      ${renderSwitchingPatterns()}
      ${renderSwitchingWorkflow()}
      ${renderSwitchingExamples()}
      ${renderSwitchingMistakes()}
      ${renderSwitchingQuickRules()}
    </div>
  `;
}

function renderSwitchingCoreMessage() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(modelSwitching.coreMessage.title)}</h2>
        <p>${escapeHtml(modelSwitching.coreMessage.body)}</p>
      </div>
    </section>
  `;
}

function renderWhySwitchingMatters() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Why Model Switching Matters</h2>
        <p>모델 전환은 품질 향상뿐만 아니라 비용 관리와 업무 속도 개선에도 직접적인 영향을 줍니다.</p>
      </div>

      <div class="overview-grid">
        ${modelSwitching.whyItMatters.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSwitchingPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Recommended Switching Patterns</h2>
        <p>업무 흐름에 따라 모델을 단계적으로 배치하는 대표 패턴입니다.</p>
      </div>

      <div class="content-stack">
        ${modelSwitching.switchingPatterns.map(pattern => `
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

function renderSwitchingWorkflow() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Model Switching Workflow</h2>
        <p>모델을 전환할 때는 단계별 목적과 전달할 정보를 명확히 구분해야 합니다.</p>
      </div>

      <div class="content-stack">
        ${modelSwitching.workflowSteps.map(item => `
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

function renderSwitchingExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Before / After Examples</h2>
        <p>잘못된 사용 방식과 개선된 모델 전환 방식을 비교합니다.</p>
      </div>

      <div class="content-stack">
        ${modelSwitching.examples.map(example => `
          <article class="guide-item">
            <h3>${escapeHtml(example.title)}</h3>

            <div class="compare-grid">
              <div class="compare-card compare-bad">
                <strong>Before</strong>
                <p>${escapeHtml(example.before)}</p>
              </div>

              <div class="compare-card compare-good">
                <strong>After</strong>
                <p>${escapeHtml(example.after)}</p>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSwitchingMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>모델 전환을 사용할 때 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(modelSwitching.mistakes)}
      </article>
    </section>
  `;
}

function renderSwitchingQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>업무자가 빠르게 기억할 수 있는 모델 전환 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${modelSwitching.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTokenOptimization() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(tokenOptimization.eyebrow)}</p>
      <h1>${escapeHtml(tokenOptimization.title)}</h1>
      <p>${escapeHtml(tokenOptimization.description)}</p>
    </section>

    <div class="guide-layout">
      ${renderTokenCoreMessage()}
      ${renderTokenPrinciples()}
      ${renderTokenStrategies()}
      ${renderTokenWorkflow()}
      ${renderCostWasteCases()}
      ${renderTokenPromptPatterns()}
      ${renderTokenMistakes()}
      ${renderTokenQuickRules()}
    </div>
  `;
}

function renderTokenCoreMessage() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(tokenOptimization.coreMessage.title)}</h2>
        <p>${escapeHtml(tokenOptimization.coreMessage.body)}</p>
      </div>
    </section>
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
            <div class="copy-box">
              <pre><code>${escapeHtml(item.prompt)}</code></pre>
            </div>
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