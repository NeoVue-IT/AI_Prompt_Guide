import { qs } from "./utils.js";
import { state } from "../assets/js/render/state.js";
import { renderMainNav, renderSubNav } from "../assets/js/render/nav.js";
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
      renderApp();
    });
  }
}

renderApp();