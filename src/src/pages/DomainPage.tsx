// ============================================================
// 도메인 상세 페이지 — 탭 기반 10개 영역 (이미지 ②)
// ============================================================

import { useParams, useNavigate } from 'react-router-dom';
import { TopBar } from '../components/layout/TopBar';
import { StatusDonutChart } from '../components/charts/StatusDonutChart';
import { TrendLineChart } from '../components/charts/TrendLineChart';
import { ProgressBarChart } from '../components/charts/ProgressBarChart';
import { usePanelDetail } from '../features/dashboard/hooks/useDashboard';
import { DUMMY_DASHBOARD } from '../mocks/data/dashboard';

const DOMAIN_TABS = [
  { id: 'tech-trend',    label: '기술동향',  icon: '◎' },
  { id: 'requirements', label: '요구사항',   icon: '◈' },
  { id: 'design-dev',   label: '설계/개발',  icon: '◐' },
  { id: 'config-mgmt',  label: '형상관리',   icon: '◇' },
  { id: 'verification', label: '시험/검증',  icon: '◑' },
  { id: 'rams-sil',     label: 'RAMS/SIL',  icon: '◆' },
  { id: 'project-status', label: '프로젝트', icon: '▶' },
  { id: 'field-failure', label: '현장 장애', icon: '▲' },
  { id: 'patent-ip',    label: '특허/IP',   icon: '★' },
  { id: 'next-gen-rd',  label: '차세대 R&D', icon: '◉' },
];

function DomainContent({ domainId }: { domainId: string }) {
  const panel = DUMMY_DASHBOARD.panels.find((p) => p.id === domainId);
  const { data: detail, isLoading } = usePanelDetail(domainId);

  if (!panel) return <div style={{ padding: 24, color: '#6b7280' }}>해당 도메인을 찾을 수 없습니다.</div>;

  return (
    <div>
      {/* 상단 KPI 요약 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
        <div className="kpi-card" style={{ gridColumn: '1 / 2' }}>
          <div className="kpi-label">{panel.subtitle}</div>
          <div className="kpi-value" style={{ fontSize: 32 }}>{panel.primaryValue}</div>
          {panel.primaryUnit && <div style={{ fontSize: 11, color: '#6b7280' }}>{panel.primaryUnit}</div>}
          {panel.change && (
            <div className={`kpi-change ${panel.change.direction === 'up' ? 'up' : 'down'}`}>
              {panel.change.direction === 'up' ? '▲' : '▼'} {panel.change.value}
              {panel.change.label && <span style={{ color: '#9ca3af', fontWeight: 400, fontSize: 10, marginLeft: 3 }}>{panel.change.label}</span>}
            </div>
          )}
        </div>
        {panel.kpis?.slice(0, 3).map((kpi) => (
          <div key={kpi.label} className="kpi-card">
            <div className="kpi-label">{kpi.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: kpi.status === 'critical' ? '#dc2626' : kpi.status === 'warning' ? '#d97706' : '#111827', letterSpacing: '-0.02em' }}>
              {kpi.value}
            </div>
            {kpi.status && <span className={`badge ${kpi.status === 'critical' ? 'badge-crit' : kpi.status === 'warning' ? 'badge-warn' : kpi.status === 'healthy' ? 'badge-ok' : 'badge-neutral'}`} style={{ marginTop: 6 }}>{kpi.status === 'critical' ? '위험' : kpi.status === 'warning' ? '주의' : kpi.status === 'healthy' ? '정상' : '정보'}</span>}
          </div>
        ))}
      </div>

      {/* 차트 + 상세 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {/* 차트 카드 */}
        <div className="panel-card">
          <div className="panel-header">
            <div className="panel-title">시각화 데이터</div>
          </div>
          <div className="panel-body">
            {panel.chart.type === 'line' && (
              <TrendLineChart data={panel.chart.data} keys={panel.chart.keys ?? []} colors={panel.chart.colors ?? ['#2563eb']} height={200} />
            )}
            {panel.chart.type === 'donut' && (
              <StatusDonutChart data={panel.chart.data} height={200} centerValue={panel.primaryValue} />
            )}
            {panel.chart.type === 'bar' && (
              <ProgressBarChart
                data={panel.chart.data}
                keys={panel.chart.keys ?? ['value']}
                colors={panel.chart.colors ?? ['#2563eb']}
                height={200}
                layout={panel.chart.data[0] && 'month' in panel.chart.data[0] ? 'horizontal' : 'vertical'}
              />
            )}
            {panel.chart.type === 'card' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '8px 0' }}>
                {panel.kpis?.map((kpi: any) => (
                  <div key={kpi.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: 6, background: '#f9fafb', border: '1px solid #e5e7eb' }}>
                    <span style={{ fontSize: 12, color: '#374151' }}>{kpi.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: kpi.status === 'critical' ? '#dc2626' : kpi.status === 'warning' ? '#d97706' : '#111827' }}>{kpi.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 상세 활동 */}
        <div className="panel-card">
          <div className="panel-header">
            <div className="panel-title">최근 활동 및 상세</div>
          </div>
          <div className="panel-body">
            {isLoading ? (
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, i) => <div key={i} className="skeleton h-8 w-full" />)}
              </div>
            ) : detail ? (
              <>
                {detail.details.map((d) => (
                  <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', borderRadius: 6, marginBottom: 4, background: '#f9fafb', border: '1px solid #e5e7eb' }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#374151', fontWeight: 500 }}>{d.label}</div>
                      {d.note && <div style={{ fontSize: 10, color: '#9ca3af' }}>{d.note}</div>}
                    </div>
                    <span className={`badge ${d.status === 'critical' ? 'badge-crit' : d.status === 'warning' ? 'badge-warn' : d.status === 'healthy' ? 'badge-ok' : 'badge-neutral'}`}>{d.value}</span>
                  </div>
                ))}
                {detail.recentActivity.map((act, i) => (
                  <div key={i} className="activity-item">
                    <span className="activity-dot" style={{ background: act.type === 'success' ? '#16a34a' : act.type === 'warning' ? '#d97706' : act.type === 'error' ? '#dc2626' : '#2563eb' }} />
                    <div>
                      <div style={{ fontSize: 11, color: '#111827' }}>{act.description}</div>
                      <div style={{ fontSize: 10, color: '#9ca3af' }}>{act.date}</div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div style={{ textAlign: 'center', color: '#9ca3af', padding: '24px 0', fontSize: 12 }}>상세 데이터 준비 중</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DomainPage() {
  const { tab = 'tech-trend' } = useParams<{ tab: string }>();
  const navigate = useNavigate();
  const currentTab = DOMAIN_TABS.find((t) => t.id === tab) ?? DOMAIN_TABS[0];

  return (
    <>
      <TopBar title={`${currentTab.label} 상세`} subtitle="Domain Dashboard" />
      <div className="content-area">
        {/* 탭 바 */}
        <div className="tab-bar" role="tablist" aria-label="도메인 탭">
          {DOMAIN_TABS.map((t: any) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={t.id === tab}
              className={`tab-item${t.id === tab ? ' active' : ''}`}
              onClick={() => navigate(`/domain/${t.id}`)}
            >
              <span aria-hidden="true">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <div role="tabpanel" aria-label={currentTab.label}>
          <DomainContent domainId={tab} />
        </div>
      </div>
    </>
  );
}
