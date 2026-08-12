// ============================================================
// 메트릭 패널 카드 컴포넌트
// ============================================================

import type { MetricPanel } from '../types';
import { TrendLineChart } from '../../../components/charts/TrendLineChart';
import { StatusDonutChart } from '../../../components/charts/StatusDonutChart';
import { ProgressBarChart } from '../../../components/charts/ProgressBarChart';

interface Props {
  panel: MetricPanel;
  onSelect: (panelId: string) => void;
}

const STATUS_LABELS: Record<string, string> = {
  healthy: '정상',
  warning: '주의',
  critical: '위험',
  neutral: '정보',
};

const STATUS_ICONS: Record<string, string> = {
  healthy: '●',
  warning: '▲',
  critical: '■',
  neutral: '◆',
};

function PanelChart({ panel }: { panel: MetricPanel }) {
  const { chart } = panel;

  if (chart.type === 'line') {
    return (
      <TrendLineChart
        data={chart.data}
        keys={chart.keys ?? []}
        colors={chart.colors ?? ['#0891b2']}
        height={85}
      />
    );
  }

  if (chart.type === 'donut') {
    return (
      <StatusDonutChart
        data={chart.data}
        height={85}
        centerValue={panel.primaryValue}
      />
    );
  }

  if (chart.type === 'bar') {
    const isMonthly = chart.data[0] && 'month' in chart.data[0];
    return (
      <ProgressBarChart
        data={chart.data}
        keys={chart.keys ?? ['value']}
        colors={chart.colors ?? ['#0891b2']}
        height={85}
        layout={isMonthly ? 'horizontal' : 'vertical'}
      />
    );
  }

  return null;
}

export function MetricPanelCard({ panel, onSelect }: Props) {
  const hasChart = panel.chart.type !== 'card';

  return (
    <div
      className="panel-card h-full flex flex-col cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`${panel.title} 패널 상세 보기`}
      onClick={() => onSelect(panel.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(panel.id);
        }
      }}
    >
      {/* 패널 헤더 */}
      <div className="panel-header">
        <div className="flex items-center gap-1 flex-1 min-w-0">
          <span className="panel-number">{panel.panelNumber}</span>
          <span className="panel-title" title={panel.title}>{panel.title}</span>
        </div>
        <span className={`status-badge ${panel.status}`}>
          <span aria-hidden="true">{STATUS_ICONS[panel.status]}</span>
          <span>{STATUS_LABELS[panel.status]}</span>
        </span>
      </div>

      {/* 패널 본문 */}
      <div className="flex-1 flex flex-col p-2 gap-1 min-h-0">
        {/* KPI 주요 수치 */}
        <div className="flex items-baseline gap-1">
          <span className="kpi-primary">{panel.primaryValue}</span>
          {panel.primaryUnit && <span className="kpi-unit">{panel.primaryUnit}</span>}
          {panel.change && (
            <span
              className={panel.change.direction === 'up' ? 'kpi-change-up' : 'kpi-change-down'}
              aria-label={`${panel.change.direction === 'up' ? '증가' : '감소'} ${panel.change.value}`}
            >
              {panel.change.direction === 'up' ? '▲' : '▼'} {panel.change.value}
              {panel.change.label && <span style={{ fontWeight: 400, fontSize: 10, color: '#94a3b8', marginLeft: 2 }}>{panel.change.label}</span>}
            </span>
          )}
        </div>

        {/* 차트 영역 */}
        {hasChart && (
          <div className="flex-shrink-0">
            <PanelChart panel={panel} />
          </div>
        )}

        {/* KPI 목록 */}
        {panel.kpis && panel.kpis.length > 0 && (
          <div className="flex-1 flex flex-col justify-end">
            {panel.kpis.slice(0, hasChart ? 3 : 6).map((kpi) => (
              <div key={kpi.label} className="kpi-mini-item">
                <span className="kpi-mini-label">{kpi.label}</span>
                <span className={`kpi-mini-value ${kpi.status ?? ''}`}>{kpi.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* 상세 보기 링크 */}
        <div className="mt-auto pt-1 border-t border-slate-100">
          <button
            className="text-[10px] text-teal-600 hover:text-teal-800 font-medium w-full text-right"
            style={{ color: '#0891b2' }}
            onClick={(e) => { e.stopPropagation(); onSelect(panel.id); }}
            aria-label={`${panel.title} ${panel.actionLabel}`}
          >
            {panel.actionLabel} →
          </button>
        </div>
      </div>
    </div>
  );
}
