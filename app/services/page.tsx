"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Target,
  TrendingUp,
  BarChart3,
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const services = [
  {
    id: "strategy",
    icon: Target,
    title: "Campaign Strategy & Optimization",
    description:
      "Comprehensive strategic development and ongoing optimization for all Vendor Central advertising formats. We build campaigns that align with your business objectives while maximizing efficiency.",
    deliverables: [
      "Sponsored Products strategy development and optimization",
      "Sponsored Brands campaign architecture and creative guidance",
      "Sponsored Display targeting and audience optimization",
      "Advanced keyword research and negative keyword mining",
      "Bid optimization strategies and automation recommendations",
      "Competitive analysis and positioning strategy",
    ],
    idealFor: "Brands spending $25K+/month seeking strategic campaign improvements",
    timeline: "Ongoing monthly engagement",
  },
  {
    id: "budget",
    icon: TrendingUp,
    title: "Budget Allocation & Planning",
    description:
      "Data-driven budget planning and allocation strategies that ensure every dollar is working towards your ROAS goals. Strategic forecasting for peak seasons and new product launches.",
    deliverables: [
      "Monthly budget forecasting and planning",
      "ROAS-driven budget allocation across campaign types",
      "Seasonal planning for Prime Day, Black Friday, Q4",
      "Portfolio-level budget management and rebalancing",
      "New product launch budget recommendations",
      "Cost efficiency analysis and optimization",
    ],
    idealFor: "Brands with complex portfolio management needs or seasonal focus",
    timeline: "Monthly planning cycles with quarterly reviews",
  },
  {
    id: "audits",
    icon: BarChart3,
    title: "Performance Audits",
    description:
      "Deep-dive account analysis identifying wasted spend, structural issues, and quick-win opportunities. Our 30+ point audit checklist covers every aspect of your advertising program.",
    deliverables: [
      "Comprehensive account health assessment",
      "Campaign structure and organization analysis",
      "Wasted spend identification and recommendations",
      "Keyword strategy and targeting review",
      "Competitive positioning assessment",
      "Detailed action plan with prioritized recommendations",
    ],
    idealFor: "Brands seeking one-time assessment or quarterly health checks",
    timeline: "2-3 weeks for comprehensive audit",
  },
  {
    id: "reporting",
    icon: FileText,
    title: "Reporting & Analytics",
    description:
      "Transform raw advertising data into actionable insights. Custom dashboards and executive reports that clearly communicate performance and guide strategic decisions.",
    deliverables: [
      "Custom dashboard development and setup",
      "Weekly performance summaries and alerts",
      "Monthly executive reporting packages",
      "Attribution analysis across touchpoints",
      "Trend identification and forecasting",
      "Competitive benchmark reporting",
    ],
    idealFor: "Brands needing visibility and data-driven decision support",
    timeline: "Setup in 2 weeks, ongoing reporting",
  },
];

export default function ServicesPage() {
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
              Strategic Consulting Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Amazon Advertising Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive technical consulting for Vendor Central advertising.
              From strategy development to performance optimization, we provide the
              expertise you need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="inline-flex p-4 bg-accent/10 rounded-xl">
                          <service.icon className="h-10 w-10 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h3 className="text-xl font-semibold text-primary mb-4">
                              What You Get
                            </h3>
                            <ul className="space-y-3">
                              {service.deliverables.map((deliverable, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle2 className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">
                                    {deliverable}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <div className="space-y-6">
                              <div className="p-6 bg-primary/5 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <Users className="h-5 w-5 text-accent mr-2" />
                                  <h4 className="font-semibold text-primary">
                                    Ideal For
                                  </h4>
                                </div>
                                <p className="text-muted-foreground">
                                  {service.idealFor}
                                </p>
                              </div>

                              <div className="p-6 bg-accent/5 rounded-lg">
                                <div className="flex items-center mb-2">
                                  <Clock className="h-5 w-5 text-accent mr-2" />
                                  <h4 className="font-semibold text-primary">
                                    Timeline
                                  </h4>
                                </div>
                                <p className="text-muted-foreground">
                                  {service.timeline}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                  Ready to Elevate Your Amazon Advertising?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Let's discuss your advertising goals and create a customized
                  strategy that drives results.
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
