import { qs, qsa, copyIconSVG } from "./utils.js";
import { state } from "./state.js";
import { renderMainNav, renderSubNav } from "./nav.js";
import { renderOverview } from "./render/overview.js";
import { renderFrameworks } from "./render/frameworks.js";
import { renderQuickPrompts } from "./render/quickPrompts.js";
import { renderExcel } from "./render/excel.js";

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
      bindQuickPromptEvents();
      break;

    case "excel":
      app.innerHTML = renderExcel();
      bindExcelEvents();
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

  qsa("[data-fw-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.fwId;
      if (!id) return;

      state.currentSubTab = id;
      state.currentFrameworkSection = "doc";
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-fw-section]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const section = e.currentTarget.dataset.fwSection;
      if (!section) return;

      state.currentFrameworkSection = section;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function bindQuickPromptEvents() {
  const backOverview = qs("#back-to-overview-from-quick");
  if (backOverview) {
    backOverview.addEventListener("click", () => {
      state.currentMainTab = "overview";
      state.currentQuickPromptId = null;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const backList = qs("#back-to-quick-list");
  if (backList) {
    backList.addEventListener("click", () => {
      state.currentQuickPromptId = null;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  qsa("[data-quick-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.quickId;
      if (!id) return;

      state.currentQuickPromptId = id;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-quick-nav-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.quickNavId;
      if (!id) return;

      state.currentQuickPromptId = id;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-copy-target]").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const targetId = e.currentTarget.dataset.copyTarget;
      const target = qs(`#${targetId}`);
      if (!target) return;

      await navigator.clipboard.writeText(target.innerText);
      e.currentTarget.innerHTML = "✓";
      setTimeout(() => {
        e.currentTarget.innerHTML = copyIconSVG();
      }, 1000);
    });
  });
}

function bindExcelEvents() {
  const backOverview = qs("#back-to-overview-from-excel");
  if (backOverview) {
    backOverview.addEventListener("click", () => {
      state.currentMainTab = "overview";
      state.currentExcelPromptId = null;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const backList = qs("#back-to-excel-list");
  if (backList) {
    backList.addEventListener("click", () => {
      state.currentExcelPromptId = null;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  qsa("[data-excel-category]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      state.currentExcelCategory = Number(e.currentTarget.dataset.excelCategory);
      state.currentExcelPromptId = null;
      renderApp();
    });
  });

  qsa("[data-excel-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.excelId;
      if (!id) return;

      state.currentExcelPromptId = id;
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}


renderApp();