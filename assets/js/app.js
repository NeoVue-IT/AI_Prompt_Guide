import { qs } from "./utils.js";
import { state } from "./state.js";
import { renderMainNav, renderSubNav } from "./nav.js";
import { renderOverview } from "./render/overview.js";
import { renderFrameworks } from "./render/frameworks.js";
import { renderQuickPrompts } from "./render/quickPrompts.js";

function renderExcel() {
  return `<section><h2>Excel Prompts</h2><p>Excel section here</p></section>`;
}

function renderAgents() {
  return `<section><h2>Agent Guide</h2><p>Agent guide section here</p></section>`;
}

export function renderApp() {
  renderMainNav();
  renderSubNav();

  const app = qs("#app");
  if (!app) return;

  switch (state.currentMainTab) {
    case "frameworks":
      app.innerHTML = renderFrameworks();
      bindFrameworkEvents();
      break;

    case "quick-prompts":
      app.innerHTML = renderQuickPrompts();
      break;

    case "excel":
      app.innerHTML = renderExcel();
      break;

    case "agents":
      app.innerHTML = renderAgents();
      break;

    default:
      app.innerHTML = renderOverview();
      break;
  }
}

function bindFrameworkEvents() {
  const backBtn = qs("#back-to-fw-overview");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      state.currentSubTab = "overview";
      state.currentFrameworkSection = "doc";
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll("[data-fw-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.fwId;
      if (!id) return;

      state.currentSubTab = id;
      state.currentFrameworkSection = "doc";
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-fw-section]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const section = e.currentTarget.dataset.fwSection;
      if (!section) return;

      state.currentFrameworkSection = section;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

renderApp();