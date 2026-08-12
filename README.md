# 연구소장 R&D 관제 대시보드

철도 연구소 R&D 전 과정을 계층적으로 모니터링하는 Enterprise 관제 시스템입니다.

**설계 철학: More Insight, Less Information**

---

## 프로젝트 현황

| 항목 | 내용 |
|---|---|
| 구현 단계 | Phase 1 (더미 데이터 프로토타입) |
| 데이터 연동 | MSW Mock API (더미 JSON) |
| 실제 API 연동 | 미구현 (Phase 2 예정) |
| 배포 상태 | 로컬 개발 서버 (`localhost:5173`) |

---

## 화면 구성

| 경로 | 페이지 | 설명 |
|---|---|---|
| `/` | 개요 대시보드 | Executive KPI + 프로젝트 요약 + 리스크 + 트렌드 + AI Insight |
| `/projects` | 프로젝트 현황 | Gantt 스타일 진행률 + 테이블 + 월별 차트 |
| `/issues` | 이슈 & 리스크 | Critical/High/Medium/Low 위험 목록 + AI Insight |
| `/analytics` | 트렌드 분석 | Area Chart 시계열 + 예측 알림 |
| `/domain/:tab` | 도메인 상세 | 10개 영역 탭 전환 (기술동향/요구사항/설계/시험/RAMS/IP 등) |
| `/reports` | 보고서 | 보고서 목록 카드 |

### 레이아웃 구조

```
┌──────────────────────────────────────────────────────────┐
│ Sidebar (220px, 네이비)  │  TopBar (헤더 + 필터 + 알림)  │
│                          ├──────────────────────────────  │
│  R&D HUB                 │  Content Area (스크롤)        │
│  ▣ 대시보드 개요          │                               │
│  R&D                     │  ① Executive KPI 6개 카드     │
│    기술동향               │  ② 요약 카드 3개               │
│    요구사항               │  ③ 프로젝트 포트폴리오         │
│    설계/개발              │  ④ 핵심 리스크                 │
│    시험/검증              │  ⑤ 트렌드 차트                 │
│  Quality                 │  ⑥ AI Insight                 │
│    RAMS/SIL              │  ⑦ 최근 활동 피드              │
│    형상관리               │                               │
│    현장 장애              │                               │
│  Management              │                               │
│    프로젝트               │                               │
│    특허/IP               │                               │
│    차세대 R&D             │                               │
│  Analytics               │                               │
│    이슈 & 리스크          │                               │
│    트렌드 분석            │                               │
│  Reports                 │                               │
│    보고서                 │                               │
└──────────────────────────┴───────────────────────────────┘
```

### 정보 계층 구조

```
대시보드 개요 (Executive)
    ↓
도메인 대시보드 (Domain)
    ↓
상세 분석 (Detailed Analysis)
    ↓
원시 데이터 / Traceability
```

---

## 기술스택

| 구분 | 버전 | 역할 |
|---|---|---|
| React | 19.x | UI 컴포넌트 |
| TypeScript | 6.x | 타입 안전성 |
| Vite | 8.x | 번들러/개발 서버 |
| React Router | 7.x | 다중 페이지 라우팅 |
| Tailwind CSS | 4.x | 유틸리티 스타일 |
| Recharts | 3.x | 차트 시각화 (Area/Line/Bar/Donut) |
| TanStack Query | 5.x | 서버 상태·캐시 |
| Zustand | 5.x | 전역 필터 상태 |
| MSW | 2.x | API 모킹 |

---

## 폴더 구조

```
src/
├── index.html
├── vite.config.ts
└── src/
    ├── main.tsx                        # 앱 진입점 (MSW 초기화)
    ├── index.css                       # 글로벌 스타일 & 디자인 토큰
    ├── app/
    │   ├── App.tsx                     # 루트 컴포넌트 + React Router
    │   └── providers.tsx               # TanStack Query 프로바이더
    ├── pages/
    │   ├── OverviewPage.tsx            # 개요 대시보드
    │   ├── ProjectsPage.tsx            # 프로젝트 현황
    │   ├── IssuesPage.tsx              # 이슈 & 리스크
    │   ├── AnalyticsPage.tsx           # 트렌드 분석
    │   ├── DomainPage.tsx              # 도메인 탭 상세
    │   └── ReportsPage.tsx             # 보고서
    ├── components/
    │   ├── layout/
    │   │   ├── Sidebar.tsx             # 좌측 고정 네비게이션
    │   │   └── TopBar.tsx              # 상단 헤더 + 필터 + 알림
    │   ├── charts/
    │   │   ├── TrendLineChart.tsx
    │   │   ├── StatusDonutChart.tsx
    │   │   └── ProgressBarChart.tsx
    │   ├── AlertDrawer.tsx             # 우측 알림 드로어
    │   └── ui/SkeletonCard.tsx
    ├── features/
    │   ├── dashboard/
    │   │   ├── types.ts
    │   │   ├── api/dashboardApi.ts     # ★ API 교체 시 이 파일만 수정
    │   │   ├── hooks/useDashboard.ts
    │   │   └── components/
    │   │       ├── ExecutiveKpiBar.tsx      # 상단 6개 KPI 카드
    │   │       ├── OverviewSummaryCards.tsx # 3개 요약 카드
    │   │       ├── ProjectPortfolio.tsx     # 프로젝트 진행 바
    │   │       ├── RiskPanel.tsx            # 리스크 목록
    │   │       ├── TrendAnalyticsPanel.tsx  # 트렌드 Area 차트
    │   │       ├── AiInsightPanel.tsx       # AI Insight + 예측
    │   │       └── ActivityFeed.tsx         # 최근 활동 피드
    │   └── filters/filterStore.ts      # Zustand 필터 상태
    └── mocks/
        ├── browser.ts
        ├── handlers.ts
        └── data/dashboard.ts           # 철도 R&D 더미 데이터
```

---

## 📦 배포 및 소스 코드 관리

본 프로젝트의 소스 코드는 GitHub에서 안전하게 버전 관리되고 있으며, Vercel을 통해 자동 배포(CI/CD)되도록 구성할 수 있습니다.

### 소스 코드 저장소 (GitHub)
- **저장소 주소**: [https://github.com/kyuyounglee/CTC_AUTO](https://github.com/kyuyounglee/CTC_AUTO)
- **브랜치 관리**: `main` 브랜치를 기준으로 안정적인 배포 버전을 관리합니다.
- **접근 권한**: 저장소 소유자(`kyuyounglee`) 및 권한이 부여된 협업자만 코드 푸시(Push)가 가능합니다. GitHub의 보안 정책에 따라 Personal Access Token(PAT)을 사용하여 인증해야 합니다.

### Vercel을 통한 자동 배포 (CI/CD) 설정 방법
코드 변경 사항을 GitHub에 푸시하면 Vercel을 통해 인터넷에 자동으로 사이트가 업데이트(배포)되도록 연동할 수 있습니다.

1. **Vercel 프로젝트 연동**: [Vercel.com](https://vercel.com)에 로그인 후, `Add New > Project`에서 GitHub의 `CTC_AUTO` 저장소를 Import 합니다.
2. **루트 디렉터리 설정 (중요 ⭐️)**: 실제 소스 코드가 최상위 폴더가 아닌 `src/` 하위에 위치하므로, 프로젝트 설정에서 **Root Directory를 `src`로 지정**해야 정상적으로 빌드됩니다. (Framework Preset은 `Vite`로 자동 인식됩니다.)
3. **SPA 라우팅 지원**: 배포 후 URL 새로고침 시 발생하는 404 에러를 방지하기 위해 `src/vercel.json` 파일이 이미 구성되어 배포에 적용됩니다.

---

## 실행 방법

### 사전 요구사항

- Node.js 18 이상 (v24 권장)
- npm 10 이상

> 개발 환경: `conda activate pdf2md` (시스템 Node.js 사용)

### 설치 및 실행

```bash
# 1. 프로젝트 폴더 이동
cd 업무자동화구현/src

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

브라우저에서 **http://localhost:5173/** 접속

### 빌드 (배포용)

```bash
npm run build
npm run preview
```

---

## 모의 API 엔드포인트

| Method | Endpoint | 설명 |
|---|---|---|
| `GET` | `/api/dashboard` | 전체 대시보드 데이터 (필터 적용) |
| `GET` | `/api/panels/:panelId` | 패널 상세 데이터 |
| `GET` | `/api/projects` | 프로젝트 선택 목록 |
| `GET` | `/api/alerts` | 리스크·알림 목록 |

---

## 실제 API로 교체하는 방법

### 1단계: MSW 비활성화

`src/main.tsx` 에서 MSW 초기화 블록을 제거합니다.

### 2단계: API URL 수정

`src/features/dashboard/api/dashboardApi.ts` 의 `BASE_URL` 변경:

```ts
const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://your-fastapi-server/api';
```

### 3단계: 응답 스키마 검증

`src/features/dashboard/types.ts` 와 실제 API 응답 스키마가 일치하는지 확인합니다.

---

## 향후 확장 로드맵

```
Phase 1 (현재) → MSW 더미 프로토타입
Phase 2        → FastAPI REST API 연결
Phase 3        → WebSocket 실시간 업데이트
Phase 4        → Jira, Git/PLM, 시험장비 연동
Phase 5        → LangGraph/LLM AI 분석 통합
Phase 6        → 로그인/역할 기반 접근 제어
```

---

## 설계 참고 문서

- [연구소_R&D_대시보드_웹_설계_및_개발프롬프트.md](./연구소_R&D_대시보드_웹_설계_및_개발프롬프트.md)
- [산업용_RD_대시보드_UI_UX_프롬프트.md](./산업용_RD_대시보드_UI_UX_프롬프트.md)
