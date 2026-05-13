import { escapeHtml } from "../../utils.js";
import { modelSwitching } from "../../../data/wrksai/modelSwitching.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPreviewSection,
  renderWorkflowSteps
} from "./wrksAIRenderUtils.js";
import { renderWorkflowChains } from "./renderWorkflowChains.js";


export function renderModelSwitching() {
  return `
    ${renderHero(modelSwitching)}

    <div class="guide-layout">
      ${renderCoreMessage(modelSwitching.coreMessage)}
      ${renderPreviewSection(modelSwitching)}
      ${renderWhySwitchingMatters()}
      ${renderSwitchingPatterns()}
      ${renderWorkflowSteps(modelSwitching.workflowSteps)}
      ${renderSwitchingExamples()}
      ${renderSwitchingMistakes()}
      ${renderSwitchingQuickRules()}
    </div>
  `;
}

function renderWhySwitchingMatters() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Why Model Switching Matters</h2>
        <p>모델 전환은 품질 향상뿐만 아니라 비용 관리와 업무 속도 개선에도 직접적인 영향을 줍니다.</p>
      </div>

      <div class="overview-grid">
        ${modelSwitching.whyItMatters.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSwitchingPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Recommended Switching Patterns</h2>
        <p>업무 흐름에 따라 모델을 단계적으로 배치하는 대표 패턴입니다.</p>
      </div>

      <div class="content-stack">
        ${modelSwitching.switchingPatterns.map(pattern => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(pattern.title)}</h3>
              <p>${escapeHtml(pattern.useCase)}</p>
            </div>

            <div class="flow-row">
              ${pattern.flow.map((step, index) => `
                <span class="flow-pill">${escapeHtml(step)}</span>
                ${index < pattern.flow.length - 1 ? `<span class="flow-arrow">→</span>` : ""}
              `).join("")}
            </div>

            <p>${escapeHtml(pattern.explanation)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSwitchingExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Before / After Examples</h2>
        <p>잘못된 사용 방식과 개선된 모델 전환 방식을 비교합니다.</p>
      </div>

      <div class="content-stack">
        ${modelSwitching.examples.map(example => `
          <article class="guide-item">
            <h3>${escapeHtml(example.title)}</h3>

            <div class="compare-grid">
              <div class="compare-card compare-bad">
                <strong>Before</strong>
                <p>${escapeHtml(example.before)}</p>
              </div>

              <div class="compare-card compare-good">
                <strong>After</strong>
                <p>${escapeHtml(example.after)}</p>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSwitchingMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>모델 전환을 사용할 때 자주 발생하는 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(modelSwitching.mistakes)}
      </article>
    </section>
  `;
}

function renderSwitchingQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>업무자가 빠르게 기억할 수 있는 모델 전환 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${modelSwitching.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}