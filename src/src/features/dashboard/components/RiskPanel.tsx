// ============================================================
// 리스크 & 이슈 패널
// ============================================================

import { useNavigate } from 'react-router-dom';
import type { AlertItem } from '../types';

interface Props {
  alerts: AlertItem[];
}

const RISK_COUNTS = {
  critical: 1,
  high: 2,
  medium: 6,
  low: 9,
};

const SAMPLE_RISKS = [
  {
    severity: 'critical' as const,
    project: 'ETCS L2',
    type: 'SIL 미충족',
    date: '2025-08-10',
    impact: '고',
    owner: '김안전',
    status: '조치중',
  },
  {
    severity: 'high' as const,
    project: 'ATP SW',
    type: '요구사항 미반영',
    date: '2025-08-08',
    impact: '중',
    owner: '이요구',
    status: '검토중',
  },
  {
    severity: 'high' as const,
    project: '차세대 신호',
    type: '일정 지연',
    date: '2025-08-05',
    impact: '중',
    owner: '박PM',
    status: '계획수립',
  },
];

export function RiskPanel({ alerts: _alerts }: Props) {
  const navigate = useNavigate();

  return (
    <div className="panel-card" style={{ height: '100%' }}>
      <div className="panel-header">
        <div>
          <div className="panel-title">핵심 리스크</div>
          <div className="panel-subtitle">Critical {RISK_COUNTS.critical} · High {RISK_COUNTS.high}</div>
        </div>
        <button className="panel-action" onClick={() => navigate('/issues')}>
          전체 보기 →
        </button>
      </div>

      <div className="panel-body">
        {/* 요약 카운터 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 14 }}>
          {[
            { label: 'CRITICAL', count: RISK_COUNTS.critical, color: '#b91c1c', bg: '#fef2f2' },
            { label: 'HIGH', count: RISK_COUNTS.high, color: '#c2410c', bg: '#fff7ed' },
            { label: 'MEDIUM', count: RISK_COUNTS.medium, color: '#b45309', bg: '#fffbeb' },
            { label: 'LOW', count: RISK_COUNTS.low, color: '#15803d', bg: '#f0fdf4' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: item.bg,
                borderRadius: 6,
                padding: '8px 10px',
                textAlign: 'center',
                border: `1px solid ${item.color}22`,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 800, color: item.color, lineHeight: 1 }}>{item.count}</div>
              <div style={{ fontSize: 9, color: item.color, fontWeight: 700, marginTop: 2, letterSpacing: '0.05em' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* 리스크 목록 */}
        {SAMPLE_RISKS.map((risk, i) => (
          <div key={i} className={`risk-row ${risk.severity}`} role="listitem">
            <span className="risk-severity">{risk.severity.toUpperCase()}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                [{risk.project}] {risk.type}
              </div>
              <div style={{ fontSize: 10, color: '#6b7280', marginTop: 1 }}>
                {risk.date} · 영향도 {risk.impact} · {risk.owner}
              </div>
            </div>
            <span className={`badge ${risk.severity === 'critical' ? 'badge-crit' : risk.severity === 'high' ? 'badge-warn' : 'badge-info'}`} style={{ flexShrink: 0 }}>
              {risk.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
