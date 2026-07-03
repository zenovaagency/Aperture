/**
 * Aperture — all landing-page copy, centralized and typed.
 * No lorem: every string is specific to the fictional product.
 */

export const brand = {
  name: "Aperture",
  mark: "◐",
  tagline: "Bring everything into focus.",
  domain: "aperture.example",
} as const;

export const nav = {
  links: [
    { label: "Product", href: "#features" },
    { label: "Showcase", href: "#showcase" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Start free", href: "#cta" },
  secondary: { label: "Sign in", href: "#" },
} as const;

export const hero = {
  eyebrow: "AI-native decision intelligence",
  // headline is composed in the component so one word can be italic serif
  headlineLead: "Turn scattered signals into",
  headlineAccent: "decisions",
  headlineTail: "you can defend.",
  sub: "Aperture unifies every metric, event, and model into one live surface — then tells you what changed, why it matters, and what to do next. No SQL. No waiting on the data team.",
  ctaPrimary: { label: "Start free", href: "#cta" },
  ctaSecondary: { label: "Watch the 2-min tour", href: "#showcase" },
  trustLine: "Trusted by teams at 2,400+ data-driven companies",
} as const;

// Invented, original wordmarks — no real or impersonated brands.
export const wordmarks = [
  "Northwind",
  "Lumaflow",
  "Ardent",
  "Meridian",
  "Cobalt Labs",
  "Fernway",
  "Halcyon",
  "Quanta",
  "Driftwork",
  "Verdant",
] as const;

export type Feature = {
  title: string;
  body: string;
  span: "lg" | "md" | "sm";
  visual: "signal" | "query" | "alerts" | "collab" | "trace" | "guard";
};

export const features: Feature[] = [
  {
    title: "Ask in plain language",
    body: "Type a question the way you'd say it out loud. Aperture writes the query, joins the sources, and shows its work — so you can trust the answer, not just read it.",
    span: "lg",
    visual: "query",
  },
  {
    title: "Signals that find you",
    body: "Anomaly detection watches every metric and surfaces the ones that actually moved.",
    span: "md",
    visual: "signal",
  },
  {
    title: "Alerts with context",
    body: "Every alert arrives with the likely cause and the segments driving it.",
    span: "sm",
    visual: "alerts",
  },
  {
    title: "Decisions, together",
    body: "Comment, assign, and resolve on the same canvas — no exports, no screenshots.",
    span: "sm",
    visual: "collab",
  },
  {
    title: "Lineage you can trace",
    body: "Follow any number back to its source table and transformation in one click.",
    span: "md",
    visual: "trace",
  },
  {
    title: "Governed by default",
    body: "Row-level permissions, audit trails, and SOC 2 controls baked into every query.",
    span: "sm",
    visual: "guard",
  },
];

export type ShowcaseTab = {
  id: string;
  label: string;
  headline: string;
  body: string;
  bullets: string[];
};

export const showcase: ShowcaseTab[] = [
  {
    id: "dashboards",
    label: "Dashboards",
    headline: "Live surfaces, not stale screenshots",
    body: "Composable dashboards that recompute the moment data lands. Drill from a headline number to the row that caused it without leaving the page.",
    bullets: ["Real-time recompute", "Cross-filter everything", "Drill to source row"],
  },
  {
    id: "signals",
    label: "Signals",
    headline: "The metrics that moved, ranked",
    body: "Aperture scores every deviation by impact and confidence, so the anomaly that matters is at the top — and the noise stays out of your inbox.",
    bullets: ["Impact-ranked anomalies", "Seasonality-aware", "Root-cause candidates"],
  },
  {
    id: "reports",
    label: "Reports",
    headline: "Narratives that write themselves",
    body: "Turn a dashboard into a written briefing your exec team will actually read — generated, cited, and refreshed on a schedule you set.",
    bullets: ["Auto-generated prose", "Every claim cited", "Scheduled delivery"],
  },
  {
    id: "automations",
    label: "Automations",
    headline: "From insight to action",
    body: "When a signal fires, trigger the workflow: page an owner, open a ticket, adjust a budget. Aperture closes the loop instead of just raising a flag.",
    bullets: ["Event-driven triggers", "50+ native actions", "Human-in-the-loop gates"],
  },
];

export type Benefit = {
  index: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
};

export const benefits: Benefit[] = [
  {
    index: "01",
    title: "Answers in seconds, not sprints",
    body: "The average question used to mean a ticket, a queue, and a two-day wait. Aperture collapses that to a sentence and a heartbeat — so momentum stays with the person who had the question.",
    stat: "8s",
    statLabel: "median time to answer",
  },
  {
    index: "02",
    title: "One source everyone believes",
    body: "Warehouse, product analytics, billing, and spreadsheets reconciled into a single semantic layer. When finance and growth pull the same number, it matches.",
    stat: "1",
    statLabel: "semantic layer, every team",
  },
  {
    index: "03",
    title: "Trust that scales with you",
    body: "Governed access, full lineage, and an audit log of every query mean you can open the doors wide without losing the thread of who saw what.",
    stat: "100%",
    statLabel: "of queries audited",
  },
];

export type Step = {
  n: string;
  title: string;
  body: string;
};

export const workflow: Step[] = [
  {
    n: "01",
    title: "Connect",
    body: "Point Aperture at your warehouse and tools. Schemas map themselves in minutes.",
  },
  {
    n: "02",
    title: "Model",
    body: "Define metrics once in a shared semantic layer. Everyone inherits the same definitions.",
  },
  {
    n: "03",
    title: "Explore",
    body: "Ask questions in plain language. Aperture writes, joins, and explains the query.",
  },
  {
    n: "04",
    title: "Act",
    body: "Set signals to watch what matters and automate the response when they fire.",
  },
];

export const integrations = {
  center: brand.mark,
  chips: [
    "Snowflake",
    "BigQuery",
    "Postgres",
    "dbt",
    "Segment",
    "Stripe",
    "Salesforce",
    "HubSpot",
    "Slack",
    "Looker",
    "Databricks",
    "Redshift",
  ],
  note: "Native connectors for the modern data stack — plus a typed API for everything else.",
} as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We replaced a four-person reporting queue with a search bar. Our operators answer their own questions now, and the data team finally builds instead of babysitting dashboards.",
    name: "Dana Okonkwo",
    role: "VP Data",
    company: "Northwind",
    featured: true,
  },
  {
    quote:
      "The first time Aperture caught a churn spike before our weekly review, it paid for itself.",
    name: "Marco Reyes",
    role: "Head of Growth",
    company: "Lumaflow",
  },
  {
    quote:
      "Lineage on every metric ended the 'whose number is right' meeting. Permanently.",
    name: "Priya Nair",
    role: "Analytics Lead",
    company: "Meridian",
  },
  {
    quote:
      "Onboarding took an afternoon. By Friday the whole team was asking questions in plain English.",
    name: "Tomas Halvorsen",
    role: "COO",
    company: "Ardent",
  },
];

export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

export const metrics: Metric[] = [
  { value: 8, suffix: "s", label: "Median time to first answer" },
  { value: 2400, suffix: "+", label: "Companies deciding with Aperture" },
  { value: 99.98, suffix: "%", decimals: 2, label: "Query uptime, trailing 90 days" },
  { value: 41, suffix: "M", prefix: "", label: "Questions answered last quarter" },
];

export type Tier = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number; // per-month when billed annually
  cta: string;
  featured?: boolean;
  features: string[];
};

export const pricing: Tier[] = [
  {
    name: "Starter",
    tagline: "For small teams getting their first source of truth.",
    monthly: 0,
    annual: 0,
    cta: "Start free",
    features: [
      "Up to 5 seats",
      "3 data sources",
      "Natural-language queries",
      "Shared dashboards",
      "Community support",
    ],
  },
  {
    name: "Scale",
    tagline: "For teams running the business on their data.",
    monthly: 79,
    annual: 63,
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Unlimited seats",
      "Unlimited sources",
      "Signals & anomaly detection",
      "Semantic layer & lineage",
      "Automations (50+ actions)",
      "SSO & role-based access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For organizations with governance at the center.",
    monthly: -1, // sentinel → "Custom"
    annual: -1,
    cta: "Talk to sales",
    features: [
      "Everything in Scale",
      "SOC 2 Type II & HIPAA",
      "Row-level governance",
      "Dedicated VPC / on-prem",
      "Audit log export",
      "Named solutions architect",
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Do I need to know SQL to use Aperture?",
    a: "No. You ask questions in plain language and Aperture writes the query for you — and shows it, so anyone who does know SQL can verify or extend it. The people closest to the question get the answer without a handoff.",
  },
  {
    q: "How long does it take to get set up?",
    a: "Most teams connect their warehouse and see their first answer the same afternoon. Schema mapping is automatic, and our starter templates cover the metrics common to your industry out of the box.",
  },
  {
    q: "Where does my data live?",
    a: "Aperture queries your warehouse in place — we don't copy or warehouse your raw data. Enterprise plans can run entirely inside your own VPC or on-premise, so nothing leaves your perimeter.",
  },
  {
    q: "How is this different from a BI tool?",
    a: "Traditional BI shows you charts and waits. Aperture watches your metrics, tells you what changed and why, and can act on it. It's the difference between a dashboard you check and an analyst who checks on you.",
  },
  {
    q: "Is my data governed and auditable?",
    a: "Yes. Every query respects row-level permissions and is written to an immutable audit log. We're SOC 2 Type II certified, with HIPAA and row-level governance available on Enterprise.",
  },
  {
    q: "Can I cancel or change plans anytime?",
    a: "Anytime, from the billing page — no calls, no retention gauntlet. Annual plans are prorated if you upgrade mid-term, and Starter is free forever.",
  },
];

export const finalCta = {
  eyebrow: "Bring everything into focus",
  headline: "Stop reporting on the past. Start deciding the next move.",
  sub: "Connect your first source in minutes. Free to start, no credit card required.",
  placeholder: "you@company.com",
  button: "Start free",
  footnote: "14-day trial on paid plans · Cancel anytime",
} as const;

export const footer = {
  tagline: "The AI-native surface for decisions your whole team can defend.",
  status: "All systems operational",
  columns: [
    {
      title: "Product",
      links: ["Overview", "Signals", "Reports", "Automations", "Integrations", "Changelog"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Customers", "Blog", "Press"],
    },
    {
      title: "Resources",
      links: ["Docs", "API reference", "Security", "Status", "Community"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "SOC 2", "DPA"],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Aperture, Inc. All rights reserved.`,
} as const;
