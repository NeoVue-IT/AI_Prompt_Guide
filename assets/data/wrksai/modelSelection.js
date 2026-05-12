export const modelSelection = {
  eyebrow: "웍스AI Guide",
  title: "Model Selection",
  description:
    "업무 목적에 따라 가장 적합한 AI 모델 유형을 선택하는 기준입니다. 가장 강한 모델이 항상 좋은 선택은 아니며, 정확히 처리 가능한 가장 효율적인 모델을 선택하는 것이 중요합니다.",

  coreMessage: {
    title: "핵심 원칙",
    body: "Best model = strongest model 이 아닙니다. Best model = 업무를 정확히 처리할 수 있는 가장 효율적인 모델입니다."
  },

  categories: [
    {
      title: "Fast Models",
      purpose: "빠른 응답과 가벼운 업무 처리",
      bestFor: [
        "메일 문장 다듬기",
        "간단한 요약",
        "보고서 문장 정리",
        "번역 초안",
        "형식 변환",
        "짧은 아이디어 정리"
      ],
      avoidFor: [
        "복잡한 원인 분석",
        "ERP/SP 로직 검토",
        "긴 문서 기반 판단",
        "다단계 의사결정"
      ]
    },
    {
      title: "Reasoning Models",
      purpose: "복잡한 논리, 분석, 판단이 필요한 업무",
      bestFor: [
        "장애 원인 분석",
        "ERP/SP 로직 분석",
        "업무 프로세스 설계",
        "데이터 해석",
        "리스크 검토",
        "복잡한 보고서 구조화"
      ],
      avoidFor: [
        "단순 문장 수정",
        "짧은 번역",
        "단순 요약",
        "반복적인 형식 정리"
      ]
    },
    {
      title: "Large Context Models",
      purpose: "긴 문서, 여러 파일, 대량 텍스트 기반 업무 처리",
      bestFor: [
        "긴 회의록 분석",
        "여러 문서 비교",
        "정책/매뉴얼 검토",
        "대량 자료 기반 보고서 작성",
        "이전 대화 맥락 유지"
      ],
      avoidFor: [
        "짧은 단문 요청",
        "간단한 메일 작성",
        "한두 문장 수정",
        "불필요한 전체 파일 업로드"
      ]
    },
    {
      title: "Creative Models",
      purpose: "표현력, 설득력, 문장 품질 개선",
      bestFor: [
        "공지문 개선",
        "교육자료 문장 다듬기",
        "보고서 톤 조정",
        "발표 스크립트 작성",
        "사용자 친화적 설명 작성"
      ],
      avoidFor: [
        "정확한 계산",
        "시스템 로직 검증",
        "사실 검증 없는 최종 판단",
        "법무/보안 최종 결정"
      ]
    },
    {
      title: "Coding / Data Models",
      purpose: "코드, 데이터 정리, 자동화 스크립트 작성",
      bestFor: [
        "Python 스크립트 작성",
        "Excel 자동화",
        "CSV 데이터 정리",
        "SQL 검토",
        "오류 메시지 분석",
        "반복 업무 자동화"
      ],
      avoidFor: [
        "검증 없이 바로 운영 반영",
        "보안 검토 없는 스크립트 실행",
        "중요 데이터 직접 업로드",
        "권한/계정 정보 포함 요청"
      ]
    },
    {
      title: "Image / OCR Models",
      purpose: "이미지, 표, 스크린샷, 문서 화면 이해",
      bestFor: [
        "스크린샷 오류 분석",
        "표 이미지 정리",
        "문서 캡처 내용 추출",
        "UI 화면 설명",
        "교육자료 이미지 해석"
      ],
      avoidFor: [
        "원본 파일이 더 정확한 경우",
        "민감정보가 포함된 화면",
        "해상도가 낮은 이미지",
        "OCR 결과를 검증하지 않는 업무"
      ]
    }
  ],

  matrix: [
    {
      task: "메일 문장 수정",
      recommended: "Fast Model",
      reason: "복잡한 추론보다 빠른 문장 정리가 중요합니다."
    },
    {
      task: "회의록 요약",
      recommended: "Fast Model / Large Context Model",
      reason: "짧은 회의록은 Fast Model, 긴 회의록은 Large Context Model이 적합합니다."
    },
    {
      task: "ERP 오류 원인 분석",
      recommended: "Reasoning Model",
      reason: "업무 로직, 조건, 원인관계를 단계적으로 분석해야 합니다."
    },
    {
      task: "보고서 초안 작성",
      recommended: "Fast Model",
      reason: "초기 구조화는 빠른 모델로 충분한 경우가 많습니다."
    },
    {
      task: "보고서 논리 검토",
      recommended: "Reasoning Model",
      reason: "내용의 흐름, 근거, 누락사항을 점검해야 합니다."
    },
    {
      task: "최종 문장 다듬기",
      recommended: "Creative Model / Fast Model",
      reason: "표현 개선 중심 업무이므로 고비용 추론 모델이 필요하지 않을 수 있습니다."
    },
    {
      task: "긴 정책 문서 검토",
      recommended: "Large Context Model",
      reason: "긴 입력을 유지하고 문서 전체 맥락을 반영해야 합니다."
    },
    {
      task: "Excel 데이터 정리",
      recommended: "Coding / Data Model",
      reason: "반복 처리, 규칙 기반 정리, 자동화 코드 생성에 적합합니다."
    },
    {
      task: "스크린샷 기반 오류 확인",
      recommended: "Image / OCR Model",
      reason: "화면 요소와 오류 메시지를 직접 인식해야 합니다."
    }
  ],

  workflow: [
    {
      step: "1",
      title: "먼저 업무 유형을 판단합니다",
      body: "문장 정리인지, 분석인지, 코딩인지, 긴 문서 검토인지 먼저 구분합니다."
    },
    {
      step: "2",
      title: "가벼운 모델부터 시작합니다",
      body: "단순 정리, 요약, 초안 작성은 Fast Model로 먼저 처리합니다."
    },
    {
      step: "3",
      title: "필요할 때만 상위 모델로 전환합니다",
      body: "논리 검토, 원인 분석, 복잡한 판단이 필요할 때 Reasoning Model로 전환합니다."
    },
    {
      step: "4",
      title: "긴 자료는 Large Context Model을 사용합니다",
      body: "회의록, 정책 문서, 여러 파일 비교처럼 입력량이 큰 경우에만 사용합니다."
    },
    {
      step: "5",
      title: "최종 정리는 다시 가벼운 모델로 처리합니다",
      body: "최종 문장 정리, 형식 정리, 오탈자 수정은 Fast Model로 충분한 경우가 많습니다."
    }
  ],

  mistakes: [
    "모든 업무에 가장 강한 모델을 사용하는 것",
    "단순 문장 수정에 Reasoning Model을 사용하는 것",
    "필요 없는 파일 전체를 업로드하는 것",
    "짧은 요청에도 이전 대화 전체를 계속 유지하는 것",
    "모델별 역할 차이를 구분하지 않는 것",
    "AI 답변을 검증 없이 바로 업무에 반영하는 것",
    "한 번에 완벽한 결과를 요구하며 거대한 프롬프트를 작성하는 것"
  ],

  quickDecisions: [
    {
      question: "빠른 답변이 필요한가요?",
      answer: "Fast Model"
    },
    {
      question: "복잡한 분석이 필요한가요?",
      answer: "Reasoning Model"
    },
    {
      question: "긴 문서나 여러 파일을 다뤄야 하나요?",
      answer: "Large Context Model"
    },
    {
      question: "문장 품질이나 표현력이 중요한가요?",
      answer: "Creative Model"
    },
    {
      question: "Excel, Python, SQL, 데이터 정리가 필요한가요?",
      answer: "Coding / Data Model"
    },
    {
      question: "이미지나 스크린샷을 분석해야 하나요?",
      answer: "Image / OCR Model"
    }
  ]
};