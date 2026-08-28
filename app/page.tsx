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
      
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="mb-8 text-sm px-6 py-2.5 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-all" variant="outline">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Amazon Vendor Central Specialists
                </div>
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-8 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scale Your Amazon
              <br />
              Advertising with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Strategic Precision
                </span>
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-accent/20 -rotate-1 rounded" />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Expert technical consulting for Vendor Central advertising programs.
              Drive exceptional ROI through data-driven campaign optimization.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white shadow-xl shadow-accent/25 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 group"
                >
                  Schedule a Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-3">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-accent via-accent to-accent/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20" variant="outline">
              Our Expertise
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Strategic Advisory Services
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Comprehensive consulting solutions designed for Amazon Vendor Central
              advertising success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer group border-2 hover:border-accent/20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardContent className="p-10 relative">
                      <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <service.icon className="h-10 w-10 text-accent" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        {service.description}
                      </p>
                      <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,153,0,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20" variant="outline">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
              See what our clients say about working with VendorEdge
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 border-2 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/10 group">
                  <CardContent className="p-8 lg:p-10">
                    <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <Quote className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-primary text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-accent font-semibold">
                          {testimonial.company}
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

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,153,0,0.15),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <CardContent className="relative p-12 lg:p-20 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-sm" variant="outline">
                    Free Consultation
                  </Badge>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    Ready to Optimize Your
                    <br />
                    Amazon Advertising?
                  </h2>
                  <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light leading-relaxed">
                    Schedule a free consultation to discuss your advertising goals and
                    discover how we can help drive measurable growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="text-lg px-10 py-7 bg-accent hover:bg-accent/90 text-white shadow-2xl hover:shadow-accent/50 transition-all duration-300 group"
                      >
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/case-studies">
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 border-2 border-white hover:scale-105 transition-all duration-300"
                      >
                        View Case Studies
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
