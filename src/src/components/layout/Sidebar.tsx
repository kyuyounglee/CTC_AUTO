// ============================================================
// 좌측 고정 사이드바 네비게이션
// ============================================================

import { NavLink, useLocation } from 'react-router-dom';

const NAV_STRUCTURE = [
  {
    section: '대시보드 6가지 스타일',
    items: [
      { icon: '①', label: '개요 중심 (Executive)', to: '/style1' },
      { icon: '②', label: '탭/도메인 기반 (Tab)', to: '/style2' },
      { icon: '③', label: '카드 그룹 (Grouped)', to: '/style3' },
      { icon: '④', label: '심플 리스트 (List)', to: '/style4' },
      { icon: '⑤', label: '트렌드 분석 (Analytics)', to: '/style5' },
      { icon: '⑥', label: '모바일/반응형 (Mobile)', to: '/style6' },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <nav className="sidebar" aria-label="주 네비게이션">
      {/* 로고 */}
      <div className="sidebar-logo" style={{ padding: '24px 16px', background: 'linear-gradient(to right, #1e3a8a, #0f172a)' }}>
        <div className="sidebar-logo-title" style={{ fontSize: 18, color: '#fff' }}>R&D HUB</div>
        <div className="sidebar-logo-sub" style={{ color: '#93c5fd' }}>Style Explorer</div>
      </div>

      {/* 네비게이션 항목 */}
      {NAV_STRUCTURE.map((group, gi) => (
        <div key={gi}>
          {group.section && (
            <div className="sidebar-section-label" style={{ marginTop: 10 }}>{group.section}</div>
          )}
          {!group.section && <div style={{ height: 10 }} />}
          {group.items.map((item) => {
            const isActive = location.pathname.startsWith(item.to);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`sidebar-item${isActive ? ' active' : ''}`}
                style={{ padding: '10px 16px', fontSize: 13 }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="sidebar-icon" style={{ fontSize: 14 }} aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
