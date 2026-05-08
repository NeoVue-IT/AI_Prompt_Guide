export const aiMistakes = [
  {
    section: "기본적인 AI 사용 실수",
    description:
      "LLM, ChatGPT, Gemini, Claude, 에이전트 등을 사용할 때 가장 흔하게 발생하는 기본 실수입니다.",
    items: [
      {
        id: "vague-request",
        title: "목적 없이 막연하게 질문하기",
        difficulty: "beginner",
        severity: "medium",
        tags: ["prompting", "basic", "workflow"],
        mistake: "“보고서 써줘”, “이거 정리해줘”처럼 목적, 대상, 형식 없이 요청함",
        problem: "AI가 사용자의 상황을 추측하게 되어 결과가 너무 일반적이거나 재작업이 많아짐",
        better: "목적, 독자, 출력 형식, 분량, 톤을 함께 지정함",
        badPrompt: "AI 교육 보고서 써줘.",
        goodPrompt:
          "사내 IT 과장이 임원에게 제출할 AI 교육 이수보고서 형식으로 작성해줘. 교육 내용은 4개 핵심 항목으로 정리하고, 각 항목마다 업무 활용 가능성을 포함해줘.",
        tip: "AI는 ‘무엇을 원하는지’보다 ‘어디에 쓸 결과물인지’를 알려줄 때 품질이 크게 좋아진다."
      },
      {
        id: "no-context",
        title: "업무 배경을 생략하기",
        difficulty: "beginner",
        severity: "high",
        tags: ["context", "business", "prompting"],
        mistake: "회사 상황, 부서 역할, 사용 대상, 현재 문제를 설명하지 않음",
        problem: "AI가 실제 업무 환경과 맞지 않는 답변을 생성함",
        better: "현재 상황과 제약조건을 먼저 설명한 뒤 요청함",
        badPrompt: "AI 도입 계획 만들어줘.",
        goodPrompt:
          "제조업 회사 IT팀 입장에서 사내 AI 도입 계획을 작성해줘. 2주 테스트, 4주 파일럿, 30명 사용자 검증, 보안 검토, ROI 측정 단계를 포함해줘.",
        tip: "업무용 AI 결과물은 배경 정보가 많을수록 실무형으로 바뀐다."
      },
      {
        id: "one-shot-expectation",
        title: "한 번에 완성본을 기대하기",
        difficulty: "beginner",
        severity: "medium",
        tags: ["iteration", "workflow", "drafting"],
        mistake: "처음 요청에서 바로 최종본 수준의 결과를 기대함",
        problem: "복잡한 보고서, 발표자료, 코드, 정책 문서는 한 번에 완성도가 나오기 어려움",
        better: "초안 → 구조 수정 → 표현 다듬기 → 최종본 순서로 진행함",
        badPrompt: "완성된 발표자료 내용 만들어줘.",
        goodPrompt:
          "먼저 발표자료 목차와 각 슬라이드의 핵심 메시지만 잡아줘. 이후 내가 승인하면 슬라이드별 문구를 작성해줘.",
        tip: "AI는 한 번에 끝내는 도구라기보다, 초안을 빠르게 만들고 반복 개선하는 도구로 쓰는 것이 좋다."
      }
    ]
  },

  {
    section: "프롬프트 작성 실수",
    description:
      "AI에게 원하는 결과물의 형식, 역할, 기준을 제대로 전달하지 못할 때 발생하는 실수입니다.",
    items: [
      {
        id: "no-format",
        title: "결과물 형식을 지정하지 않기",
        difficulty: "beginner",
        severity: "medium",
        tags: ["format", "report", "table"],
        mistake: "표, 보고서, 이메일, 체크리스트, 발표자료 중 어떤 형태인지 말하지 않음",
        problem: "원하는 업무 양식과 다른 형태의 답변이 나옴",
        better: "출력 형식을 명확히 지정함",
        badPrompt: "장단점 정리해줘.",
        goodPrompt:
          "아래 내용을 보고서용 표 형식으로 정리해줘. 열은 ‘항목 / 장점 / 단점 / 검토 의견 / 우선순위’로 구성해줘.",
        tip: "AI에게는 내용보다 ‘형식 지시’가 결과 품질을 크게 좌우한다."
      },
      {
        id: "no-role",
        title: "AI의 역할을 지정하지 않기",
        difficulty: "beginner",
        severity: "medium",
        tags: ["role", "perspective", "business"],
        mistake: "AI가 어떤 관점에서 답해야 하는지 지정하지 않음",
        problem: "답변 관점이 일반론으로 흐르기 쉬움",
        better: "IT 관리자, 보안 담당자, 임원 보고서 작성자 등 역할을 지정함",
        badPrompt: "이 시스템 도입 검토해줘.",
        goodPrompt:
          "너는 제조업 회사의 IT 관리자야. 보안, 운영 효율, 비용, 사용자 편의성 관점에서 이 시스템 도입 여부를 검토해줘.",
        tip: "역할을 지정하면 AI의 판단 기준이 더 명확해진다."
      },
      {
        id: "asking-too-broad",
        title: "요청 범위가 너무 넓음",
        difficulty: "beginner",
        severity: "medium",
        tags: ["scope", "planning", "prompting"],
        mistake: "한 번에 전략, 보고서, 표, 발표자료, 이메일까지 모두 요청함",
        problem: "결과가 길고 산만해지며 핵심 품질이 떨어짐",
        better: "큰 작업을 작은 단계로 나눔",
        badPrompt: "AI 도입 관련해서 보고서, 발표자료, 메일, 일정표 전부 만들어줘.",
        goodPrompt:
          "먼저 AI 도입 보고서의 목차만 작성해줘. 목차는 임원 보고용으로 6개 이내로 구성해줘.",
        tip: "복잡한 업무는 단계별로 나눌수록 결과가 좋아진다."
      },
      {
        id: "not-giving-examples",
        title: "원하는 예시를 주지 않기",
        difficulty: "intermediate",
        severity: "medium",
        tags: ["examples", "style", "quality"],
        mistake: "원하는 스타일이나 기존 양식을 제공하지 않음",
        problem: "AI가 사용자의 회사 문체나 보고서 스타일을 맞추기 어려움",
        better: "기존 문구, 표, 보고서 샘플을 함께 제공함",
        badPrompt: "공문처럼 써줘.",
        goodPrompt:
          "아래 예시 문체와 비슷하게 작성해줘. 너무 딱딱하지 않되, 사내 공지문처럼 정중하게 작성해줘.",
        tip: "AI에게 좋은 예시를 주면 회사 내부 스타일에 더 가깝게 맞출 수 있다."
      }
    ]
  },

  {
    section: "검증 및 환각 관련 실수",
    description:
      "AI 답변을 검증하지 않거나, 환각 가능성을 고려하지 않을 때 발생하는 실수입니다.",
    items: [
      {
        id: "trusting-answer",
        title: "AI 답변을 그대로 믿기",
        difficulty: "beginner",
        severity: "high",
        tags: ["hallucination", "verification", "fact-checking"],
        mistake: "가격, 법규, 정책, 기술 사양, 최신 정보 등을 검증하지 않고 그대로 사용함",
        problem: "AI가 오래된 정보나 잘못된 정보를 자연스럽게 말할 수 있음",
        better: "최신성이나 정확성이 중요한 내용은 출처 확인 또는 재검증을 요청함",
        badPrompt: "이 내용 맞지?",
        goodPrompt:
          "아래 내용에서 최신 확인이 필요한 항목과 내부 검토가 필요한 항목을 구분해줘. 확실하지 않은 부분은 ‘확인 필요’로 표시해줘.",
        tip: "AI는 초안 작성과 구조화에는 강하지만, 최종 사실 확인 책임은 사용자에게 있다."
      },
      {
        id: "no-review-request",
        title: "수정 기준을 요청하지 않기",
        difficulty: "intermediate",
        severity: "medium",
        tags: ["review", "quality-check", "editing"],
        mistake: "초안만 받고 무엇이 문제인지 검토하지 않음",
        problem: "겉보기에는 괜찮아도 논리, 중복, 누락, 톤 문제가 남을 수 있음",
        better: "작성 후 검토 기준을 지정해 재검토하게 함",
        badPrompt: "이 문장 다듬어줘.",
        goodPrompt:
          "아래 문장을 다듬은 뒤, 논리 중복, 표현 어색함, 보고서 톤, 누락된 정보 관점에서 검토 의견도 함께 제시해줘.",
        tip: "AI에게 ‘작성’만 시키지 말고 ‘검토자’ 역할도 시키는 것이 좋다."
      }
    ]
  },

  {
    section: "보안 및 개인정보 실수",
    description:
      "회사 업무에서 AI를 사용할 때 특히 주의해야 하는 정보보호 관련 실수입니다.",
    items: [
      {
        id: "copy-sensitive-data",
        title: "민감정보를 그대로 입력하기",
        difficulty: "beginner",
        severity: "critical",
        tags: ["security", "privacy", "company-data"],
        mistake: "개인정보, 고객정보, 계정정보, 내부 문서 원문을 그대로 AI에 붙여넣음",
        problem: "회사 보안 정책이나 개인정보 보호 기준에 위배될 수 있음",
        better: "민감정보는 익명화하거나 샘플 데이터로 대체함",
        badPrompt: "이 직원 계정 목록을 정리해줘. [실제 이름/메일/전화번호 포함]",
        goodPrompt:
          "아래는 익명화된 계정 목록이야. 사용자명은 User01, User02 형식으로 처리했어. 부서별 계정 정리표를 만들어줘.",
        tip: "AI 사용 전에는 반드시 개인정보, 계정, 고객명, 내부 기밀을 제거해야 한다."
      }
    ]
  }
];