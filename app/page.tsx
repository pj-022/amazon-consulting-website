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
  Sparkles,
  Award,
  Users,
  TrendingDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const stats = [
  { value: "50+", label: "Amazon Vendors", icon: Users },
  { value: "40%", label: "Avg ROAS Lift", icon: TrendingUp },
  { value: "$15M+", label: "Ad Spend Managed", icon: Award },
  { value: "3 Years", label: "Avg Partnership", icon: CheckCircle2 },
];

const services = [
  {
    icon: Target,
    title: "Campaign Strategy & Optimization",
    description:
      "Transform advertising performance with data-driven strategies for Sponsored Products, Brands, and Display campaigns.",
    href: "/services#strategy",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Budget Allocation & Planning",
    description:
      "Strategic budget management ensuring maximum ROI with ROAS-driven allocation and seasonal planning expertise.",
    href: "/services#budget",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: BarChart3,
    title: "Performance Audits",
    description:
      "Comprehensive 30-point analysis identifying opportunities, eliminating waste, and providing actionable roadmaps.",
    href: "/services#audits",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: FileText,
    title: "Reporting & Analytics",
    description:
      "Transform raw data into strategic insights with custom dashboards and executive reports that guide decisions.",
    href: "/services#reporting",
    gradient: "from-orange-500 to-amber-500",
  },
];

const testimonials = [
  {
    quote:
      "VendorEdge transformed our Amazon advertising from a cost center to a profit driver. Their strategic approach increased our ROAS by 52% in just 90 days. Absolutely game-changing.",
    author: "Sarah Mitchell",
    role: "Director of E-Commerce",
    company: "TechGear Solutions",
    avatar: "SM",
  },
  {
    quote:
      "The depth of their Vendor Central expertise is unmatched. They don't just manage campaigns—they provide strategic guidance that aligns perfectly with our business goals.",
    author: "David Chen",
    role: "VP of Marketing",
    company: "HomeStyle Brands",
    avatar: "DC",
  },
  {
    quote:
      "Working with VendorEdge was a game-changer for our Prime Day performance. Their pre-event strategy and execution delivered a 300% sales lift with exceptional ROAS.",
    author: "Jessica Roberts",
    role: "Head of Digital Commerce",
    company: "WellnessFirst",
    avatar: "JR",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center mb-10"
            >
              <Badge className="px-8 py-3 text-sm bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30 hover:border-accent/50 transition-all inline-flex items-center gap-2" variant="outline">
                <Sparkles className="h-4 w-4 text-accent" />
                Amazon Vendor Central Specialists
              </Badge>
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              className="text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.08] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Scale Your Amazon
              </span>
              <br />
              <span className="text-primary/70">Advertising with</span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent">
                  Strategic Precision
                </span>
                <motion.div 
                  className="absolute bottom-3 left-0 right-0 h-5 bg-accent/20 -rotate-1 rounded-lg"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-center text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expert technical consulting for Vendor Central advertising programs.
              <br className="hidden sm:block" />
              Drive exceptional ROI through data-driven campaign optimization.
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white shadow-2xl shadow-accent/30 hover:shadow-accent/40 transition-all duration-300 group"
                >
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-7 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="inline-flex p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-accent via-accent to-accent/70 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-8 px-6 py-2.5 bg-accent/10 text-accent border-accent/20" variant="outline">
              Our Expertise
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Strategic Advisory Services
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Comprehensive solutions designed for Vendor Central success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer group border-2 border-border hover:border-accent/30 overflow-hidden bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-10 relative">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className="relative">
                        <div className={`mb-6 inline-flex p-5 bg-gradient-to-br ${service.gradient} rounded-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                          <service.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                          Explore Service
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-8 px-6 py-2.5 bg-accent/10 text-accent border-accent/20" variant="outline">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Trusted by Leading Brands
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
              Real results from real partnerships
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-border hover:border-accent/30 transition-all duration-300 hover:shadow-2xl group">
                  <CardContent className="p-10">
                    <div className="mb-8 inline-flex p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl">
                      <Quote className="h-8 w-8 text-accent" />
                    </div>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-primary text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                        <div className="text-sm font-semibold text-accent">
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

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-0 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,153,0,0.15),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            
            <CardContent className="relative p-16 lg:p-24 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-sm px-6 py-2.5" variant="outline">
                    Free Consultation
                  </Badge>
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    Ready to Transform Your
                    <br />
                    Amazon Advertising?
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-12 font-light leading-relaxed">
                    Schedule a free consultation to discuss your goals and discover
                    how we can drive measurable growth for your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="text-lg px-12 py-7 bg-accent hover:bg-accent/90 text-white shadow-2xl hover:shadow-accent/50 transition-all duration-300 group"
                      >
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/case-studies">
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-12 py-7 bg-white text-primary hover:bg-white/90 border-2 border-white hover:scale-105 transition-all duration-300"
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
