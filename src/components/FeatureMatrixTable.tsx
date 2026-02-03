const featureRows = [
  {
    feature: "Market Making",
    included: "✅",
    notes: "Multi-level, skew, jitter",
  },
  {
    feature: "Fill-Based Volume Bot",
    included: "✅",
    notes: "Real fills only",
  },
  {
    feature: "Price Follow",
    included: "Add-on",
    notes: "Master / Slave",
  },
  {
    feature: "Price Support",
    included: "Add-on",
    notes: "License-gated",
  },
  {
    feature: "Supported CEX (current)",
    included: "✅",
    notes: "Bitmart, Coinstore, Pionex",
  },
  {
    feature: "DEX Price Feed",
    included: "Add-on",
    notes: "On-chain reference price feed (read-only)",
  },
  {
    feature: "Manual Trading",
    included: "✅",
    notes: "Role-gated",
  },
  {
    feature: "AI Advisory",
    included: "Add-on",
    notes: "Read-only recommendations (no auto-trading)",
  },
  {
    feature: "AI Auto Trading",
    included: "Not supported",
    notes: "uLiquid AI never executes trades",
  },
  {
    feature: "RBAC",
    included: "✅",
    notes: "Per workspace",
  },
  {
    feature: "Re-Authentication",
    included: "✅",
    notes: "OTP",
  },
  {
    feature: "Email 2FA",
    included: "✅",
    notes: "Optional",
  },
  {
    feature: "Telegram Alerts",
    included: "✅",
    notes: "Runtime & risk",
  },
  {
    feature: "Runner Heartbeat",
    included: "✅",
    notes: "Stale detection",
  },
  {
    feature: "Automated Backups",
    included: "✅",
    notes: "pg_dump",
  },
  {
    feature: "License Integration",
    included: "✅",
    notes: "Feature flags",
  },
];

export function FeatureMatrixTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border/70 text-xs uppercase tracking-wide text-muted">
            <th className="py-3 pr-4 font-semibold">Feature</th>
            <th className="py-3 pr-4 font-semibold">Included</th>
            <th className="py-3 font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          {featureRows.map((row) => (
            <tr key={row.feature} className="border-b border-border/40">
              <td className="py-3 pr-4 text-text">{row.feature}</td>
              <td className="py-3 pr-4 text-muted">{row.included}</td>
              <td className="py-3 text-muted">{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
