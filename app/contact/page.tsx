"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(
        "There was an error submitting your message. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,153,0,0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-8 text-sm px-6 py-2.5 bg-accent/10 text-accent border-accent/20" variant="outline">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Get In Touch
              </div>
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight tracking-tight">
              Let's Discuss Your
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Amazon Advertising Goals
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-light">
              Schedule a free consultation to explore how we can help optimize your
              Vendor Central advertising program.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-2 shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-3">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-900">
                          Message sent successfully!
                        </p>
                        <p className="text-sm text-green-700">
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <p className="text-sm text-red-700">{submitError}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="John Smith"
                        className="w-full"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="john@company.com"
                        className="w-full"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        {...register("company")}
                        placeholder="Your Company Name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="adSpend"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Current Monthly Ad Spend *
                      </label>
                      <Select onValueChange={(value: string | null) => value && setValue("adSpend", value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your monthly ad spend" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Less than $10K</SelectItem>
                          <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k-plus">$100K+</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.adSpend && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.adSpend.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your advertising goals and challenges..."
                        className="w-full min-h-[150px]"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-2 hover:border-accent/20 transition-colors shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl mr-4">
                      <Mail className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-lg">Email Us</h3>
                      <a
                        href="mailto:hello@vendoredge.com"
                        className="text-muted-foreground hover:text-accent transition-colors text-lg"
                      >
                        hello@vendoredge.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl mr-4">
                      <Clock className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-lg">
                        Office Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday
                        <br />
                        9 AM - 6 PM EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-bold text-primary mb-6 text-xl">
                    What to Expect
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="p-1 bg-accent/20 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-base">Response within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-accent/20 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-base">Free initial consultation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-accent/20 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-base">No obligation or commitments</span>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-accent/20 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-base">Tailored recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
