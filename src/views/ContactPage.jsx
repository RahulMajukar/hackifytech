"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { m } from "framer-motion";
import {
  Mail, Phone, MapPin, CheckCircle, Loader2,
  Clock, MessageSquare, GraduationCap, ArrowRight,
} from "lucide-react";
import { z } from "zod";
import Link from "next/link";

const contactSchema = z.object({
  name:    z.string().trim().min(1, "Name is required").max(100),
  email:   z.string().trim().email("Valid email required").max(255),
  phone:   z.string().trim().max(20).optional(),
  course:  z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@hackifytech.com",
    sub: "We reply within 2 hours on weekdays",
    href: "mailto:info@hackifytech.com",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 9 AM – 8 PM IST",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Bangalore, Karnataka",
    sub: "India — exact address shared on enrolment",
    href: null,
  },
  {
    icon: Clock,
    label: "Batch Timings",
    value: "Morning · Evening · Weekend",
    sub: "Batches start every month",
    href: null,
  },
];

const courses = [
  "Full Stack Web Development",
  "Java Full Stack",
  "Python & Data Science",
  "React & Frontend Mastery",
  "DevOps & Cloud Engineering",
  "Mobile App Development",
  "Not sure yet — need guidance",
];

const faqs = [
  { q: "How quickly will you respond?", a: "Within 2 hours on weekdays. Same-day on weekends for WhatsApp messages." },
  { q: "Is the consultation free?", a: "Yes — 100% free. No pressure, no sales pitch. Just honest guidance on which course fits you." },
  { q: "Can I visit the Bangalore centre?", a: "Absolutely. Drop us a message and we'll share the address and schedule a tour." },
  { q: "I have a year gap — will that be an issue?", a: "Not at all. We welcome students from any background, any gap, any degree." },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

export default function ContactPage() {
  const [form, setForm]       = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [errors, setErrors]   = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fe = {};
      result.error.errors.forEach((err) => { fe[err.path[0]] = err.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          message: form.message,
          type: form.course ? "course-enquiry" : "contact",
          source: "website",
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setSuccess(true);
    } catch {
      setErrors({ message: "Something went wrong. Please try again or WhatsApp us directly." });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="py-20">
        <div className="container max-w-md text-center">
          <m.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">We've got your message!</h2>
            <p className="text-muted-foreground mb-2">
              Thank you for reaching out. Our counsellor will contact you within <strong className="text-foreground">2 hours</strong> on weekdays.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Want a faster response? WhatsApp us at{" "}
              <a href="tel:+919876543210" className="text-primary font-medium">+91 98765 43210</a>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={() => { setSuccess(false); setForm({ name: "", email: "", phone: "", course: "", message: "" }); }}
                variant="outline"
              >
                Send Another Message
              </Button>
              <Link href="/courses"><Button className="gap-2">Browse Courses <ArrowRight className="h-4 w-4" /></Button></Link>
            </div>
          </m.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="section-title text-foreground">Get in Touch</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Free counselling, no pressure. Tell us where you are and we'll tell you exactly how to get where you want to be.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">

          {/* ── Left: form ── */}
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="rounded-xl border bg-card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-bold text-foreground">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="name"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={set("name")}
                      className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={set("email")}
                      className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone / WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="course">Course You're Interested In</Label>
                    <select
                      id="course"
                      value={form.course}
                      onChange={set("course")}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
                    >
                      <option value="">Select a course…</option>
                      {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Your Message <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your background, goals, or any questions you have about our courses…"
                    value={form.message}
                    onChange={set("message")}
                    className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                  <p className="text-xs text-muted-foreground text-right">{form.message.length}/1000</p>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 font-semibold" disabled={loading}>
                  {loading
                    ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    : <><MessageSquare className="h-4 w-4" /> Send Message</>
                  }
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We typically reply within 2 hours · Your data is never shared with third parties
                </p>
              </form>
            </div>
          </m.div>

          {/* ── Right: info sidebar ── */}
          <div className="space-y-5">

            {/* Contact details */}
            {contactDetails.map((c, i) => (
              <m.div
                key={c.label}
                className="flex items-start gap-4 rounded-lg border bg-card p-4"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{c.label}</p>
                  {c.href
                    ? <a href={c.href} className="font-medium text-sm text-foreground hover:text-primary transition-colors">{c.value}</a>
                    : <p className="font-medium text-sm text-foreground">{c.value}</p>
                  }
                  <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
                </div>
              </m.div>
            ))}

            {/* Quick enquiry nudge */}
            <m.div
              className="rounded-lg border bg-primary/5 p-5"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={4}
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <p className="font-heading font-semibold text-sm text-foreground">Not sure which course?</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Our counsellors will assess your background and guide you to the right program — completely free, no obligation.
              </p>
              <Link href="/courses">
                <Button size="sm" variant="outline" className="w-full gap-2">
                  Browse All Courses <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </m.div>

          </div>
        </div>

        {/* ── FAQs ── */}
        <div className="mt-16">
          <h2 className="text-xl font-heading font-bold text-foreground text-center mb-8">
            Common Questions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <m.div
                key={i}
                className="rounded-lg border bg-card p-5"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <p className="font-semibold text-sm text-card-foreground mb-2 flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="font-bold shrink-0">A.</span>
                  {faq.a}
                </p>
              </m.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
