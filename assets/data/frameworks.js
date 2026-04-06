export const FRAMEWORKS = [
  {
    id: "rtf",
    name: "RTF",
    title: "RTF",
    fullName: "Role · Task · Format",
    shortDesc: "역할, 작업, 출력 형식을 명확하게 지정하는 기본 프레임워크",

    difficulty: "easy",
    diffLabel: "⭐ 쉬움",
    category: "기본 구조형",
    tags: ["기초", "구조화", "빠른 작성"],

    useWhen: "AI에게 역할, 작업, 결과 형식을 명확히 요청할 때",
    quickExample: "마케팅 담당자 역할로 이 내용을 보고서 형식으로 정리해줘",

    docPrompt: `[Role] 당신은 10년 경력의 시니어 카피라이터입니다.
                [Task] 20-30대를 타겟으로 한 친환경 텀블러 광고 카피를 작성하세요.
                [Format]
                - 헤드라인: 1줄
                - 서브카피: 2줄
                - 해시태그: 5개`,

    docResult: `헤드라인: 지구를 담은 한 모금
                서브카피: 작은 선택이 지구를 바꿉니다.
                해시태그: #친환경 #제로웨이스트`,

    docCompare: "짧고 구조화된 문서 (이메일, 공지, 요약)에 적합",

    imgPromptEn: "Eco-friendly tumbler on moss rock, soft sunlight, forest background, editorial style",
    imgPromptKo: "숲속 자연광 아래 이끼 위에 놓인 친환경 텀블러 제품 사진",

    imgCompare: "단순 스타일/오브젝트 이미지에 적합",

    imgDesc: "자연광과 감성적인 분위기의 제품 이미지",

    imgData: "./assets/images/frameworks/rtf.webp"
  },

  {
    id: "tag",
    name: "TAG",
    title: "TAG",
    fullName: "Task · Action · Goal",
    shortDesc: "작업, 행동, 목표를 연결하는 목표 지향형 프레임워크",

    difficulty: "easy",
    diffLabel: "⭐ 쉬움",
    category: "목표 지향형",
    tags: ["목표 중심", "실행 지향", "명확한 흐름"],

    useWhen: "무엇을 해야 하는지, 어떻게 할지, 왜 하는지를 함께 전달할 때",
    quickExample: "이 데이터를 분석해서 핵심 인사이트를 도출해줘",

    docPrompt: `[Task] CSV 데이터를 분석하세요
                [Action] pandas 사용, 단계별 설명
                [Goal] 초보자도 이해할 수 있도록 작성`,

    docResult: "단계별 분석과 설명이 포함된 명확한 결과",

    docCompare: "실행 중심 문서, 작업 지시서에 적합",

    imgPromptEn: "Isometric tech illustration with charts and data visualization",
    imgPromptKo: "데이터 분석을 표현하는 아이소메트릭 기술 일러스트",

    imgCompare: "기술/데이터 시각화 이미지에 적합",

    imgDesc: "데이터 흐름과 분석을 표현한 기술 이미지",

    imgData: "./assets/images/frameworks/tag.webp"
  },
  {
    id: "care",
    name: "CARE",
    title: "CARE",
    fullName: "Context · Action · Result · Example",
    shortDesc: "맥락을 충분히 제공하고, 원하는 행동·결과·예시를 함께 주는 프레임워크",

    difficulty: "medium",
    diffLabel: "⭐⭐ 초-중급",
    category: "맥락 결과형",
    tags: ["맥락 강조", "예시 포함", "결과 명확"],

    useWhen: "배경 설명이 중요하고, 원하는 결과 예시까지 함께 전달하고 싶을 때",
    quickExample: "이 프로젝트 상황을 고려해서 보고서를 작성하고, 결과 예시까지 포함해줘",

    docPrompt: `[Context] 저는 현재 중요한 프로젝트의 마감 기한 연장을 요청해야 하는 상황입니다.
                프로젝트는 75% 완료되었고, 예상치 못한 기술적 이슈가 발생했습니다.
                [Action] 상사에게 보내는 정중하고 설득력 있는 이메일을 작성하세요.
                [Result] 상사가 3일 연장을 승인하도록 설득하는 것이 목표입니다.
                [Example] 전문적이고 책임감 있는 어조로, 문제 원인과 해결 계획을 포함하세요.`,

    docResult: `안녕하세요 팀장님, 현재 진행 중인 프로젝트와 관련하여 말씀드릴 사항이 있습니다. 전체 작업은 약 75% 완료되었으나 예상치 못한 기술적 이슈가 발생하여 일정 조정이 필요합니다...`,

    docCompare: "기존 보고서 양식을 유지해야 하거나, 특정 논조를 따라야 하는 전문 문서에 적합합니다.",

    imgPromptEn: "Professional person focused on writing an email on a laptop under warm office lighting. Background is softly blurred bokeh. Photorealistic business photography, shallow depth of field.",
    imgPromptKo: `따뜻한 사무실 조명 아래 노트북 화면에 집중하며 이메일을 작성하는 전문직 인물. 배경은 흐릿한 보케 처리로 인물에 시선이 집중되는 비즈니스 사진.`,

    imgCompare: "참고 이미지나 특정 브랜드 느낌을 반영해야 하는 이미지 생성에 유용합니다.",

    imgDesc: "따뜻한 사무실 조명 아래 노트북에 집중하는 인물. 배경은 흐릿한 보케 처리로 정리된 포토리얼리스틱 비즈니스 이미지.",

    imgData: "./assets/images/frameworks/care.webp"
  },
  {
    id: "risen",
    name: "RISEN",
    title: "RISEN",
    fullName: "Role · Instructions · Steps · End-goal · Narrowing",
    shortDesc: "복잡한 작업을 역할, 지시, 단계, 목표, 범위 제한으로 나누는 프레임워크",

    difficulty: "intermediate",
    diffLabel: "⭐⭐⭐ 중급",
    category: "단계별 실행형",
    tags: ["단계 분리", "복잡 작업", "정밀 제어"],

    useWhen: "복잡한 업무를 단계별로 나누어 정확하게 시키고 싶을 때",
    quickExample: "데이터 분석가 역할로 이 자료를 단계별로 분석하고 핵심만 요약해줘",

    docPrompt: `[Role] 당신은 UX 리서치 전문가입니다.
                [Input] 실제 사용자 인터뷰 발췌록
                [Steps]
                1. 불편함 추출
                2. 카테고리 분류
                3. 우선순위 정렬
                4. 개선 방안 제안
                [Expectation] 핵심 인사이트 3개 + 개선 제안 3개
                [Novelty] 표면적 불만 너머의 숨겨진 니즈를 발굴하세요`,

    docResult: `단계별로 체계적인 UX 분석 보고서가 생성됩니다. 표면적 불만에서 숨겨진 니즈까지 발굴하는 인사이트와 실행 가능한 개선 제안이 포함됩니다.`,

    docCompare: "기술 사양서, 전략 로드맵, 긴 호흡의 분석 문서에 적합합니다.",

    imgPromptEn: "Pastel flat illustration split panel: left side shows a user frowning at a cluttered complex app interface, right side shows the same user smiling at a clean minimal interface. Emotional contrast communicating UX improvement.",
    imgPromptKo: `파스텔 톤의 플랫 일러스트. 좌측은 복잡한 앱 화면과 찌그린 사용자, 우측은 미니멀한 UI와 웃는 사용자. UX 개선 대비를 보여주는 이미지.`,

    imgCompare: "복합적인 구도, 단계적 개선, 비교형 이미지 생성에 유리합니다.",

    imgDesc: "복잡한 UI와 단순한 UI를 좌우 대비로 보여주는 UX 개선 테마의 파스텔 일러스트.",

    imgData: "./assets/images/frameworks/risen.webp"
  },
  {
    id: "co-star",
    name: "CO-STAR",
    title: "CO-STAR",
    fullName: "Context · Objective · Style · Tone · Audience · Response",
    shortDesc: "상황, 목표, 스타일, 톤, 대상, 응답 형식을 모두 명세하는 정밀 프레임워크",

    difficulty: "intermediate",
    diffLabel: "⭐⭐⭐ 중급",
    category: "완전 명세형",
    tags: ["고정밀", "톤 제어", "대상 맞춤"],

    useWhen: "이메일, 보고서, 발표자료의 톤과 스타일을 정교하게 맞추고 싶을 때",
    quickExample: "임원 보고용으로 전문적이고 간결한 톤으로 이 내용을 정리해줘",

    docPrompt: `[Context] 우리 회사는 팀 협업 SaaS 솔루션을 B2B 시장에 새로 출시합니다.
                [Objective] 신규 기능 업데이트를 알리는 뉴스레터 이메일을 작성하세요.
                [Style] 간결하고 전문적인 비즈니스 문체
                [Tone] 따뜻하고 신뢰감 있는 어조
                [Audience] IT 부서 관리자 및 중소기업 대표
                [Response] 이메일 제목 + 본문 200자 이내 + CTA 버튼 문구 1개`,

    docResult: `제목: [업데이트] 팀 생산성을 높이는 새 기능이 출시되었습니다.
                본문: 핵심 기능과 기대 효과를 간결하고 신뢰감 있게 전달하는 뉴스레터 형태로 생성됩니다.`,

    docCompare: "브랜드 가이드라인, 보도자료, 대외 문서처럼 완성도 높은 결과물이 필요할 때 적합합니다.",

    imgPromptEn: "Abstract UI elements and data visualizations floating on a clean blue and white palette. 3D isometric flat design hero banner conveying B2B SaaS professionalism and trustworthiness.",
    imgPromptKo: `파란색과 흰색의 깔끔한 팔레트 위에 떠 있는 추상적 UI 요소와 데이터 시각화. B2B SaaS의 전문성과 신뢰감을 전달하는 3D 아이소메트릭 배너.`,

    imgCompare: "조명, 질감, 구도, 톤까지 세밀하게 조정해야 하는 광고 이미지에 적합합니다.",

    imgDesc: "깔끔한 블루/화이트 톤의 B2B SaaS 스타일 히어로 배너 이미지.",

    imgData: "./assets/images/frameworks/co-star.webp"
  },
  {
    id: "pas",
    name: "PAS",
    title: "PAS",
    fullName: "Problem · Agitate · Solution",
    shortDesc: "문제를 제시하고, 불편을 강조한 뒤, 해결책을 제시하는 설득형 프레임워크",

    difficulty: "easy",
    diffLabel: "⭐ 쉬움",
    category: "감정 설득형",
    tags: ["설득 구조", "감정 자극", "마케팅"],

    useWhen: "문제를 강조하고 해결책을 설득력 있게 제시할 때",
    quickExample: "현재 데이터 누락 문제를 강조하고, 자동화 해결 방안을 제안해줘",

    docPrompt: `[Problem] 밤마다 머릿속에 쌓인 할 일들 때문에 잠을 못 이루는 직장인의 문제를 묘사하세요.
                [Agitate] 이 문제가 계속될 경우 나타나는 부정적 결과를 감정적으로 심화시키세요.
                [Solution] AI 업무 정리 앱을 통해 5분 만에 해결되는 과정을 희망적으로 제시하세요.`,

    docResult: `밤이 되어도 머릿속에서 할 일이 정리되지 않아 쉽게 잠들지 못합니다. 이 상태가 계속되면 피로와 업무 집중 저하로 이어집니다. 하지만 AI 업무 정리 앱을 활용하면 5분 안에 할 일을 정리하고 마음을 비울 수 있습니다.`,

    docCompare: "문제 정의, 고객 pain 강조, 해결책 제시가 필요한 마케팅 문서에 효과적입니다.",

    imgPromptEn: "Split illustration: left panel shows a cold dark chaotic bedroom with stressed person awake, right panel shows the same person peacefully sleeping under warm moonlight. A glowing app screen on the nightstand symbolizes the 5-minute miracle.",
    imgPromptKo: `왼쪽은 어둡고 혼란스러운 침실에서 잠 못 이루는 직장인, 오른쪽은 따뜻한 달빛 아래 평온하게 잠든 같은 인물. 앱 화면이 해결책을 상징하는 감성적 분할 일러스트.`,

    imgCompare: "문제 상황과 해결 이후를 대비하는 광고/전환형 이미지에 적합합니다.",

    imgDesc: "불면과 해결 이후의 평온함을 좌우 분할로 보여주는 감성적 일러스트.",

    imgData: "./assets/images/frameworks/pas.webp"
  },
  {
    id: "ape",
    name: "APE",
    title: "APE",
    fullName: "Action · Purpose · Expectation",
    shortDesc: "수행 행동, 목적, 기대 결과를 명확히 해서 결과 방향을 잡는 프레임워크",

    difficulty: "medium",
    diffLabel: "⭐⭐ 초-중급",
    category: "행동 목적형",
    tags: ["논리 구조", "목적 명확", "분석형"],

    useWhen: "주장과 근거를 논리적으로 설명하거나 목적 중심으로 요청할 때",
    quickExample: "자동화가 필요한 이유를 논리적으로 설명해줘",

    docPrompt: `[Ask] 우리 서비스의 주요 경쟁사 3곳을 비교 분석해주세요.
                [Plan] 가격 정책, 핵심 기능, UX/UI 편의성, 고객 지원 품질 기준으로 비교표 작성
                [Execute] 위 계획에 따라 비교표를 만들고, 각 경쟁사의 강점·약점을 요약하세요.`,

    docResult: `경쟁사 비교 분석표가 생성되며, 각 항목별 평가와 함께 강점·약점 요약이 포함됩니다.`,

    docCompare: "행동 유도와 목적 전달이 중요한 제안서, 설명서, 비교 문서에 적합합니다.",

    imgPromptEn: "Top-down view of a glowing digital chess board. A golden king piece stands taller than the surrounding silver and white pieces, symbolizing competitive advantage. Blue ambient lighting, bokeh background, luxurious and strategic atmosphere.",
    imgPromptKo: `빛나는 디지털 체스판을 위에서 내려다본 구도. 황금색 킹이 나머지 말들보다 높게 솟아 있어 경쟁 우위를 상징하는 고급스러운 전략 이미지.`,

    imgCompare: "전략, 경쟁 우위, 설득 메시지를 담은 비즈니스 이미지에 적합합니다.",

    imgDesc: "디지털 체스판 위 황금 킹을 중심으로 경쟁 우위를 상징하는 전략적 비즈니스 이미지.",

    imgData: "./assets/images/frameworks/ape.webp"
  },
  {
    id: "aida",
    name: "AIDA",
    title: "AIDA",
    fullName: "Attention · Interest · Desire · Action",
    shortDesc: "관심을 끌고, 흥미와 욕구를 높인 뒤, 행동으로 연결하는 대표적인 마케팅 설득 프레임워크",

    difficulty: "easy",
    diffLabel: "⭐ 쉬움",
    category: "설득 전환형",
    tags: ["마케팅", "관심 유도", "전환 구조"],

    useWhen: "상대의 관심을 끌고 행동을 유도하는 문구나 제안이 필요할 때",
    quickExample: "AI 도입의 필요성을 강조하고 참여를 유도하는 메시지를 만들어줘",

    docPrompt: `[Attention] 직원들이 바로 관심을 가질 수 있도록 문제 상황을 짧고 강하게 제시하세요.
                [Interest] AI 도입이 왜 중요한지 구체적인 상황과 함께 설명하세요.
                [Desire] 도입 시 얻을 수 있는 실질적인 이점과 변화 효과를 강조하세요.
                [Action] 파일럿 참여 또는 도입 검토를 유도하는 문장으로 마무리하세요.`,

    docResult: `반복 업무로 낭비되는 시간을 줄이고 생산성을 높일 수 있다는 점을 강조한 뒤, 실제 활용 사례로 흥미를 높이고 마지막에 참여를 유도하는 설득형 메시지가 생성됩니다.`,

    docCompare: "마케팅 카피, 제안서, 공지, 캠페인 메시지처럼 행동 유도가 필요한 문서에 적합합니다.",

    imgPromptEn: "Modern marketing campaign poster with strong headline, engaging visuals, emotional appeal, and clear call-to-action button. Clean corporate style.",
    imgPromptKo: `강한 헤드라인과 시선을 끄는 중심 비주얼, 감정적 설득 요소, 명확한 행동 유도 버튼이 포함된 현대적 마케팅 포스터.`,

    imgCompare: "광고 배너, 캠페인, 랜딩페이지 비주얼처럼 전환율이 중요한 이미지에 적합합니다.",

    imgDesc: "관심 유도 → 흥미 → 욕구 → 행동으로 이어지는 설득 흐름이 반영된 마케팅형 이미지.",

    imgData: "./assets/images/frameworks/aida.webp"
  },
  {
    id: "bab",
    name: "BAB",
    title: "BAB",
    fullName: "Before · After · Bridge",
    shortDesc: "현재 상태와 원하는 미래 상태를 대비시키고, 그 사이를 연결하는 해결책을 제시하는 프레임워크",

    difficulty: "easy",
    diffLabel: "⭐ 쉬움",
    category: "변화 제시형",
    tags: ["문제 해결", "전후 비교", "설득형"],

    useWhen: "현재 문제 상태와 개선 후 기대 상태를 비교해 설명하고 싶을 때",
    quickExample: "현재 비효율적인 업무 방식과 자동화 이후의 개선 상태를 비교해서 정리해줘",

    docPrompt: `[Before] 현재는 여러 부서가 수작업으로 데이터를 정리하고 있어 보고 지연과 오류가 자주 발생합니다.
                [After] 자동화된 대시보드와 표준화된 입력 구조로 실시간 확인이 가능한 상태를 설명하세요.
                [Bridge] 이 변화를 만들기 위해 필요한 시스템 개선안을 3단계로 정리하세요.`,

    docResult: `현재의 비효율과 향후 개선된 운영 상태가 명확히 대비되며, 그 차이를 줄이기 위한 실행 방안이 단계적으로 제시된 문서가 생성됩니다.`,

    docCompare: "개선 제안서, 변화관리 문서, 시스템 도입 설명 자료처럼 전환의 필요성을 보여줘야 하는 문서에 적합합니다.",

    imgPromptEn: "Split-screen business illustration. Left side shows messy paperwork, spreadsheets, and stressed office workers. Right side shows clean dashboards, automated workflows, and calm employees. Bright professional corporate style.",
    imgPromptKo: `왼쪽은 종이 문서와 수작업 보고로 혼란스러운 사무 환경, 오른쪽은 대시보드와 자동화 프로세스로 정돈된 업무 환경을 보여주는 분할형 비즈니스 일러스트.`,

    imgCompare: "Before/After 대비 구성이 필요한 프로세스 개선, 업무 혁신, 시스템 도입 홍보 이미지에 효과적입니다.",

    imgDesc: "수작업 중심의 혼란스러운 업무 환경과 자동화 이후 정돈된 업무 환경을 좌우 대비로 보여주는 기업형 일러스트.",

    imgData: "./assets/images/frameworks/bab.webp"
  },
  {
    id: "star",
    name: "STAR",
    title: "STAR",
    fullName: "Situation · Task · Action · Result",
    shortDesc: "상황, 과제, 행동, 결과 순서로 경험이나 사례를 구조화하는 프레임워크",

    difficulty: "easy",
    diffLabel: "⭐ 쉬움",
    category: "사례 구조형",
    tags: ["경험 정리", "면접", "스토리"],

    useWhen: "경험, 사례, 성과를 논리적으로 설명하거나 면접/보고용으로 정리할 때",
    quickExample: "이 프로젝트 경험을 STAR 방식으로 정리해줘",

    docPrompt: `[Situation] 프로젝트 또는 업무 상황을 간단히 설명하세요.
                [Task] 맡은 역할이나 해결해야 했던 과제를 정리하세요.
                [Action] 실제로 어떤 행동을 했는지 구체적으로 작성하세요.
                [Result] 그 결과 어떤 성과나 변화가 있었는지 정리하세요.`,

    docResult: `상황-과제-행동-결과 흐름이 분명한 사례 정리 문서가 생성되며, 설명의 논리성과 전달력이 높아집니다.`,

    docCompare: "성과 보고, 사례 소개, 면접 답변, 프로젝트 회고처럼 경험을 구조적으로 설명해야 할 때 적합합니다.",

    imgPromptEn: "Professional presentation slide visual showing four connected steps: situation, task, action, result. Clean business infographic style with blue accents.",
    imgPromptKo: `Situation, Task, Action, Result 네 단계가 연결된 기업형 인포그래픽. 파란색 포인트와 깔끔한 발표자료 스타일.`,

    imgCompare: "업무 사례, 성과 흐름, 프로세스 설명형 인포그래픽 이미지에 적합합니다.",

    imgDesc: "상황에서 결과까지 흐름이 한눈에 보이는 기업형 4단계 인포그래픽 이미지.",

    imgData: "./assets/images/frameworks/star.webp"
  },
  {
    id: "grow",
    name: "GROW",
    title: "GROW",
    fullName: "Goal · Reality · Options · Way Forward",
    shortDesc: "목표를 세우고, 현재 상태를 진단한 뒤, 가능한 선택지와 실행 방향을 정리하는 프레임워크",

    difficulty: "medium",
    diffLabel: "⭐⭐ 초-중급",
    category: "코칭 계획형",
    tags: ["코칭", "목표 설정", "문제 해결"],

    useWhen: "문제 해결이나 목표 달성을 위해 현황 진단과 실행 방향을 함께 정리하고 싶을 때",
    quickExample: "AI 파일럿 도입 목표를 기준으로 현재 상황, 선택지, 실행안을 정리해줘",

    docPrompt: `[Goal] 달성하고자 하는 목표를 명확히 정의하세요.
                [Reality] 현재 상황과 제약 조건을 객관적으로 정리하세요.
                [Options] 가능한 대안이나 선택지를 2~3개 제시하세요.
                [Way Forward] 가장 현실적인 실행 방향과 다음 단계를 정리하세요.`,

    docResult: `목표-현실-선택지-실행 방향의 흐름으로 정리된 계획 문서가 생성되며, 논의와 의사결정이 쉬워집니다.`,

    docCompare: "목표 설정, 코칭, 계획 수립, 실행안 정리 문서에 적합합니다.",

    imgPromptEn: "Strategic roadmap visual with four stages: goal, reality, options, way forward. Clean business planning board with arrows and milestone markers.",
    imgPromptKo: `Goal, Reality, Options, Way Forward 네 단계를 따라가는 전략 로드맵 보드. 화살표와 마일스톤이 포함된 깔끔한 기업형 계획 이미지.`,

    imgCompare: "전략 로드맵, 계획 수립, 목표 달성 프로세스를 표현하는 이미지에 적합합니다.",

    imgDesc: "목표에서 실행 방향까지 이어지는 전략 로드맵을 보여주는 비즈니스 계획형 이미지.",

    imgData: "./assets/images/frameworks/grow.webp"
  },
  {
    id: "prep",
    name: "PREP",
    title: "PREP",
    fullName: "Point · Reason · Example · Point",
    shortDesc: "핵심 주장과 이유, 예시를 통해 메시지를 명확하고 설득력 있게 전달하는 프레임워크",

    difficulty: "easy",
    diffLabel: "⭐ 쉬움",
    category: "논리 전달형",
    tags: ["의견 전달", "논리 구조", "간결"],

    useWhen: "의견, 주장, 제안 사항을 짧고 설득력 있게 정리하고 싶을 때",
    quickExample: "왜 AI 도입이 필요한지 PREP 방식으로 정리해줘",

    docPrompt: `[Point] 핵심 주장이나 결론을 먼저 제시하세요.
                [Reason] 왜 그렇게 말하는지 이유를 설명하세요.
                [Example] 구체적인 사례나 예시를 하나 제시하세요.
                [Point] 마지막에 핵심 메시지를 다시 한 번 강조하세요.`,

    docResult: `주장-이유-예시-재강조의 흐름이 분명한 설명 문장이 생성되어 설득력과 전달력이 높아집니다.`,

    docCompare: "보고, 발표, 의견 정리, 제안 요약처럼 짧고 강한 전달이 필요한 문서에 적합합니다.",

    imgPromptEn: "Minimal presentation graphic highlighting one central point, supporting reason, one example block, and final emphasized conclusion. Clean executive slide style.",
    imgPromptKo: `중앙 핵심 주장, 근거 블록, 예시 블록, 마지막 결론 강조가 보이는 미니멀한 임원 보고용 슬라이드 스타일 그래픽.`,

    imgCompare: "핵심 메시지 전달, 발표자료, 논리 구조 시각화 이미지에 적합합니다.",

    imgDesc: "핵심 주장과 근거, 예시, 결론이 구조적으로 배치된 미니멀 발표자료형 이미지.",

    imgData: "./assets/images/frameworks/prep.webp"
  },
  {
    id: "crispe",
    name: "CRISPE",
    title: "CRISPE",
    fullName: "Capacity · Role · Insight · Statement · Personality · Experiment",
    shortDesc: "AI의 역할과 관점, 표현 톤, 실험적 접근까지 함께 지정해 정교한 결과를 유도하는 프레임워크",

    difficulty: "advanced",
    diffLabel: "⭐⭐⭐⭐ 고급",
    category: "고도화 지시형",
    tags: ["고급 제어", "전문 작업", "정밀 지시"],

    useWhen: "역할, 관점, 표현 방식까지 정밀하게 제어하면서 더 창의적이거나 정교한 답변을 원할 때",
    quickExample: "전문가 역할과 통찰, 말투까지 반영해서 제안서를 작성해줘",

    docPrompt: `[Capacity] AI가 어떤 능력을 발휘해야 하는지 정의하세요.
                [Role] 어떤 역할로 답해야 하는지 지정하세요.
                [Insight] 어떤 관점이나 통찰을 반영해야 하는지 제시하세요.
                [Statement] 원하는 출력 형태나 핵심 메시지를 명확히 하세요.
                [Personality] 톤이나 말투, 스타일을 지정하세요.
                [Experiment] 기존과 다른 접근이나 창의적 시도를 요구하세요.`,

    docResult: `역할, 통찰, 표현 방식, 실험적 접근이 반영된 보다 정교하고 차별화된 결과물이 생성됩니다.`,

    docCompare: "전략 제안, 창의적 기획, 고급 문서 작성처럼 결과물의 깊이와 차별성이 중요한 작업에 적합합니다.",

    imgPromptEn: "Futuristic creative strategy board with layered notes representing role, insight, tone, and experimentation. Premium consulting presentation aesthetic.",
    imgPromptKo: `역할, 통찰, 톤, 실험적 접근 요소가 레이어처럼 배치된 미래형 전략 보드. 프리미엄 컨설팅 발표자료 감성의 이미지.`,

    imgCompare: "전략, 통찰, 창의적 기획, 실험적 접근을 상징하는 프리미엄 비주얼에 적합합니다.",

    imgDesc: "역할과 통찰, 표현 톤, 실험적 요소가 층위 있게 표현된 고급 전략형 이미지.",

    imgData: "./assets/images/frameworks/crispe.webp"
  },
  {
    id: "trace",
    name: "TRACE",
    title: "TRACE",
    fullName: "Task · Request · Action · Context · Example",
    shortDesc: "작업과 요청을 구체화하고, 행동·상황·예시까지 함께 주어 결과 품질을 높이는 프레임워크",

    difficulty: "intermediate",
    diffLabel: "⭐⭐⭐ 중급",
    category: "요청 구체화형",
    tags: ["분석 추적", "근거 중심", "검증"],

    useWhen: "세부 요청 조건과 예시를 함께 줘야 원하는 결과가 나올 때",
    quickExample: "이 보고서를 아래 예시 스타일처럼 정리해줘",

    docPrompt: `[Task] 프로젝트 주간보고 초안을 작성하세요.
                [Request] 일정, 이슈, 다음 액션을 포함한 1페이지 요약 형식으로 정리하세요.
                [Action] 항목별로 짧고 명확하게 정리하고, 우선순위가 보이게 구성하세요.
                [Context] 임원과 팀장이 함께 보는 주간회의 자료입니다.
                [Example] 기존 보고서처럼 핵심 이슈를 먼저 보여주고, 후속 계획은 마지막에 배치하세요.`,

    docResult: `예시 구조를 반영한 주간보고 초안이 생성되며, 항목 배치와 우선순위가 명확한 결과물이 나옵니다.`,

    docCompare: "기존 문서 형식을 따라야 하는 보고서, 회의자료, 상신 문서 작성에 유리합니다.",

    imgPromptEn: "Modern corporate poster design with structured layout, clear hierarchy, soft blue and purple tones, polished executive presentation style, clean typography-inspired composition.",
    imgPromptKo: `기존 기업 보고서 스타일을 참고한 정돈된 레이아웃의 포스터형 이미지. 파란색과 보라색 계열의 세련된 톤, 명확한 정보 계층 구조, 임원 보고용 분위기.`,

    imgCompare: "레퍼런스 느낌을 살리면서 새로운 구성으로 재해석해야 하는 포스터, 배너, 키비주얼 생성에 적합합니다.",

    imgDesc: "기존 스타일을 참고해 정돈된 구성과 정보 계층을 살린 기업형 포스터/배너 이미지.",

    imgData: "./assets/images/frameworks/trace.webp"
  }
];