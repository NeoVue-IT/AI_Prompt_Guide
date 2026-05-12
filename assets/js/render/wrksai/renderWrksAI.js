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

  if (state.currentSubTab === "workflow-chains") {
    return renderWorkflowChains();
  }

  if (state.currentSubTab === "recommended-agents") {
    return renderRecommendedAgents();
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

function renderWorkflowChains() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(workflowChains.eyebrow)}</p>
      <h1>${escapeHtml(workflowChains.title)}</h1>
      <p>${escapeHtml(workflowChains.description)}</p>
    </section>

    <div class="guide-layout">
      ${renderWorkflowChainsCore()}
      ${renderWorkflowChainPrinciples()}
      ${renderChainPatterns()}
      ${renderWorkflowChainSteps()}
      ${renderWorkflowChainExamples()}
      ${renderRecommendedChains()}
      ${renderWorkflowChainPrompts()}
      ${renderWorkflowChainMistakes()}
      ${renderWorkflowChainQuickRules()}
    </div>
  `;
}

function renderWorkflowChainsCore() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(workflowChains.coreMessage.title)}</h2>
        <p>${escapeHtml(workflowChains.coreMessage.body)}</p>
      </div>
    </section>
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
            <div class="copy-box">
              <pre><code>${escapeHtml(item.prompt)}</code></pre>
            </div>
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

function renderRecommendedAgents() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(recommendedAgents.eyebrow)}</p>
      <h1>${escapeHtml(recommendedAgents.title)}</h1>
      <p>${escapeHtml(recommendedAgents.description)}</p>
    </section>

    <div class="guide-layout">
      ${renderRecommendedAgentsCore()}
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

function renderRecommendedAgentsCore() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(recommendedAgents.coreMessage.title)}</h2>
        <p>${escapeHtml(recommendedAgents.coreMessage.body)}</p>
      </div>
    </section>
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
        <div class="copy-box">
          <pre><code>${escapeHtml(recommendedAgents.promptTemplate.prompt)}</code></pre>
        </div>
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