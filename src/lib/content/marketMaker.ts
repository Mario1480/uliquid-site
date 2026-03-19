export const marketMakerTrustChips = [
  "Dedicated VPS included",
  "Market Making & Volume Bot",
  "Price Follow (Master / Slave)",
  "Price Support with budget control",
  "CEX + DEX price intelligence",
  "AI recommendations (no auto-trading)",
  "Risk limits & kill switch",
  "RBAC, Re-Auth & Email 2FA",
  "Telegram alerts & runner heartbeat",
  "License-gated add-ons (SaaS-ready)",
];

export const marketMakerBuiltFor = [
  {
    title: "CEX Listing Teams",
    bullets: ["Liquidity readiness", "Stable quotes", "Exportable reports"],
  },
  {
    title: "Project Teams",
    bullets: ["Affordable plans", "Fast setup", "No MM expertise required"],
  },
  {
    title: "Agencies / Ops",
    bullets: ["Manage multiple projects", "Roles & templates", "Unified monitoring"],
  },
];

export const marketMakerBenefits = [
  { title: "Tighter spreads", description: "Maintain tighter, steadier quotes for listing readiness." },
  { title: "Reliable quotes", description: "Keep orderbooks active even during volatility." },
  { title: "Controlled risk", description: "Define budgets, exposure limits, and safety rails." },
  { title: "Transparent reports", description: "Share listing-grade stability metrics with exchanges." },
  { title: "Fast setup", description: "Connect and launch without building a desk." },
];

export const marketMakerFeatures = [
  {
    id: "market-making",
    title: "Market Making Engine",
    description:
      "Multi-level order ladders with configurable spread, step size, distributions, jitter, and inventory-based skew.",
    href: "/market-maker#core-modules",
  },
  {
    id: "volume-bot",
    title: "Fill-Based Volume Bot",
    description: "Volume execution that counts only real fills. No fake volume, no cancel-based manipulation.",
    href: "/market-maker#core-modules",
  },
  {
    id: "price-follow",
    title: "Price Follow (Master / Slave)",
    description:
      "Use one exchange purely as a price feed and execute trades on another, even without running a bot on the master exchange.",
    href: "/market-maker#price-follow",
  },
  {
    id: "price-support",
    title: "Price Support",
    description:
      "Protect a minimum price level using a separate support budget. Automatically stops when the budget is depleted.",
    href: "/market-maker#price-support",
  },
  {
    id: "risk-controls",
    title: "Risk & Safety Controls",
    description: "Min balance guard, max deviation, max open orders, and daily loss limits enforced at runtime.",
    href: "/market-maker/security",
    linkLabel: "Security details ->",
  },
  {
    id: "security-access-control",
    title: "Security & Access Control",
    description:
      "Workspace-based roles, re-authentication for sensitive actions, encrypted exchange keys, and optional email 2FA.",
    href: "/market-maker/security",
    linkLabel: "Security details ->",
  },
  {
    id: "price-intelligence",
    title: "DEX Price Feed (Add-on)",
    description:
      "Use on-chain pricing as a master reference or validation layer for low-cap tokens. Read-only feed with no DEX trading required.",
    href: "/market-maker#price-intelligence",
  },
  {
    id: "ai-advisory",
    title: "AI Advisory (Read-only)",
    description:
      "AI analyzes market structure and execution data to recommend better settings. It never places trades and operators stay in control.",
    href: "/market-maker#ai-advisory",
  },
];

export const marketMakerFaqs = [
  {
    question: "Where does uLiquid Market Maker run?",
    answer: "On a dedicated VPS provisioned and maintained by uLiquid after license purchase.",
  },
  {
    question: "Do I need withdrawal permissions on exchanges?",
    answer: "No. Trade-only API permissions are sufficient.",
  },
  {
    question: "How are features enabled or limited?",
    answer: "Via the integrated license server using feature flags and limits.",
  },
  {
    question: "How do alerts work?",
    answer: "Via Telegram notifications for runtime errors, risk stops, and price support events.",
  },
  {
    question: "Where do I manage my license and VPS details?",
    answer: "In the Customer Portal / License Manager at license-server.uliquid.vip.",
  },
  {
    question: "Does uLiquid trade on DEXs?",
    answer: "No. DEX integrations are used as price feeds only.",
  },
  {
    question: "Does the AI control my bots?",
    answer: "No. AI provides recommendations only. All trading stays deterministic and under operator control.",
  },
];

export const supportedExchanges = [
  "Bitmart",
  "Coinstore",
  "Pionex",
  "P2B",
  "MEXC",
  "BingX",
  "XT",
  "Binance",
  "Bitget",
  "Lbank",
  "HTX",
  "OKX",
  "Bybit",
  "Weex",
  "Gate",
  "KuCoin",
  "Phemex",
  "Bitfinex",
  "CoinEx",
  "BloFin",
];

export const marketMakerResources = [
  { title: "Crypto Market Maker Software", href: "/crypto-market-maker" },
  { title: "FAQ", href: "/faq" },
  { title: "Low-Cap Liquidity", href: "/use-cases/low-cap-liquidity" },
  { title: "Exchange Listing Support", href: "/use-cases/exchange-listing-support" },
  { title: "Master/Slave Price Follow", href: "/use-cases/master-slave-price-follow" },
  { title: "What Is Market Making?", href: "/guides/what-is-market-making" },
  { title: "CEX vs DEX Price Feeds", href: "/guides/cex-vs-dex-price-feeds" },
];

export const marketMakerHowItWorks = [
  {
    title: "Purchase a license",
    description: "Buy via the uLiquid License Manager.",
  },
  {
    title: "VPS provisioned automatically",
    description: "A dedicated VPS is configured with Market Maker installed.",
  },
  {
    title: "Receive access details",
    description: "Credentials are sent by email and visible in the License Manager.",
  },
  {
    title: "Manage bots",
    description: "Configure and monitor bots from the Market Maker dashboard.",
  },
];

export const marketMakerPricingFaqs = [
  {
    question: "Do I need my own VPS?",
    answer: "No. A dedicated VPS is included with your subscription.",
  },
  {
    question: "How are features unlocked?",
    answer: "Via the integrated license server using feature flags.",
  },
  {
    question: "Can I run multiple instances?",
    answer: "Yes. Instances are provisioned per license in the License Manager.",
  },
];

export const marketMakerAddOns = [
  {
    title: "DEX Price Feed",
    description: "On-chain price reference for low-cap tokens (read-only).",
    label: "Add-on",
    href: "/market-maker#price-intelligence",
  },
  {
    title: "Price Follow (Master / Slave)",
    description: "Follow external markets without placing orders on the master exchange.",
    label: "Add-on",
    href: "/market-maker#price-follow",
  },
  {
    title: "Price Support",
    description: "Maintain a price floor using a dedicated support budget.",
    label: "Add-on",
    href: "/market-maker#price-support",
  },
  {
    title: "AI Advisory",
    description: "Read-only recommendations for safer and more efficient configs.",
    label: "Add-on",
    href: "/market-maker#ai-advisory",
  },
  {
    title: "Additional Bots",
    description: "Increase bot capacity under your license limits.",
    label: "Add-on",
  },
  {
    title: "Additional CEX connections",
    description: "Expand exchange coverage as needed.",
    label: "Add-on",
  },
];

export const marketMakerSecurityItems = [
  {
    title: "Encrypted Exchange Keys",
    description: "API keys are encrypted at rest and can only be viewed or modified after re-authentication.",
  },
  {
    title: "Role-Based Access Control",
    description: "Granular permissions per workspace for Admins, Operators, and Viewers.",
  },
  {
    title: "Re-Authentication (OTP)",
    description: "Sensitive actions require a temporary verification code.",
  },
  {
    title: "Optional Email 2FA",
    description: "Additional account protection configurable per user.",
  },
  {
    title: "CSRF & Origin Protections",
    description: "Cookie-based authentication hardened with CSRF and origin checks.",
  },
  {
    title: "Managed VPS Architecture",
    description: "Dedicated infrastructure provisioned and maintained by uLiquid.",
  },
];

export const marketMakerDocsCards = [
  {
    title: "Quickstart: Docker & VPS Setup",
    description: "Deploy the stack on your VPS and wire up your domain.",
  },
  {
    title: "Connecting Exchange API Keys",
    description: "Add API keys with trading permissions only, no withdrawals.",
  },
  {
    title: "Creating a Market-Making Bot",
    description: "Choose pair, budgets, and distributions for market making.",
  },
  {
    title: "Volume Bot (Fill-Based Counter)",
    description: "Configure daily notional and real-fill tracking.",
  },
  {
    title: "Price Follow (Master / Slave)",
    description: "Use a feed-only master and execute elsewhere.",
  },
  {
    title: "Price Support & Budget Handling",
    description: "Set a floor price with alerts and auto-stop.",
  },
  {
    title: "Security & Access Control",
    description: "Roles, re-auth, and optional email 2FA.",
  },
  {
    title: "Production Operations & Backups",
    description: "Health checks, heartbeat alerts, and backups.",
  },
  {
    title: "License & Feature Gating",
    description: "Manage feature gates and tier limits.",
  },
  {
    title: "DEX Price Feed Add-on",
    description: "Read-only on-chain price references for validation and low-cap pairs.",
  },
  {
    title: "AI Advisory",
    description: "What the AI analyzes and what it does not do.",
  },
];

export const marketMakerMiniGuides = [
  {
    title: "Quickstart: Docker & VPS Setup",
    description: "Use Docker Compose, set environment variables, and point your domain.",
  },
  {
    title: "Connecting Exchange API Keys",
    description: "Use trade-only permissions and verify connectivity before launch.",
  },
  {
    title: "Creating a Market-Making Bot",
    description: "Define the pair, budgets, and distributions for ladder depth.",
  },
  {
    title: "Volume Bot (Fill-Based Counter)",
    description: "Set daily notional targets and real-fill pacing limits.",
  },
  {
    title: "Price Follow (Master / Slave)",
    description: "Separate price discovery from execution using a feed-only master.",
  },
  {
    title: "Price Support & Budget Handling",
    description: "Allocate a support budget and configure depletion alerts.",
  },
  {
    title: "Security & Access Control",
    description: "Assign roles and require re-auth for sensitive actions.",
  },
  {
    title: "Production Operations & Backups",
    description: "Monitor runner heartbeat and verify backup schedules.",
  },
  {
    title: "License & Feature Gating",
    description: "Enable modules with license flags and track limits.",
  },
  {
    title: "DEX Price Feed Add-on",
    description: "Understand read-only on-chain pricing and validation workflows.",
  },
  {
    title: "AI Advisory",
    description: "Recommendations only, no auto-execution.",
  },
];
