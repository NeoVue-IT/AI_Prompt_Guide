export const recommendedAgents = {
  eyebrow: "웍스AI Guide",
  title: "Recommended Agents",
  description:
    "회사 업무에서 반복적으로 사용할 수 있는 추천 AI 에이전트 유형입니다. 에이전트는 단순한 저장 프롬프트가 아니라, 반복 업무의 목적·입력값·출력 형식을 표준화하는 업무 보조 도구입니다.",

  coreMessage: {
    title: "핵심 원칙",
    body: "좋은 에이전트는 특정 업무를 반복적으로 처리할 수 있도록 역할, 입력 기준, 출력 형식, 주의사항이 명확하게 정의되어 있어야 합니다."
  },

  principles: [
    {
      title: "반복 업무부터 에이전트화",
      body: "매주·매일 반복되는 보고서, 회의록, 메일 작성, 데이터 정리 업무부터 에이전트로 만듭니다."
    },
    {
      title: "출력 형식을 고정",
      body: "에이전트마다 보고서형, 표형, 체크리스트형, 메일형 등 최종 출력 구조를 명확히 지정합니다."
    },
    {
      title: "업무 범위를 제한",
      body: "너무 많은 역할을 하나의 에이전트에 넣지 말고, 목적별로 분리해야 결과가 안정됩니다."
    },
    {
      title: "검토 기준 포함",
      body: "AI 결과를 그대로 사용하지 않도록 누락사항, 위험 표현, 확인 필요 항목을 점검하도록 설정합니다."
    }
  ],

  agents: [
    {
      title: "IT Report Assistant",
      department: "IT",
      purpose: "일일/주간 IT 업무 내용을 관리자가 보기 좋은 보고 형식으로 정리",
      bestFor: [
        "일일 업무보고",
        "주간업무 정리",
        "장애 대응 이력 정리",
        "내일 계획 작성",
        "특이사항 보고"
      ],
      outputFormat: "오늘 진행 / 내일 계획 / 이슈 및 특이사항 / 확인 필요사항",
      modelType: "Fast Model → Reasoning Model",
      caution: "장애 원인이나 조치 결과는 실제 로그/담당자 확인 후 반영해야 합니다."
    },
    {
      title: "Meeting Summary Assistant",
      department: "전 부서",
      purpose: "회의록, 교육 내용, 인터뷰 메모를 요약하고 실행 항목으로 정리",
      bestFor: [
        "회의록 요약",
        "결정사항 추출",
        "Action Item 정리",
        "참석자별 담당 업무 정리",
        "보고서 초안 작성"
      ],
      outputFormat: "회의 목적 / 핵심 요약 / 결정사항 / Action Items / 리스크 / 후속 일정",
      modelType: "Large Context Model → Fast Model",
      caution: "회의 내용 중 결정되지 않은 사항을 확정된 것처럼 표현하지 않도록 주의해야 합니다."
    },
    {
      title: "AI Training Assistant",
      department: "IT / 교육 담당",
      purpose: "AI 교육 내용, 사용자 질문, 내부 피드백을 바탕으로 실무 적용 가이드 작성",
      bestFor: [
        "교육자료 정리",
        "사용자 Q&A 정리",
        "AI 사용법 안내",
        "사내 가이드 문장화",
        "반복 질문 대응"
      ],
      outputFormat: "교육 주제 / 핵심 개념 / 실무 예시 / 주의사항 / 추천 프롬프트",
      modelType: "Reasoning Model → Creative Model",
      caution: "교육자료는 실제 회사 정책과 보안 기준에 맞게 검토 후 배포해야 합니다."
    },
    {
      title: "Email Communication Assistant",
      department: "전 부서",
      purpose: "내부 공지, 외부 메일, 협조 요청 문장을 상황에 맞게 정리",
      bestFor: [
        "내부 공지 작성",
        "협조 요청 메일",
        "거래처 회신",
        "톤 조정",
        "간결한 문장 정리"
      ],
      outputFormat: "제목 / 인사말 / 요청 내용 / 기한 / 마무리 문장",
      modelType: "Fast Model / Creative Model",
      caution: "외부 발송 전 금액, 일정, 계약 조건은 반드시 사람이 확인해야 합니다."
    },
    {
      title: "Production Data Assistant",
      department: "생산 / 품질 / IT",
      purpose: "생산 RAW 데이터를 정리 규칙에 따라 정제·집계·보고용 형태로 변환",
      bestFor: [
        "생산 데이터 정리",
        "공정별 집계",
        "불량/양품 구분",
        "ERP 업로드용 형식 정리",
        "반복 엑셀 작업 자동화"
      ],
      outputFormat: "정제 기준 / 오류값 확인 / 공정별 집계 / 최종 출력 형식 / 예외사항",
      modelType: "Coding / Data Model → Reasoning Model",
      caution: "원본 데이터 구조와 ERP 업로드 기준은 실제 담당자 검증이 필요합니다."
    },
    {
      title: "Quality Issue Assistant",
      department: "품질",
      purpose: "품질 이슈, 불량 유형, 검사 결과를 정리하고 원인 후보와 조치 방향을 제안",
      bestFor: [
        "불량 유형 분류",
        "품질 이슈 보고",
        "원인 후보 정리",
        "검사 결과 요약",
        "재발 방지 대책 초안"
      ],
      outputFormat: "이슈 개요 / 발생 현황 / 원인 후보 / 확인 필요사항 / 조치 방향",
      modelType: "Reasoning Model",
      caution: "AI의 원인 분석은 참고용이며, 실제 품질 판정은 담당 부서 기준을 따라야 합니다."
    },
    {
      title: "R&D Research Assistant",
      department: "R&D",
      purpose: "기술 자료, 논문, 제품 비교, 시장 정보를 정리하여 연구 검토 자료로 변환",
      bestFor: [
        "기술 자료 요약",
        "제품/기술 비교",
        "장단점 분석",
        "검토 보고서 초안",
        "추가 확인 질문 도출"
      ],
      outputFormat: "검토 주제 / 핵심 내용 / 비교표 / 장점 / 한계 / 추가 확인사항",
      modelType: "Large Context Model → Reasoning Model",
      caution: "외부 자료 기반 정보는 최신성 및 출처 확인이 필요합니다."
    },
    {
      title: "Prompt Refinement Assistant",
      department: "전 부서",
      purpose: "사용자가 작성한 요청을 더 명확한 업무용 프롬프트로 개선",
      bestFor: [
        "애매한 요청 정리",
        "프롬프트 개선",
        "출력 형식 추가",
        "조건 명확화",
        "업무 목적 구체화"
      ],
      outputFormat: "개선된 프롬프트 / 추가하면 좋은 조건 / 추천 출력 형식 / 주의사항",
      modelType: "Fast Model",
      caution: "프롬프트 개선 결과가 실제 업무 목적과 맞는지 사용자가 최종 확인해야 합니다."
    }
  ],

  creationChecklist: [
    {
      item: "역할 정의",
      detail: "이 에이전트가 어떤 업무를 담당하는지 한 문장으로 정의합니다."
    },
    {
      item: "사용 대상 정의",
      detail: "IT, 생산, 품질, 영업 등 어느 부서에서 사용할지 정합니다."
    },
    {
      item: "입력값 정의",
      detail: "사용자가 어떤 자료나 정보를 넣어야 하는지 명확히 합니다."
    },
    {
      item: "출력 형식 정의",
      detail: "보고서, 표, 체크리스트, 메일 등 원하는 결과 형식을 고정합니다."
    },
    {
      item: "주의사항 정의",
      detail: "보안, 개인정보, 검증 필요 항목, 최종 승인 기준을 포함합니다."
    },
    {
      item: "반복 사용 여부 확인",
      detail: "한 번만 쓰는 프롬프트인지, 반복 업무용 에이전트인지 구분합니다."
    }
  ],

  examples: [
    {
      title: "일일 IT 업무보고",
      bad: "오늘 한 일 정리해줘",
      good:
        "오늘 진행한 IT 업무 내용을 관리자 보고용으로 정리해줘. 형식은 오늘 진행, 내일 계획, 이슈 및 특이사항, 확인 필요사항 순서로 작성해줘."
    },
    {
      title: "회의록 정리",
      bad: "이 회의록 요약해줘",
      good:
        "아래 회의록을 결정사항, Action Item, 담당자, 기한, 추가 확인사항 기준으로 정리해줘. 확정되지 않은 내용은 별도로 표시해줘."
    },
    {
      title: "품질 이슈 보고",
      bad: "불량 내용 보고서로 만들어줘",
      good:
        "아래 품질 이슈 내용을 발생 현황, 불량 유형, 원인 후보, 확인 필요 데이터, 조치 방향 기준으로 정리해줘."
    }
  ],

  promptTemplate: {
    title: "Agent Instruction Template",
    prompt:
      "당신은 [부서/업무]를 지원하는 AI 에이전트입니다.\n\n역할:\n- [에이전트의 주요 역할]\n\n입력 자료:\n- [사용자가 제공해야 하는 자료]\n\n출력 형식:\n- [원하는 결과 형식]\n\n작성 기준:\n- 업무용 문체로 작성\n- 불확실한 내용은 확정 표현 금지\n- 확인 필요 사항은 별도 표시\n- 민감정보 또는 보안상 위험한 내용은 포함하지 않음\n\n최종 결과는 [보고서/표/메일/체크리스트] 형식으로 작성하세요."
  },

  mistakes: [
    "하나의 에이전트에 너무 많은 역할을 넣는 것",
    "출력 형식을 지정하지 않는 것",
    "검토 기준 없이 결과만 생성하도록 만드는 것",
    "부서별 업무 특성을 반영하지 않는 것",
    "보안/개인정보 주의사항을 넣지 않는 것",
    "반복 업무가 아닌 일회성 요청을 무조건 에이전트로 만드는 것"
  ],

  quickRules: [
    {
      rule: "반복되는 업무부터 에이전트화",
      detail: "매일 또는 매주 반복되는 보고, 정리, 메일, 데이터 업무가 우선 대상입니다."
    },
    {
      rule: "에이전트 하나 = 목적 하나",
      detail: "역할이 많아질수록 결과가 흐려지므로 목적을 좁게 잡는 것이 좋습니다."
    },
    {
      rule: "출력 형식을 고정",
      detail: "항상 같은 구조로 결과가 나오도록 출력 형식을 명확히 설정합니다."
    },
    {
      rule: "검증 기준을 포함",
      detail: "AI가 불확실한 내용을 확정적으로 쓰지 않도록 확인 필요 항목을 분리합니다."
    }
  ]
};