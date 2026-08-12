// ============================================================
// 트렌드 분석 패널 — Area Chart 시계열
// ============================================================

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

const TREND_DATA = [
  { month: '3월', '종합 성과 지수': 72, 시험PASS: 85, 요구사항충족: 71 },
  { month: '4월', '종합 성과 지수': 75, 시험PASS: 87, 요구사항충족: 73 },
  { month: '5월', '종합 성과 지수': 78, 시험PASS: 88, 요구사항충족: 74 },
  { month: '6월', '종합 성과 지수': 79, 시험PASS: 90, 요구사항충족: 76 },
  { month: '7월', '종합 성과 지수': 81, 시험PASS: 91, 요구사항충족: 77 },
  { month: '8월', '종합 성과 지수': 82, 시험PASS: 92, 요구사항충족: 78 },
];

export function TrendAnalyticsPanel() {
  return (
    <div className="panel-card" style={{ flex: 1, minHeight: 0 }}>
      <div className="panel-header">
        <div>
          <div className="panel-title">R&D 종합 성과 지수 추이</div>
          <div className="panel-subtitle">최근 6개월 핵심 지표 추세</div>
        </div>
        <span style={{ fontSize: 10, color: '#9ca3af' }}>최근 6개월</span>
      </div>
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 8, flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 8px' }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>82%</div>
            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>현재 종합 성과 지수</div>
          </div>
          <div className="kpi-change up" style={{ fontSize: 12 }}>▲ 1% <span style={{ color: '#9ca3af', fontWeight: 400, marginLeft: 2 }}>전월비</span></div>
        </div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={TREND_DATA} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="grad-health" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="grad-pass" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0891b2" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#0891b2" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="grad-req" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#16a34a" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
              <YAxis domain={[60, 100]} tick={{ fontSize: 10, fill: '#9ca3af' }} tickLine={false} axisLine={false} unit="%" />
              <Tooltip
                contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6, padding: '6px 10px' }}
                formatter={(v: any, name: any) => [`${v}%`, name]}
              />
              <Legend wrapperStyle={{ fontSize: 10 }} iconType="circle" iconSize={6} />
              <Area type="monotone" dataKey="종합 성과 지수" stroke="#2563eb" strokeWidth={2} fill="url(#grad-health)" dot={false} activeDot={{ r: 3 }} />
              <Area type="monotone" dataKey="시험PASS" stroke="#0891b2" strokeWidth={2} fill="url(#grad-pass)" dot={false} activeDot={{ r: 3 }} />
              <Area type="monotone" dataKey="요구사항충족" stroke="#16a34a" strokeWidth={2} fill="url(#grad-req)" dot={false} activeDot={{ r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
