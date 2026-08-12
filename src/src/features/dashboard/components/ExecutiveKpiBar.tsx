// ============================================================
// Executive KPI 바 — 최상단 6개 핵심 지표
// ============================================================

import type { DashboardSummary } from '../features/dashboard/types';

interface Props {
  summary: DashboardSummary | undefined;
  isLoading: boolean;
}

const KPI_ITEMS = [
  {
    key: 'overallHealth',
    label: '종합 성과 지수',
    format: (v: number) => `${v}%`,
    change: '+5%',
    dir: 'up' as const,
    color: '#16a34a',
    desc: '전월 대비',
  },
  {
    key: 'activeProjects',
    label: '진행 프로젝트',
    format: (v: number) => `${v}개`,
    change: '+1',
    dir: 'up' as const,
    color: '#2563eb',
    desc: '신규 착수',
  },
  {
    key: 'testPassRate',
    label: '시험 PASS율',
    format: (v: number) => `${v}%`,
    change: '+4%',
    dir: 'up' as const,
    color: '#0891b2',
    desc: '전월 대비',
  },
  {
    key: 'openRisks',
    label: '오픈 리스크',
    format: (v: number) => `${v}건`,
    change: '▼ 1',
    dir: 'down' as const,
    color: '#dc2626',
    desc: '해소됨',
  },
  {
    key: 'patents',
    label: '특허 출원',
    format: (_: number) => '25건',
    change: '+3',
    dir: 'up' as const,
    color: '#7c3aed',
    desc: '신규 출원',
  },
  {
    key: 'ramsSil',
    label: 'RAMS/SIL',
    format: (_: number) => '85%',
    change: '▼ 2%',
    dir: 'down' as const,
    color: '#d97706',
    desc: '안전 케이스',
  },
];

export function ExecutiveKpiBar({ summary, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="kpi-bar">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="kpi-card">
            <div className="skeleton h-3 w-20 mb-3" />
            <div className="skeleton h-8 w-16 mb-2" />
            <div className="skeleton h-2.5 w-12" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="kpi-bar" role="region" aria-label="핵심 성과 지표">
      {KPI_ITEMS.map((item) => {
        const rawValue = summary?.[item.key as keyof DashboardSummary] as number ?? 0;
        const displayed = item.format(rawValue);
        return (
          <div key={item.key} className="kpi-card" tabIndex={0} aria-label={`${item.label}: ${displayed}`}>
            <div className="kpi-label">{item.label}</div>
            <div className="kpi-value" style={{ color: item.color }}>{displayed}</div>
            <div className={`kpi-change ${item.dir === 'up' ? 'up' : 'down'}`}>
              <span aria-hidden="true">{item.dir === 'up' ? '▲' : '▼'}</span>
              {item.change.replace('▼ ', '').replace('▲ ', '')}
              <span style={{ color: '#9ca3af', fontWeight: 400, fontSize: 10, marginLeft: 2 }}>{item.desc}</span>
            </div>
            <span
              className="kpi-indicator"
              style={{ background: item.color + '33', position: 'relative', overflow: 'hidden' }}
            >
              <span style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                background: item.color,
                width: `${Math.min(rawValue, 100)}%`,
                borderRadius: 2,
              }} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
