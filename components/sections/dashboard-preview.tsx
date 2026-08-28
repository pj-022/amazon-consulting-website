export function DashboardPreview() {
  const bars = [38, 52, 45, 61, 58, 72, 68, 79, 74, 88, 84, 92];

  return (
    <div className="surface-card overflow-hidden p-6 shadow-md">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Vendor Central Program
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">
            Advertising performance overview
          </p>
        </div>
        <div className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
          Last 90 days
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "ROAS", value: "3.8", delta: "+52%" },
          { label: "Ad sales", value: "$1.2M", delta: "+18%" },
          { label: "Waste reduced", value: "$25K", delta: "Monthly" },
        ].map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-border bg-muted/40 p-3"
          >
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {metric.label}
            </p>
            <p className="mt-1 text-lg font-semibold tabular-nums text-foreground">
              {metric.value}
            </p>
            <p className="mt-1 text-xs font-medium text-accent">{metric.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-medium text-muted-foreground">ROAS trend</p>
          <p className="text-xs font-semibold text-foreground">Target: 3.5+</p>
        </div>
        <div className="flex h-28 items-end gap-1.5">
          {bars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-sm bg-primary/10"
              style={{ height: `${height}%` }}
            >
              <div
                className={`h-full w-full rounded-sm ${
                  index >= bars.length - 3 ? "bg-accent" : "bg-primary/50"
                }`}
                style={{ height: `${Math.max(height - 8, 20)}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div className="rounded-lg border border-border p-3">
          <p className="text-muted-foreground">Top campaign type</p>
          <p className="mt-1 font-medium text-foreground">Sponsored Products</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <p className="text-muted-foreground">Next action</p>
          <p className="mt-1 font-medium text-foreground">Reallocate Q4 budget</p>
        </div>
      </div>
    </div>
  );
}
