import { qs, qsa, copyIconSVG } from "./utils.js";
import { state } from "./state.js";
import { renderMainNav, renderSubNav } from "./nav.js";
import { renderOverview } from "./render/overview.js";
import { renderFrameworks } from "./render/frameworks.js";
import { renderQuickPrompts } from "./render/quickPrompts.js";
import { renderExcel } from "./render/excel.js";
import { renderAiMistakes } from "./render/aiMistakes.js";

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

    case "best-practices":
      renderBestPracticesSection(app);
      break;  

    case "agents":
      app.innerHTML = renderAgents();
      break;

    default:
      app.innerHTML = renderOverview();
      bindOverviewEvents();
      break;
  }
}

function bindOverviewEvents() {
  qsa("[data-overview-fw-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.overviewFwId;
      if (!id) return;

      state.currentMainTab = "frameworks";
      state.currentSubTab = id;
      state.currentFrameworkSection = "doc";
      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-overview-action]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const action = e.currentTarget.dataset.overviewAction;
      if (!action) return;

      state.currentMainTab = action;

      if (action === "quick-prompts") {
        state.currentQuickPromptId = null;
      }

      if (action === "excel") {
        state.currentExcelPromptId = null;
      }

      renderApp();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
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
      window.scrollTo({ top:0, behavior: "smooth" });
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

function bindPromptPatternEvents() {
  document.querySelectorAll("[data-pattern-lang]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const nextMode = e.currentTarget.dataset.patternLang;
      if (!nextMode) return;

      state.promptPatternsLangMode = nextMode;
      renderApp();
    });
  });
}

function bindCopyButtons() {
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

function renderBestPracticesSection(app) {
  switch (state.currentSubTab) {
    case "prompt-patterns":
      app.innerHTML = renderPromptPatterns();
      bindPromptPatternEvents();
      break;

    case "common-mistakes":
      app.innerHTML = renderAiMistakes();
      bindCopyButtons();
      break;

    case "overview":
    default:
      app.innerHTML = renderBestPracticesOverview();
      break;
  }
}


renderApp();

