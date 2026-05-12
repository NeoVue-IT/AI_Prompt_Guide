export const costOptimization = {
  eyebrow: "웍스AI Guide",
  title: "Cost Optimization",
  description:
    "회사 AI 사용 비용을 관리하기 위한 운영 기준입니다. 비용 최적화는 사용을 제한하는 것이 아니라, 업무 가치가 높은 곳에 AI 사용량을 집중시키는 방식입니다.",

  coreMessage: {
    title: "핵심 원칙",
    body: "AI 비용 관리는 무조건 적게 쓰는 것이 아니라, 단순 업무는 가볍게 처리하고 고부가가치 업무에 고성능 모델을 집중하는 것입니다."
  },

  principles: [
    {
      title: "업무 가치 기준으로 사용",
      body: "단순 문장 정리보다 반복 업무 자동화, 분석, 보고서 표준화처럼 업무 절감 효과가 큰 곳에 우선 사용합니다."
    },
    {
      title: "모델 등급을 구분",
      body: "Fast Model, Reasoning Model, Large Context Model을 업무 난이도에 맞게 구분하여 사용합니다."
    },
    {
      title: "반복 업무는 템플릿화",
      body: "매번 새로 요청하는 대신 표준 프롬프트, Workflow Chain, Agent로 만들어 재사용합니다."
    },
    {
      title: "사용량 낭비를 줄임",
      body: "불필요한 파일 업로드, 긴 대화 유지, 반복 입력, 과도한 재요청을 줄입니다."
    }
  ],

  costDrivers: [
    {
      driver: "고성능 모델 과다 사용",
      impact: "단순 업무에도 높은 비용 발생",
      control: "업무 난이도별 모델 선택 기준 적용"
    },
    {
      driver: "긴 파일 전체 업로드",
      impact: "입력 토큰 급증",
      control: "필요 페이지, 필요한 표, 핵심 요약본만 사용"
    },
    {
      driver: "반복 프롬프트 재작성",
      impact: "동일 조건 반복 입력으로 토큰 누적",
      control: "템플릿 또는 Agent로 전환"
    },
    {
      driver: "긴 대화 계속 유지",
      impact: "맥락 유지 비용 증가",
      control: "중간 요약 후 새 대화로 전환"
    },
    {
      driver: "출력 형식 미지정",
      impact: "재요청과 수정 요청 증가",
      control: "처음부터 출력 형식 명확화"
    }
  ],

  usageTiers: [
    {
      tier: "Low-Cost Usage",
      modelType: "Fast Model",
      tasks: [
        "메일 문장 정리",
        "간단한 번역",
        "짧은 요약",
        "형식 변환",
        "오탈자 수정"
      ],
      rule: "빠르고 반복적인 단순 업무에 사용"
    },
    {
      tier: "Standard Usage",
      modelType: "Fast Model / Creative Model",
      tasks: [
        "보고서 초안",
        "공지문 작성",
        "회의록 정리",
        "교육자료 초안",
        "사용자 안내문"
      ],
      rule: "일반 업무 산출물 작성에 사용"
    },
    {
      tier: "High-Value Usage",
      modelType: "Reasoning Model",
      tasks: [
        "장애 원인 분석",
        "업무 프로세스 설계",
        "리스크 검토",
        "ERP/SP 로직 분석",
        "복잡한 의사결정 지원"
      ],
      rule: "논리적 판단과 분석 가치가 큰 업무에 제한적으로 사용"
    },
    {
      tier: "Large-Input Usage",
      modelType: "Large Context Model",
      tasks: [
        "긴 회의록 분석",
        "여러 문서 비교",
        "매뉴얼 검토",
        "정책 문서 분석",
        "대량 자료 기반 보고"
      ],
      rule: "입력량이 큰 업무에만 사용하고, 가능하면 먼저 요약본을 생성"
    }
  ],

  optimizationWorkflow: [
    {
      step: "1",
      title: "업무 가치를 판단합니다",
      body: "해당 AI 사용이 시간 절감, 오류 감소, 반복 업무 감소, 보고 품질 향상에 기여하는지 확인합니다."
    },
    {
      step: "2",
      title: "모델 등급을 선택합니다",
      body: "단순 업무는 Fast Model, 복잡한 분석은 Reasoning Model, 긴 자료는 Large Context Model을 선택합니다."
    },
    {
      step: "3",
      title: "입력 자료를 줄입니다",
      body: "전체 자료를 넣기보다 필요한 내용만 추출하거나 요약해서 사용합니다."
    },
    {
      step: "4",
      title: "반복 업무는 재사용 구조로 만듭니다",
      body: "자주 쓰는 요청은 템플릿, Workflow Chain, Agent로 전환합니다."
    },
    {
      step: "5",
      title: "결과 품질을 검토합니다",
      body: "재요청이 반복되는 업무는 프롬프트, 출력 형식, 모델 선택 기준을 수정합니다."
    }
  ],

  governanceRules: [
    {
      rule: "단순 업무는 저비용 모델 우선",
      detail: "메일 수정, 단순 요약, 형식 정리는 Fast Model을 기본으로 사용합니다."
    },
    {
      rule: "Reasoning Model은 분석 업무 중심",
      detail: "원인 분석, 비교 판단, 리스크 검토처럼 고부가가치 업무에 사용합니다."
    },
    {
      rule: "긴 자료는 먼저 요약",
      detail: "긴 문서를 계속 입력하지 말고 핵심 요약본을 만들어 재사용합니다."
    },
    {
      rule: "반복 업무는 Agent 전환",
      detail: "동일한 형태의 보고, 정리, 메일 작성은 Agent로 만들어 사용량과 품질을 안정화합니다."
    },
    {
      rule: "부서별 사용 기준 수립",
      detail: "IT, 생산, 품질, 영업, R&D별 사용 목적과 제한 기준을 다르게 설정합니다."
    }
  ],

  costWasteExamples: [
    {
      title: "메일 문장 수정",
      bad: "Reasoning Model로 짧은 메일 문장을 반복 수정",
      good: "Fast Model로 문장 정리 후 담당자가 최종 확인"
    },
    {
      title: "회의록 정리",
      bad: "긴 회의록 전체를 매번 넣고 보고서 작성 요청",
      good: "1차 요약본 생성 후 요약본 기준으로 보고서 작성"
    },
    {
      title: "보고서 작성",
      bad: "목적 없이 긴 자료를 넣고 완성본 요청",
      good: "목차 생성 → 필요한 자료만 입력 → 초안 작성 → 검토 단계로 분리"
    },
    {
      title: "반복 업무보고",
      bad: "매번 같은 출력 형식을 설명",
      good: "IT Report Assistant 같은 Agent로 고정 형식 사용"
    }
  ],

  promptPatterns: [
    {
      title: "비용 효율형 모델 선택 요청",
      prompt:
        "아래 업무를 처리할 때 가장 비용 효율적인 모델 유형을 추천해줘. Fast Model, Reasoning Model, Large Context Model 중에서 선택하고 이유를 설명해줘."
    },
    {
      title: "토큰 절약형 작업 분리",
      prompt:
        "아래 업무를 한 번에 처리하지 말고 비용을 줄일 수 있도록 단계별 작업으로 나눠줘. 각 단계별 추천 모델 유형도 함께 작성해줘."
    },
    {
      title: "반복 업무 Agent 전환 검토",
      prompt:
        "아래 반복 업무를 Agent로 전환할 가치가 있는지 검토해줘. 반복 빈도, 입력값, 출력 형식, 예상 절감 효과 기준으로 정리해줘."
    }
  ],

  mistakes: [
    "비용 절감을 이유로 모든 AI 사용을 제한하는 것",
    "업무 난이도와 관계없이 고성능 모델만 사용하는 것",
    "긴 자료를 매번 전체 입력하는 것",
    "반복 업무를 Agent나 템플릿으로 만들지 않는 것",
    "출력 형식을 지정하지 않아 재요청을 반복하는 것",
    "부서별 업무 가치 차이를 고려하지 않는 것"
  ],

  quickRules: [
    {
      rule: "단순 업무는 Fast Model",
      detail: "문장 정리, 짧은 요약, 형식 변환은 저비용 모델을 우선 사용합니다."
    },
    {
      rule: "분석 업무만 Reasoning Model",
      detail: "복잡한 판단이 필요한 경우에만 고성능 모델을 사용합니다."
    },
    {
      rule: "긴 자료는 요약 후 사용",
      detail: "대량 입력을 반복하지 않도록 핵심 요약본을 재사용합니다."
    },
    {
      rule: "반복 업무는 Agent화",
      detail: "사용량이 많은 반복 업무는 Agent로 표준화하는 것이 효율적입니다."
    }
  ]
};