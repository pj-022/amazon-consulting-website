"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every recommendation is backed by data and focused on measurable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Thinking",
    description:
      "We go beyond tactical execution to provide strategic guidance that aligns with your goals.",
  },
  {
    icon: Shield,
    title: "Transparent Partnership",
    description:
      "Clear communication, honest assessments, and education-focused approach.",
  },
  {
    icon: Award,
    title: "Deep Expertise",
    description:
      "Specialized knowledge in Vendor Central that goes beyond standard agency capabilities.",
  },
];

const whyChoose = [
  "Deep Vendor Central Experience - Not just Seller Central",
  "Technical Approach vs. Agency Management",
  "Strategic Advisory, Not Just Execution",
  "Transparent, Education-Focused Methodology",
  "Data-Driven Decision Making",
  "Proven Track Record of 40%+ ROAS Improvements",
  "Long-Term Partnership Focus",
  "Direct Access to Senior Consultants",
];

const process = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "Comprehensive account analysis, goal setting, and opportunity identification. We review your current campaigns, budget allocation, and competitive positioning.",
    timeline: "Week 1",
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Custom strategic roadmap with prioritized recommendations, budget allocation plan, and optimization framework tailored to your business objectives.",
    timeline: "Week 2",
  },
  {
    step: "03",
    title: "Implementation Support",
    description:
      "Guided execution of strategic recommendations with ongoing consultation. We work alongside your team to ensure smooth implementation.",
    timeline: "Weeks 3-4",
  },
  {
    step: "04",
    title: "Ongoing Optimization",
    description:
      "Continuous monitoring, monthly strategy reviews, and data-driven adjustments. Regular reporting and strategic guidance as your campaigns evolve.",
    timeline: "Monthly",
  },
];

export default function AboutPage() {
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
              About VendorEdge
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Amazon Advertising Experts You Can Trust
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We specialize in strategic consulting for Amazon Vendor Central
              advertising programs, helping brands achieve sustainable growth through
              data-driven optimization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Our Expertise
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p className="text-lg leading-relaxed">
                  VendorEdge was founded on a simple principle: Amazon Vendor Central
                  advertising requires specialized expertise that goes beyond standard
                  agency management. With over 5 years of dedicated experience in the
                  Vendor Central ecosystem, we've developed a deep understanding of
                  the unique challenges and opportunities that 1P brands face.
                </p>
                <p className="text-lg leading-relaxed">
                  Our technical approach combines strategic thinking with hands-on
                  advertising expertise. We don't just manage campaigns—we provide the
                  strategic guidance that helps you make informed decisions about
                  budget allocation, campaign structure, and long-term growth
                  strategies.
                </p>
                <p className="text-lg leading-relaxed">
                  Having managed over $15M in advertising spend across diverse
                  categories, we've refined our methodology to deliver consistent,
                  measurable results. Our clients typically see 40%+ improvements in
                  ROAS within the first 90 days, with sustained growth through ongoing
                  optimization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every client engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-3 bg-accent/10 rounded-lg mb-4">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Why Choose VendorEdge
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We bring a unique combination of technical expertise and strategic
                thinking to Amazon advertising. Here's what sets us apart:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChoose.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to driving advertising success
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-8">
            {process.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-accent">
                            {phase.step}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold text-primary">
                            {phase.title}
                          </h3>
                          <Badge variant="secondary" className="w-fit">
                            {phase.timeline}
                          </Badge>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {phase.description}
                        </p>
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
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                  Let's Build Your Success Story
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Ready to take your Amazon advertising to the next level? Schedule a
                  free consultation to discuss your goals.
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
