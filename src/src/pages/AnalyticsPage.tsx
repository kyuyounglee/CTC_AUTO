// ============================================================
// 트렌드 분석 페이지 — Analytics Focus Style (이미지 ⑤)
// ============================================================

import { TopBar } from '../components/layout/TopBar';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, LineChart, Line,
} from 'recharts';

const HEALTH_TREND = [
  { month: '3월', '종합 성과 지수': 72, 시험PASS: 85, 요구사항: 71 },
  { month: '4월', '종합 성과 지수': 75, 시험PASS: 87, 요구사항: 73 },
  { month: '5월', '종합 성과 지수': 78, 시험PASS: 88, 요구사항: 74 },
  { month: '6월', '종합 성과 지수': 79, 시험PASS: 90, 요구사항: 76 },
  { month: '7월', '종합 성과 지수': 81, 시험PASS: 91, 요구사항: 77 },
  { month: '8월', '종합 성과 지수': 82, 시험PASS: 92, 요구사항: 78 },
];

const ISSUE_TREND = [
  { month: '3월', 오픈이슈: 24, 종결이슈: 18 },
  { month: '4월', 오픈이슈: 22, 종결이슈: 20 },
  { month: '5월', 오픈이슈: 19, 종결이슈: 22 },
  { month: '6월', 오픈이슈: 16, 종결이슈: 19 },
  { month: '7월', 오픈이슈: 14, 종결이슈: 17 },
  { month: '8월', 오픈이슈: 18, 종결이슈: 15 },
];

const PROGRESS_DIST = [
  { range: '0~20%', count: 0 },
  { range: '20~40%', count: 0 },
  { range: '40~60%', count: 1 },
  { range: '60~80%', count: 2 },
  { range: '80~100%', count: 4 },
];

const REQ_TREND = [
  { month: '3월', 승인완료: 940, 미승인: 320 },
  { month: '4월', 승인완료: 960, 미승인: 310 },
  { month: '5월', 승인완료: 975, 미승인: 300 },
  { month: '6월', 승인완료: 985, 미승인: 295 },
  { month: '7월', 승인완료: 995, 미승인: 288 },
  { month: '8월', 승인완료: 1002, 미승인: 282 },
];

const AI_ALERTS = [
  '▲ 프로젝트 B의 일정 지연 가능성 78% — 예상 완료일 준수율 낮음',
  '● 시험 시스템 부족 예상 (9월) — 현재 예약률 92%, 추가 확보 필요',
];

export function AnalyticsPage() {
  return (
    <>
      <TopBar title="트렌드 분석" subtitle="Analytics Dashboard" />
      <div className="content-area">
        {/* 상단 3개 차트 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 14 }}>
          {/* 종합 성과 지수 추이 */}
          <div className="panel-card">
            <div className="panel-header">
              <div className="panel-title">종합 성과 지수 추이</div>
            </div>
            <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#2563eb', lineHeight: 1 }}>82%</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>현재 종합 성과 지수</div>
                </div>
                <div className="kpi-change up" style={{ fontSize: 12 }}>▲ 1% <span style={{ color: '#9ca3af', fontWeight: 400, marginLeft: 2 }}>전월비</span></div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={HEALTH_TREND} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                  <defs>
                    <linearGradient id="grad-h" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[60, 100]} tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6 }} formatter={(v: number) => [`${v}%`, '']} />
                  <Area type="monotone" dataKey="종합 성과 지수" stroke="#2563eb" strokeWidth={2} fill="url(#grad-h)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 시험 PASS 추이 */}
          <div className="panel-card">
            <div className="panel-header"><div className="panel-title">시험 PASS율 추이</div></div>
            <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#0891b2', lineHeight: 1 }}>92%</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>최근 1개월 평균</div>
                </div>
                <div className="kpi-change up" style={{ fontSize: 12 }}>▲ 4%</div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={HEALTH_TREND} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                  <defs>
                    <linearGradient id="grad-p" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0891b2" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#0891b2" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[75, 100]} tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6 }} formatter={(v: number) => [`${v}%`, '']} />
                  <Area type="monotone" dataKey="시험PASS" stroke="#0891b2" strokeWidth={2} fill="url(#grad-p)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 요구사항 승인 추이 */}
          <div className="panel-card">
            <div className="panel-header"><div className="panel-title">요구사항 승인 추이</div></div>
            <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#16a34a', lineHeight: 1 }}>78%</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>요구사항 충족률</div>
                </div>
                <div className="kpi-change up" style={{ fontSize: 12 }}>▲ 3%</div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={HEALTH_TREND} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                  <defs>
                    <linearGradient id="grad-r" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[60, 100]} tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6 }} formatter={(v: number) => [`${v}%`, '']} />
                  <Area type="monotone" dataKey="요구사항" stroke="#16a34a" strokeWidth={2} fill="url(#grad-r)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 하단: 이슈 추이 + 프로젝트 분포 + AI 예측 알림 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
          <div className="panel-card">
            <div className="panel-header"><div className="panel-title">이슈 발생 추이</div></div>
            <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#ef4444', lineHeight: 1 }}>18건</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>8월 신규 오픈 이슈</div>
                </div>
                <div className="kpi-change down" style={{ fontSize: 12, color: '#dc2626' }}>▲ 4건</div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={ISSUE_TREND} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6 }} />
                  <Legend wrapperStyle={{ fontSize: 9 }} />
                  <Bar dataKey="오픈이슈" fill="#ef4444" barSize={14} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="종결이슈" fill="#2563eb" barSize={14} radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-header"><div className="panel-title">프로젝트 진행률 분포</div></div>
            <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: '#374151', lineHeight: 1 }}>57%</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>80% 이상 진행 완료 비율</div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart layout="vertical" data={PROGRESS_DIST} margin={{ top: 4, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 9, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="range" tick={{ fontSize: 9, fill: '#374151' }} tickLine={false} axisLine={false} width={52} />
                  <Tooltip contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6 }} />
                  <Bar dataKey="count" fill="#2563eb" radius={[0, 3, 3, 0]} barSize={12} label={{ position: 'right', fontSize: 10, fill: '#374151' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div className="panel-title">예측 알림</div>
                <span className="badge badge-warn">AI 분석</span>
              </div>
            </div>
            <div className="panel-body">
              {AI_ALERTS.map((alert, i) => (
                <div
                  key={i}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 6,
                    background: '#fffbeb',
                    border: '1px solid #fde68a',
                    marginBottom: 10,
                    fontSize: 11,
                    color: '#78350f',
                    lineHeight: 1.5,
                    cursor: 'pointer',
                  }}
                >
                  {alert}
                </div>
              ))}
              <div style={{ fontSize: 10, color: '#9ca3af', textAlign: 'right' }}>
                <button className="panel-action">상세 분석 보기 →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
