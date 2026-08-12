// ============================================================
// Zustand 필터 스토어
// ============================================================

import { create } from 'zustand';
import type { DashboardFilters } from '../dashboard/types';

interface FilterState {
  filters: DashboardFilters;
  setFilters: (partial: Partial<DashboardFilters>) => void;
  resetFilters: () => void;
}

const DEFAULT_FILTERS: DashboardFilters = {
  projectId: 'all',
  period: '90d',
  systemId: 'all',
};

export const useFilterStore = create<FilterState>((set) => ({
  filters: DEFAULT_FILTERS,
  setFilters: (partial) =>
    set((state) => ({
      filters: { ...state.filters, ...partial },
    })),
  resetFilters: () => set({ filters: DEFAULT_FILTERS }),
}));
