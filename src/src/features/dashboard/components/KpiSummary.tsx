// ============================================================
// KPI 요약 카드 (헤더 하단 전체 현황)
// ============================================================

import type { DashboardSummary } from '../types';

interface Props {
  summary: DashboardSummary;
}

export function KpiSummary({ summary }: Props) {
  const items = [
    {
      label: '종합 성과 지수',
      value: `${summary.overallHealth}%`,
      icon: '◎',
      color: '#0891b2',
      bg: '#ecfeff',
    },
    {
      label: '오픈 리스크',
      value: `${summary.openRisks}건`,
      icon: '▲',
      color: summary.openRisks >= 3 ? '#ef4444' : '#f59e0b',
      bg: summary.openRisks >= 3 ? '#fef2f2' : '#fffbeb',
    },
    {
      label: '진행 프로젝트',
      value: `${summary.activeProjects}개`,
      icon: '▣',
      color: '#0891b2',
      bg: '#ecfeff',
    },
    {
      label: '시험 PASS율',
      value: `${summary.testPassRate}%`,
      icon: '✓',
      color: '#059669',
      bg: '#ecfdf5',
    },
  ];

  return (
    <div className="flex gap-2 px-3 py-1.5 border-b border-slate-100 bg-slate-50 flex-shrink-0">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 px-3 py-1 rounded"
          style={{ background: item.bg, border: `1px solid ${item.color}22` }}
        >
          <span style={{ color: item.color, fontSize: 12 }} aria-hidden="true">{item.icon}</span>
          <div>
            <div style={{ fontSize: 9, color: '#64748b' }}>{item.label}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: item.color, lineHeight: 1.1 }}>{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
