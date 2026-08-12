// ============================================================
// 개요 요약 카드 3개 — 요구사항/설계개발/시험
// (이미지 ① 하단 3분할 영역)
// ============================================================

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';

// 요구사항 도넛
function RequirementsCard() {
  const navigate = useNavigate();
  const data = [
    { name: '추적완료', value: 1002, fill: '#2563eb' },
    { name: '미승인', value: 282, fill: '#e5e7eb' },
  ];
  return (
    <div className="panel-card h-full">
      <div className="panel-header">
        <div>
          <div className="panel-title">요구사항 현황</div>
          <div className="panel-subtitle">총 1,284건</div>
        </div>
        <button className="panel-action" onClick={() => navigate('/domain/requirements')}>상세 →</button>
      </div>
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
        {/* 도넛 */}
        <div style={{ width: '55%', height: '100%', minHeight: 160, flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={data} dataKey="value" cx="50%" cy="50%" 
                innerRadius="40%" outerRadius="85%" 
                startAngle={90} endAngle={-270} strokeWidth={0}
                label={({ percent }: any) => `${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* 수치 */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#2563eb', letterSpacing: '-0.03em' }}>78%</div>
          <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 10 }}>충족률</div>
          <div style={{ fontSize: 11, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>승인</span>
              <span style={{ fontWeight: 600, color: '#111827' }}>1,002건</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>미승인</span>
              <span style={{ fontWeight: 600, color: '#dc2626' }}>282건</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>변경 요청</span>
              <span style={{ fontWeight: 600, color: '#d97706' }}>6건</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 설계/개발 수평 바
function DesignDevCard() {
  const navigate = useNavigate();
  const data = [
    { name: '시스템설계', value: 92 },
    { name: 'SW 개발', value: 68 },
    { name: '문서화', value: 80 },
  ];
  return (
    <div className="panel-card h-full">
      <div className="panel-header">
        <div>
          <div className="panel-title">설계/개발 진행률</div>
          <div className="panel-subtitle">전체 평균 72%</div>
        </div>
        <button className="panel-action" onClick={() => navigate('/domain/design-dev')}>상세 →</button>
      </div>
      <div className="panel-body">
        <div style={{ fontSize: 26, fontWeight: 800, color: '#111827', letterSpacing: '-0.03em', marginBottom: 2 }}>72%</div>
        <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 10 }}>오픈 이슈 14건</div>
        <div style={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={data} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} unit="%" />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: '#374151' }} tickLine={false} axisLine={false} width={56} />
              <Tooltip contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 8px' }} formatter={(v: any) => [`${v}%`, '']} />
              <Bar dataKey="value" fill="#2563eb" radius={[0, 3, 3, 0]} barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// 시험 결과 도넛
function TestResultCard() {
  const navigate = useNavigate();
  const data = [
    { name: 'PASS', value: 92, fill: '#0891b2' },
    { name: 'FAIL', value: 5, fill: '#ef4444' },
    { name: '미수행', value: 3, fill: '#e5e7eb' },
  ];
  return (
    <div className="panel-card h-full">
      <div className="panel-header">
        <div>
          <div className="panel-title">시험 결과 요약</div>
          <div className="panel-subtitle">총 512건</div>
        </div>
        <button className="panel-action" onClick={() => navigate('/domain/verification')}>상세 →</button>
      </div>
      <div className="panel-body" style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '55%', height: '100%', minHeight: 160, flexShrink: 0, position: 'relative' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie 
                data={data} dataKey="value" cx="50%" cy="50%" 
                innerRadius="40%" outerRadius="85%" 
                startAngle={90} endAngle={-270} strokeWidth={0}
                label={({ percent }: any) => percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : ''}
                labelLine={false}
              >
                {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: '#0891b2', letterSpacing: '-0.03em' }}>92%</div>
          <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 10 }}>PASS율</div>
          <div style={{ fontSize: 11, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>PASS</span>
              <span style={{ fontWeight: 600, color: '#0891b2' }}>512건</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>FAIL</span>
              <span style={{ fontWeight: 600, color: '#dc2626' }}>26건</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>미수행</span>
              <span style={{ fontWeight: 600, color: '#d97706' }}>15건</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OverviewSummaryCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 14, flex: 1, minHeight: 0 }}>
      <RequirementsCard />
      <DesignDevCard />
      <TestResultCard />
    </div>
  );
}
