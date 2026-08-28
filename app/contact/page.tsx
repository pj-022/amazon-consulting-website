"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
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
      <section className="grain section-warm border-b border-border">
        <Container className="py-24 lg:py-32">
          <p className="editorial-label">Contact</p>
          <h1 className="display-lg mt-8 max-w-4xl uppercase text-foreground">
            Start with a focused conversation about your{" "}
            <em className="italic normal-case text-accent">program</em>
          </h1>
          <p className="body-editorial mt-8 max-w-2xl">
            Tell us about your current advertising setup. We respond within one
            business day with next steps for a consultation.
          </p>
        </Container>
      </section>

      <section className="section-cream py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <div className="border border-border bg-background p-8 lg:p-12">
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Request a consultation
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Share a few details so we can prepare for a productive first
                call.
              </p>

              {submitSuccess && (
                <div className="mt-8 flex items-start gap-3 border border-emerald-300/50 bg-emerald-50 p-4 text-emerald-900">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully.</p>
                    <p className="text-sm">We&apos;ll respond within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mt-8 border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Name *
                    </label>
                    <Input id="name" {...register("name")} placeholder="Jane Smith" className="rounded-none border-border bg-transparent" />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Email *
                    </label>
                    <Input id="email" type="email" {...register("email")} placeholder="jane@company.com" className="rounded-none border-border bg-transparent" />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Company
                  </label>
                  <Input id="company" {...register("company")} placeholder="Company name" className="rounded-none border-border bg-transparent" />
                </div>

                <div>
                  <label htmlFor="adSpend" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Monthly ad spend *
                  </label>
                  <Select
                    onValueChange={(value: string | null) =>
                      value && setValue("adSpend", value)
                    }
                  >
                    <SelectTrigger className="w-full rounded-none border-border bg-transparent">
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
                  <label htmlFor="message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    How can we help? *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your current program, goals, and challenges..."
                    className="min-h-[140px] rounded-none border-border bg-transparent"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-none bg-foreground uppercase tracking-[0.14em] hover:bg-accent sm:w-auto"
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

            <aside className="space-y-10">
              <div className="border-t border-border pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-3 block text-lg text-foreground transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
              </div>
              <div className="border-t border-border pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Office hours
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{company.hours}</p>
              </div>
              <div className="border-t border-accent/30 pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  What happens next
                </p>
                <ol className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
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
