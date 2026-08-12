// ============================================================
// MSW 핸들러 - /api/* 엔드포인트 모킹
// ============================================================

import { http, HttpResponse, delay } from 'msw';
import { DUMMY_DASHBOARD, DUMMY_PROJECTS, DUMMY_PANEL_DETAILS } from './data/dashboard';
import type { DashboardResponse } from '../features/dashboard/types';

function filterDashboard(period: string, _projectId: string): DashboardResponse {
  // 필터에 따라 약간 다른 데이터를 반환하는 시뮬레이션
  const base = { ...DUMMY_DASHBOARD };
  if (period === '30d') {
    base.summary = { ...base.summary, openRisks: 2, testPassRate: 94 };
  } else if (period === '1y') {
    base.summary = { ...base.summary, openRisks: 5, testPassRate: 89 };
  }
  return base;
}

export const handlers = [
  // GET /api/dashboard
  http.get('/api/dashboard', async ({ request }) => {
    await delay(400);
    const url = new URL(request.url);
    const period = url.searchParams.get('period') ?? '90d';
    const projectId = url.searchParams.get('projectId') ?? 'all';
    const data = filterDashboard(period, projectId);
    return HttpResponse.json(data);
  }),

  // GET /api/panels/:panelId
  http.get('/api/panels/:panelId', async ({ params }) => {
    await delay(300);
    const panelId = params.panelId as string;
    const detail = DUMMY_PANEL_DETAILS[panelId];
    if (!detail) {
      return HttpResponse.json(
        {
          panelId,
          title: '상세 정보',
          details: [{ label: '상태', value: '데이터 준비 중', status: 'neutral' }],
          recentActivity: [],
        },
        { status: 200 }
      );
    }
    return HttpResponse.json(detail);
  }),

  // GET /api/projects
  http.get('/api/projects', async () => {
    await delay(200);
    return HttpResponse.json(DUMMY_PROJECTS);
  }),

  // GET /api/alerts
  http.get('/api/alerts', async () => {
    await delay(200);
    return HttpResponse.json(DUMMY_DASHBOARD.alerts);
  }),
];
