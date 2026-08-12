// ============================================================
// Style 5: 트렌드 분석 중심 (Analytics Focus Style)
// ============================================================

import {
  Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, AreaChart, Area, ComposedChart
} from 'recharts';

const DYNAMIC_PERFORMANCE_DATA = [
  { month: '3월', '종합 성과 지수': 65, 목표: 70 },
  { month: '4월', '종합 성과 지수': 78, 목표: 72 },
  { month: '5월', '종합 성과 지수': 62, 목표: 74 },
  { month: '6월', '종합 성과 지수': 85, 목표: 76 },
  { month: '7월', '종합 성과 지수': 72, 목표: 78 },
  { month: '8월', '종합 성과 지수': 92, 목표: 80 },
];

const PASS_RATE_DATA = [
  { month: '3월', PASS율: 75, 목표치: 80 },
  { month: '4월', PASS율: 88, 목표치: 82 },
  { month: '5월', PASS율: 81, 목표치: 84 },
  { month: '6월', PASS율: 95, 목표치: 86 },
  { month: '7월', PASS율: 87, 목표치: 88 },
  { month: '8월', PASS율: 96, 목표치: 90 },
];

const REQ_DATA = [
  { month: '3월', 승인: 50, 미승인: 20 },
  { month: '4월', 승인: 65, 미승인: 15 },
  { month: '5월', 승인: 70, 미승인: 25 },
  { month: '6월', 승인: 85, 미승인: 10 },
  { month: '7월', 승인: 90, 미승인: 8 },
  { month: '8월', 승인: 98, 미승인: 5 },
];

const ISSUE_TREND = [
  { month: '3월', 크리티컬: 12, 일반: 24 },
  { month: '4월', 크리티컬: 8, 일반: 22 },
  { month: '5월', 크리티컬: 15, 일반: 19 },
  { month: '6월', 크리티컬: 5, 일반: 16 },
  { month: '7월', 크리티컬: 3, 일반: 14 },
  { month: '8월', 크리티컬: 1, 일반: 18 },
];

const PROGRESS_DIST = [
  { range: '0~20%', 설계: 2, 구현: 0, 검증: 0 },
  { range: '20~40%', 설계: 5, 구현: 2, 검증: 0 },
  { range: '40~60%', 설계: 1, 구현: 8, 검증: 1 },
  { range: '60~80%', 설계: 0, 구현: 4, 검증: 6 },
  { range: '80~100%', 설계: 0, 구현: 1, 검증: 12 },
];

export function Style5Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>
      
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#111827' }}>R&D 트렌드 분석 대시보드</h1>
        <select style={{ padding: '6px 32px 6px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13 }}>
          <option>최근 6개월 (동적)</option>
        </select>
      </div>

      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
        
        {/* 상단 3개 차트 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16, flex: 1, minHeight: 0 }}>
          
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>종합 성과 지수 변동성 (Area)</div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DYNAMIC_PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[50, 100]} tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Line type="monotone" dataKey="목표" stroke="#9ca3af" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  <Area type="monotone" dataKey="종합 성과 지수" stroke="#2563eb" fillOpacity={1} fill="url(#colorPerf)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>시험 PASS율 목표 달성 현황 (Composed)</div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={PASS_RATE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[50, 100]} tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar dataKey="목표치" fill="#e2e8f0" barSize={20} radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="PASS율" stroke="#0891b2" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>요구사항 처리 트렌드 (Stacked Area)</div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REQ_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Area type="monotone" dataKey="승인" stackId="1" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="미승인" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* 하단 3개 차트 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, flex: 1, minHeight: 0 }}>
          
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>크리티컬 이슈 발생 (Stacked Bar)</div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ISSUE_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} cursor={{fill: '#f8fafc'}} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar dataKey="크리티컬" stackId="a" fill="#ef4444" barSize={16} />
                  <Bar dataKey="일반" stackId="a" fill="#94a3b8" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>단계별 프로젝트 분포 (Multi-Bar)</div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={PROGRESS_DIST} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fontSize: 10, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="range" tick={{ fontSize: 10, fill: '#374151' }} tickLine={false} axisLine={false} width={60} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} cursor={{fill: '#f8fafc'}} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar dataKey="설계" fill="#3b82f6" barSize={8} />
                  <Bar dataKey="구현" fill="#10b981" barSize={8} />
                  <Bar dataKey="검증" fill="#f59e0b" barSize={8} radius={[0, 2, 2, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>예측 알림 및 액션 아이템</div>
            
            <div style={{ padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 6, color: '#991b1b', fontSize: 12, marginBottom: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>🚨 크리티컬 이슈 급증 경고</div>
              5월 대비 크리티컬 이슈가 3배 급증(15건)했습니다. 품질 보증팀의 즉각적인 개입이 필요합니다.
            </div>
            
            <div style={{ padding: '12px 16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 6, color: '#166534', fontSize: 12, marginBottom: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>✅ 검증 단계 병목 해소</div>
              검증 단계에 머물러 있던 프로젝트(12건)의 승인율이 98%를 달성하여 병목이 완화되었습니다.
            </div>
            
            <div style={{ padding: '12px 16px', background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 6, color: '#92400e', fontSize: 12 }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>⚠️ 시험 시스템 가동률 초과 예상</div>
              현재 예약률 96%. 내달 신규 진입 프로젝트 수용을 위해 인프라 추가 확보가 필요합니다.
            </div>

            <div style={{ flex: 1 }} />
            
            <div style={{ marginTop: 16, textAlign: 'right' }}>
              <button style={{ color: '#2563eb', fontWeight: 600, fontSize: 13, background: '#eff6ff', padding: '8px 16px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>
                AI 심층 분석 리포트 생성 →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
