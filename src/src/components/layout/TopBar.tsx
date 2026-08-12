// ============================================================
// 상단 바 — 타이틀 + 필터 + 알림
// ============================================================

import { useState } from 'react';
import { useFilterStore } from '../../features/filters/filterStore';
import { AlertDrawer } from '../AlertDrawer';
import type { AlertItem } from '../../features/dashboard/types';

interface Props {
  title: string;
  subtitle?: string;
  alerts?: AlertItem[];
}

export function TopBar({ title, subtitle, alerts = [] }: Props) {
  const { filters, setFilters } = useFilterStore();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const highCount = alerts.filter((a) => a.severity === 'high').length;

  return (
    <>
      <header className="top-bar" role="banner">
        {/* 제목 */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <h1 className="top-bar-title">{title}</h1>
          {subtitle && <span className="top-bar-sub">{subtitle}</span>}
        </div>

        {/* 우측 컨트롤 */}
        <div className="top-bar-controls">
          {/* 기간 필터 */}
          <select
            id="topbar-period"
            className="filter-select"
            value={filters.period}
            onChange={(e) => setFilters({ period: e.target.value as '30d' | '90d' | '1y' })}
            aria-label="기간 선택"
          >
            <option value="30d">최근 30일</option>
            <option value="90d">최근 90일</option>
            <option value="1y">최근 1년</option>
          </select>

          {/* 프로젝트 필터 */}
          <select
            id="topbar-project"
            className="filter-select"
            value={filters.projectId}
            onChange={(e) => setFilters({ projectId: e.target.value })}
            aria-label="프로젝트 선택"
          >
            <option value="all">전체 프로젝트</option>
            <option value="P001">ETCS L2 고속선</option>
            <option value="P002">차세대 신호</option>
            <option value="P003">ATP 개선</option>
          </select>

          {/* 알림 버튼 */}
          <button
            className="notif-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label={`알림 ${alerts.length}건`}
          >
            🔔
            {alerts.length > 0 && <span className="notif-badge" aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* 알림 드로어 */}
      <AlertDrawer
        isOpen={drawerOpen}
        alerts={alerts}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
