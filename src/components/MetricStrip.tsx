import { SurfacePanel } from "@/components/SurfacePanel";

type MetricStripItem = {
  label: string;
  value: string;
  detail?: string;
};

type MetricStripProps = {
  items: MetricStripItem[];
};

export function MetricStrip({ items }: MetricStripProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <SurfacePanel key={item.label} tone="muted" className="h-full">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">
            {item.label}
          </p>
          <p className="mt-4 text-2xl font-semibold text-text sm:text-[1.75rem]">{item.value}</p>
          {item.detail ? <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p> : null}
        </SurfacePanel>
      ))}
    </div>
  );
}
