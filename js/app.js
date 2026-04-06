import { qs } from "./utils.js";
import { state } from "./state.js";
import { renderMainNav, renderFrameworkSubNav } from "./nav.js";
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
  renderFrameworkSubNav();

  const app = qs("#app");

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
  }
}

function bindFrameworkEvents() {
  const backBtn = document.getElementById("back-to-fw-overview");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      state.currentFrameworkTab = "overview";
      renderApp();
    });
  }
}

renderApp();