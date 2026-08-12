// ============================================================
// 하단 상태 바
// ============================================================

import type { AlertItem } from '../types';

interface Props {
  alerts: AlertItem[];
  testRecordsCount?: number;
  specChangesCount?: number;
  onDownload?: () => void;
}

export function StatusBar({ alerts, testRecordsCount = 12, specChangesCount = 2, onDownload }: Props) {
  const highRiskCount = alerts.filter((a) => a.severity === 'high').length;
  const mediumRiskCount = alerts.filter((a) => a.severity === 'medium').length;

  return (
    <div className="status-bar" role="complementary" aria-label="대시보드 상태 바">
      {/* 고위험 이슈 */}
      <div
        className={`status-bar-item ${highRiskCount > 0 ? 'critical' : 'normal'}`}
        role="alert"
        aria-live="polite"
        aria-label={`고위험 이슈 ${highRiskCount}건`}
        title="고위험 이슈 목록"
      >
        <span className="status-dot" aria-hidden="true" />
        <span aria-hidden="true">▲</span>
        <span>고위험 이슈</span>
        <strong style={{ color: highRiskCount > 0 ? '#fca5a5' : '#67e8f9' }}>{highRiskCount}건</strong>
        {mediumRiskCount > 0 && (
          <span style={{ color: '#fde68a', fontSize: 10 }}>+{mediumRiskCount} 중위험</span>
        )}
      </div>

      {/* 시험 성적서 */}
      <div
        className="status-bar-item normal"
        aria-label={`시험 성적서 ${testRecordsCount}건 처리 대기`}
        title="시험 성적서 처리 현황"
      >
        <span className="status-dot" aria-hidden="true" />
        <span aria-hidden="true">◷</span>
        <span>시험 성적서</span>
        <strong style={{ color: '#67e8f9' }}>{testRecordsCount}건</strong>
        <span style={{ color: '#94a3b8', fontSize: 10 }}>처리 대기</span>
      </div>

      {/* 규격 개정 알림 */}
      <div
        className={`status-bar-item ${specChangesCount > 0 ? 'warning' : 'normal'}`}
        aria-label={`규격 개정 ${specChangesCount}건`}
        title="규격 개정 알림"
      >
        <span className="status-dot" aria-hidden="true" />
        <span aria-hidden="true">▣</span>
        <span>규격 개정</span>
        <strong style={{ color: specChangesCount > 0 ? '#fde68a' : '#67e8f9' }}>{specChangesCount}건</strong>
        <span style={{ color: '#94a3b8', fontSize: 10 }}>알림</span>
      </div>

      {/* 보고서 다운로드 */}
      <div
        className="status-bar-item normal"
        role="button"
        tabIndex={0}
        onClick={onDownload}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onDownload?.(); }}
        aria-label="R&D 현황 보고서 다운로드"
        title="보고서 다운로드"
        style={{ cursor: 'pointer' }}
      >
        <span aria-hidden="true">⬇</span>
        <span>보고서 다운로드</span>
      </div>
    </div>
  );
}
