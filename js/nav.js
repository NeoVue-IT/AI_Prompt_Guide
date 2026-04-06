import { qs } from "./utils.js";
import { state } from "./state.js";
import { FRAMEWORKS } from "../data/frameworks.js";
import { renderApp } from "./app.js";

export function renderMainNav() {
  const nav = qs("#main-nav");

  const tabs = [
    { id: "overview", name: "전체" },
    { id: "frameworks", name: "Frameworks" },
    { id: "quick-prompts", name: "Quick Prompts" },
    { id: "excel", name: "Excel" },
    { id: "agents", name: "Agent Guide" }
  ];

  nav.innerHTML = `
    <div class="nav-tabs">
      ${tabs.map(tab => `
        <button class="tab-btn ${state.currentMainTab === tab.id ? "active" : ""}" data-tab="${tab.id}">
          ${tab.name}
        </button>
      `).join("")}
    </div>
  `;

  nav.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentMainTab = btn.dataset.tab;
      renderApp();
    });
  });
}

export function renderFrameworkSubNav() {
  const subNav = qs("#sub-nav");

  if (state.currentMainTab !== "frameworks") {
    subNav.innerHTML = "";
    return;
  }

  const visibleFrameworks = state.showOthers ? FRAMEWORKS : FRAMEWORKS.slice(0, 5);

  subNav.innerHTML = `
    <div class="sub-tabs">
      <button class="tab-btn ${state.currentFrameworkTab === "overview" ? "active" : ""}" data-fw-tab="overview">
        📊 전체
      </button>

      ${visibleFrameworks.map(f => `
        <button class="tab-btn ${state.currentFrameworkTab === f.id ? "active" : ""}" data-fw-tab="${f.id}">
          ${f.name}
        </button>
      `).join("")}

      <button class="more-btn" id="toggle-frameworks">
        ${state.showOthers ? "감추기" : "더 보기"}
      </button>
    </div>
  `;

  subNav.querySelectorAll("[data-fw-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currentFrameworkTab = btn.dataset.fwTab;
      renderApp();
    });
  });

  const toggleBtn = qs("#toggle-frameworks");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      state.showOthers = !state.showOthers;
      renderApp();
    });
  }
}