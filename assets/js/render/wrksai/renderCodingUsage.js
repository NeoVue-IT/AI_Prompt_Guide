import { escapeHtml } from "../../utils.js";
import { CODING_USAGE_GUIDE as codingUsage } from "../../../data/wrksai/codingUsage.js";

import {
  renderHero,
  renderCoreMessage,
  renderSectionHeader,
  renderList,
  renderPromptBox,
  renderWorkflowSteps,
  renderPreviewSection
} from "./wrksAIRenderUtils.js";

export function renderCodingUsage() {
  return `
    ${renderHero(codingUsage)}

    <div class="guide-layout">
      ${renderCoreMessage(codingUsage.coreMessage)}
      ${renderModelGuide()}
      ${renderWorkflowSteps(codingUsage.modelSwitchingWorkflow)}
      ${renderTokenRules()}
      ${renderInputMethods()}
      ${renderPromptExamples()}
      ${renderCLanguageGuide()}
      ${renderMistakes()}
      ${renderQuickRules()}
      ${renderPreviewSection(codingUsage)}
    </div>
  `;
}

function renderModelGuide() {
  return `
    <section class="guide-section">
      ${renderSectionHeader(
        "모델 선택 기준",
        "코딩 질문의 복잡도와 목적에 따라 적절한 모델을 선택합니다."
      )}

      <div class="content-stack">
        ${codingUsage.modelGuide.map(model => `
          <article class="guide-item">
            <div class="section-label">${escapeHtml(model.category || "CODING MODEL")}</div>
            <h3>${escapeHtml(model.model)}</h3>
            <p>${escapeHtml(model.label)}</p>

            <div class="guide-block">
              <strong>Best For</strong>
              ${renderList(model.bestFor)}
            </div>

            <div class="guide-block">
              <strong>Strengths</strong>
              ${renderList(model.strengths)}
            </div>

            <div class="guide-block">
              <strong>Avoid For</strong>
              ${renderList(model.weakFor)}
            </div>

            <div class="guide-block">
              <strong>Token Advice</strong>
              <p>${escapeHtml(model.tokenAdvice)}</p>
            </div>

            <div class="guide-block">
              <strong>Usage Style</strong>
              <p>${escapeHtml(model.usageStyle)}</p>
            </div>

            <div class="guide-block">
              <strong>Recommended Prompt</strong>
              ${renderPromptBox(model.recommendedPrompt)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTokenRules() {
  return `
    <section class="guide-section">
      ${renderSectionHeader(
        "토큰 최적화 규칙",
        "불필요한 전체 코드 재출력과 반복 질문을 줄이기 위한 기준입니다."
      )}

      <article class="guide-item">
        ${renderList(codingUsage.tokenOptimizationRules)}
      </article>
    </section>
  `;
}

function renderInputMethods() {
  return `
    <section class="guide-section">
      ${renderSectionHeader(
        "복사/붙여넣기 vs 파일 업로드",
        "코드 질문은 상황에 따라 입력 방식을 다르게 선택해야 합니다."
      )}

      <div class="content-stack">
        ${codingUsage.inputMethods.map(method => `
          <article class="guide-item">
            <h3>${escapeHtml(method.title)}</h3>

            <div class="guide-block">
              <strong>Best For</strong>
              <p>${escapeHtml(method.bestFor)}</p>
            </div>

            <div class="guide-block">
              <strong>Include</strong>
              ${renderList(method.include)}
            </div>

            <div class="guide-block">
              <strong>Avoid</strong>
              ${renderList(method.avoid)}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderPromptExamples() {
  return `
    <section class="guide-section">
      ${renderSectionHeader(
        "상황별 추천 프롬프트",
        "직원들이 바로 복사해서 사용할 수 있는 코딩 질문 템플릿입니다."
      )}

      <div class="content-stack">
        ${codingUsage.promptExamples.map(example => `
          <article class="guide-item">
            <h3>${escapeHtml(example.title)}</h3>

            ${example.model ? `
              <div class="section-label">${escapeHtml(example.model)}</div>
            ` : ""}

            ${example.situation ? `
              <p>${escapeHtml(example.situation)}</p>
            ` : ""}

            <div class="guide-block">
              <strong>Prompt</strong>
              ${renderPromptBox(example.prompt)}
            </div>

            <div class="guide-block">
              <strong>Expected Result</strong>
              <p>${escapeHtml(example.expected || example.expectedOutput || "")}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMistakes() {
  if (!codingUsage.mistakes?.length) return "";

  return `
    <section class="guide-section">
      ${renderSectionHeader(
        "자주 하는 실수",
        "토큰 낭비와 부정확한 답변을 유발하는 질문 방식입니다."
      )}

      <div class="content-stack">
        ${codingUsage.mistakes.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>

            <div class="guide-block">
              <strong>Problem</strong>
              <p>${escapeHtml(item.problem)}</p>
            </div>

            <div class="guide-block">
              <strong>Better</strong>
              <p>${escapeHtml(item.better)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderQuickRules() {
  if (!codingUsage.quickRules?.length) return "";

  return `
    <section class="guide-section">
      ${renderSectionHeader(
        "실무 사용 규칙 요약",
        "코딩 질문 시 직원들이 기억해야 할 핵심 기준입니다."
      )}

      <article class="guide-item">
        ${renderList(codingUsage.quickRules)}
      </article>
    </section>
  `;
}

function renderCLanguageGuide() {
  if (!codingUsage.cLanguageGuide?.length) return "";

  return `
    <section class="guide-section">
      <div class="section-card">
        <h2>C / C++ 실무 사용 가이드</h2>
        <p>제조/장비/임베디드 환경에서 AI를 사용할 때의 추천 방식입니다.</p>
      </div>

      <div class="content-stack">
        ${codingUsage.cLanguageGuide.map(item => `
          <article class="guide-item">
            <h3>${escapeHtml(item.title)}</h3>

            ${item.points ? `
              <div class="guide-block">
                ${renderList(item.points)}
              </div>
            ` : ""}

            ${item.example ? `
              <div class="guide-block">
                <strong>예시 프롬프트</strong>
                ${renderPromptBox(item.example)}
              </div>
            ` : ""}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}