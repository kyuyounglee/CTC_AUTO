// ============================================================
// Style 1: 개요 중심 (Executive Overview Style)
// ============================================================

import { ExecutiveKpiBar } from '../features/dashboard/components/ExecutiveKpiBar';
import { OverviewSummaryCards } from '../features/dashboard/components/OverviewSummaryCards';
import { useDashboard } from '../features/dashboard/hooks/useDashboard';

export function Style1Page() {
  const { data, isLoading } = useDashboard();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#111827' }}>R&D 대시보드 개요</h1>
        </div>
        <select style={{ padding: '6px 32px 6px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13, color: '#374151', background: '#fff' }}>
          <option>최근 90일</option>
        </select>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
        
        {/* 상단 KPI 6개 */}
        <ExecutiveKpiBar summary={data?.summary} isLoading={isLoading} />
        
        {/* 여백 추가 */}
        <div style={{ height: 16 }} />

        {/* 하단 요약 3개 카드 */}
        <OverviewSummaryCards />

        {/* 하단 전체 상세 보기 링크 */}
        <div style={{ marginTop: 24, textAlign: 'left' }}>
          <button style={{ color: '#2563eb', fontWeight: 600, fontSize: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
            전체 상세 보기 →
          </button>
        </div>
      </div>
    </div>
  );
}
