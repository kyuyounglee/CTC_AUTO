// ============================================================
// 프로젝트 포트폴리오 — Gantt 스타일 진행률
// ============================================================

import { useNavigate } from 'react-router-dom';

interface Project {
  name: string;
  progress: number;
  status: 'normal' | 'delayed' | 'completed';
  milestone: string;
  budget: number;
}

const PROJECTS: Project[] = [
  { name: 'ETCS L2 고속선 개발', progress: 82, status: 'normal', milestone: '검증 시험 착수', budget: 74 },
  { name: 'ATP SW 개선 프로젝트', progress: 48, status: 'delayed', milestone: '설계 검토 (지연 7일)', budget: 52 },
  { name: '차세대 신호시스템', progress: 72, status: 'normal', milestone: '시제품 시험', budget: 68 },
  { name: '통합관제 시스템', progress: 90, status: 'completed', milestone: '최종 검수 완료', budget: 95 },
];

const STATUS_CONFIG = {
  normal: { label: '정상', cls: 'badge-ok', barColor: '#2563eb' },
  delayed: { label: '지연', cls: 'badge-crit', barColor: '#ef4444' },
  completed: { label: '완료', cls: 'badge-info', barColor: '#0891b2' },
};

export function ProjectPortfolio() {
  const navigate = useNavigate();

  return (
    <div className="panel-card" style={{ height: '100%' }}>
      <div className="panel-header">
        <div>
          <div className="panel-title">프로젝트 진행 현황</div>
          <div className="panel-subtitle">4개 진행 중 · 1개 지연</div>
        </div>
        <button
          className="panel-action"
          onClick={() => navigate('/projects')}
          aria-label="프로젝트 전체 보기"
        >
          전체 보기 →
        </button>
      </div>

      <div className="panel-body">
        {PROJECTS.map((proj) => {
          const cfg = STATUS_CONFIG[proj.status];
          return (
            <div key={proj.name} className="project-row">
              {/* 프로젝트명 + 상태 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>{proj.name}</span>
                  <span className={`badge ${cfg.cls}`}>{cfg.label}</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#374151' }}>{proj.progress}%</span>
              </div>

              {/* 진행 바 */}
              <div className="project-bar-track">
                <div
                  className="project-bar-fill"
                  style={{ width: `${proj.progress}%`, background: cfg.barColor }}
                  role="progressbar"
                  aria-valuenow={proj.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${proj.name} 진행률 ${proj.progress}%`}
                />
              </div>

              {/* 마일스톤 + 예산 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                <span style={{ fontSize: 10, color: '#6b7280' }}>● {proj.milestone}</span>
                <span style={{ fontSize: 10, color: '#9ca3af' }}>예산 {proj.budget}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
