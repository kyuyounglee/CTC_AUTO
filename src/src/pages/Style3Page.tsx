// ============================================================
// Style 3: 카드 그룹 (Card Grouped Style)
// ============================================================

import { 
  PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';

export function Style3Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fafafa' }}>
      
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: '#111827' }}>R&D 현황 대시보드</h1>
        <select style={{ padding: '6px 32px 6px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 13 }}>
          <option>최근 90일</option>
        </select>
      </div>

      <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 16, flex: 1, minHeight: 0 }}>
          
          {/* 1. 프로젝트 현황 */}
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#2563eb', marginBottom: 16 }}>프로젝트 현황</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 8 }}>7<span style={{ fontSize: 14, fontWeight: 500, color: '#6b7280', marginLeft: 4 }}>개 진행중</span></div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={[{name: 'Status', 정상: 4, 지연: 2, 완료: 1}]} margin={{ top: 0, right: 0, left: -20, bottom: -10 }}>
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" hide />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="정상" stackId="a" fill="#16a34a" barSize={30} />
                  <Bar dataKey="지연" stackId="a" fill="#ef4444" />
                  <Bar dataKey="완료" stackId="a" fill="#3b82f6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 2. 품질 & 시험 */}
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>품질 & 시험 PASS율</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 16 }}>92%</div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[{v:80},{v:82},{v:85},{v:89},{v:90},{v:92}]} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <YAxis domain={[70, 100]} hide />
                  <Line type="monotone" dataKey="v" stroke="#0891b2" strokeWidth={3} dot={{r:4}} activeDot={{r:6}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3. 요구사항 관리 */}
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 8 }}>요구사항 승인율</div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1, height: '100%', minHeight: 0, position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{v:78, c:'#16a34a'},{v:22, c:'#e5e7eb'}]} dataKey="v" cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" strokeWidth={0} label={({percent}) => percent > 0.1 ? `${(percent*100).toFixed(0)}%` : ''} labelLine={false}>
                      {[{c:'#16a34a'},{c:'#e5e7eb'}].map((d, i) => <Cell key={i} fill={d.c} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: '#6b7280', paddingLeft: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>총</span><b style={{ color: '#111827' }}>1,284</b></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>승인</span><b style={{ color: '#16a34a' }}>1,002</b></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>미승인</span><b style={{ color: '#ef4444' }}>282</b></div>
              </div>
            </div>
          </div>

          {/* 4. 기술 & 특허 */}
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>기술 & 특허 출원 추이</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 16 }}>25<span style={{ fontSize: 14, fontWeight: 500, color: '#6b7280' }}>건 누적</span></div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[{m:'3월', v:2}, {m:'4월', v:5}, {m:'5월', v:8}, {m:'6월', v:4}, {m:'7월', v:6}]} margin={{ top: 0, right: 0, left: -20, bottom: -10 }}>
                  <XAxis dataKey="m" tick={{fontSize: 10}} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Bar dataKey="v" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 5. 신뢰성 (RAMS&SIL) */}
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>신뢰성 (RAMS) 평가도</div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={[
                  { subject: 'Reliability', A: 90, fullMark: 100 },
                  { subject: 'Availability', A: 85, fullMark: 100 },
                  { subject: 'Maintainability', A: 75, fullMark: 100 },
                  { subject: 'Safety', A: 95, fullMark: 100 },
                ]}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{fontSize: 10, fill: '#6b7280'}} />
                  <Radar name="RAMS" dataKey="A" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 6. 형상 & 변경 */}
          <div className="panel-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>변경 요청(CR) 추이</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 16 }}>82<span style={{ fontSize: 14, fontWeight: 500, color: '#6b7280' }}>건</span></div>
            <div style={{ flex: 1, minHeight: 0 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={[{m:'1주', v:4}, {m:'2주', v:12}, {m:'3주', v:8}, {m:'4주', v:18}, {m:'5주', v:15}]} margin={{ top: 0, right: 0, left: -20, bottom: -10 }}>
                  <defs>
                    <linearGradient id="colorCr" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="m" tick={{fontSize: 10}} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Area type="monotone" dataKey="v" stroke="#ec4899" fillOpacity={1} fill="url(#colorCr)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
