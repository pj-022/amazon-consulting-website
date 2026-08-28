const barColors = [
  "#FF6B35",
  "#0EA5E9",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#F43F5E",
  "#FF6B35",
  "#0EA5E9",
  "#8B5CF6",
  "#10B981",
  "#F59E0B",
  "#F43F5E",
];

export function DashboardPreview() {
  const bars = [38, 52, 45, 61, 58, 72, 68, 79, 74, 88, 84, 92];

  const metrics = [
    { label: "ROAS", value: "3.8", delta: "+52%", color: "#FF6B35", bg: "#FFF0E8" },
    { label: "Ad sales", value: "$1.2M", delta: "+18%", color: "#0EA5E9", bg: "#E8F4FF" },
    { label: "Waste reduced", value: "$25K", delta: "Monthly", color: "#10B981", bg: "#E8FFF5" },
  ];

  return (
    <div className="relative rounded-2xl border-2 border-white/60 bg-white/80 p-5 shadow-[0_32px_80px_-24px_rgba(139,92,246,0.35)] backdrop-blur-md">
      <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F43F5E] opacity-80 blur-sm" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] opacity-60 blur-md" />

      <div className="relative mb-5 flex items-center justify-between border-b border-border/60 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">
            Vendor Central Program
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            Advertising performance overview
          </p>
        </div>
        <div className="rounded-full bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] px-3 py-1 text-xs font-semibold text-white">
          Last 90 days
        </div>
      </div>

      <div className="relative grid grid-cols-3 gap-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border p-3"
            style={{ backgroundColor: metric.bg, borderColor: `${metric.color}40` }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: metric.color }}>
              {metric.label}
            </p>
            <p className="mt-1 text-lg font-bold tabular-nums text-foreground">
              {metric.value}
            </p>
            <p className="mt-1 text-xs font-semibold" style={{ color: metric.color }}>
              {metric.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-4 rounded-xl border border-border/60 bg-white/70 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold text-muted-foreground">ROAS trend</p>
          <p className="rounded-full bg-[#E8FFF5] px-2 py-0.5 text-xs font-semibold text-[#047857]">
            Target: 3.5+
          </p>
        </div>
        <div className="flex h-28 items-end gap-1.5">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-md opacity-90 transition-transform hover:scale-y-105"
              style={{
                height: `${height}%`,
                backgroundColor: barColors[index],
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-xl border border-[#0EA5E9]/30 bg-[#E8F4FF] p-3">
          <p className="font-medium text-[#0369A1]">Top campaign type</p>
          <p className="mt-1 font-semibold text-foreground">Sponsored Products</p>
        </div>
        <div className="rounded-xl border border-[#F59E0B]/30 bg-[#FFF8E8] p-3">
          <p className="font-medium text-[#B45309]">Next action</p>
          <p className="mt-1 font-semibold text-foreground">Reallocate Q4 budget</p>
        </div>
      </div>
    </div>
  );
}
