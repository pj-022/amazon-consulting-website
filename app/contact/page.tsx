"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Container } from "@/components/sections/container";
import { company } from "@/lib/site-data";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch {
      setSubmitError(
        "There was an error submitting your message. Please email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="hero-glow border-b border-border">
        <Container className="py-20 lg:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Start with a focused conversation about your program
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tell us about your current advertising setup. We respond within one business
            day with next steps for a consultation.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-card p-8 lg:p-10">
              <h2 className="text-2xl font-medium text-foreground">
                Request a consultation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details so we can prepare for a productive first call.
              </p>

              {submitSuccess && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully.</p>
                    <p className="text-sm">We'll respond within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name *
                    </label>
                    <Input id="name" {...register("name")} placeholder="Jane Smith" />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="jane@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" {...register("company")} placeholder="Company name" />
                </div>

                <div>
                  <label htmlFor="adSpend" className="mb-2 block text-sm font-medium">
                    Monthly ad spend *
                  </label>
                  <Select
                    onValueChange={(value: string | null) =>
                      value && setValue("adSpend", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select monthly ad spend" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Less than $10K</SelectItem>
                      <SelectItem value="10k-50k">$10K – $50K</SelectItem>
                      <SelectItem value="50k-100k">$50K – $100K</SelectItem>
                      <SelectItem value="100k-plus">$100K+</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.adSpend && (
                    <p className="mt-1 text-sm text-red-600">{errors.adSpend.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    How can we help? *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your current program, goals, and challenges..."
                    className="min-h-[140px]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-11 w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit request"
                  )}
                </Button>
              </form>
            </div>

            <aside className="space-y-6">
              <div className="surface-card p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-muted p-3">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 block text-sm text-accent hover:underline"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <div className="rounded-lg bg-muted p-3">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Office hours</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{company.hours}</p>
                  </div>
                </div>
              </div>

              <div className="surface-card border-l-4 border-l-accent p-8">
                <h3 className="font-medium text-foreground">What happens next</h3>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>1. We review your submission within one business day.</li>
                  <li>2. We schedule a 30-minute discovery call.</li>
                  <li>3. You receive a concise view of opportunities and next steps.</li>
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
