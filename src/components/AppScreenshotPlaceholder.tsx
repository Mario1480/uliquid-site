import Image from "next/image";
import { cn } from "@/lib/cn";

type AspectRatio = "16:9" | "4:3" | "1:1";

export type AppScreenshotPlaceholderProps = {
  title: string;
  aspect?: AspectRatio;
  src?: string;
  alt?: string;
  priority?: boolean;
};

const aspectMap: Record<AspectRatio, string> = {
  "16:9": "aspect-[16/9]",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function AppScreenshotPlaceholder({
  title,
  aspect = "16:9",
  src,
  alt,
  priority = false,
}: AppScreenshotPlaceholderProps) {
  const slug = slugify(title);
  const shouldShowImage = Boolean(src);

  return (
    <div
      className={cn(
        "relative rounded-[30px] border border-border/60 bg-[linear-gradient(135deg,hsl(var(--brand-primary)/0.65),hsl(var(--brand-secondary)/0.45),rgba(255,255,255,0.08))] p-[1.5px] shadow-elevated",
        aspectMap[aspect]
      )}
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,hsl(var(--surface-2)/0.98),hsl(var(--surface-1)/0.94))]">
        <div className="flex items-center justify-between border-b border-border/60 bg-bg-alt/80 px-4 py-3 text-xs text-muted">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="font-semibold text-text">{title}</span>
          <span className="hidden text-muted sm:inline">uLiquid</span>
        </div>
        <div className="relative flex h-full w-full flex-1 items-center justify-center">
          {shouldShowImage ? (
            <Image
              src={src!}
              alt={alt ?? `${title} screenshot from the uLiquid app`}
              fill
              priority={priority}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          ) : (
            <div className="grid h-full w-full gap-4 p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                  <div className="h-3 w-24 rounded-full bg-border/70" />
                  <div className="mt-4 h-8 w-28 rounded-lg bg-accent-blue/30" />
                  <div className="mt-3 h-3 w-20 rounded-full bg-border/60" />
                </div>
                <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                  <div className="h-3 w-20 rounded-full bg-border/70" />
                  <div className="mt-4 h-8 w-24 rounded-lg bg-accent-cyan/30" />
                  <div className="mt-3 h-3 w-16 rounded-full bg-border/60" />
                </div>
              </div>
              <div className="grid flex-1 grid-cols-[2fr_1fr] gap-4">
                <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                  <div className="h-3 w-32 rounded-full bg-border/70" />
                  <div className="mt-4 h-28 w-full rounded-xl bg-gradient-to-r from-accent-cyan/20 via-accent-blue/25 to-white/10" />
                  <div className="mt-3 h-3 w-24 rounded-full bg-border/60" />
                </div>
                <div className="flex flex-col gap-3">
                  {["A", "B", "C"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-border/70 bg-background/70 p-3"
                    >
                      <div className="h-3 w-16 rounded-full bg-border/70" />
                      <div className="mt-3 h-6 w-20 rounded-lg bg-accent-blue/25" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                <div className="mb-3 h-3 w-28 rounded-full bg-border/70" />
                <div className="space-y-2">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="h-3 w-full rounded-full bg-border/50" />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-border/60 bg-bg-alt/50 px-4 py-2 text-xs text-muted">
          {src ? "\u00A0" : `Replace with real app screenshot: /public/screens/${slug}.png`}
        </div>
      </div>
    </div>
  );
}

export { slugify };
