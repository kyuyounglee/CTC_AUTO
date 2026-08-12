// ============================================================
// 프로젝트 현황 페이지
// ============================================================

import { TopBar } from '../components/layout/TopBar';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const PROJECTS_DETAIL = [
  { name: 'ETCS L2 고속선', status: 'normal', progress: 82, budget: 74, team: 18, issues: 4, milestone: '검증 시험 착수', dueDate: '2025-12-31', pm: '김영철' },
  { name: 'ATP SW 개선', status: 'delayed', progress: 48, budget: 52, team: 12, issues: 9, milestone: '설계 검토 (지연 7일)', dueDate: '2025-09-30', pm: '이수진' },
  { name: '차세대 신호시스템', status: 'normal', progress: 72, budget: 68, team: 24, issues: 2, milestone: '시제품 시험', dueDate: '2026-03-31', pm: '박준호' },
  { name: '통합관제 시스템', status: 'completed', progress: 90, budget: 95, team: 8, issues: 0, milestone: '최종 검수', dueDate: '2025-07-31', pm: '최민아' },
];

const STATUS_CONFIG = {
  normal: { label: '정상', cls: 'badge-ok', color: '#2563eb' },
  delayed: { label: '지연', cls: 'badge-crit', color: '#ef4444' },
  completed: { label: '완료', cls: 'badge-info', color: '#0891b2' },
};

const MONTHLY_DATA = [
  { month: '3월', 완료: 28, 지연: 3, 신규: 5 },
  { month: '4월', 완료: 32, 지연: 4, 신규: 3 },
  { month: '5월', 완료: 35, 지연: 2, 신규: 6 },
  { month: '6월', 완료: 40, 지연: 3, 신규: 4 },
  { month: '7월', 완료: 44, 지연: 2, 신규: 5 },
  { month: '8월', 완료: 48, 지연: 1, 신규: 3 },
];

export function ProjectsPage() {
  return (
    <>
      <TopBar title="프로젝트 현황" subtitle="Project Portfolio" />
      <div className="content-area">
        {/* 상단 요약 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
          {[
            { label: '전체 프로젝트', value: '7개', color: '#2563eb' },
            { label: '정상 진행', value: '4개', color: '#16a34a' },
            { label: '지연', value: '2개', color: '#dc2626' },
            { label: '완료', value: '1개', color: '#0891b2' },
          ].map((item) => (
            <div key={item.label} className="kpi-card">
              <div className="kpi-label">{item.label}</div>
              <div className="kpi-value" style={{ color: item.color, fontSize: 28 }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* 프로젝트 진행률 테이블 */}
        <div className="panel-card" style={{ marginBottom: 14 }}>
          <div className="panel-header">
            <div className="panel-title">프로젝트 진행 현황</div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                  {['프로젝트명', '상태', 'PM', '진행률', '예산', '팀원', '이슈', '마일스톤', '완료 예정'].map((h) => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', color: '#6b7280', fontWeight: 600, fontSize: 11, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROJECTS_DETAIL.map((proj) => {
                  const cfg = STATUS_CONFIG[proj.status as keyof typeof STATUS_CONFIG];
                  return (
                    <tr key={proj.name} style={{ borderBottom: '1px solid #f3f4f6' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: '#111827' }}>{proj.name}</td>
                      <td style={{ padding: '12px 14px' }}><span className={`badge ${cfg.cls}`}>{cfg.label}</span></td>
                      <td style={{ padding: '12px 14px', color: '#374151' }}>{proj.pm}</td>
                      <td style={{ padding: '12px 14px', minWidth: 140 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div className="project-bar-track" style={{ flex: 1 }}>
                            <div className="project-bar-fill" style={{ width: `${proj.progress}%`, background: cfg.color }} />
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 700, color: cfg.color, minWidth: 30 }}>{proj.progress}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '12px 14px', color: proj.budget > 90 ? '#dc2626' : '#374151', fontWeight: 600 }}>{proj.budget}%</td>
                      <td style={{ padding: '12px 14px', color: '#374151' }}>{proj.team}명</td>
                      <td style={{ padding: '12px 14px' }}>
                        <span style={{ color: proj.issues > 5 ? '#dc2626' : '#374151', fontWeight: proj.issues > 5 ? 700 : 400 }}>{proj.issues}건</span>
                      </td>
                      <td style={{ padding: '12px 14px', color: '#6b7280', fontSize: 11 }}>{proj.milestone}</td>
                      <td style={{ padding: '12px 14px', color: '#6b7280', fontSize: 11 }}>{proj.dueDate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 차트 영역 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div className="panel-card">
            <div className="panel-header"><div className="panel-title">월별 작업 현황</div></div>
            <div className="panel-body">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={MONTHLY_DATA} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#9ca3af' }} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6 }} />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar dataKey="완료" fill="#2563eb" radius={[3, 3, 0, 0]} barSize={14} />
                  <Bar dataKey="지연" fill="#ef4444" radius={[3, 3, 0, 0]} barSize={14} />
                  <Bar dataKey="신규" fill="#e5e7eb" radius={[3, 3, 0, 0]} barSize={14} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="panel-card">
            <div className="panel-header"><div className="panel-title">프로젝트 진행률 분포</div></div>
            <div className="panel-body">
              <div style={{ padding: '8px 0' }}>
                {['0~20%', '20~40%', '40~60%', '60~80%', '80~100%'].map((range, i) => {
                  const widths = [0, 0, 14, 29, 57];
                  return (
                    <div key={range} style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                        <span style={{ color: '#6b7280' }}>{range}</span>
                        <span style={{ fontWeight: 600, color: '#374151' }}>{widths[i]}%</span>
                      </div>
                      <div className="project-bar-track">
                        <div className="project-bar-fill" style={{ width: `${widths[i]}%`, background: '#2563eb' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
