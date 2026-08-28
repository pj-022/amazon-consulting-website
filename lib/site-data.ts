import {
  BarChart3,
  LineChart,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Ad Kwik",
  tagline: "Amazon Vendor Central Advertising Advisory",
  email: "hello@adkwik.com",
  url: "https://adkwik.com",
  hours: "Monday–Friday, 9 AM – 6 PM EST",
};

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;

export const brandThemes = {
  coral: {
    accent: "text-[#B45309]",
    value: "text-[#C2410C]",
    border: "border-l-[#D97706]",
    dot: "bg-[#D97706]",
    ring: "ring-[#D97706]/20",
    surface: "bg-[#FFF7ED]",
    surfaceBorder: "border-[#FED7AA]/60",
  },
  sky: {
    accent: "text-[#1D4E89]",
    value: "text-[#1D4ED8]",
    border: "border-l-[#2563EB]",
    dot: "bg-[#2563EB]",
    ring: "ring-[#2563EB]/20",
    surface: "bg-[#EFF6FF]",
    surfaceBorder: "border-[#BFDBFE]/60",
  },
  violet: {
    accent: "text-[#5B21B6]",
    value: "text-[#6D28D9]",
    border: "border-l-[#7C3AED]",
    dot: "bg-[#7C3AED]",
    ring: "ring-[#7C3AED]/20",
    surface: "bg-[#F5F3FF]",
    surfaceBorder: "border-[#DDD6FE]/60",
  },
  mint: {
    accent: "text-[#047857]",
    value: "text-[#059669]",
    border: "border-l-[#059669]",
    dot: "bg-[#059669]",
    ring: "ring-[#059669]/20",
    surface: "bg-[#ECFDF5]",
    surfaceBorder: "border-[#A7F3D0]/60",
  },
  amber: {
    accent: "text-[#92400E]",
    value: "text-[#B45309]",
    border: "border-l-[#D97706]",
    dot: "bg-[#D97706]",
    ring: "ring-[#D97706]/20",
    surface: "bg-[#FFFBEB]",
    surfaceBorder: "border-[#FDE68A]/60",
  },
  rose: {
    accent: "text-[#9F1239]",
    value: "text-[#BE123C]",
    border: "border-l-[#E11D48]",
    dot: "bg-[#E11D48]",
    ring: "ring-[#E11D48]/20",
    surface: "bg-[#FFF1F2]",
    surfaceBorder: "border-[#FECDD3]/60",
  },
} as const;

export type BrandThemeKey = keyof typeof brandThemes;

export const heroMetrics = [
  { value: "50+", label: "Vendor Central clients", theme: "sky" as BrandThemeKey },
  { value: "40%", label: "Average ROAS lift", theme: "coral" as BrandThemeKey },
  { value: "$15M+", label: "Ad spend advised", theme: "violet" as BrandThemeKey },
  { value: "3 yrs", label: "Avg. partnership length", theme: "mint" as BrandThemeKey },
] as const;

export type Service = {
  id: string;
  icon: LucideIcon;
  theme: BrandThemeKey;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
};

export const services: Service[] = [
  {
    id: "strategy",
    icon: Target,
    theme: "sky",
    title: "Campaign Strategy & Optimization",
    summary:
      "Architecture and optimization for Sponsored Products, Brands, and Display.",
    description:
      "We design campaign structures that align with your commercial goals, then refine targeting, bids, and creative strategy using Vendor Central performance data.",
    deliverables: [
      "Campaign architecture across SP, SB, and SD",
      "Keyword and audience strategy",
      "Bid frameworks and automation guidance",
      "Negative keyword and waste reduction plans",
      "Competitive positioning analysis",
    ],
    idealFor: "Brands spending $25K+ monthly on Amazon ads",
    timeline: "Ongoing monthly advisory",
  },
  {
    id: "budget",
    icon: TrendingUp,
    theme: "mint",
    title: "Budget Allocation & Planning",
    summary:
      "Forecasting and portfolio-level budget decisions tied to ROAS targets.",
    description:
      "We help leadership teams allocate spend with confidence across products, seasons, and campaign types — including Prime Day and Q4 planning.",
    deliverables: [
      "Monthly budget forecasts",
      "ROAS-based allocation models",
      "Seasonal event planning",
      "Portfolio rebalancing playbooks",
      "Launch and promo budget guidance",
    ],
    idealFor: "Multi-SKU vendors with seasonal demand swings",
    timeline: "Monthly planning cycles",
  },
  {
    id: "audits",
    icon: BarChart3,
    theme: "violet",
    title: "Performance Audits",
    summary:
      "A structured review of account health, waste, and quick-win opportunities.",
    description:
      "Our 30-point audit evaluates structure, targeting, spend efficiency, and reporting gaps — then delivers a prioritized roadmap your team can execute.",
    deliverables: [
      "Account health scorecard",
      "Wasted spend analysis",
      "Campaign structure review",
      "Keyword and targeting assessment",
      "Prioritized 90-day action plan",
    ],
    idealFor: "Teams needing an objective outside perspective",
    timeline: "2–3 weeks",
  },
  {
    id: "reporting",
    icon: LineChart,
    theme: "amber",
    title: "Reporting & Analytics",
    summary:
      "Executive-ready reporting that connects ad spend to business outcomes.",
    description:
      "We build reporting frameworks that leadership actually uses — with clear KPIs, trend context, and recommendations instead of raw platform exports.",
    deliverables: [
      "Custom dashboard design",
      "Weekly performance summaries",
      "Monthly executive reports",
      "Attribution and trend analysis",
      "Benchmark and variance commentary",
    ],
    idealFor: "Brands needing clearer visibility for stakeholders",
    timeline: "2-week setup, ongoing cadence",
  },
];

export const processSteps = [
  {
    step: "01",
    theme: "coral" as BrandThemeKey,
    title: "Discovery & Audit",
    description:
      "We review your current program, commercial goals, and competitive context to establish a baseline and identify immediate opportunities.",
  },
  {
    step: "02",
    theme: "sky" as BrandThemeKey,
    title: "Strategy Development",
    description:
      "We define campaign architecture, budget priorities, and KPI targets — with a clear roadmap your internal team can implement.",
  },
  {
    step: "03",
    theme: "violet" as BrandThemeKey,
    title: "Implementation Support",
    description:
      "We guide execution, validate changes, and ensure recommendations are adopted correctly across teams and agencies.",
  },
  {
    step: "04",
    theme: "mint" as BrandThemeKey,
    title: "Ongoing Optimization",
    description:
      "We monitor performance, refine strategy monthly, and adapt plans as assortment, seasonality, and competition shift.",
  },
] as const;

export const caseStudies = [
  {
    slug: "consumer-electronics",
    category: "Consumer Electronics",
    theme: "sky" as BrandThemeKey,
    client: "TechGear Solutions",
    headline: "Rebuilt a declining program into a profitable growth engine",
    challenge:
      "A national electronics vendor was spending $80K/month with ROAS sliding to 2.5. Campaign sprawl, weak negatives, and uneven budget allocation were eroding efficiency.",
    approach: [
      "Restructured campaigns by intent and margin tier",
      "Expanded negative keyword governance",
      "Reallocated budget toward high-converting ASINs",
      "Introduced weekly performance review cadence",
    ],
    results: [
      { label: "ROAS", value: "2.5 → 3.8" },
      { label: "Waste removed", value: "$25K/mo" },
      { label: "Revenue lift", value: "+40%" },
      { label: "Timeline", value: "90 days" },
    ],
    quote:
      "Ad Kwik gave us a clear operating model for advertising — not just tactical fixes, but a system we could run confidently.",
    author: "Sarah Mitchell",
    role: "Director of E-Commerce",
  },
  {
    slug: "home-kitchen",
    category: "Home & Kitchen",
    theme: "mint" as BrandThemeKey,
    client: "HomeStyle Brands",
    headline: "Launched a Vendor Central advertising program from zero",
    challenge:
      "After transitioning to Vendor Central, the brand had no advertising framework, limited platform expertise, and aggressive category competition.",
    approach: [
      "Built full SP/SB/SD campaign architecture",
      "Defined quarterly planning and budget guardrails",
      "Established keyword ownership map by product line",
      "Trained internal team on reporting standards",
    ],
    results: [
      { label: "Revenue", value: "$150K" },
      { label: "ROAS", value: "4.2" },
      { label: "Top rankings", value: "12 terms" },
      { label: "Timeline", value: "6 months" },
    ],
    quote:
      "They shortened our learning curve dramatically and gave us a foundation we still use today.",
    author: "David Chen",
    role: "VP of Marketing",
  },
  {
    slug: "health-personal-care",
    category: "Health & Personal Care",
    theme: "rose" as BrandThemeKey,
    client: "WellnessFirst",
    headline: "Executed a Prime Day plan that maximized inventory velocity",
    challenge:
      "Previous Prime Day campaigns underperformed. The team lacked a coordinated pre-event strategy and inventory-aware pacing model.",
    approach: [
      "Built 60-day Prime Day readiness plan",
      "Set bid automation and budget guardrails",
      "Aligned ad pacing with inventory forecasts",
      "Ran competitive share-of-voice analysis pre-event",
    ],
    results: [
      { label: "Prime Day lift", value: "+300%" },
      { label: "Event ROAS", value: "5.1" },
      { label: "Inventory turn", value: "95%" },
      { label: "New customers", value: "2.4K" },
    ],
    quote:
      "The preparation was as valuable as the event itself. We finally had a repeatable playbook.",
    author: "Jessica Roberts",
    role: "Head of Digital Commerce",
  },
] as const;

export const testimonials = [
  {
    theme: "coral" as BrandThemeKey,
    quote:
      "Ad Kwik transformed our Amazon advertising from a cost center into a measurable growth lever. ROAS improved 52% within the first quarter.",
    author: "Sarah Mitchell",
    role: "Director of E-Commerce",
    company: "TechGear Solutions",
  },
  {
    theme: "violet" as BrandThemeKey,
    quote:
      "Their Vendor Central depth is rare. We get strategic guidance that connects advertising decisions to revenue and inventory outcomes.",
    author: "David Chen",
    role: "VP of Marketing",
    company: "HomeStyle Brands",
  },
  {
    theme: "mint" as BrandThemeKey,
    quote:
      "Prime Day used to be chaotic. Ad Kwik gave us structure, pacing discipline, and confidence in our spend.",
    author: "Jessica Roberts",
    role: "Head of Digital Commerce",
    company: "WellnessFirst",
  },
] as const;

export const capabilities = [
  "Sponsored Products",
  "Sponsored Brands",
  "Sponsored Display",
  "Vendor Central (1P)",
  "Budget forecasting",
  "Performance audits",
  "Executive reporting",
  "Prime Day planning",
] as const;

export const clientCategories = [
  "Consumer Electronics",
  "Home & Kitchen",
  "Health & Personal Care",
  "Beauty",
  "Pet Care",
  "Outdoor & Sports",
  "Baby",
  "Grocery",
] as const;

export const languages = [
  { word: "ROAS", description: "Commercial outcomes, not vanity metrics" },
  { word: "Vendor Central", description: "1P complexity, not marketplace noise" },
  { word: "C-Suite", description: "Board-ready narratives and reporting" },
  { word: "Operations", description: "Budget models your team can run" },
] as const;

export const narrativeSections = [
  {
    number: "01",
    label: "the first thing you should know about us",
    headline: "WE BUILT AD KWIK FOR BRANDS TIRED OF GENERIC AMAZON ADVICE",
    subhead: "Most agencies treat Vendor Central like Seller Central with a bigger invoice.",
    paragraphs: [
      "We could've stayed broad. But our best work always lived in the complexity of 1P — where inventory, margin, and advertising decisions are inseparable.",
      "We learned what moves a program forward: structure before bids, governance before scale, and reporting leadership actually reads.",
      "So what's worth sharing now is the point of view the real work built.",
    ],
    keywords: ["ROAS", "Vendor Central", "Sponsored Products", "Budget models", "Agencies", "Reporting"],
    cta: { label: "See our work", href: "/case-studies" },
  },
  {
    number: "02",
    label: "the second thing you should know about us",
    headline: "MOST OF OUR CLIENTS COME FROM TRUSTED REFERRALS",
    subhead: "That's how a focused studio grows — through consistency, not cold outreach.",
    paragraphs: [
      "We're partners who are direct, commercially minded, and allergic to deckware.",
      "Project to project, referral after referral, we meet teams where they are — collaborating at the right time, for the right reasons.",
      "Do rigorous work. Let the work speak.",
    ],
    keywords: ["Referrals", "Partnership", "Transparency", "Senior advisors", "Long-term"],
    cta: { label: "About us", href: "/about" },
  },
  {
    number: "03",
    label: "the third thing you should know about us",
    headline: "WE TAKE PRIDE IN MAKING ADVERTISING DECISIONS THAT ACTUALLY SHIP",
    subhead: "Strategy is nothing without an operating model your team can run.",
    paragraphs: [
      "Vision without execution is a slide deck. We build both — the campaign architecture and the cadence that keeps it improving.",
      "Campaigns. Budgets. Audits. And everything it takes to make them seamless inside Vendor Central.",
    ],
    keywords: ["Strategy", "Execution", "Cadence", "Governance", "Optimization"],
    cta: { label: "Our services", href: "/services" },
  },
] as const;
