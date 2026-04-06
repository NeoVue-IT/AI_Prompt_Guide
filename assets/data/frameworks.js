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
  }
  ,
{
  id: "care",
  name: "CARE",
  title: "CARE",
  fullName: "Context · Action · Result · Example",
  shortDesc: "맥락을 충분히 제공하고, 원하는 행동·결과·예시를 함께 주는 프레임워크",

  difficulty: "medium",
  diffLabel: "⭐⭐ 초-중급",
  category: "맥락 결과형",

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
}
];