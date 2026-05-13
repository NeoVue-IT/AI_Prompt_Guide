import { escapeHtml } from "../../utils.js";
import { advancedPrompting } from "../../../data/wrksai/advancedPrompting.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderBeforeAfter,
  renderWorkflowSteps
} from "./wrksAIRenderUtils.js";

export function renderAdvancedPrompting() {
  return `
    ${renderHero(advancedPrompting)}

    <div class="guide-layout">
      ${renderCoreMessage(advancedPrompting.coreMessage)}
      ${renderAdvancedPrinciples()}
      ${renderPromptStructures()}
      ${renderPromptTechniques()}
      ${renderWorkflowSteps(advancedPrompting.workflow)}
      ${renderAdvancedExamples()}
      ${renderAdvancedPromptTemplates()}
      ${renderAdvancedMistakes()}
      ${renderAdvancedQuickRules()}
    </div>
  `;
}

function renderAdvancedPrinciples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Advanced Prompting Principles</h2>
        <p>복잡한 업무 요청을 안정적으로 처리하기 위한 프롬프트 설계 원칙입니다.</p>
      </div>

      <div class="overview-grid">
        ${advancedPrompting.principles.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPromptStructures() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Prompt Structures</h2>
        <p>업무용 고급 프롬프트를 만들 때 사용할 수 있는 대표 구조입니다.</p>
      </div>

      <div class="content-stack">
        ${advancedPrompting.promptStructures.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.useCase)}</p>
            </div>

            <div class="guide-block">
              <strong>Formula</strong>
              <p>${escapeHtml(item.formula)}</p>
            </div>

            <div class="guide-block">
              <strong>Example</strong>
              <p>${escapeHtml(item.example)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPromptTechniques() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Advanced Techniques</h2>
        <p>업무 품질을 높이고 재작업을 줄이는 프롬프트 기법입니다.</p>
      </div>

      <div class="content-stack">
        ${advancedPrompting.techniques.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.purpose)}</p>
            </div>

            <div class="guide-block">
              <strong>When to Use</strong>
              <p>${escapeHtml(item.whenToUse)}</p>
            </div>

            <div class="guide-block">
              <strong>Prompt</strong>
              ${renderPromptBox(item.prompt)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAdvancedWorkflow() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Advanced Prompting Workflow</h2>
        <p>고급 프롬프트를 작성할 때의 기본 순서입니다.</p>
      </div>

      <div class="content-stack">
        ${advancedPrompting.workflow.map(item => `
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

function renderAdvancedExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Before / After Prompt Examples</h2>
        <p>일반 요청과 업무용 고급 요청의 차이를 비교합니다.</p>
      </div>

      <div class="content-stack">
        ${advancedPrompting.examples.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderBeforeAfter(item.bad, item.good)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAdvancedPromptTemplates() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Advanced Prompt Templates</h2>
        <p>업무에 바로 응용할 수 있는 고급 프롬프트 템플릿입니다.</p>
      </div>

      <div class="content-stack">
        ${advancedPrompting.promptTemplates.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderAdvancedMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>고급 프롬프트 작성 시 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(advancedPrompting.mistakes)}
      </article>
    </section>
  `;
}

function renderAdvancedQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>업무용 고급 프롬프트를 작성할 때 빠르게 참고할 수 있는 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${advancedPrompting.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}