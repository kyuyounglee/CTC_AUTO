// ============================================================
// Style 6: 모바일/반응형 (Mobile Responsive Style)
// ============================================================

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 300,
      height: 600,
      background: '#f9fafb',
      borderRadius: 36,
      border: '8px solid #111827',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }}>
      {/* 노치 */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 120, height: 24, background: '#111827', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, zIndex: 10 }} />
      {children}
    </div>
  );
}

export function Style6Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f1f5f9' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#111827' }}>모바일/반응형 대시보드</h1>
        <span style={{ fontSize: 13, color: '#6b7280' }}>Mobile View Simulation</span>
      </div>

      <div style={{ padding: 40, flex: 1, overflowX: 'auto', display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Frame 1: 메인 지표 */}
        <MobileFrame>
          <div style={{ padding: '40px 20px 20px', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 700 }}>R&D 대시보드</div>
            <div style={{ color: '#6b7280' }}>≡</div>
          </div>
          <div style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: 12, color: '#6b7280' }}>종합 성과 지수</div>
              <div style={{ fontSize: 40, fontWeight: 800, color: '#111827' }}>82%</div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: 11, color: '#6b7280' }}>진행 프로젝트</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>7개</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: 11, color: '#6b7280' }}>시험 PASS율</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>92%</div>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: '#6b7280' }}>오픈 리스크</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#111827' }}>3건</div>
            </div>

            <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>주요 현황</div>
              <div style={{ height: 100 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={[{n:'요구사항', v:78}, {n:'설계', v:72}]}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="n" width={50} tick={{fontSize:10}} axisLine={false} tickLine={false} />
                    <Bar dataKey="v" fill="#2563eb" barSize={12} radius={[0,6,6,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </MobileFrame>

        {/* Frame 2: 프로젝트 */}
        <MobileFrame>
          <div style={{ padding: '40px 20px 20px', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: 12 }}>
            <div style={{ color: '#6b7280' }}>←</div>
            <div style={{ fontWeight: 700 }}>프로젝트</div>
          </div>
          <div style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: 12, color: '#6b7280' }}>진행 현황</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#111827' }}>7<span style={{ fontSize: 16, fontWeight: 500 }}>개 진행중</span></div>
              <div style={{ marginTop: 12, height: 8, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: '70%', height: '100%', background: '#2563eb' }} />
              </div>
            </div>
            
            {[
              { n: 'A 프로젝트', v: '85%' },
              { n: 'B 프로젝트', v: '72%' },
              { n: 'C 프로젝트', v: '90%' },
            ].map(p => (
              <div key={p.n} style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13, fontWeight: 600 }}>
                  <span>{p.n}</span>
                  <span>{p.v}</span>
                </div>
                <div style={{ height: 6, background: '#f1f5f9', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: p.v, height: '100%', background: '#2563eb' }} />
                </div>
              </div>
            ))}
            
            <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: '#2563eb', fontWeight: 600 }}>
              전체 보기 →
            </div>
          </div>
        </MobileFrame>

        {/* Frame 3: 이슈/품질 */}
        <MobileFrame>
          <div style={{ padding: '40px 20px 20px', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: 12 }}>
            <div style={{ color: '#6b7280' }}>←</div>
            <div style={{ fontWeight: 700 }}>시험 현황</div>
          </div>
          <div style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 20, marginBottom: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: '#111827' }}>92%</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 20 }}>PASS율</div>
              <div style={{ width: 120, height: 120, margin: '0 auto' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{v:92, c:'#0891b2'},{v:8, c:'#e5e7eb'}]} dataKey="v" cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" strokeWidth={0}>
                      {[{c:'#0891b2'},{c:'#e5e7eb'}].map((d, i) => <Cell key={i} fill={d.c} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 12, padding: 16, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: 13, color: '#4b5563' }}><span style={{ color: '#0891b2' }}>●</span> PASS</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>512건</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: 13, color: '#4b5563' }}><span style={{ color: '#ef4444' }}>●</span> FAIL</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>26건</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                <span style={{ fontSize: 13, color: '#4b5563' }}><span style={{ color: '#9ca3af' }}>●</span> 미수행</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>15건</span>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: '#2563eb', fontWeight: 600 }}>
              전체 보기 →
            </div>
          </div>
        </MobileFrame>

        {/* Frame 4: 메뉴 */}
        <MobileFrame>
          <div style={{ padding: '40px 20px 20px', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: 12 }}>
            <div style={{ color: '#6b7280' }}>←</div>
            <div style={{ fontWeight: 700 }}>설정/더보기</div>
          </div>
          <div style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              {[
                { i: '📄', l: '보고서' },
                { i: '🔔', l: '알림 설정' },
                { i: '⬇️', l: '데이터 내보내기' },
                { i: '❓', l: '도움말' },
              ].map((m, idx) => (
                <div key={m.l} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderBottom: idx === 3 ? 'none' : '1px solid #f3f4f6' }}>
                  <span style={{ fontSize: 18 }}>{m.i}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#374151' }}>{m.l}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <button style={{ padding: '12px 24px', background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 24, fontSize: 14, fontWeight: 600, color: '#ef4444', cursor: 'pointer' }}>
                ⎋ 로그아웃
              </button>
            </div>
          </div>
        </MobileFrame>

      </div>
    </div>
  );
}
