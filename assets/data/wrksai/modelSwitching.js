export const modelSwitching = {
  eyebrow: "웍스AI Guide",
  title: "Model Switching",
  description:
    "하나의 업무를 하나의 모델로 끝내는 방식이 아니라, 업무 단계에 따라 적절한 모델로 전환하여 품질과 비용을 동시에 최적화하는 사용 방식입니다.",

  coreMessage: {
    title: "핵심 원칙",
    body: "Model Switching은 여러 AI 모델을 무작정 바꾸는 것이 아니라, 업무 단계별로 가장 적합한 모델을 배치하는 방식입니다."
  },

  whyItMatters: [
    {
      title: "토큰 낭비 감소",
      body: "단순 정리 단계부터 고성능 모델을 사용하지 않고, 필요한 단계에서만 상위 모델을 사용합니다."
    },
    {
      title: "결과 품질 향상",
      body: "초안 작성, 논리 검토, 문장 개선, 최종 정리를 각각 다른 모델 역할로 분리할 수 있습니다."
    },
    {
      title: "업무 속도 개선",
      body: "가벼운 단계는 빠른 모델로 처리하고, 복잡한 판단 단계만 Reasoning Model로 넘깁니다."
    },
    {
      title: "재시도 감소",
      body: "처음부터 거대한 프롬프트를 던지는 대신 단계별로 결과를 개선하므로 실패 가능성이 줄어듭니다."
    }
  ],

  switchingPatterns: [
    {
      title: "Draft → Review → Polish",
      flow: ["Fast Model", "Reasoning Model", "Creative / Fast Model"],
      useCase: "보고서, 공지문, 제안서, 교육자료 작성",
      explanation:
        "빠른 모델로 초안을 만들고, Reasoning Model로 논리와 누락사항을 검토한 뒤, Creative 또는 Fast Model로 문장을 정리합니다."
    },
    {
      title: "Summarize → Analyze → Format",
      flow: ["Fast Model", "Reasoning Model", "Fast Model"],
      useCase: "회의록, 교육자료, 긴 메모 정리",
      explanation:
        "먼저 핵심 내용을 요약한 뒤, 중요한 판단이나 원인 분석은 Reasoning Model로 처리하고, 최종 형식 정리는 Fast Model로 마무리합니다."
    },
    {
      title: "Extract → Validate → Finalize",
      flow: ["Image / OCR Model", "Reasoning Model", "Fast Model"],
      useCase: "스크린샷, 표 이미지, 문서 캡처 기반 업무",
      explanation:
        "이미지나 표에서 내용을 추출한 뒤, 추출 내용의 의미와 오류 가능성을 검토하고, 최종 보고용 형태로 정리합니다."
    },
    {
      title: "Clean → Code → Verify",
      flow: ["Fast Model", "Coding / Data Model", "Reasoning Model"],
      useCase: "Excel 정리, Python 자동화, CSV 변환",
      explanation:
        "먼저 데이터 규칙을 정리하고, Coding/Data Model로 자동화 코드를 만든 뒤, Reasoning Model로 로직 오류를 검토합니다."
    },
    {
      title: "Context → Decision → Communication",
      flow: ["Large Context Model", "Reasoning Model", "Creative Model"],
      useCase: "긴 문서 검토 후 의사결정 보고",
      explanation:
        "긴 문서나 여러 자료를 먼저 이해한 뒤, Reasoning Model로 판단 기준을 세우고, Creative Model로 보고 문장을 정리합니다."
    }
  ],

  workflowSteps: [
    {
      step: "1",
      title: "처음에는 가벼운 모델로 정리합니다",
      body: "요청사항, 자료, 메모, 회의록을 먼저 구조화합니다. 이 단계에서는 깊은 추론보다 빠른 정리가 중요합니다."
    },
    {
      step: "2",
      title: "분석이 필요한 부분만 상위 모델로 넘깁니다",
      body: "원인 분석, 판단, 비교, 리스크 검토처럼 논리가 필요한 부분만 Reasoning Model로 처리합니다."
    },
    {
      step: "3",
      title: "최종 산출물은 다시 가벼운 모델로 정리합니다",
      body: "형식 통일, 문장 다듬기, 표 정리, 보고서 톤 조정은 Fast 또는 Creative Model로 처리합니다."
    },
    {
      step: "4",
      title: "필요한 내용만 다음 모델에 전달합니다",
      body: "이전 대화 전체를 복사하지 말고, 핵심 요약과 필요한 조건만 전달해야 토큰 낭비를 줄일 수 있습니다."
    }
  ],

  examples: [
    {
      title: "회의록 → 보고서",
      before: "긴 회의록 전체를 고성능 모델에 넣고 한 번에 보고서를 요청",
      after:
        "Fast Model로 회의록 요약 → Reasoning Model로 결정사항/리스크 검토 → Fast Model로 보고서 형식 정리"
    },
    {
      title: "ERP 오류 분석",
      before: "오류 메시지만 입력하고 바로 해결책 요청",
      after:
        "Fast Model로 오류 정보 정리 → Reasoning Model로 원인 후보 분석 → Coding/Data Model로 SQL 또는 로그 확인 방법 정리"
    },
    {
      title: "교육자료 작성",
      before: "처음부터 완성된 교육자료를 한 번에 요청",
      after:
        "Fast Model로 목차 생성 → Reasoning Model로 교육 흐름 검토 → Creative Model로 쉬운 설명과 예시 작성"
    },
    {
      title: "Excel 자동화",
      before: "원본 파일 전체를 업로드하고 한 번에 자동화 코드 요청",
      after:
        "Fast Model로 데이터 규칙 정리 → Coding/Data Model로 코드 작성 → Reasoning Model로 예외 케이스 검토"
    }
  ],

  mistakes: [
    "모든 단계를 하나의 모델로만 처리하는 것",
    "단순 정리 단계부터 가장 강한 모델을 사용하는 것",
    "모델을 바꿀 때 이전 대화 전체를 그대로 붙여넣는 것",
    "모델별 역할을 정하지 않고 무작위로 전환하는 것",
    "초안, 분석, 최종 정리를 한 번에 요청하는 것",
    "출력 검증 없이 다음 단계로 넘기는 것"
  ],

  quickRules: [
    {
      rule: "초안은 Fast Model",
      detail: "처음부터 완벽한 결과를 만들려고 하지 말고 빠르게 초안을 만듭니다."
    },
    {
      rule: "판단은 Reasoning Model",
      detail: "비교, 분석, 원인 파악, 리스크 검토는 추론 모델을 사용합니다."
    },
    {
      rule: "긴 자료는 Large Context Model",
      detail: "회의록, 매뉴얼, 정책 문서처럼 입력량이 클 때만 사용합니다."
    },
    {
      rule: "최종 정리는 Fast 또는 Creative Model",
      detail: "문장 톤, 형식, 가독성 개선은 고비용 모델이 필요하지 않은 경우가 많습니다."
    },
    {
      rule: "전환 시 요약해서 전달",
      detail: "모델을 바꿀 때는 필요한 핵심 정보만 요약해서 전달합니다."
    }
  ]
};