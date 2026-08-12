// ============================================================
// 대시보드 메인 페이지
// ============================================================

import { useState } from 'react';
import { DashboardHeader } from '../features/dashboard/components/DashboardHeader';
import { KpiSummary } from '../features/dashboard/components/KpiSummary';
import { PanelGrid } from '../features/dashboard/components/PanelGrid';
import { StatusBar } from '../features/dashboard/components/StatusBar';
import { DetailPanel } from '../features/dashboard/components/DetailPanel';
import { useDashboard } from '../features/dashboard/hooks/useDashboard';

export function DashboardPage() {
  const [selectedPanelId, setSelectedPanelId] = useState<string | null>(null);
  const { data, isLoading, isError, refetch } = useDashboard();

  const handleDownload = () => {
    alert('보고서 다운로드 기능은 실제 API 연동 후 제공됩니다.');
  };

  return (
    <div className="flex flex-col" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* 상단 타이틀 바 */}
      <DashboardHeader updatedAt={data?.updatedAt} />

      {/* KPI 요약 바 */}
      {data?.summary && !isLoading && (
        <KpiSummary summary={data.summary} />
      )}
      {isLoading && (
        <div className="px-3 py-1.5 border-b border-slate-100 bg-slate-50 flex gap-2 flex-shrink-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="skeleton h-9 w-32 rounded" />
          ))}
        </div>
      )}

      {/* 오류 배너 */}
      {isError && (
        <div
          className="flex items-center justify-between px-4 py-2 flex-shrink-0"
          style={{ background: '#fef2f2', borderBottom: '1px solid #fecaca', color: '#dc2626', fontSize: 12 }}
          role="alert"
        >
          <span>■ 데이터를 불러오는 중 오류가 발생했습니다.</span>
          <button
            onClick={() => refetch()}
            className="underline font-medium"
            style={{ color: '#dc2626' }}
          >
            다시 시도
          </button>
        </div>
      )}

      {/* 패널 그리드 - 나머지 공간 모두 사용 */}
      <div className="flex-1 min-h-0">
        <PanelGrid
          panels={data?.panels}
          isLoading={isLoading}
          onPanelSelect={setSelectedPanelId}
        />
      </div>

      {/* 하단 상태 바 */}
      <StatusBar
        alerts={data?.alerts ?? []}
        testRecordsCount={12}
        specChangesCount={2}
        onDownload={handleDownload}
      />

      {/* 상세 패널 */}
      <DetailPanel
        panelId={selectedPanelId}
        onClose={() => setSelectedPanelId(null)}
      />
    </div>
  );
}
