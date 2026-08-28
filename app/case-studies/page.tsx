"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  Target,
  DollarSign,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const caseStudies = [
  {
    category: "Consumer Electronics",
    title: "Turning Around Declining ROAS for Major Electronics Vendor",
    client: "TechGear Solutions",
    industry: "Consumer Electronics",
    challenge: {
      description:
        "A leading consumer electronics vendor was struggling with declining advertising efficiency despite a substantial $80K monthly ad spend. Their ROAS had dropped to 2.5, and campaign structure had become bloated and inefficient over time.",
      metrics: [
        "$80K monthly ad spend",
        "2.5 ROAS baseline",
        "Declining efficiency trend",
        "Bloated campaign structure",
      ],
    },
    solution: {
      description:
        "We conducted a comprehensive audit revealing significant structural issues and wasted spend. Our approach included complete campaign restructure, strategic keyword consolidation, negative keyword expansion, and data-driven budget reallocation to high-performing segments.",
      actions: [
        "Full campaign architecture redesign",
        "Keyword strategy overhaul and consolidation",
        "Negative keyword mining and implementation",
        "Budget reallocation based on performance data",
        "Bid optimization framework implementation",
        "Weekly monitoring and adjustment protocol",
      ],
    },
    results: {
      description:
        "Within 90 days, we achieved remarkable improvements across all key metrics. The strategic restructure eliminated waste and focused spend on high-performing opportunities.",
      metrics: [
        { label: "ROAS Improvement", value: "+52%", detail: "2.5 → 3.8 ROAS" },
        { label: "Wasted Spend Eliminated", value: "$25K", detail: "Monthly savings" },
        { label: "Sales Increase", value: "+40%", detail: "Same ad spend" },
        { label: "Campaign Efficiency", value: "+65%", detail: "CTR improvement" },
      ],
    },
    timeline: "90 Days",
    testimonial: {
      quote:
        "VendorEdge didn't just optimize our campaigns—they completely transformed our approach to Amazon advertising. The results speak for themselves.",
      author: "Sarah Mitchell",
      role: "Director of E-Commerce, TechGear Solutions",
    },
  },
  {
    category: "Home & Kitchen",
    title: "Building a Winning Advertising Program from Scratch",
    client: "HomeStyle Brands",
    industry: "Home & Kitchen",
    challenge: {
      description:
        "A growing home goods brand had recently transitioned to Vendor Central and needed to establish a comprehensive advertising strategy from the ground up. They had no existing campaign structure and limited Amazon advertising experience.",
      metrics: [
        "New to Vendor Central",
        "No existing advertising strategy",
        "Limited platform knowledge",
        "Competitive category",
      ],
    },
    solution: {
      description:
        "We developed a complete advertising foundation including strategic campaign architecture, keyword research, creative strategy for Sponsored Brands, and quarterly planning framework. Our education-focused approach ensured the internal team could sustain success.",
      actions: [
        "Full program setup and campaign architecture",
        "Comprehensive keyword research and targeting strategy",
        "Sponsored Brands creative development guidance",
        "Budget allocation and forecasting framework",
        "Quarterly planning process establishment",
        "Team training and knowledge transfer",
      ],
    },
    results: {
      description:
        "The brand achieved exceptional first-year performance, establishing strong market positioning and building sustainable advertising momentum.",
      metrics: [
        { label: "Revenue Generated", value: "$150K", detail: "First 6 months" },
        { label: "ROAS Achieved", value: "4.2", detail: "Above target" },
        { label: "Top Rankings", value: "12", detail: "Key search terms" },
        { label: "Market Share", value: "+8%", detail: "Category growth" },
      ],
    },
    timeline: "6 Months",
    testimonial: {
      quote:
        "VendorEdge gave us the strategic foundation we needed. Their expertise shortened our learning curve dramatically and set us up for long-term success.",
      author: "David Chen",
      role: "VP of Marketing, HomeStyle Brands",
    },
  },
  {
    category: "Health & Personal Care",
    title: "Prime Day Success Through Strategic Preparation",
    client: "WellnessFirst",
    industry: "Health & Personal Care",
    challenge: {
      description:
        "A health and personal care brand needed to maximize their Prime Day opportunity but lacked a cohesive strategy. Previous Prime Day events had underperformed, and budget allocation was unclear.",
      metrics: [
        "Underperforming Prime Day history",
        "No strategic event planning",
        "Unclear budget allocation",
        "Inventory concerns",
      ],
    },
    solution: {
      description:
        "We developed a comprehensive 60-day Prime Day strategy including pre-event campaign optimization, budget planning, competitive analysis, and bid automation strategy. Focus on inventory-aware bidding prevented stockouts while maximizing sales velocity.",
      actions: [
        "60-day pre-event strategic planning",
        "Campaign optimization and structure refinement",
        "Competitive analysis and positioning strategy",
        "Budget scaling framework and guardrails",
        "Bid automation rules for event day",
        "Inventory-aware campaign pacing",
      ],
    },
    results: {
      description:
        "The strategic preparation delivered exceptional Prime Day performance, with industry-leading conversion rates and exceptional return on ad spend.",
      metrics: [
        { label: "Sales Lift", value: "300%", detail: "vs. previous Prime Day" },
        { label: "ROAS Achieved", value: "5.1", detail: "Event period" },
        { label: "Inventory Turn", value: "95%", detail: "Optimal pacing" },
        { label: "New Customers", value: "+2.4K", detail: "Long-term value" },
      ],
    },
    timeline: "60 Days (Planning + Execution)",
    testimonial: {
      quote:
        "The level of strategic planning VendorEdge brought to our Prime Day preparation was game-changing. We didn't just hit our goals—we exceeded them dramatically.",
      author: "Jessica Roberts",
      role: "Head of Digital Commerce, WellnessFirst",
    },
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 text-sm px-4 py-2" variant="secondary">
              Success Stories
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Proven Results for Amazon Vendors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See how we've helped leading brands achieve exceptional advertising
              performance through strategic consulting and optimization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge variant="secondary">{study.category}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {study.timeline}
                        </Badge>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        {study.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {study.client} • {study.industry}
                      </p>
                    </div>

                    <div className="p-8 lg:p-12 space-y-12">
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="h-10 w-1 bg-accent rounded-full" />
                          <h3 className="text-2xl font-bold text-primary">
                            The Challenge
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {study.challenge.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {study.challenge.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="flex items-center p-4 bg-muted/50 rounded-lg"
                            >
                              <Target className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="h-10 w-1 bg-accent rounded-full" />
                          <h3 className="text-2xl font-bold text-primary">
                            The Solution
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {study.solution.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {study.solution.actions.map((action, i) => (
                            <div key={i} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{action}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="h-10 w-1 bg-accent rounded-full" />
                          <h3 className="text-2xl font-bold text-primary">
                            The Results
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {study.results.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {study.results.metrics.map((metric, i) => (
                            <Card key={i} className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                              <CardContent className="p-6 text-center">
                                <div className="text-4xl font-bold text-accent mb-2">
                                  {metric.value}
                                </div>
                                <div className="text-sm font-semibold text-primary mb-1">
                                  {metric.label}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric.detail}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {study.testimonial && (
                        <>
                          <Separator />
                          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
                            <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                              "{study.testimonial.quote}"
                            </p>
                            <div>
                              <div className="font-semibold text-primary">
                                {study.testimonial.author}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {study.testimonial.role}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
            <CardContent className="p-12 lg:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Write Your Success Story?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Let's discuss how we can help you achieve similar results for your
                  Amazon advertising program.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
