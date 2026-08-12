// ============================================================
// Style 2: 탭/도메인 기반 (Domain Tab Style)
// ============================================================

export function Style2Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f8fafc' }}>
      
      {/* 탭 바 */}
      <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', background: '#fff', padding: '0 24px' }}>
        {[
          { label: '개요', icon: '▣', active: true },
          { label: '기술동향', icon: '◎' },
          { label: '요구사항', icon: '◈' },
          { label: '설계/개발', icon: '◐' },
          { label: '시험/검증', icon: '◑' },
          { label: '형상관리', icon: '◇' },
          { label: '특허/IP', icon: '★' },
          { label: 'R&D 관리', icon: '⊡' },
        ].map(tab => (
          <div key={tab.label} style={{ 
            padding: '16px 20px', 
            fontSize: 13, 
            fontWeight: tab.active ? 700 : 500,
            color: tab.active ? '#2563eb' : '#6b7280',
            borderBottom: tab.active ? '2px solid #2563eb' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer'
          }}>
            <span style={{ fontSize: 14 }}>{tab.icon}</span>
            {tab.label}
          </div>
        ))}
      </div>

      <div style={{ padding: 24, flex: 1, overflowY: 'auto' }}>
        {/* 내부 헤더 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: '#111827' }}>R&D 대시보드 개요</h2>
          <select style={{ padding: '4px 32px 4px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 12 }}>
            <option>최근 90일</option>
          </select>
        </div>

        {/* 상단 4개 KPI */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 20 }}>
          {[
            { label: '종합 성과 지수', value: '82%', change: '▲ 5%', color: '#111827' },
            { label: '진행 프로젝트', value: '7개', change: '▲ 1', color: '#111827' },
            { label: '시험 PASS율', value: '92%', change: '▲ 4%', color: '#111827' },
            { label: '오픈 리스크', value: '3건', change: '▼ 1', color: '#111827' },
          ].map(kpi => (
            <div key={kpi.label} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '16px' }}>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 8 }}>{kpi.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 28, fontWeight: 800, color: kpi.color }}>{kpi.value}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: kpi.change.includes('▲') ? '#16a34a' : '#dc2626' }}>{kpi.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 프로젝트 Gantt 차트 */}
        <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <div style={{ padding: '16px', borderBottom: '1px solid #f3f4f6', fontWeight: 700, fontSize: 14 }}>프로젝트 진행 현황</div>
          <div style={{ padding: '16px 24px' }}>
            {/* 헤더 */}
            <div style={{ display: 'grid', gridTemplateColumns: '150px 80px 1fr', fontSize: 11, color: '#6b7280', borderBottom: '1px solid #f3f4f6', paddingBottom: 8, marginBottom: 16 }}>
              <div>프로젝트</div>
              <div>진행률</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 40 }}>
                <span>3월</span><span>4월</span><span>5월</span><span>6월</span><span>7월</span><span>8월</span>
              </div>
            </div>

            {/* 행 */}
            {[
              { name: 'A 프로젝트', p: '85%', w: '40%', l: '10%' },
              { name: 'B 프로젝트', p: '72%', w: '30%', l: '35%' },
              { name: 'C 프로젝트', p: '90%', w: '50%', l: '20%' },
              { name: 'D 프로젝트', p: '65%', w: '35%', l: '40%' },
            ].map(proj => (
              <div key={proj.name} style={{ display: 'grid', gridTemplateColumns: '150px 80px 1fr', fontSize: 12, marginBottom: 16, alignItems: 'center' }}>
                <div style={{ color: '#374151', fontWeight: 500 }}>{proj.name}</div>
                <div style={{ color: '#111827', fontWeight: 700 }}>{proj.p}</div>
                <div style={{ position: 'relative', height: 24, background: '#f1f5f9', borderRadius: 12 }}>
                  <div style={{ position: 'absolute', left: proj.l, width: proj.w, height: '100%', background: '#2563eb', borderRadius: 12 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
