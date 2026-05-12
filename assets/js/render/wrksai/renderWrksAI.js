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

  const section = WRKSAI_SECTION_MAP[state.currentSubTab];

  if (!section) {
    return renderWrksAIOverview();
  }

  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <h1>${escapeHtml(section.title)}</h1>
      <p>${escapeHtml(section.description)}</p>
    </section>

    <div class="section-block">
      ${section.sections.map(item => `
        <article class="guide-item">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `).join("")}
    </div>
  `;
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