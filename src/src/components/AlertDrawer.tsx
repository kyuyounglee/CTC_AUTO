// ============================================================
// 알림 드로어 컴포넌트
// ============================================================

import type { AlertItem } from '../features/dashboard/types';

interface Props {
  isOpen: boolean;
  alerts: AlertItem[];
  onClose: () => void;
}

const SEVERITY_CONFIG = {
  high: { icon: '🔴', label: 'Critical', cls: 'badge-crit' },
  medium: { icon: '🟠', label: 'Warning', cls: 'badge-warn' },
  low: { icon: '🟡', label: 'Notice', cls: 'badge-info' },
};

export function AlertDrawer({ isOpen, alerts, onClose }: Props) {
  return (
    <>
      {isOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.15)', zIndex: 99 }}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`alert-drawer${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="알림 센터"
        aria-hidden={!isOpen}
      >
        {/* 헤더 */}
        <div style={{ padding: '14px 16px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>알림 센터</div>
            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 1 }}>{alerts.length}건의 알림</div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: '#6b7280', lineHeight: 1 }}
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {/* 알림 목록 */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px' }}>
          {alerts.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#9ca3af', padding: '32px 0', fontSize: 12 }}>
              알림이 없습니다
            </div>
          ) : (
            alerts.map((alert) => {
              const cfg = SEVERITY_CONFIG[alert.severity];
              return (
                <div
                  key={alert.id}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 8,
                    marginBottom: 8,
                    border: '1px solid #e5e7eb',
                    background: '#fafafa',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span aria-hidden="true">{cfg.icon}</span>
                    <span className={`badge ${cfg.cls}`}>{cfg.label}</span>
                    <span style={{ fontSize: 10, color: '#9ca3af', marginLeft: 'auto' }}>{alert.createdAt}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#111827', fontWeight: 500, lineHeight: 1.4 }}>{alert.title}</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 3 }}>담당: {alert.owner}</div>
                </div>
              );
            })
          )}
        </div>

        {/* 하단 */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid #e5e7eb' }}>
          <button
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              background: '#f9fafb',
              fontSize: 12,
              color: '#374151',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            전체 알림 보기
          </button>
        </div>
      </aside>
    </>
  );
}
