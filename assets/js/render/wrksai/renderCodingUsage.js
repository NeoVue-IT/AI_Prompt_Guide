import { CODING_USAGE_GUIDE } from "../../data/wrksAI/codingUsage.js";
import { escapeHtml, copyBox } from "../../utils.js";

export function renderCodingUsage() {
  const guide = CODING_USAGE_GUIDE;

  return `
    <section class="detail-hero">
      <div class="detail-top">
        <div class="detail-icon">${guide.icon}</div>
        <div class="detail-title-wrap">
          <h2>${escapeHtml(guide.title)}</h2>
          <div class="detail-subtitle">${escapeHtml(guide.subtitle)}</div>
        </div>
      </div>
      <p>${escapeHtml(guide.description)}</p>
    </section>

    <section class="section-block">
      <div class="content-card">
        <h3>핵심 기준</h3>
        <div class="result-box">${escapeHtml(guide.keyMessage)}</div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <div>
          <h3>모델 선택 기준</h3>
          <p>코딩 질문의 복잡도에 따라 Opus와 Sonnet을 구분해서 사용합니다.</p>
        </div>
      </div>

      <div class="card-grid">
        ${guide.modelGuide.map(model => `
          <div class="content-card">
            <h4>${escapeHtml(model.model)}</h4>
            <div class="fullname">${escapeHtml(model.label)}</div>

            <div class="prompt-guide" style="margin-top:16px">
              <div class="guide-item use-when">
                <span class="guide-label">사용 상황</span>
                <div class="guide-text">${escapeHtml(model.useWhen)}</div>
              </div>

              <div class="guide-item quick-example">
                <span class="guide-label">주의</span>
                <div class="guide-text">${escapeHtml(model.avoidWhen)}</div>
              </div>
            </div>

            <div style="margin-top:16px">
              <h4>적합한 작업</h4>
              <div class="strengths">
                ${model.bestFor.map(item => `
                  <span class="strength-tag">${escapeHtml(item)}</span>
                `).join("")}
              </div>
            </div>

            <div style="margin-top:16px">
              <h4>예시 질문</h4>
              <div class="result-box">${escapeHtml(model.example)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="section-block">
        <div class="section-head">
            <div>
            <h3>추천 모델 스위칭 흐름</h3>
            <p>하나의 모델만 사용하는 것보다 작업 단계별로 모델을 나누면 효율이 좋아집니다.</p>
            </div>
        </div>

        <div class="workflow-steps">
            ${guide.modelSwitchingWorkflow.map(step => `
            <div class="workflow-step">
                <div class="workflow-step-number">${escapeHtml(step.step)}</div>

                <div class="workflow-step-content">
                <h4>${escapeHtml(step.model)}</h4>
                <p>${escapeHtml(step.purpose)}</p>
                </div>
            </div>
            `).join("")}
        </div>
        </section>

        <section class="section-block">
        <div class="content-card">
            <h3>토큰 최적화 규칙</h3>

            <ul>
            ${guide.tokenOptimizationRules.map(rule => `
                <li>${escapeHtml(rule)}</li>
            `).join("")}
            </ul>
        </div>
        </section>

    <section class="section-block">
      <div class="section-head">
        <div>
          <h3>복사/붙여넣기 vs 파일 업로드</h3>
          <p>상황에 따라 입력 방식을 다르게 선택해야 토큰 사용량을 줄일 수 있습니다.</p>
        </div>
      </div>

      <div class="card-grid">
        ${guide.inputMethods.map(method => `
          <div class="content-card">
            <h4>${escapeHtml(method.title)}</h4>

            <div class="prompt-guide">
              <div class="guide-item use-when">
                <span class="guide-label">적합한 경우</span>
                <div class="guide-text">${escapeHtml(method.bestFor)}</div>
              </div>
            </div>

            <div style="margin-top:16px">
              <h4>포함하면 좋은 내용</h4>
              <div class="strengths">
                ${method.include.map(item => `
                  <span class="strength-tag">${escapeHtml(item)}</span>
                `).join("")}
              </div>
            </div>

            <div style="margin-top:16px">
              <h4>피해야 할 방식</h4>
              <ul>
                ${method.avoid.map(item => `
                  <li>${escapeHtml(item)}</li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <div>
          <h3>상황별 추천 프롬프트</h3>
          <p>직원들이 바로 복사해서 사용할 수 있는 코딩 질문 템플릿입니다.</p>
        </div>
      </div>

      <div class="excel-prompt-grid">
        ${guide.promptExamples.map(example => `
          <div class="excel-prompt-card">
            <div class="excel-prompt-head">
              <h4>${escapeHtml(example.title)}</h4>
            </div>

            <div class="prompt-guide">
              <div class="guide-item use-when">
                <span class="guide-label">추천 모델</span>
                <div class="guide-text">${escapeHtml(example.model)}</div>
              </div>

              <div class="guide-item quick-example">
                <span class="guide-label">사용 상황</span>
                <div class="guide-text">${escapeHtml(example.situation)}</div>
              </div>
            </div>

            <div style="margin-top:16px">
              <h4>추천 프롬프트</h4>
              ${copyBox(`coding-${example.id}`, escapeHtml(example.prompt))}
            </div>

            <div style="margin-top:16px">
              <h4>예상 결과</h4>
              <div class="result-box">${escapeHtml(example.expectedOutput)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="section-head">
        <div>
          <h3>자주 하는 실수</h3>
          <p>토큰 낭비와 부정확한 답변을 줄이기 위해 피해야 할 질문 방식입니다.</p>
        </div>
      </div>

      <div class="card-grid">
        ${guide.mistakes.map(mistake => `
          <div class="content-card">
            <h4>${escapeHtml(mistake.title)}</h4>

            <div class="prompt-guide">
              <div class="guide-item quick-example">
                <span class="guide-label">문제점</span>
                <div class="guide-text">${escapeHtml(mistake.problem)}</div>
              </div>

              <div class="guide-item use-when">
                <span class="guide-label">개선 방식</span>
                <div class="guide-text">${escapeHtml(mistake.better)}</div>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="section-block">
      <div class="content-card">
        <h3>실무 사용 규칙 요약</h3>
        <ul>
          ${guide.quickRules.map(rule => `
            <li>${escapeHtml(rule)}</li>
          `).join("")}
        </ul>
      </div>
    </section>
  `;
}