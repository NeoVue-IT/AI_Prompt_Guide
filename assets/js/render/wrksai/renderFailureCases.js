import { escapeHtml } from "../../utils.js";
import { failureCases } from "../../../data/wrksai/failureCases.js";
import {
  renderHero,
  renderCoreMessage,
  renderList,
  renderPromptBox,
  renderBeforeAfter
} from "./wrksAIRenderUtils.js";

export function renderFailureCases() {
  return `
    ${renderHero(failureCases)}

    <div class="guide-layout">
      ${renderCoreMessage(failureCases.coreMessage)}
      ${renderFailureCategories()}
      ${renderFailurePatterns()}
      ${renderFailureExamples()}
      ${renderFailureReviewChecklist()}
      ${renderFailurePromptPatterns()}
      ${renderFailureMistakes()}
      ${renderFailureQuickRules()}
    </div>
  `;
}

function renderFailureCategories() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Failure Categories</h2>
        <p>업무용 AI 사용 시 자주 발생하는 실패 유형입니다.</p>
      </div>

      <div class="content-stack">
        ${failureCases.categories.map(item => `
          <article class="guide-item">
            <div class="guide-item-header">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.summary)}</p>
            </div>

            <div class="guide-block">
              <strong>Examples</strong>
              ${renderList(item.examples)}
            </div>

            <div class="guide-block">
              <strong>Prevention</strong>
              ${renderList(item.prevention)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFailurePatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Failure Patterns</h2>
        <p>AI 결과 실패로 이어지는 대표적인 사용 패턴과 개선 방법입니다.</p>
      </div>

      <div class="table-wrap">
        <table class="guide-table">
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Result</th>
              <th>Fix</th>
            </tr>
          </thead>
          <tbody>
            ${failureCases.failurePatterns.map(row => `
              <tr>
                <td>${escapeHtml(row.pattern)}</td>
                <td>${escapeHtml(row.result)}</td>
                <td>${escapeHtml(row.fix)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderFailureExamples() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Before / After Failure Examples</h2>
        <p>실제 업무에서 발생할 수 있는 실패 사례와 개선 방식을 비교합니다.</p>
      </div>

      <div class="content-stack">
        ${failureCases.examples.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderBeforeAfter(item.bad, item.good)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFailureReviewChecklist() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Review Checklist</h2>
        <p>AI 결과물을 업무에 사용하기 전에 확인해야 할 항목입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(failureCases.reviewChecklist)}
      </article>
    </section>
  `;
}

function renderFailurePromptPatterns() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Failure Prevention Prompt Patterns</h2>
        <p>AI 실패를 줄이기 위해 사용할 수 있는 프롬프트 예시입니다.</p>
      </div>

      <div class="content-stack">
        ${failureCases.promptPatterns.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>
            ${renderPromptBox(item.prompt)}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderFailureMistakes() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Common Mistakes</h2>
        <p>AI 실패 사례를 유발하는 대표적인 실수입니다.</p>
      </div>

      <article class="guide-item">
        ${renderList(failureCases.mistakes)}
      </article>
    </section>
  `;
}

function renderFailureQuickRules() {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>Quick Rules</h2>
        <p>AI 결과 실패를 줄이기 위해 반드시 기억해야 할 기준입니다.</p>
      </div>

      <div class="overview-grid">
        ${failureCases.quickRules.map(item => `
          <article class="fw-card">
            <h3>${escapeHtml(item.rule)}</h3>
            <p>${escapeHtml(item.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}