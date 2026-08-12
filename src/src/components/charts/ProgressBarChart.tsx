// ============================================================
// 수평 막대 차트 컴포넌트
// ============================================================

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer,
} from 'recharts';
import type { ChartDataPoint } from '../../features/dashboard/types';

interface Props {
  data: ChartDataPoint[];
  keys: string[];
  colors: string[];
  height?: number;
  layout?: 'horizontal' | 'vertical';
  showLabel?: boolean;
}

export function ProgressBarChart({ data, keys, colors, height = 90, layout = 'horizontal' }: Props) {
  if (layout === 'vertical') {
    // 수직 레이아웃: 카테고리별 가로 막대
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 2, right: 20, left: 0, bottom: 2 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9, fill: '#94a3b8' }} tickLine={false} axisLine={false} unit="%" />
          <YAxis type="category" dataKey="category" tick={{ fontSize: 9, fill: '#64748b' }} tickLine={false} axisLine={false} width={52} />
          <Tooltip
            contentStyle={{ fontSize: 11, border: '1px solid #e2e8f0', borderRadius: 4, padding: '4px 8px' }}
            formatter={(v: any) => [`${v}%`, '']}
          />
          {keys.map((key, i) => (
            <Bar key={key} dataKey={key} fill={colors[i] ?? '#0891b2'} radius={[0, 3, 3, 0]} barSize={10}>
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.fill as string ?? colors[i] ?? '#0891b2'} />
              ))}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  // 수평 레이아웃: 월별 그룹 막대
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#94a3b8' }} tickLine={false} axisLine={false} />
        <YAxis tick={{ fontSize: 9, fill: '#94a3b8' }} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{ fontSize: 11, border: '1px solid #e2e8f0', borderRadius: 4, padding: '4px 8px' }}
        />
        <Legend wrapperStyle={{ fontSize: 9 }} iconType="square" iconSize={6} />
        {keys.map((key, i) => (
          <Bar key={key} dataKey={key} stackId="a" fill={colors[i] ?? '#0891b2'} barSize={12} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
