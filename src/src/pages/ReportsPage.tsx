// ============================================================
// 보고서 페이지 (플레이스홀더)
// ============================================================

import { TopBar } from '../components/layout/TopBar';

export function ReportsPage() {
  return (
    <>
      <TopBar title="보고서" subtitle="Reports" />
      <div className="content-area">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {[
            { icon: '⊡', title: '월간 R&D 현황 보고서', desc: '전체 R&D 지표를 요약한 경영 보고서', date: '2025-08-01', status: '게시됨' },
            { icon: '⊡', title: '분기별 프로젝트 진행 보고서', desc: '프로젝트별 진행률 및 이슈 분석', date: '2025-07-01', status: '게시됨' },
            { icon: '⊡', title: '안전성 분석 보고서 (RAMS)', desc: 'SIL 평가 및 Safety Case 상태', date: '2025-06-15', status: '검토중' },
            { icon: '⊡', title: '특허 포트폴리오 현황', desc: '출원/등록/심사 현황 및 경쟁사 분석', date: '2025-08-05', status: '게시됨' },
            { icon: '⊡', title: '시험 결과 요약 보고서', desc: 'PASS/FAIL 분석 및 재시험 계획', date: '2025-08-10', status: '작성중' },
            { icon: '⊡', title: '기술 동향 모니터링 보고서', desc: '최신 규격·논문·특허 동향 분석', date: '2025-08-08', status: '게시됨' },
          ].map((report) => (
            <div key={report.title} className="panel-card" style={{ cursor: 'pointer' }}>
              <div className="panel-body" style={{ padding: '20px' }}>
                <div style={{ fontSize: 24, marginBottom: 10 }} aria-hidden="true">{report.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{report.title}</div>
                <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 12, lineHeight: 1.5 }}>{report.desc}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10, color: '#9ca3af' }}>{report.date}</span>
                  <span className={`badge ${report.status === '게시됨' ? 'badge-ok' : report.status === '검토중' ? 'badge-warn' : 'badge-info'}`}>{report.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
