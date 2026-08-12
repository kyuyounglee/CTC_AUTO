// ============================================================
// 연구소 R&D 관제 대시보드 - 철도 R&D 더미 데이터
// ============================================================

import type { DashboardResponse, PanelDetailResponse, ProjectOption } from '../../features/dashboard/types';

export const DUMMY_PROJECTS: ProjectOption[] = [
  { id: 'all', name: '전체 프로젝트', status: 'active' },
  { id: 'P001', name: 'ETCS L2 고속선 개발', status: 'active' },
  { id: 'P002', name: '차세대 신호시스템', status: 'active' },
  { id: 'P003', name: 'ATP 소프트웨어 개선', status: 'delayed' },
  { id: 'P004', name: '통합관제 시스템', status: 'completed' },
];

export const DUMMY_DASHBOARD: DashboardResponse = {
  updatedAt: new Date().toISOString(),
  summary: {
    overallHealth: 82,
    openRisks: 3,
    activeProjects: 7,
    testPassRate: 92,
  },
  alerts: [
    {
      id: 'A001',
      severity: 'high',
      title: 'ETCS L2 SIL 충족 미달 - 안전 케이스 보완 필요',
      owner: '김안전',
      createdAt: '2025-08-10',
      panelId: 'rams-sil',
    },
    {
      id: 'A002',
      severity: 'high',
      title: 'ATP SW 인터페이스 요구사항 변경 미반영',
      owner: '이요구',
      createdAt: '2025-08-08',
      panelId: 'requirements',
    },
    {
      id: 'A003',
      severity: 'medium',
      title: '현장 신호기 점등 불량 3건 미처리',
      owner: '박현장',
      createdAt: '2025-08-11',
      panelId: 'field-failure',
    },
  ],
  panels: [
    // ① 기술동향
    {
      id: 'tech-trend',
      panelNumber: 1,
      title: '기술동향',
      subtitle: '규격·논문·특허 모니터링',
      status: 'healthy',
      primaryValue: '62',
      primaryUnit: '건',
      change: { value: 8, direction: 'up', label: '전월 대비' },
      chart: {
        type: 'line',
        data: [
          { month: '3월', 규격: 8, 논문: 22, 특허: 11 },
          { month: '4월', 규격: 9, 논문: 25, 특허: 13 },
          { month: '5월', 규격: 10, 논문: 28, 특허: 15 },
          { month: '6월', 규격: 11, 논문: 30, 특허: 16 },
          { month: '7월', 규격: 12, 논문: 32, 특허: 18 },
          { month: '8월', 규격: 12, 논문: 34, 특허: 18 },
        ],
        keys: ['규격', '논문', '특허'],
        colors: ['#0891b2', '#06b6d4', '#0e7490'],
      },
      kpis: [
        { label: '신규 규격', value: '12건', status: 'neutral' },
        { label: '논문', value: '32건', status: 'neutral' },
        { label: '특허', value: '18건', status: 'neutral' },
      ],
      actionLabel: '상세 보기',
    },

    // ② 요구사항
    {
      id: 'requirements',
      panelNumber: 2,
      title: '요구사항 현황',
      subtitle: '추적성·변경 관리',
      status: 'warning',
      primaryValue: '78%',
      change: { value: 3, direction: 'up', label: '추적성' },
      chart: {
        type: 'donut',
        data: [
          { name: '추적완료', value: 78, fill: '#0891b2' },
          { name: '미추적', value: 14, fill: '#f59e0b' },
          { name: '변경대기', value: 8, fill: '#ef4444' },
        ],
        colors: ['#0891b2', '#f59e0b', '#ef4444'],
      },
      kpis: [
        { label: '총 요구사항', value: '1,284건' },
        { label: '변경 요청', value: '6건', status: 'warning' },
        { label: '미승인', value: '3건', status: 'critical' },
      ],
      actionLabel: '추적 매트릭스',
    },

    // ③ 설계/개발
    {
      id: 'design-dev',
      panelNumber: 3,
      title: '설계/개발 현황',
      subtitle: 'HW·SW 개발 진행률',
      status: 'healthy',
      primaryValue: '72%',
      change: { value: 5, direction: 'up', label: '전월 대비' },
      chart: {
        type: 'bar',
        data: [
          { category: '시스템설계', value: 92, fill: '#0891b2' },
          { category: 'HW 설계', value: 75, fill: '#06b6d4' },
          { category: 'SW 개발', value: 68, fill: '#0e7490' },
          { category: '통합설계', value: 55, fill: '#155e75' },
          { category: '문서화', value: 80, fill: '#164e63' },
        ],
        keys: ['value'],
        colors: ['#0891b2'],
      },
      kpis: [
        { label: '오픈 이슈', value: '14건', status: 'warning' },
        { label: '완료 작업', value: '238건', status: 'healthy' },
      ],
      actionLabel: '개발 현황',
    },

    // ④ 형상 관리
    {
      id: 'config-mgmt',
      panelNumber: 4,
      title: '형상 관리',
      subtitle: '버전·변경 이력 관리',
      status: 'healthy',
      primaryValue: 'v2.3.1',
      chart: {
        type: 'card',
        data: [],
      },
      kpis: [
        { label: '현재 버전', value: 'v2.3.1', status: 'healthy' },
        { label: '총 커밋', value: '1,245건' },
        { label: '변경 요청', value: '8건', status: 'warning' },
        { label: '미결 CR', value: '2건', status: 'critical' },
        { label: '기준선', value: 'BL-2025-08' },
        { label: '품목 수', value: '347개' },
      ],
      actionLabel: '형상 이력',
    },

    // ⑤ 검증/시험
    {
      id: 'verification',
      panelNumber: 5,
      title: '검증/시험 현황',
      subtitle: '시험 성적 및 PASS/FAIL',
      status: 'healthy',
      primaryValue: '92%',
      primaryUnit: 'PASS',
      change: { value: 2, direction: 'up', label: '전월 대비' },
      chart: {
        type: 'donut',
        data: [
          { name: 'PASS', value: 92, fill: '#0891b2' },
          { name: 'FAIL', value: 5, fill: '#ef4444' },
          { name: '진행중', value: 3, fill: '#f59e0b' },
        ],
        colors: ['#0891b2', '#ef4444', '#f59e0b'],
      },
      kpis: [
        { label: '총 시험 항목', value: '512건' },
        { label: 'FAIL 항목', value: '26건', status: 'critical' },
        { label: '미수행', value: '15건', status: 'warning' },
      ],
      actionLabel: '시험 성적서',
    },

    // ⑥ RAMS & SIL
    {
      id: 'rams-sil',
      panelNumber: 6,
      title: 'RAMS & SIL 현황',
      subtitle: '안전 케이스·위험도 관리',
      status: 'warning',
      primaryValue: '85%',
      primaryUnit: '충족',
      change: { value: 1, direction: 'down', label: '안전 케이스' },
      chart: {
        type: 'donut',
        data: [
          { name: 'Safety Case 충족', value: 85, fill: '#0891b2' },
          { name: '보완 필요', value: 10, fill: '#f59e0b' },
          { name: '미충족', value: 5, fill: '#ef4444' },
        ],
        colors: ['#0891b2', '#f59e0b', '#ef4444'],
      },
      kpis: [
        { label: '목표 SIL', value: 'SIL 4', status: 'neutral' },
        { label: '고위험 항목', value: '2건', status: 'critical' },
        { label: '위험성 평가', value: '진행중', status: 'warning' },
      ],
      actionLabel: 'Safety Case',
    },

    // ⑦ 프로젝트 현황
    {
      id: 'project-status',
      panelNumber: 7,
      title: '프로젝트 현황',
      subtitle: '일정·예산·이슈 관리',
      status: 'warning',
      primaryValue: '7',
      primaryUnit: '개 진행중',
      chart: {
        type: 'card',
        data: [],
      },
      kpis: [
        { label: '정상 진행', value: '4개', status: 'healthy' },
        { label: '지연', value: '2개', status: 'critical' },
        { label: '완료', value: '1개', status: 'neutral' },
        { label: '예산 집행율', value: '67%', status: 'healthy' },
        { label: '미해결 이슈', value: '9건', status: 'warning' },
        { label: '마일스톤', value: '3건 임박' },
      ],
      actionLabel: '프로젝트 목록',
    },

    // ⑧ 현장 장애
    {
      id: 'field-failure',
      panelNumber: 8,
      title: '현장 장애 분석',
      subtitle: '월별 장애·심각도 현황',
      status: 'warning',
      primaryValue: '18',
      primaryUnit: '건/월',
      change: { value: 4, direction: 'down', label: '전월 대비' },
      chart: {
        type: 'bar',
        data: [
          { month: '3월', 경미: 12, 보통: 6, 심각: 2 },
          { month: '4월', 경미: 10, 보통: 7, 심각: 3 },
          { month: '5월', 경미: 9, 보통: 5, 심각: 1 },
          { month: '6월', 경미: 11, 보통: 8, 심각: 2 },
          { month: '7월', 경미: 14, 보통: 6, 심각: 2 },
          { month: '8월', 경미: 12, 보통: 4, 심각: 2 },
        ],
        keys: ['경미', '보통', '심각'],
        colors: ['#0891b2', '#f59e0b', '#ef4444'],
      },
      kpis: [
        { label: '미처리', value: '3건', status: 'critical' },
        { label: '평균 MTTR', value: '4.2시간' },
      ],
      actionLabel: '장애 목록',
    },

    // ⑨ 특허/IP
    {
      id: 'patent-ip',
      panelNumber: 9,
      title: '특허 IP 현황',
      subtitle: '출원·등록·심사 현황',
      status: 'healthy',
      primaryValue: '25',
      primaryUnit: '건 출원',
      change: { value: 3, direction: 'up', label: '신규 출원' },
      chart: {
        type: 'card',
        data: [],
      },
      kpis: [
        { label: '출원', value: '25건', status: 'neutral' },
        { label: '등록', value: '17건', status: 'healthy' },
        { label: '심사중', value: '6건', status: 'warning' },
        { label: '거절', value: '2건', status: 'critical' },
        { label: '기술이전', value: '3건' },
        { label: '연간 목표', value: '20건' },
      ],
      actionLabel: 'IP 목록',
    },

    // ⑩ 차세대 R&D
    {
      id: 'next-gen-rd',
      panelNumber: 10,
      title: '차세대 R&D',
      subtitle: '로드맵 진척·미래 기술',
      status: 'healthy',
      primaryValue: '63%',
      primaryUnit: '진척',
      change: { value: 5, direction: 'up', label: '분기 대비' },
      chart: {
        type: 'donut',
        data: [
          { name: '완료', value: 63, fill: '#0891b2' },
          { name: '진행중', value: 27, fill: '#06b6d4' },
          { name: '계획', value: 10, fill: '#e5e7eb' },
        ],
        colors: ['#0891b2', '#06b6d4', '#e5e7eb'],
      },
      kpis: [
        { label: '로드맵 기간', value: '2027~2031' },
        { label: '핵심 과제', value: '8개' },
        { label: '연구 인력', value: '43명' },
      ],
      actionLabel: '로드맵 보기',
    },
  ],
};

export const DUMMY_PANEL_DETAILS: Record<string, PanelDetailResponse> = {
  'tech-trend': {
    panelId: 'tech-trend',
    title: '기술동향 상세',
    details: [
      { label: 'IEC 62280 개정', value: '검토 중', status: 'warning', note: '2025-09 발효 예정' },
      { label: 'EN 50128:2023', value: '적용 완료', status: 'healthy' },
      { label: 'IEEE 1474.3', value: '검토 예정', status: 'neutral' },
      { label: '신호보안 논문', value: '32건 등록', status: 'neutral' },
      { label: '글로벌 특허 동향', value: '철도AI 급증 추세', status: 'neutral' },
    ],
    recentActivity: [
      { date: '2025-08-11', description: 'IEC 62280 Rev.3 초안 등록', type: 'info' },
      { date: '2025-08-09', description: 'ETCS 신규 논문 5건 분류 완료', type: 'success' },
      { date: '2025-08-05', description: '철도AI 특허 3건 분석 보고서 배포', type: 'info' },
    ],
  },
  'requirements': {
    panelId: 'requirements',
    title: '요구사항 현황 상세',
    details: [
      { label: '총 요구사항', value: '1,284건', status: 'neutral' },
      { label: '추적완료', value: '1,001건 (78%)', status: 'healthy' },
      { label: '미추적', value: '180건 (14%)', status: 'warning' },
      { label: '변경 요청', value: '6건', status: 'warning', note: '승인 대기' },
      { label: '미승인', value: '3건', status: 'critical', note: '긴급 처리 필요' },
    ],
    recentActivity: [
      { date: '2025-08-11', description: 'ATP 인터페이스 요구사항 변경 요청 #CR-024 등록', type: 'warning' },
      { date: '2025-08-08', description: '요구사항 추적성 분석 보고서 배포', type: 'info' },
      { date: '2025-08-03', description: '고객 요구사항 검토 회의 완료', type: 'success' },
    ],
  },
};
