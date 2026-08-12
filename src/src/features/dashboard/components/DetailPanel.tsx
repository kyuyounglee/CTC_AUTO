// ============================================================
// 패널 상세 슬라이드 패널
// ============================================================

import { usePanelDetail } from '../hooks/useDashboard';

interface Props {
  panelId: string | null;
  onClose: () => void;
}

const ACTIVITY_TYPE_STYLES = {
  info: { icon: 'ℹ', color: '#0891b2', bg: '#ecfeff' },
  warning: { icon: '▲', color: '#d97706', bg: '#fffbeb' },
  success: { icon: '✓', color: '#059669', bg: '#ecfdf5' },
  error: { icon: '✕', color: '#dc2626', bg: '#fef2f2' },
};

export function DetailPanel({ panelId, onClose }: Props) {
  const isOpen = panelId !== null;
  const { data, isLoading, isError } = usePanelDetail(panelId);

  return (
    <>
      {/* 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* 상세 패널 */}
      <aside
        className={`detail-panel ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={data?.title ?? '패널 상세 정보'}
        aria-hidden={!isOpen}
      >
        {/* 패널 헤더 */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b border-slate-100 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #087A8A 0%, #065A66 100%)' }}
        >
          <h2 className="text-white font-semibold" style={{ fontSize: 13 }}>
            {isLoading ? '로딩 중...' : data?.title ?? '상세 정보'}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-cyan-200 p-1"
            style={{ fontSize: 16, lineHeight: 1 }}
            aria-label="상세 패널 닫기"
          >
            ✕
          </button>
        </div>

        {/* 패널 본문 */}
        <div className="flex-1 overflow-y-auto p-4">
          {isLoading && (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="skeleton h-8 w-full rounded" />
              ))}
            </div>
          )}

          {isError && (
            <div className="text-center py-8 text-slate-400">
              <div style={{ fontSize: 24 }} aria-hidden="true">✕</div>
              <p className="mt-2" style={{ fontSize: 13 }}>데이터를 불러올 수 없습니다</p>
              <p style={{ fontSize: 11 }}>잠시 후 다시 시도해주세요</p>
            </div>
          )}

          {data && !isLoading && (
            <>
              {/* 상세 항목 */}
              <section aria-label="상세 지표">
                <h3 className="font-semibold mb-2" style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  주요 지표
                </h3>
                <div className="space-y-2">
                  {data.details.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start justify-between gap-2 p-2 rounded"
                      style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                    >
                      <div>
                        <div style={{ fontSize: 11, color: '#64748b' }}>{item.label}</div>
                        {item.note && <div style={{ fontSize: 10, color: '#94a3b8' }}>{item.note}</div>}
                      </div>
                      <span
                        className={`status-badge ${item.status ?? 'neutral'}`}
                        style={{ fontSize: 11 }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 최근 활동 */}
              {data.recentActivity.length > 0 && (
                <section aria-label="최근 활동" className="mt-4">
                  <h3 className="font-semibold mb-2" style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    최근 활동
                  </h3>
                  <div className="space-y-2">
                    {data.recentActivity.map((activity, idx) => {
                      const style = ACTIVITY_TYPE_STYLES[activity.type];
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-2 p-2 rounded"
                          style={{ background: style.bg, border: `1px solid ${style.color}22` }}
                        >
                          <span style={{ color: style.color, fontSize: 12, flexShrink: 0 }} aria-hidden="true">
                            {style.icon}
                          </span>
                          <div>
                            <div style={{ fontSize: 11, color: '#1e293b' }}>{activity.description}</div>
                            <div style={{ fontSize: 10, color: '#94a3b8' }}>{activity.date}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </aside>
    </>
  );
}
