// ============================================================
// TanStack Query 훅 - 대시보드 데이터 조회
// ============================================================

import { useQuery } from '@tanstack/react-query';
import { fetchDashboard, fetchPanelDetail, fetchProjects } from '../api/dashboardApi';
import { useFilterStore } from '../../filters/filterStore';

export function useDashboard() {
  const { filters } = useFilterStore();

  return useQuery({
    queryKey: ['dashboard', filters.projectId, filters.period, filters.systemId],
    queryFn: () => fetchDashboard(filters),
    staleTime: 30_000,
    retry: 2,
  });
}

export function usePanelDetail(panelId: string | null) {
  return useQuery({
    queryKey: ['panel-detail', panelId],
    queryFn: () => fetchPanelDetail(panelId!),
    enabled: panelId !== null,
    staleTime: 60_000,
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 300_000,
  });
}
