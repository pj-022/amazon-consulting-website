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
import { ColorBlobs } from "@/components/sections/color-blobs";
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
      <section className="relative overflow-hidden border-b border-border/60">
        <ColorBlobs />
        <Container className="relative py-20 lg:py-24">
          <span className="brand-pill border-[#6EE7B7] bg-[#E8FFF5] text-[#047857]">
            Contact
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Let's talk about your{" "}
            <span className="gradient-text">advertising goals</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Tell us about your current setup. We respond within one business day with
            next steps for a consultation.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card-colorful border-2 border-[#C4B5FD] bg-white/80 p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-foreground">
                Request a consultation
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Share a few details so we can prepare for a productive first call.
              </p>

              {submitSuccess && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border-2 border-[#6EE7B7] bg-[#E8FFF5] p-4 text-[#047857]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully.</p>
                    <p className="text-sm">We'll respond within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mt-6 rounded-xl border-2 border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                      Name *
                    </label>
                    <Input id="name" {...register("name")} placeholder="Jane Smith" />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold">
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
                  <label htmlFor="company" className="mb-2 block text-sm font-semibold">
                    Company
                  </label>
                  <Input id="company" {...register("company")} placeholder="Company name" />
                </div>

                <div>
                  <label htmlFor="adSpend" className="mb-2 block text-sm font-semibold">
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
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold">
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
                  className="btn-gradient h-12 w-full border-0 font-semibold sm:w-auto"
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
              <div className="card-colorful border-2 border-[#7EC8FF] bg-[#E8F4FF]/50 p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#38BDF8] p-3 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 block text-sm font-medium text-[#0369A1] hover:underline"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] p-3 text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office hours</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{company.hours}</p>
                  </div>
                </div>
              </div>

              <div className="card-colorful border-2 border-[#6EE7B7] bg-[#E8FFF5]/50 p-8">
                <h3 className="font-semibold text-foreground">What happens next</h3>
                <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-xs font-bold text-white">
                      1
                    </span>
                    We review your submission within one business day.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0EA5E9] text-xs font-bold text-white">
                      2
                    </span>
                    We schedule a 30-minute discovery call.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6] text-xs font-bold text-white">
                      3
                    </span>
                    You receive a concise view of opportunities and next steps.
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
