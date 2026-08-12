// ============================================================
// 대시보드 헤더 - 상단 청록색 타이틀 바
// ============================================================

import { useFilterStore } from '../../filters/filterStore';
import { useProjects } from '../hooks/useDashboard';

interface Props {
  updatedAt?: string;
}

function formatTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
}

export function DashboardHeader({ updatedAt }: Props) {
  const { filters, setFilters } = useFilterStore();
  const { data: projects } = useProjects();

  return (
    <header
      style={{ background: 'linear-gradient(135deg, #087A8A 0%, #065A66 100%)' }}
      className="flex-shrink-0"
    >
      <div className="flex items-center justify-between px-4 py-2">
        {/* 좌측: 타이틀 */}
        <div>
          <h1 className="text-white font-bold leading-tight" style={{ fontSize: 15 }}>
            연구소장 R&D 관제 대시보드
            <span
              className="ml-2 font-normal"
              style={{ fontSize: 10, background: 'rgba(255,255,255,0.2)', padding: '1px 6px', borderRadius: 10, verticalAlign: 'middle' }}
            >
              10대 핵심 패널
            </span>
          </h1>
          <p className="text-cyan-200 font-normal" style={{ fontSize: 10, marginTop: 1 }}>
            R&D 전 과정을 한눈에 · 실시간 통합 모니터링
          </p>
        </div>

        {/* 우측: 필터 + 갱신 시각 */}
        <div className="flex items-center gap-3">
          {/* 프로젝트 필터 */}
          <div className="flex items-center gap-1">
            <label className="text-cyan-200 text-[10px]" htmlFor="filter-project">프로젝트</label>
            <select
              id="filter-project"
              className="filter-select"
              value={filters.projectId}
              onChange={(e) => setFilters({ projectId: e.target.value })}
            >
              {projects
                ? projects.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))
                : <option value="all">전체 프로젝트</option>
              }
            </select>
          </div>

          {/* 기간 필터 */}
          <div className="flex items-center gap-1">
            <label className="text-cyan-200 text-[10px]" htmlFor="filter-period">기간</label>
            <select
              id="filter-period"
              className="filter-select"
              value={filters.period}
              onChange={(e) => setFilters({ period: e.target.value as '30d' | '90d' | '1y' })}
              style={{ minWidth: 80 }}
            >
              <option value="30d">최근 30일</option>
              <option value="90d">최근 90일</option>
              <option value="1y">최근 1년</option>
            </select>
          </div>

          {/* 시스템 필터 */}
          <div className="flex items-center gap-1">
            <label className="text-cyan-200 text-[10px]" htmlFor="filter-system">시스템</label>
            <select
              id="filter-system"
              className="filter-select"
              value={filters.systemId}
              onChange={(e) => setFilters({ systemId: e.target.value })}
              style={{ minWidth: 100 }}
            >
              <option value="all">전체 시스템</option>
              <option value="ETCS">ETCS L2</option>
              <option value="ATP">ATP</option>
              <option value="ATC">ATC</option>
              <option value="SCADA">SCADA</option>
            </select>
          </div>

          {/* 갱신 시각 */}
          {updatedAt && (
            <div className="text-right">
              <div className="text-cyan-200" style={{ fontSize: 9 }}>마지막 갱신</div>
              <div className="text-white font-semibold" style={{ fontSize: 11 }}>
                {formatTime(updatedAt)}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
