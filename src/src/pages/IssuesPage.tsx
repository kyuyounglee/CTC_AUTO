// ============================================================
// 이슈 & 리스크 페이지
// ============================================================

import { useState } from 'react';
import { TopBar } from '../components/layout/TopBar';
import { AiInsightPanel } from '../features/dashboard/components/AiInsightPanel';

const ALL_RISKS = [
  { id: 'R001', severity: 'critical', project: 'ETCS L2', type: 'SIL 미충족', desc: 'Safety Case 보완 요청 미이행 — SIL 4 달성 불확실', date: '2025-08-10', impact: '높음', owner: '김안전', status: '조치중' },
  { id: 'R002', severity: 'high',     project: 'ATP SW',  type: '요구사항 미반영', desc: 'ATP 인터페이스 요구사항 #REQ-224 설계 미반영', date: '2025-08-08', impact: '중간', owner: '이요구', status: '검토중' },
  { id: 'R003', severity: 'high',     project: '차세대 신호', type: '일정 지연', desc: '핵심 부품 납기 2주 지연으로 시험 일정 영향', date: '2025-08-05', impact: '중간', owner: '박PM', status: '계획수립' },
  { id: 'R004', severity: 'medium',   project: 'ETCS L2', type: '시험 실패율 상승', desc: '통합 시험 FAIL 비율 8% → 12% 급증', date: '2025-08-03', impact: '중간', owner: '정시험', status: '분석중' },
  { id: 'R005', severity: 'medium',   project: 'ATP SW',  type: '인력 부족', desc: 'SW 개발 핵심 인력 2명 이탈로 진행률 저하', date: '2025-07-28', impact: '중간', owner: '최PM', status: '대응중' },
  { id: 'R006', severity: 'medium',   project: '통합관제', type: '규격 개정', desc: 'IEC 62280 Rev.3 발효 — 규격 적합성 재검토 필요', date: '2025-07-25', impact: '낮음', owner: '한규격', status: '검토예정' },
  { id: 'R007', severity: 'low',      project: 'ETCS L2', type: '문서 지연', desc: '시험 성적서 12건 작성 지연', date: '2025-07-20', impact: '낮음', owner: '오문서', status: '진행중' },
  { id: 'R008', severity: 'low',      project: '차세대 신호', type: '특허 심사 지연', desc: '3건 특허 심사 결과 예상보다 2개월 지연', date: '2025-07-15', impact: '낮음', owner: '윤IP', status: '모니터링' },
];

const SEVERITY_ORDER = ['critical', 'high', 'medium', 'low'];
const SEVERITY_CONFIG = {
  critical: { label: 'CRITICAL', cls: 'badge-crit', rowCls: 'critical', color: '#b91c1c' },
  high:     { label: 'HIGH',     cls: 'badge-warn', rowCls: 'high',     color: '#c2410c' },
  medium:   { label: 'MEDIUM',   cls: 'badge-warn', rowCls: 'medium',   color: '#b45309' },
  low:      { label: 'LOW',      cls: 'badge-ok',   rowCls: 'low',      color: '#15803d' },
};

export function IssuesPage() {
  const [filter, setFilter] = useState<string>('all');
  const filtered = filter === 'all' ? ALL_RISKS : ALL_RISKS.filter((r) => r.severity === filter);

  return (
    <>
      <TopBar title="이슈 & 리스크" subtitle="Risk Management" />
      <div className="content-area">
        {/* 요약 카운터 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
          {SEVERITY_ORDER.map((sev) => {
            const cfg = SEVERITY_CONFIG[sev as keyof typeof SEVERITY_CONFIG];
            const count = ALL_RISKS.filter((r) => r.severity === sev).length;
            return (
              <button
                key={sev}
                className="kpi-card"
                style={{ cursor: 'pointer', textAlign: 'left', border: filter === sev ? `2px solid ${cfg.color}` : undefined }}
                onClick={() => setFilter(filter === sev ? 'all' : sev)}
              >
                <div className="kpi-label">{cfg.label}</div>
                <div className="kpi-value" style={{ color: cfg.color, fontSize: 36 }}>{count}</div>
                <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 4 }}>건</div>
              </button>
            );
          })}
        </div>

        {/* 메인 그리드: 리스크 목록 + AI Insight */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 14, alignItems: 'start' }}>
          {/* 리스크 목록 */}
          <div className="panel-card">
            <div className="panel-header">
              <div className="panel-title">
                리스크 목록
                <span className="badge badge-neutral" style={{ marginLeft: 8 }}>{filtered.length}건</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['all', 'critical', 'high', 'medium', 'low'].map((f) => (
                  <button
                    key={f}
                    className="filter-btn"
                    style={{
                      fontSize: 10,
                      padding: '3px 8px',
                      background: filter === f ? '#2563eb' : '#f9fafb',
                      color: filter === f ? '#fff' : '#374151',
                      borderColor: filter === f ? '#2563eb' : '#e5e7eb',
                    }}
                    onClick={() => setFilter(f)}
                  >
                    {f === 'all' ? '전체' : f.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ padding: '12px 16px' }}>
              {filtered.map((risk) => {
                const cfg = SEVERITY_CONFIG[risk.severity as keyof typeof SEVERITY_CONFIG];
                return (
                  <div key={risk.id} className={`risk-row ${cfg.rowCls}`} style={{ marginBottom: 8 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 64 }}>
                      <span className={`badge ${cfg.cls}`} style={{ fontSize: 9, justifyContent: 'center' }}>{cfg.label}</span>
                      <span style={{ fontSize: 9, color: '#9ca3af', textAlign: 'center' }}>{risk.id}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>[{risk.project}] {risk.type}</div>
                      <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2, lineHeight: 1.4 }}>{risk.desc}</div>
                      <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 4 }}>
                        {risk.date} · 영향도 {risk.impact} · 담당: {risk.owner}
                      </div>
                    </div>
                    <span className={`badge ${risk.status === '조치중' ? 'badge-warn' : risk.status === '검토중' ? 'badge-info' : 'badge-neutral'}`} style={{ flexShrink: 0 }}>
                      {risk.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Insight */}
          <AiInsightPanel />
        </div>
      </div>
    </>
  );
}
