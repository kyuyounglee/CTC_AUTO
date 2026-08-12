// ============================================================
// 추세 선 차트 컴포넌트
// ============================================================

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import type { ChartDataPoint } from '../../features/dashboard/types';

interface Props {
  data: ChartDataPoint[];
  keys: string[];
  colors: string[];
  height?: number;
}

export function TrendLineChart({ data, keys, colors, height = 90 }: Props) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 9, fill: '#94a3b8' }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis tick={{ fontSize: 9, fill: '#94a3b8' }} tickLine={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            fontSize: 11,
            border: '1px solid #e2e8f0',
            borderRadius: 4,
            padding: '4px 8px',
          }}
        />
        <Legend
          wrapperStyle={{ fontSize: 9, paddingTop: 2 }}
          iconType="circle"
          iconSize={6}
        />
        {keys.map((key, i) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[i] ?? '#0891b2'}
            strokeWidth={1.5}
            dot={false}
            activeDot={{ r: 3 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
