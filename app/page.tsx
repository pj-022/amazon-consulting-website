"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Target,
  BarChart3,
  FileText,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const stats = [
  { value: "50+", label: "Amazon Vendors" },
  { value: "40%", label: "Average ROAS Improvement" },
  { value: "$15M+", label: "Ad Spend Managed" },
  { value: "3 Years", label: "Average Partnership" },
];

const services = [
  {
    icon: Target,
    title: "Campaign Strategy & Optimization",
    description:
      "Strategic development and optimization for Sponsored Products, Brands, and Display campaigns with advanced keyword research and bid management.",
    href: "/services#strategy",
  },
  {
    icon: TrendingUp,
    title: "Budget Allocation & Planning",
    description:
      "Data-driven budget forecasting and ROAS-optimized allocation across campaigns, including seasonal planning for Prime Day and Q4.",
    href: "/services#budget",
  },
  {
    icon: BarChart3,
    title: "Performance Audits",
    description:
      "Comprehensive 30+ point account audits identifying wasted spend, structural issues, and optimization opportunities.",
    href: "/services#audits",
  },
  {
    icon: FileText,
    title: "Reporting & Analytics",
    description:
      "Custom dashboards, executive reports, and actionable insights with trend analysis and attribution modeling.",
    href: "/services#reporting",
  },
];

const testimonials = [
  {
    quote:
      "VendorEdge transformed our Amazon advertising from a cost center to a profit driver. Their strategic approach increased our ROAS by 52% in just 90 days.",
    author: "Sarah Mitchell",
    role: "Director of E-Commerce",
    company: "TechGear Solutions",
  },
  {
    quote:
      "The depth of their Vendor Central expertise is unmatched. They don't just manage campaigns—they provide strategic guidance that aligns with our business goals.",
    author: "David Chen",
    role: "VP of Marketing",
    company: "HomeStyle Brands",
  },
  {
    quote:
      "Working with VendorEdge was a game-changer for our Prime Day performance. Their pre-event strategy and execution delivered a 300% sales lift with exceptional ROAS.",
    author: "Jessica Roberts",
    role: "Head of Digital Commerce",
    company: "WellnessFirst",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 text-sm px-4 py-2" variant="secondary">
              Amazon Vendor Central Specialists
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Scale Your Amazon Advertising with{" "}
              <span className="text-accent">Strategic Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Expert technical consulting for Vendor Central advertising programs.
              Drive ROI through data-driven campaign optimization and strategic
              oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
                >
                  Schedule a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Strategic Advisory Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting solutions designed for Amazon Vendor Central
              advertising success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about working with VendorEdge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-accent/30 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-accent font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
            <CardContent className="p-12 lg:p-16 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Optimize Your Amazon Advertising?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Schedule a free consultation to discuss your advertising goals and
                  discover how we can help drive measurable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 border-2"
                    >
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
