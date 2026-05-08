export const PROMPT_PATTERNS = {
  title: {
    en: "10 Prompt Patterns Every Employee Should Know",
    ko: "직원이 반드시 알아야 할 10가지 AI 프롬프트 패턴"
  },
  intro: {
    en: "These prompt patterns help employees get better results from AI systems while reducing hallucinations, vague answers, and incorrect outputs.",
    ko: "이 프롬프트 패턴들은 AI 사용 시 더 정확한 결과를 얻고, 환각(hallucination), 모호한 답변, 잘못된 정보를 줄이는 데 도움을 줍니다."
  },
  items: [
    {
      id: "role-prompt",
      number: 1,
      title: {
        en: "Role Prompt",
        ko: "역할 지정 프롬프트"
      },
      summary: {
        en: "Tell the AI what role it should act as.",
        ko: "AI에게 어떤 역할로 답변해야 하는지 지정합니다."
      },
      why: {
        en: [
          "Focuses the AI perspective",
          "Improves relevance",
          "Reduces vague answers"
        ],
        ko: [
          "AI의 관점을 명확히 설정할 수 있습니다.",
          "업무 맥락에 더 맞는 답변을 받을 수 있습니다.",
          "모호한 답변을 줄일 수 있습니다."
        ]
      },
      example: {
        en: `Act as a quality engineer.

Analyze the following defect report and identify the most likely root cause.

Output format:
1. Root cause
2. Explanation
3. Recommended action`,
        ko: `품질 엔지니어 역할로 답변해 주세요.

다음 불량 보고서를 분석하고 가장 가능성이 높은 원인을 설명해 주세요.

출력 형식:
1. 원인
2. 설명
3. 개선 조치`
      }
    },
    {
      id: "structured-output",
      number: 2,
      title: {
        en: "Structured Output Prompt",
        ko: "구조화된 출력 프롬프트"
      },
      summary: {
        en: "Ask the AI to return information in a specific structure.",
        ko: "AI가 정해진 형식으로 답변하도록 요청합니다."
      },
      why: {
        en: [
          "Prevents unstructured answers",
          "Improves readability",
          "Makes outputs easier to reuse"
        ],
        ko: [
          "길고 산만한 답변을 줄일 수 있습니다.",
          "결과를 읽기 쉽게 만들 수 있습니다.",
          "정리 자료로 재사용하기 쉽습니다."
        ]
      },
      example: {
        en: `Explain the advantages and disadvantages of fiber optic cables.

Format your answer as:

Advantages
- bullet points

Disadvantages
- bullet points`,
        ko: `광섬유 케이블의 장점과 단점을 설명해 주세요.

다음 형식으로 작성해 주세요.

장점
- bullet point

단점
- bullet point`
      }
    },
    {
      id: "step-by-step",
      number: 3,
      title: {
        en: "Step-by-Step Reasoning Prompt",
        ko: "단계별 사고 프롬프트"
      },
      summary: {
        en: "Ask the AI to explain how it reached the answer.",
        ko: "AI가 답변에 도달한 과정을 단계별로 설명하도록 요청합니다."
      },
      why: {
        en: [
          "Helps detect incorrect assumptions",
          "Improves explainability",
          "Supports verification"
        ],
        ko: [
          "잘못된 가정을 확인하기 쉽습니다.",
          "답변 과정을 이해하기 쉽습니다.",
          "검증에 도움이 됩니다."
        ]
      },
      example: {
        en: `Analyze the following issue and explain your reasoning step by step.`,
        ko: `다음 문제를 분석하고 판단 과정을 단계별로 설명해 주세요.`
      }
    },
    {
      id: "context-injection",
      number: 4,
      title: {
        en: "Context Injection Prompt",
        ko: "Context 제공 프롬프트"
      },
      summary: {
        en: "Provide background information before asking the task.",
        ko: "질문 전에 배경 정보와 업무 맥락을 제공합니다."
      },
      why: {
        en: [
          "Reduces guessing",
          "Improves relevance",
          "Produces more task-specific answers"
        ],
        ko: [
          "AI의 추측을 줄일 수 있습니다.",
          "업무 맥락에 맞는 답변을 받을 수 있습니다.",
          "보다 실무적인 결과를 얻을 수 있습니다."
        ]
      },
      example: {
        en: `Context:
This defect occurred during a plastic injection molding process.

Task:
Explain the possible causes of this defect.`,
        ko: `Context:
이 불량은 사출 성형 공정에서 발생했습니다.

Task:
이 불량의 가능한 원인을 설명해 주세요.`
      }
    },
    {
      id: "clarifying-questions",
      number: 5,
      title: {
        en: "Ask AI to Ask Questions",
        ko: "질문 먼저 하도록 요청하는 프롬프트"
      },
      summary: {
        en: "Tell the AI to ask clarifying questions before answering.",
        ko: "AI가 답변 전에 필요한 확인 질문을 먼저 하도록 요청합니다."
      },
      why: {
        en: [
          "Prevents incorrect assumptions",
          "Improves accuracy",
          "Useful for incomplete requests"
        ],
        ko: [
          "잘못된 가정을 줄일 수 있습니다.",
          "답변 정확도를 높일 수 있습니다.",
          "질문이 불완전할 때 특히 유용합니다."
        ]
      },
      example: {
        en: `Before answering, ask any clarifying questions needed to better understand the problem.`,
        ko: `답변하기 전에 문제를 더 정확히 이해하기 위해 필요한 확인 질문을 먼저 해 주세요.`
      }
    },
    {
      id: "comparison-prompt",
      number: 6,
      title: {
        en: "Comparison Prompt",
        ko: "비교 프롬프트"
      },
      summary: {
        en: "Use this pattern when comparing options for decision making.",
        ko: "여러 선택지를 비교하고 판단할 때 사용하는 패턴입니다."
      },
      why: {
        en: [
          "Organizes differences clearly",
          "Useful for evaluation",
          "Supports decision-making"
        ],
        ko: [
          "차이점을 명확하게 정리할 수 있습니다.",
          "솔루션 평가에 유용합니다.",
          "의사결정에 도움이 됩니다."
        ]
      },
      example: {
        en: `Compare the following options.

For each option, provide:
1. Advantages
2. Disadvantages
3. Recommended use case

Options:
- Wrks.ai
- Google Workspace + Gemini`,
        ko: `다음 옵션을 비교해 주세요.

각 옵션에 대해 아래 항목을 작성해 주세요.
1. 장점
2. 단점
3. 추천 사용 상황

옵션:
- Wrks.ai
- Google Workspace + Gemini`
      }
    },
    {
      id: "verification-prompt",
      number: 7,
      title: {
        en: "Verification Prompt",
        ko: "검증 프롬프트"
      },
      summary: {
        en: "Ask the AI to check whether information is correct.",
        ko: "기존 내용이 맞는지 검증하도록 요청합니다."
      },
      why: {
        en: [
          "Reduces misinformation",
          "Improves reliability",
          "Useful for technical review"
        ],
        ko: [
          "잘못된 정보를 줄일 수 있습니다.",
          "신뢰성을 높일 수 있습니다.",
          "기술 검토에 유용합니다."
        ]
      },
      example: {
        en: `Check whether the following networking statement is correct.
Explain why it is correct or incorrect.`,
        ko: `다음 네트워크 관련 설명이 맞는지 확인해 주세요.
왜 맞는지 또는 왜 틀린지 설명해 주세요.`
      }
    },
    {
      id: "summarization-prompt",
      number: 8,
      title: {
        en: "Summarization Prompt",
        ko: "요약 프롬프트"
      },
      summary: {
        en: "Use this pattern for long documents, reports, or meeting notes.",
        ko: "긴 문서, 보고서, 회의록을 정리할 때 사용하는 패턴입니다."
      },
      why: {
        en: [
          "Extracts key points efficiently",
          "Useful for quick review",
          "Turns long text into usable insight"
        ],
        ko: [
          "핵심 내용을 빠르게 뽑아낼 수 있습니다.",
          "빠른 검토에 유용합니다.",
          "긴 내용을 실무적으로 정리할 수 있습니다."
        ]
      },
      example: {
        en: `Summarize the following content.

Provide:
1. Key points
2. Important insights
3. Final summary`,
        ko: `다음 내용을 요약해 주세요.

다음 형식으로 정리해 주세요.
1. 핵심 내용
2. 중요한 인사이트
3. 최종 요약`
      }
    },
    {
      id: "iterative-prompting",
      number: 9,
      title: {
        en: "Iterative Prompting",
        ko: "반복형 프롬프트"
      },
      summary: {
        en: "Use multiple steps instead of asking everything at once.",
        ko: "한 번에 모두 묻지 말고, 여러 단계로 나누어 요청합니다."
      },
      why: {
        en: [
          "Improves answer quality",
          "Reduces shallow responses",
          "Useful for brainstorming and refinement"
        ],
        ko: [
          "답변 품질을 높일 수 있습니다.",
          "피상적인 답변을 줄일 수 있습니다.",
          "아이디어 도출과 개선에 유용합니다."
        ]
      },
      example: {
        en: `Step 1 – Generate 5 ideas
Step 2 – Recommend the best one
Step 3 – Expand the recommended idea into an action plan`,
        ko: `1단계 – 아이디어 5개 제안
2단계 – 가장 적절한 아이디어 추천
3단계 – 추천한 아이디어를 실행 계획으로 확장`
      }
    },
    {
      id: "hallucination-control",
      number: 10,
      title: {
        en: "Hallucination Control Prompt",
        ko: "환각 방지 프롬프트"
      },
      summary: {
        en: "Tell the AI to clearly state uncertainty and not guess.",
        ko: "확실하지 않은 내용은 추측하지 말고 불확실하다고 표시하도록 요청합니다."
      },
      why: {
        en: [
          "Reduces hallucinations",
          "Improves trustworthiness",
          "Useful for factual and technical topics"
        ],
        ko: [
          "환각을 줄일 수 있습니다.",
          "결과의 신뢰도를 높일 수 있습니다.",
          "사실 기반 질문에 특히 중요합니다."
        ]
      },
      example: {
        en: `If you are unsure about any part of the answer, clearly state the uncertainty.
Do not guess.
If needed, suggest what should be verified separately.`,
        ko: `답변 중 확실하지 않은 내용이 있다면 불확실하다고 명확히 표시해 주세요.
추측하지 마세요.
필요하면 별도로 확인해야 할 항목도 제안해 주세요.`
      }
    }
  ]
};