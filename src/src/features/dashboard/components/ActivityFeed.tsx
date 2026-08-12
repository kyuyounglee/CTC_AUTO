// ============================================================
// 최근 활동 피드
// ============================================================

const ACTIVITIES = [
  { type: 'warning', text: 'ETCS L2 SIL 검토 결과 보완 요청', time: '09:12', date: '오늘' },
  { type: 'success', text: '시험 성적서 #TRS-088 최종 승인', time: '08:45', date: '오늘' },
  { type: 'info',    text: 'ATP SW v2.3.1 기준선 등록 완료', time: '어제', date: '어제' },
  { type: 'warning', text: '요구사항 변경 요청 #CR-024 등록', time: '어제', date: '어제' },
  { type: 'error',   text: '현장 신호기 점등 불량 3건 접수', time: '2일 전', date: '2일 전' },
  { type: 'success', text: '차세대 R&D 로드맵 검토 회의 완료', time: '3일 전', date: '3일 전' },
];

const TYPE_CONFIG = {
  warning: { dot: '#f59e0b', text: '#92400e', badge: '주의', bgBadge: '#fef3c7' },
  success: { dot: '#16a34a', text: '#14532d', badge: '완료', bgBadge: '#dcfce7' },
  info:    { dot: '#2563eb', text: '#1e3a8a', badge: '정보', bgBadge: '#dbeafe' },
  error:   { dot: '#dc2626', text: '#7f1d1d', badge: '알림', bgBadge: '#fee2e2' },
};

export function ActivityFeed() {
  return (
    <div className="panel-card">
      <div className="panel-header">
        <div>
          <div className="panel-title">최근 활동</div>
          <div className="panel-subtitle">최근 7일 주요 이벤트</div>
        </div>
      </div>
      <div className="panel-body" style={{ paddingTop: 4 }}>
        {ACTIVITIES.map((act, i) => {
          const cfg = TYPE_CONFIG[act.type as keyof typeof TYPE_CONFIG];
          return (
            <div key={i} className="activity-item">
              <span
                className="activity-dot"
                style={{ background: cfg.dot }}
                aria-hidden="true"
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: '#111827', lineHeight: 1.4, fontWeight: 500 }}>
                  {act.text}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      padding: '1px 5px',
                      borderRadius: 4,
                      background: cfg.bgBadge,
                      color: cfg.text,
                    }}
                  >
                    {cfg.badge}
                  </span>
                  <span style={{ fontSize: 10, color: '#9ca3af' }}>{act.date} {act.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
