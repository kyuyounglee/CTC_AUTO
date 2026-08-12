// ============================================================
// 연구소 R&D 관제 대시보드 - 타입 정의
// ============================================================

export type DashboardFilters = {
  projectId: string;
  period: '30d' | '90d' | '1y';
  systemId: string | 'all';
};

export type PanelStatus = 'healthy' | 'warning' | 'critical' | 'neutral';

export type ChartDataPoint = Record<string, unknown>;

export type MetricPanel = {
  id: string;
  panelNumber: number;
  title: string;
  subtitle: string;
  status: PanelStatus;
  primaryValue: string;
  primaryUnit?: string;
  change?: { value: number; direction: 'up' | 'down'; label?: string };
  chart: {
    type: 'line' | 'bar' | 'donut' | 'card';
    data: ChartDataPoint[];
    keys?: string[];
    colors?: string[];
  };
  kpis?: Array<{ label: string; value: string; status?: PanelStatus }>;
  actionLabel: string;
};

export type AlertItem = {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  owner: string;
  createdAt: string;
  panelId: string;
};

export type DashboardSummary = {
  overallHealth: number;
  openRisks: number;
  activeProjects: number;
  testPassRate: number;
};

export type DashboardResponse = {
  updatedAt: string;
  summary: DashboardSummary;
  panels: MetricPanel[];
  alerts: AlertItem[];
};

export type PanelDetailResponse = {
  panelId: string;
  title: string;
  details: Array<{
    label: string;
    value: string;
    status?: PanelStatus;
    note?: string;
  }>;
  recentActivity: Array<{
    date: string;
    description: string;
    type: 'info' | 'warning' | 'success' | 'error';
  }>;
};

export type ProjectOption = {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'delayed';
};

export type StatusBarItem = {
  id: string;
  icon: string;
  label: string;
  value: string | number;
  severity?: 'high' | 'medium' | 'low' | 'normal';
  action?: string;
};
