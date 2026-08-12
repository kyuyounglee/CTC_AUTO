// ============================================================
// 스켈레톤 로딩 카드
// ============================================================

export function SkeletonCard() {
  return (
    <div className="panel-card h-full">
      {/* 헤더 */}
      <div className="panel-header">
        <div className="flex items-center gap-2 flex-1">
          <div className="skeleton h-3 w-4 rounded" />
          <div className="skeleton h-3 w-24 rounded" />
        </div>
        <div className="skeleton h-4 w-12 rounded-full" />
      </div>

      {/* 본문 */}
      <div className="p-3 flex flex-col gap-2">
        <div className="skeleton h-7 w-16 rounded" />
        <div className="skeleton h-2 w-20 rounded" />
        <div className="skeleton h-[80px] w-full rounded mt-1" />
        <div className="space-y-1 mt-1">
          <div className="skeleton h-2.5 w-full rounded" />
          <div className="skeleton h-2.5 w-3/4 rounded" />
          <div className="skeleton h-2.5 w-4/5 rounded" />
        </div>
      </div>
    </div>
  );
}
