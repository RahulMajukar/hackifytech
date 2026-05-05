"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import {
  Clock, BookOpen, Monitor, MapPin, CheckCircle, ChevronDown,
  ChevronRight, Star, Users, Award, Briefcase, ArrowLeft, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadSyllabusButton } from "@/components/DownloadSyllabusButton";

const TABS = ["Overview", "Syllabus", "Tools & Tech", "FAQs"];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
};

function ModuleAccordion({ modules }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {modules.map((mod, i) => (
        <m.div
          key={i}
          className="rounded-lg border bg-card overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={i}
        >
          <button
            className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-semibold text-card-foreground text-sm">{mod.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{mod.topics.length} topics · {mod.duration}</p>
            </div>
            <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full mr-2 hidden sm:block">
              {mod.duration}
            </span>
            {open === i
              ? <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
              : <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
            }
          </button>
          {open === i && (
            <div className="px-4 pb-4 border-t bg-muted/20">
              <ul className="mt-3 space-y-2">
                {mod.topics.map((topic, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </m.div>
      ))}
    </div>
  );
}

export default function CourseDetailPage({ course }) {
  const [activeTab, setActiveTab] = useState("Overview");

  const discount = Math.round(
    ((parseInt(course.originalPrice.replace(/[^0-9]/g, "")) -
      parseInt(course.price.replace(/[^0-9]/g, ""))) /
      parseInt(course.originalPrice.replace(/[^0-9]/g, ""))) *
      100
  );

  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <div className="hero-gradient py-12 md:py-16">
        <div className="container">
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Courses
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: course.badgeColor }}
                >
                  {course.badge}
                </span>
                <span className="text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded-full flex items-center gap-1">
                  {course.mode === "Online" || course.mode === "Online & Offline"
                    ? <Monitor className="h-3 w-3" />
                    : <MapPin className="h-3 w-3" />
                  }
                  {course.mode}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-4">
                {course.icon} {course.title}
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl">{course.tagline}</p>
              <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> {course.duration}</span>
                <span className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-primary" /> {course.syllabus.length} modules</span>
                <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> {course.totalHours} hours</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-primary" /> Certificate included</span>
              </div>
            </div>

            {/* Sticky sidebar card */}
            <div className="lg:row-span-2">
              <div className="rounded-xl border bg-card shadow-lg overflow-hidden sticky top-20">
                <div className="p-6 border-b">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-3xl font-bold font-heading text-foreground">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                      {discount}% OFF
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-5">One-time payment · No EMI hidden fees</p>
                  <Link href="/contact">
                    <Button size="lg" className="w-full font-semibold mb-3">
                      Enrol Now
                    </Button>
                  </Link>
                  <DownloadSyllabusButton course={course} />
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-xs font-semibold text-foreground mb-3">THIS COURSE INCLUDES</p>
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="sticky top-16 z-10 border-b bg-background/95 backdrop-blur-sm">
        <div className="container">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-5 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab content ── */}
      <div className="container py-10">
        <div className="max-w-3xl">

          {/* OVERVIEW */}
          {activeTab === "Overview" && (
            <div className="space-y-10">
              <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-xl font-heading font-bold text-foreground mb-5">What You Will Learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-2 rounded-lg border bg-card p-3 text-sm text-card-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {o}
                    </div>
                  ))}
                </div>
              </m.div>

              <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-xl font-heading font-bold text-foreground mb-5">Course Highlights</h2>
                <div className="rounded-lg border bg-card p-6 grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Clock, label: "Duration", value: course.duration },
                    { icon: BookOpen, label: "Modules", value: `${course.syllabus.length} modules` },
                    { icon: Zap, label: "Total Hours", value: `${course.totalHours} hours` },
                    { icon: Monitor, label: "Mode", value: course.mode },
                    { icon: Users, label: "Level", value: course.level },
                    { icon: Award, label: "Certificate", value: "On completion" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-card-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </m.div>

              <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-xl font-heading font-bold text-foreground mb-5">Student Reviews</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Priya Sharma", role: "Placed at TCS", stars: 5, quote: "Best investment I made. Trainers are from actual MNCs, not just certified instructors." },
                    { name: "Rahul Verma", role: "Placed at Infosys", stars: 5, quote: "The placement cell kept calling until I got my offer. Truly 100% support." },
                  ].map((r, i) => (
                    <div key={i} className="rounded-lg border bg-card p-4">
                      <div className="flex gap-0.5 mb-2">
                        {[...Array(r.stars)].map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-3">"{r.quote}"</p>
                      <p className="text-xs font-semibold text-card-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  ))}
                </div>
              </m.div>
            </div>
          )}

          {/* SYLLABUS */}
          {activeTab === "Syllabus" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground">Course Syllabus</h2>
                  <p className="text-sm text-muted-foreground mt-1">{course.syllabus.length} modules · {course.totalHours} total hours</p>
                </div>
                <DownloadSyllabusButton course={course} />
              </div>
              <ModuleAccordion modules={course.syllabus} />
            </div>
          )}

          {/* TOOLS & TECH */}
          {activeTab === "Tools & Tech" && (
            <div className="space-y-8">
              <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-xl font-heading font-bold text-foreground mb-2">Tools & Technologies</h2>
                <p className="text-sm text-muted-foreground mb-6">Every tool listed here is actively used in industry hiring. You will graduate with real hands-on experience.</p>
                <div className="flex flex-wrap gap-3">
                  {course.tools.map((tool, i) => (
                    <m.span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground shadow-sm"
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      custom={i}
                    >
                      {tool}
                    </m.span>
                  ))}
                </div>
              </m.div>

              <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <h2 className="text-xl font-heading font-bold text-foreground mb-5">Placement Partners</h2>
                <div className="rounded-lg border bg-card p-6">
                  <p className="text-sm text-muted-foreground mb-4">Our graduates have been placed at 100+ companies including:</p>
                  <div className="flex flex-wrap gap-2">
                    {["TCS", "Infosys", "Wipro", "HCL", "Cognizant", "Tech Mahindra", "Accenture", "Capgemini", "Mphasis", "LTIMindtree"].map((c) => (
                      <span key={c} className="rounded-full border px-3 py-1 text-xs font-medium text-foreground bg-muted/50">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          )}

          {/* FAQs */}
          {activeTab === "FAQs" && (
            <div>
              <h2 className="text-xl font-heading font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {course.faqs.map((faq, i) => (
                  <m.div
                    key={i}
                    className="rounded-lg border bg-card p-5"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={i}
                  >
                    <p className="font-semibold text-card-foreground mb-2 flex items-start gap-2">
                      <span className="text-primary font-bold shrink-0">Q.</span>
                      {faq.q}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-muted-foreground font-bold shrink-0">A.</span>
                      {faq.a}
                    </p>
                  </m.div>
                ))}
              </div>

              <div className="mt-10 rounded-lg border bg-primary/5 p-6 text-center">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-bold text-foreground mb-2">Still have questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">Our counsellors respond within 1 hour on weekdays.</p>
                <Link href="/contact">
                  <Button variant="outline">Talk to a Counsellor</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
