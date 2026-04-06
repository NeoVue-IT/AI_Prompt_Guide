import { state } from "../assets/js/render/state.js";
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
  { id: "agents", label: "Agent Guide" }
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