import {
  BarChart3,
  LineChart,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "VendorEdge",
  tagline: "Amazon Vendor Central Advertising Advisory",
  email: "hello@vendoredge.com",
  hours: "Monday–Friday, 9 AM – 6 PM EST",
};

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroMetrics = [
  { value: "50+", label: "Vendor Central clients" },
  { value: "40%", label: "Average ROAS lift" },
  { value: "$15M+", label: "Ad spend advised" },
  { value: "3 yrs", label: "Avg. partnership length" },
] as const;

export type Service = {
  id: string;
  icon: LucideIcon;
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
    title: "Discovery & Audit",
    description:
      "We review your current program, commercial goals, and competitive context to establish a baseline and identify immediate opportunities.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "We define campaign architecture, budget priorities, and KPI targets — with a clear roadmap your internal team can implement.",
  },
  {
    step: "03",
    title: "Implementation Support",
    description:
      "We guide execution, validate changes, and ensure recommendations are adopted correctly across teams and agencies.",
  },
  {
    step: "04",
    title: "Ongoing Optimization",
    description:
      "We monitor performance, refine strategy monthly, and adapt plans as assortment, seasonality, and competition shift.",
  },
] as const;

export const caseStudies = [
  {
    slug: "consumer-electronics",
    category: "Consumer Electronics",
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
      "VendorEdge gave us a clear operating model for advertising — not just tactical fixes, but a system we could run confidently.",
    author: "Sarah Mitchell",
    role: "Director of E-Commerce",
  },
  {
    slug: "home-kitchen",
    category: "Home & Kitchen",
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
    quote:
      "VendorEdge transformed our Amazon advertising from a cost center into a measurable growth lever. ROAS improved 52% within the first quarter.",
    author: "Sarah Mitchell",
    role: "Director of E-Commerce",
    company: "TechGear Solutions",
  },
  {
    quote:
      "Their Vendor Central depth is rare. We get strategic guidance that connects advertising decisions to revenue and inventory outcomes.",
    author: "David Chen",
    role: "VP of Marketing",
    company: "HomeStyle Brands",
  },
  {
    quote:
      "Prime Day used to be chaotic. VendorEdge gave us structure, pacing discipline, and confidence in our spend.",
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
