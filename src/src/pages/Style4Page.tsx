// ============================================================
// Style 4: 심플 리스트 (Minimal List Style)
// ============================================================

export function Style4Page() {
  const LIST_DATA = [
    { icon: '◎', domain: '기술동향', status: '정상', kpi: '62건 (6건 대비)', change: '▲ 8건', changeType: 'up' },
    { icon: '◈', domain: '요구사항', status: '주의', kpi: '78% 승인율', change: '▼ 3%', changeType: 'down' },
    { icon: '◐', domain: '설계/개발', status: '정상', kpi: '72% 진행률', change: '▲ 5%', changeType: 'up' },
    { icon: '◑', domain: '시험/검증', status: '정상', kpi: '92% PASS율', change: '▲ 2%', changeType: 'up' },
    { icon: '◇', domain: '형상관리', status: '정상', kpi: 'v2.3.1 (347개 품목)', change: '—', changeType: 'neutral' },
    { icon: '★', domain: '특허/IP', status: '정상', kpi: '25건 출원', change: '▲ 3건', changeType: 'up' },
    { icon: '◆', domain: 'RAMS&SIL', status: '주의', kpi: '85% (SIL 4)', change: '▼ 1%', changeType: 'down' },
    { icon: '▶', domain: '프로젝트', status: '주의', kpi: '7개 진행중', change: '1개 지연', changeType: 'down' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>
      
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#111827' }}>R&D 현황 요약</h1>
        <select style={{ padding: '6px 32px 6px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13 }}>
          <option>최근 90일</option>
        </select>
      </div>

      <div style={{ padding: 24, flex: 1, overflowY: 'auto' }}>
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
          {/* 테이블 헤더 */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr 1.5fr 1fr', padding: '16px 24px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb', fontSize: 13, fontWeight: 600, color: '#374151' }}>
            <div>영역</div>
            <div>상태</div>
            <div>핵심 지표</div>
            <div>변화</div>
            <div style={{ textAlign: 'right' }}>작업</div>
          </div>

          {/* 리스트 아이템 */}
          {LIST_DATA.map((item, idx) => (
            <div key={item.domain} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2fr 1.5fr 1fr', padding: '16px 24px', borderBottom: idx === LIST_DATA.length - 1 ? 'none' : '1px solid #f3f4f6', alignItems: 'center', fontSize: 13 }}>
              
              {/* 영역 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 600, color: '#111827' }}>
                <span style={{ fontSize: 16, color: '#6b7280' }}>{item.icon}</span>
                {item.domain}
              </div>

              {/* 상태 */}
              <div>
                <span style={{ 
                  padding: '4px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600,
                  background: item.status === '정상' ? '#dcfce7' : '#fef08a',
                  color: item.status === '정상' ? '#166534' : '#854d0e'
                }}>
                  {item.status}
                </span>
              </div>

              {/* 핵심 지표 */}
              <div style={{ color: '#4b5563' }}>{item.kpi}</div>

              {/* 변화 */}
              <div style={{ 
                color: item.changeType === 'up' ? '#16a34a' : item.changeType === 'down' ? '#dc2626' : '#9ca3af',
                fontWeight: 500 
              }}>
                {item.change}
              </div>

              {/* 작업 */}
              <div style={{ textAlign: 'right' }}>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>상세보기</a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
