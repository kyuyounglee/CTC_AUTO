// ============================================================
// 5열 × 2행 패널 그리드
// ============================================================

import type { MetricPanel } from '../types';
import { MetricPanelCard } from './MetricPanelCard';
import { SkeletonCard } from '../../../components/ui/SkeletonCard';

interface Props {
  panels: MetricPanel[] | undefined;
  isLoading: boolean;
  onPanelSelect: (panelId: string) => void;
}

export function PanelGrid({ panels, isLoading, onPanelSelect }: Props) {
  if (isLoading) {
    return (
      <div
        className="grid gap-3 p-3 flex-1 min-h-0"
        style={{
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
        }}
        aria-label="대시보드 패널 로딩 중"
        aria-busy="true"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!panels || panels.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-400">
        <div className="text-center">
          <div style={{ fontSize: 32 }} aria-hidden="true">◎</div>
          <p className="mt-2" style={{ fontSize: 13 }}>표시할 데이터가 없습니다</p>
          <p style={{ fontSize: 11, color: '#94a3b8' }}>필터 조건을 변경해보세요</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="grid gap-3 p-3 flex-1 min-h-0"
      style={{
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
        // 반응형
      }}
      role="main"
      aria-label="R&D 관제 패널"
    >
      {panels.map((panel) => (
        <MetricPanelCard
          key={panel.id}
          panel={panel}
          onSelect={onPanelSelect}
        />
      ))}
    </div>
  );
}
