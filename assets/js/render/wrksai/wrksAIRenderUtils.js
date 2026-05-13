import { escapeHtml, copyBox } from "../../utils.js";

export function renderHero(section) {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <h1>${escapeHtml(section.title)}</h1>
      <p>${escapeHtml(section.description)}</p>
    </section>
  `;
}

export function renderCoreMessage(coreMessage) {
  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>${escapeHtml(coreMessage.title)}</h2>
        <p>${escapeHtml(coreMessage.body)}</p>
      </div>
    </section>
  `;
}

export function renderSectionHeader(title, body) {
  return `
    <div class="section-card">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    </div>
  `;
}

export function renderList(items = []) {
  return `
    <ul class="guide-list">
      ${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

export function renderFlowRow(items = []) {
  return `
    <div class="flow-row">
      ${items.map((item, index) => `
        <span class="flow-pill">${escapeHtml(item)}</span>
        ${index < items.length - 1 ? `<span class="flow-arrow">→</span>` : ""}
      `).join("")}
    </div>
  `;
}

export function renderBeforeAfter(before, after) {
  return `
    <div class="compare-grid">
      <div class="compare-card compare-bad">
        <strong>Before</strong>
        <p>${escapeHtml(before)}</p>
      </div>

      <div class="compare-card compare-good">
        <strong>After</strong>
        <p>${escapeHtml(after)}</p>
      </div>
    </div>
  `;
}

let promptBoxCounter = 0;

export function renderPromptBox(prompt) {
  promptBoxCounter += 1;
  return copyBox(`wrks-prompt-${promptBoxCounter}`, escapeHtml(prompt));
}

export function renderGuideVisuals(items = []) {
  if (!items.length) return "";

  return `
    <div class="overview-grid guide-visual-grid">
      ${items.map(item => `
        <article class="guide-visual-placeholder guide-item">
          <div class="visual-placeholder-icon">🖼️</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <span class="visual-file-name">${escapeHtml(item.filename)}</span>
        </article>
      `).join("")}
    </div>
  `;
}

export function renderExpectedResults(items = []) {
  if (!items.length) return "";

  return `
    <article class="guide-item expected-result-card">
      <div class="section-label">EXPECTED RESULT</div>
      <h3>예상 결과</h3>
      ${renderList(items)}
    </article>
  `;
}

export function renderPreviewSection(section) {
  if (!section?.visualGuides?.length && !section?.expectedResults?.length) return "";

  return `
    <section class="guide-section guide-preview-section">
      <div class="section-card">
        <span class="section-label">COMING SOON</span>
        <h2>화면 예시 및 결과 미리보기</h2>
        <p>
          실제 웍스AI 사용 화면, 입력 예시, 예상 결과 이미지를 추가할 예정입니다.
        </p>
      </div>

      ${renderGuideVisuals(section.visualGuides)}
      ${renderExpectedResults(section.expectedResults)}
    </section>
  `;
}

export function renderWorkflowSteps(steps = []) {
  if (!steps.length) return "";

  return `
    <section class="guide-section workflow-steps-section">
      <div class="section-card">
        <span class="section-label">WORKFLOW</span>
        <h2>진행 흐름</h2>
        <p>이 기능을 실제 업무에 적용할 때의 기본 진행 순서입니다.</p>
      </div>

      <div class="workflow-steps-grid">
        ${steps.map((step, index) => `
          <article class="guide-item workflow-step-card">
            <div class="workflow-step-number">
              ${escapeHtml(step.step || String(index + 1))}
            </div>
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.body)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}