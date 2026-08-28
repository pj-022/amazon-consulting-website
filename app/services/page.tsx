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
  Sparkles,
  Zap,
  Shield,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const services = [
  {
    id: "strategy",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
    title: "Campaign Strategy & Optimization",
    description:
      "Transform your advertising performance with data-driven strategies. We architect campaigns that align with your business objectives while maximizing efficiency across all Vendor Central formats.",
    features: [
      "Advanced keyword research & competitive analysis",
      "Bid optimization with automation frameworks",
      "Campaign architecture & structure design",
      "Sponsored Products, Brands & Display mastery",
      "Negative keyword mining & refinement",
      "Performance tracking & reporting",
    ],
    metrics: [
      { label: "Avg ROAS Lift", value: "+52%" },
      { label: "Efficiency Gain", value: "+40%" },
    ],
    idealFor: "Brands spending $25K+/month seeking strategic improvements",
    timeline: "Ongoing monthly engagement",
  },
  {
    id: "budget",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    title: "Budget Allocation & Planning",
    description:
      "Strategic budget management that ensures every dollar drives maximum ROI. We forecast, allocate, and optimize your advertising investment across campaigns and seasons.",
    features: [
      "Monthly budget forecasting & planning",
      "ROAS-driven allocation strategies",
      "Seasonal campaign planning (Prime Day, Q4)",
      "Portfolio-level budget optimization",
      "New product launch budget frameworks",
      "Cost efficiency analysis & reporting",
    ],
    metrics: [
      { label: "Budget Efficiency", value: "+35%" },
      { label: "Waste Reduction", value: "$25K+" },
    ],
    idealFor: "Complex portfolios or seasonal-focused brands",
    timeline: "Monthly planning with quarterly reviews",
  },
  {
    id: "audits",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    title: "Performance Audits",
    description:
      "Comprehensive 30-point account analysis that identifies opportunities, eliminates waste, and provides actionable roadmaps for improvement.",
    features: [
      "Complete account health assessment",
      "Campaign structure optimization review",
      "Wasted spend identification",
      "Keyword strategy & targeting analysis",
      "Competitive positioning evaluation",
      "Prioritized action plan delivery",
    ],
    metrics: [
      { label: "Avg Savings Found", value: "$18K" },
      { label: "Quick Wins", value: "12+" },
    ],
    idealFor: "Brands needing assessment or quarterly health checks",
    timeline: "2-3 weeks for comprehensive audit",
  },
  {
    id: "reporting",
    icon: LineChart,
    color: "from-orange-500 to-amber-500",
    title: "Reporting & Analytics",
    description:
      "Transform raw data into strategic insights. Custom dashboards and executive reports that clearly communicate performance and guide decisions.",
    features: [
      "Custom dashboard development & setup",
      "Weekly performance summaries",
      "Executive monthly reporting packages",
      "Attribution & trend analysis",
      "Competitive benchmark reporting",
      "Automated alert systems",
    ],
    metrics: [
      { label: "Decision Speed", value: "3x Faster" },
      { label: "Data Points", value: "50+" },
    ],
    idealFor: "Brands needing visibility and data-driven support",
    timeline: "2-week setup, ongoing reporting",
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "Expert Strategy",
    description: "5+ years specialized Vendor Central experience",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "40% average ROAS improvement in 90 days",
  },
  {
    icon: Shield,
    title: "Proven Process",
    description: "$15M+ in ad spend optimized successfully",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-8 px-6 py-2.5 bg-gradient-to-r from-accent/10 to-accent/5 text-accent border-accent/20 text-sm font-semibold" variant="outline">
              Strategic Consulting Services
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Amazon Advertising
              </span>
              <br />
              <span className="text-primary/80">Services That</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent">
                  Deliver Results
                </span>
                <div className="absolute bottom-3 left-0 right-0 h-4 bg-accent/20 -rotate-1 rounded-lg" />
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Comprehensive technical consulting for Vendor Central. From strategy 
              development to performance optimization, we provide the expertise you need.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-accent/30 transition-all group"
                >
                  <benefit.icon className="h-8 w-8 text-accent mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-primary mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-border hover:border-accent/30 transition-all duration-500 bg-white/80 backdrop-blur-sm hover:shadow-2xl">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
                      {/* Left Side - Icon & Metrics */}
                      <div className={`relative p-12 bg-gradient-to-br ${service.color} overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                        </div>
                        
                        <div className="relative">
                          <div className="inline-flex p-6 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                            <service.icon className="h-16 w-16 text-white" strokeWidth={1.5} />
                          </div>
                          
                          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                            {service.title}
                          </h2>
                          
                          <div className="space-y-4 mt-8">
                            {service.metrics.map((metric) => (
                              <div key={metric.label} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                <div className="text-3xl font-bold text-white mb-1">
                                  {metric.value}
                                </div>
                                <div className="text-white/90 text-sm font-medium">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Side - Content */}
                      <div className="p-12">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                          {service.description}
                        </p>
                        
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-accent" />
                            Key Features
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {service.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-3 group/item">
                                <div className="mt-1 flex-shrink-0">
                                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center group-hover/item:bg-accent/20 transition-colors">
                                    <CheckCircle2 className="h-3 w-3 text-accent" />
                                  </div>
                                </div>
                                <span className="text-muted-foreground text-sm leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Separator className="my-8" />
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                              <Users className="h-4 w-4 text-accent" />
                              Ideal For
                            </div>
                            <p className="text-sm text-primary font-medium">
                              {service.idealFor}
                            </p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                              <Clock className="h-4 w-4 text-accent" />
                              Timeline
                            </div>
                            <p className="text-sm text-primary font-medium">
                              {service.timeline}
                            </p>
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

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,153,0,0.15),transparent_50%)]" />
            
            <CardContent className="relative p-16 lg:p-24 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-2.5" variant="outline">
                    Ready to Get Started?
                  </Badge>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    Let's Build Your Success Story
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
                    Schedule a free consultation to discuss your advertising goals and 
                    create a customized strategy that drives measurable results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="text-lg px-10 py-7 bg-accent hover:bg-accent/90 text-white shadow-2xl hover:shadow-accent/50 transition-all duration-300 group"
                      >
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/case-studies">
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 border-2 border-white hover:scale-105 transition-all duration-300"
                      >
                        View Success Stories
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
