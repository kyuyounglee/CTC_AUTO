// ============================================================
// 개요 대시보드 페이지 — Executive Overview
// ============================================================

import { TopBar } from '../components/layout/TopBar';
import { ExecutiveKpiBar } from '../features/dashboard/components/ExecutiveKpiBar';
import { OverviewSummaryCards } from '../features/dashboard/components/OverviewSummaryCards';
import { ProjectPortfolio } from '../features/dashboard/components/ProjectPortfolio';
import { RiskPanel } from '../features/dashboard/components/RiskPanel';
import { TrendAnalyticsPanel } from '../features/dashboard/components/TrendAnalyticsPanel';
import { AiInsightPanel } from '../features/dashboard/components/AiInsightPanel';
import { ActivityFeed } from '../features/dashboard/components/ActivityFeed';
import { useDashboard } from '../features/dashboard/hooks/useDashboard';

export function OverviewPage() {
  const { data, isLoading, isError, refetch } = useDashboard();

  return (
    <>
      <TopBar
        title="R&D 대시보드 개요"
        subtitle="연구소장 관제 시스템"
        alerts={data?.alerts ?? []}
      />

      <div className="content-area">
        {/* 오류 배너 */}
        {isError && (
          <div
            role="alert"
            style={{
              background: '#fef2f2', border: '1px solid #fecaca',
              borderRadius: 8, padding: '10px 14px', marginBottom: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontSize: 12, color: '#b91c1c',
            }}
          >
            <span>데이터를 불러오는 중 오류가 발생했습니다.</span>
            <button onClick={() => refetch()} style={{ color: '#b91c1c', fontWeight: 600, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
              다시 시도
            </button>
          </div>
        )}

        {/* ① Executive KPI 바 */}
        <ExecutiveKpiBar summary={data?.summary} isLoading={isLoading} />

        {/* ② 요약 카드 3개 (요구사항 / 설계개발 / 시험) */}
        <OverviewSummaryCards />

        {/* ③ 프로젝트 포트폴리오 + 핵심 리스크 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          <ProjectPortfolio />
          <RiskPanel alerts={data?.alerts ?? []} />
        </div>

        {/* ④ 트렌드 분석 + AI Insight + 최근 활동 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 14, alignItems: 'start' }}>
          <TrendAnalyticsPanel />
          <div style={{ width: 240 }}>
            <AiInsightPanel />
          </div>
          <ActivityFeed />
        </div>
      </div>
    </>
  );
}
