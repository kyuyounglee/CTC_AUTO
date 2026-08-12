// ============================================================
// 도넛 차트 컴포넌트
// ============================================================

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { ChartDataPoint } from '../../features/dashboard/types';

interface Props {
  data: ChartDataPoint[];
  height?: number;
  centerLabel?: string;
  centerValue?: string;
}

export function StatusDonutChart({ data, height = 90, centerLabel, centerValue }: Props) {
  const cx = '50%';
  const cy = '50%';

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx={cx}
          cy={cy}
          innerRadius="45%"
          outerRadius="70%"
          dataKey="value"
          labelLine={false}
          label={(props: any) => {
            const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
            if (percent < 0.05) return null;
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);
            return (
              <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={9} fontWeight={600}>
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill as string} strokeWidth={0} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ fontSize: 11, border: '1px solid #e2e8f0', borderRadius: 4, padding: '4px 8px' }}
          formatter={(value: any, name: any) => [`${value}%`, name]}
        />
        {centerValue && (
          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
            <tspan x="50%" dy="-0.3em" fontSize={14} fontWeight={700} fill="#0f172a">{centerValue}</tspan>
            {centerLabel && (
              <tspan x="50%" dy="1.2em" fontSize={9} fill="#64748b">{centerLabel}</tspan>
            )}
          </text>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}
