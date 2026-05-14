import { state } from "./state.js";
import { renderApp } from "./app.js";
import { FRAMEWORKS } from "../data/frameworks.js";
import { qs } from "./utils.js";

/* =========================
   MAIN NAV CONFIG
========================= */
const MAIN_TABS = [
  { id: "overview", label: "Overview" },
  { id: "frameworks", label: "Frameworks" },
  { id: "quick-prompts", label: "Quick Prompts" },
  { id: "excel", label: "Excel" },
  { id: "best-practices", label: "Best Practices" },
  { id: "agents", label: "Agent Guide" },
  { id: "wrksai", label: "웍스AI Guide"}
];

/* =========================
   BEST PRACTICES SUB NAV
========================= */
const BEST_PRACTICES_TABS = [
  { id: "overview", label: "Overview" },
  { id: "prompt-patterns", label: "Prompt Patterns" },
  { id: "hallucination-guide", label: "Hallucination Guide" },
  { id: "common-mistakes", label: "Common Mistakes" }
];

const WRKSAI_TABS = [
  { id: "overview", label: "Overview" },
  { id: "usage-principles", label: "AI Usage Principles" },
  { id: "model-selection", label: "Model Selection" },
  { id: "model-switching", label: "Model Switching" },
  { id: "token-optimization", label: "Token Optimization" },
  { id: "cost-optimization", label: "Cost Optimization" },
  { id: "advanced-prompting", label: "Advanced Prompting" },
  { id: "coding-usage", label: "Coding Usage" },
  { id: "workflow-chains", label: "Workflow Chains" },
  { id: "department-workflows", label: "Department Workflows" },
  { id: "agent-creation", label: "Agent Creation" },
  { id: "recommended-agents", label: "Recommended Agents" },
  { id: "enterprise-examples", label: "Enterprise Examples" },
  { id: "failure-cases", label: "Failure Cases" }
];

/* =========================
   MAIN NAV RENDER
========================= */
export function renderMainNav() {
  const nav = qs("#main-nav");
  if (!nav) return;

  nav.innerHTML = `
    <div class="tab-row main-tab-row">
      ${MAIN_TABS.map(tab => `
        <button
          type="button"
          class="tab-btn ${state.currentMainTab === tab.id ? "active" : ""}"
          data-main-tab="${tab.id}"
        >
          ${tab.label}
        </button>
      `).join("")}
    </div>
  `;

  nav.querySelectorAll("[data-main-tab]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const nextMainTab = e.currentTarget.dataset.mainTab;

      if (!nextMainTab) return;

      state.currentMainTab = nextMainTab;
      state.currentSubTab = "overview";

      if (nextMainTab !== "frameworks") {
        state.showAllFrameworks = false;
      }

      renderApp();
    });
  });
}

/* =========================
   SUB NAV RENDER
========================= */
export function renderSubNav() {
  const subNav = qs("#sub-nav");
  if (!subNav) return;

  // reset
  subNav.innerHTML = "";

  if (state.currentMainTab === "frameworks") {
    renderFrameworkSubNav(subNav);
    return;
  } else if (state.currentMainTab === "best-practices") {
    renderBestPracticesSubNav(subNav);
    return;
  } else if (state.currentMainTab === "wrksai") {
    renderWrksAISubNav(subNav);
    return;
  }

  // future extension example:
  // if (state.currentMainTab === "quick-prompts") {
  //   renderQuickPromptSubNav(subNav);
  // }
}

/* =========================
   FRAMEWORK SUB NAV
========================= */
function renderFrameworkSubNav(container) {
  const visibleFrameworks = state.showAllFrameworks
    ? FRAMEWORKS
    : FRAMEWORKS.slice(0, 5);

  container.innerHTML = `
    <div class="tab-row sub-tab-row">
      <button
        type="button"
        class="tab-btn ${state.currentSubTab === "overview" ? "active" : ""}"
        data-sub-tab="overview"
      >
        📊 전체
      </button>

      ${visibleFrameworks.map(item => `
        <button
          type="button"
          class="tab-btn ${state.currentSubTab === item.id ? "active" : ""}"
          data-sub-tab="${item.id}"
        >
          ${item.name}
        </button>
      `).join("")}

      ${FRAMEWORKS.length > 5 ? `
        <button
          type="button"
          class="toggle-btn"
          id="framework-toggle-btn"
        >
          ${state.showAllFrameworks ? "감추기" : "더 보기"}
        </button>
      ` : ""}
    </div>
  `;

  /* sub tab click */
  container.querySelectorAll("[data-sub-tab]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const nextSubTab = e.currentTarget.dataset.subTab;
      if (!nextSubTab) return;

      state.currentSubTab = nextSubTab;
      renderApp();
    });
  });

  /* toggle */
  const toggleBtn = qs("#framework-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      state.showAllFrameworks = !state.showAllFrameworks;

      if (!state.showAllFrameworks) {
        const visibleIds = FRAMEWORKS.slice(0, 5).map(f => f.id);

        if (
          state.currentSubTab !== "overview" &&
          !visibleIds.includes(state.currentSubTab)
        ) {
          state.currentSubTab = "overview";
        }
      }

      renderApp();
    });
  }
}

/* =========================
   BEST PRACTICES SUB NAV
========================= */
function renderBestPracticesSubNav(container) {
  container.innerHTML = `
    <div class="tab-row sub-tab-row">
      ${BEST_PRACTICES_TABS.map(item => `
        <button
          type="button"
          class="tab-btn ${state.currentSubTab === item.id ? "active" : ""}"
          data-sub-tab="${item.id}"
        >
          ${item.label}
        </button>
      `).join("")}
    </div>
  `;

  container.querySelectorAll("[data-sub-tab]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const nextSubTab = e.currentTarget.dataset.subTab;
      if (!nextSubTab) return;

      state.currentSubTab = nextSubTab;
      renderApp();
    });
  });
}

function renderWrksAISubNav(container) {
  container.innerHTML = `
    <div class="tab-row sub-tab-row">
      ${WRKSAI_TABS.map(item => `
        <button
          type="button"
          class="tab-btn ${state.currentSubTab === item.id ? "active" : ""}"
          data-sub-tab="${item.id}"
        >
          ${item.label}
        </button>
      `).join("")}
    </div>
  `;

  container.querySelectorAll("[data-sub-tab]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const nextSubTab = e.currentTarget.dataset.subTab;
      if (!nextSubTab) return;

      state.currentSubTab = nextSubTab;
      renderApp();
    });
  });
}