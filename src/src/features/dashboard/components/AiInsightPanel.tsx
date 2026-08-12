// ============================================================
// AI Insight + 예측 패널
// ============================================================

export function AiInsightPanel() {
  return (
    <div className="ai-insight-card">
      <div className="ai-insight-label">
        <span aria-hidden="true">◉</span>
        AI INSIGHT
      </div>

      <div className="ai-insight-title">
        프로젝트 B(ATP SW)의<br />
        일정 지연 가능성 <span style={{ color: '#f59e0b', fontSize: 16 }}>78%</span>
      </div>

      <div>
        <div style={{ fontSize: 10, color: '#64748b', marginBottom: 6, fontWeight: 600, letterSpacing: '0.05em' }}>주요 원인</div>
        {[
          '요구사항 변경 건수 급증 (+6건/주)',
          '시험 실패율 상승 (8% → 12%)',
          '핵심 부품 납기 2주 지연',
        ].map((reason, i) => (
          <div key={i} className="ai-insight-item">
            <span aria-hidden="true" style={{ color: '#f59e0b', flexShrink: 0 }}>•</span>
            {reason}
          </div>
        ))}
      </div>

      {/* 예측 추이 */}
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: 10, color: '#64748b', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 6 }}>예상 프로젝트 종합 성과 지수</div>
        {[
          { label: '현재', value: '82%', color: '#4ade80' },
          { label: '30일 후', value: '77%', color: '#fbbf24', arrow: '↓' },
          { label: '60일 후', value: '71%', color: '#f87171', arrow: '↓' },
        ].map((item) => (
          <div key={item.label} className="predict-row">
            <span style={{ fontSize: 11, color: '#94a3b8' }}>{item.label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>
              {item.arrow && <span style={{ fontSize: 10, marginRight: 2 }}>{item.arrow}</span>}
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <button className="ai-insight-action" aria-label="AI 권고 조치 보기">
        권고 조치 보기 →
      </button>
    </div>
  );
}
