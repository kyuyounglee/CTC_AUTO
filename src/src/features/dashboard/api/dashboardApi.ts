// ============================================================
// Dashboard API 함수 - 실제 API 교체 시 이 파일만 수정
// ============================================================

import type {
  DashboardFilters,
  DashboardResponse,
  PanelDetailResponse,
  ProjectOption,
  AlertItem,
} from '../types';

const BASE_URL = '/api';

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API 오류: ${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}

export async function fetchDashboard(filters: DashboardFilters): Promise<DashboardResponse> {
  const params = new URLSearchParams({
    projectId: filters.projectId,
    period: filters.period,
    systemId: filters.systemId,
  });
  return fetchJson<DashboardResponse>(`${BASE_URL}/dashboard?${params}`);
}

export async function fetchPanelDetail(panelId: string): Promise<PanelDetailResponse> {
  return fetchJson<PanelDetailResponse>(`${BASE_URL}/panels/${panelId}`);
}

export async function fetchProjects(): Promise<ProjectOption[]> {
  return fetchJson<ProjectOption[]>(`${BASE_URL}/projects`);
}

export async function fetchAlerts(): Promise<AlertItem[]> {
  return fetchJson<AlertItem[]>(`${BASE_URL}/alerts`);
}
