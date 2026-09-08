export type TrackId = "enterprise" | "startup" | "local";

export interface FlagshipOffer {
  name: string;
  hook: string;
  promise: string;
  scope: string[];
  deliverables: string[];
  ctaLabel: string;
  ctaLine: string;
}

export interface Track {
  id: TrackId;
  href: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  accent: string;
  accentDark: string;
  capabilities: { title: string; description: string }[];
  flagshipOffer: FlagshipOffer;
}

export const tracks: Record<TrackId, Track> = {
  enterprise: {
    id: "enterprise",
    href: "/enterprise",
    name: "Enterprise Process & ERP",
    shortName: "Enterprise",
    tagline: "Institutional-grade process discipline, engineered for scale.",
    description:
      "For government bodies and established enterprises, we bring structured business analysis and process engineering to complex, high-stakes environments — turning tangled workflows and legacy systems into governed, measurable operations.",
    accent: "var(--color-accent)",
    accentDark: "var(--color-accent-dark)",
    capabilities: [
      {
        title: "BPM & BPMS",
        description:
          "End-to-end process mapping, redesign, and governance, implemented on Business Process Management Systems so workflows are automated, auditable, and continuously improvable — not stuck in a slide deck.",
      },
      {
        title: "Agile-BPM",
        description:
          "Process improvement delivered in short, testable iterations rather than a single big-bang rollout, so stakeholders see working improvements early and requirements can adapt as the organization learns.",
      },
      {
        title: "BABOK Business Analysis",
        description:
          "Requirements elicitation, stakeholder analysis, and solution evaluation aligned to the BABOK (Business Analysis Body of Knowledge) guide, giving technology investments a defensible line back to business need.",
      },
      {
        title: "ERP Consulting & Implementation",
        description:
          "Vendor-neutral ERP selection, configuration, and rollout support that keeps the system in service of the redesigned process — not the other way around.",
      },
    ],
    flagshipOffer: {
      name: "Operational & Process Friction Assessment",
      hook: "Do you need an AI agent — or a streamlined business process?",
      promise:
        "A diagnostic that maps where process friction is actually costing you time and revenue, before recommending any software, automation, or AI investment.",
      scope: [
        "End-to-end value stream mapping across departments, systems, and handoffs",
        "Friction and bottleneck audit — delays, duplication, manual approval chokepoints",
        "System integration review across your ERP, CRM, and core applications",
        "Automation and AI readiness check — where it pays off, where it doesn't",
      ],
      deliverables: [
        "A Process Opportunity Map ranked by severity and revenue impact",
        "An Efficiency Gap Report quantifying cycle time and manual-effort cost",
        "A phased Transformation Roadmap — quick wins, integration work, and automation projects",
      ],
      ctaLabel: "Request a Process Friction Assessment",
      ctaLine:
        "Identify where process bottlenecks are costing your business time and revenue.",
    },
  },
  startup: {
    id: "startup",
    href: "/startups",
    name: "Startup Enablement",
    shortName: "Startups",
    tagline: "Validate faster, build the right thing, de-risk the bet.",
    description:
      "For founders and product teams, we bring the same rigor we apply to enterprise process work to the much harder problem of deciding what to build in the first place — using proven lean and design methods to shrink the distance between idea and evidence.",
    accent: "var(--color-startup)",
    accentDark: "var(--color-startup-dark)",
    capabilities: [
      {
        title: "Lean Startup",
        description:
          "Build-Measure-Learn loops that turn assumptions into experiments, so spend follows validated learning instead of a fixed roadmap written before any customer feedback existed.",
      },
      {
        title: "Google Design Sprints",
        description:
          "Five-day sprints — map, sketch, decide, prototype, test — that take a team from an open problem to a customer-tested prototype in a single week.",
      },
      {
        title: "Design Thinking",
        description:
          "Empathize, define, ideate, prototype, test: a structured creative process for reframing ambiguous problems before committing engineering time to a solution.",
      },
      {
        title: "Value Proposition Design",
        description:
          "Strategyzer's Value Proposition and Business Model Canvas methods, used to map customer jobs, pains, and gains against what's actually being offered — before it's built.",
      },
    ],
    flagshipOffer: {
      name: "Startup Opportunity & Validation Sprint",
      hook: "Are you building on a verified opportunity — or an assumption?",
      promise:
        "Turn unverified assumptions into customer evidence before committing real engineering budget to build the wrong thing.",
      scope: [
        "Hypothesis and assumption mapping across desirability, feasibility, and viability",
        "A risk matrix ranking which assumptions could invalidate the venture if wrong",
        "Structured customer interviews and landing-page smoke tests",
        "A competitive differentiation check against real alternatives, not just direct rivals",
      ],
      deliverables: [
        "A Validation Scorecard of customer interest and willingness-to-pay signals",
        "An Assumption Map classifying each bet as Verified, Refuted, or Inconclusive",
        "A clear recommendation: proceed to a lean MVP, pivot the value proposition, or hold off",
      ],
      ctaLabel: "Request a Validation Sprint",
      ctaLine:
        "Validate your core business assumptions before writing your first line of code.",
    },
  },
  local: {
    id: "local",
    href: "/web-design",
    name: "Web Design & Local Commerce",
    shortName: "Web Design",
    tagline: "Get your business found, trusted, and bought from — online.",
    description:
      "For local and small businesses, we design and build websites that do a job: bring in inquiries, bookings, or sales — with the same process thinking behind the buying journey that we apply to enterprise workflows.",
    accent: "var(--color-local)",
    accentDark: "var(--color-local-dark)",
    capabilities: [
      {
        title: "Business Websites",
        description:
          "Fast, modern, mobile-first sites built around what a visitor needs to do next — call, book, or buy — instead of a template full of stock photography.",
      },
      {
        title: "Online Sales Enablement",
        description:
          "Product catalogs, booking flows, and checkout paths that let a local business take orders and payments online without a full custom e-commerce build.",
      },
      {
        title: "Local Discoverability",
        description:
          "Technical fundamentals — structured data, map listings, page speed — that determine whether a nearby customer searching for your service finds you or a competitor.",
      },
      {
        title: "Ongoing Care & Iteration",
        description:
          "Small, regular improvements informed by what visitors actually do on the site, rather than a one-off launch that's never revisited.",
      },
    ],
    flagshipOffer: {
      name: "Digital Growth Opportunity Assessment",
      hook: "Your next customer may already be looking for you — can they find you?",
      promise:
        "A diagnostic across positioning, your website, local search, and content to find where the customer journey is actually breaking, before recommending a fix.",
      scope: [
        "Positioning and value proposition — is it clear who you help and why",
        "Website and conversion path — from visit to call, booking, or sale",
        "Search, local discoverability, and content/social presence",
        "Competitors, customer segments, and channels you may be missing",
      ],
      deliverables: [
        "A prioritized map of where you're losing customers in the discovery-to-purchase journey",
        "A clear read on which interventions are worth it — and which aren't, yet",
        "Recommended next steps, whether that's a new site, a fix to the existing one, or nothing at all",
      ],
      ctaLabel: "Request a Growth Opportunity Assessment",
      ctaLine:
        "Looking for your next growth opportunity? Let's examine where it could come from.",
    },
  },
};

export const trackList = Object.values(tracks);
