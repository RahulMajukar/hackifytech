"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import {
  ArrowRight, BookOpen, Code, Award, Users, CheckCircle,
  GraduationCap, Briefcase, Star, TrendingUp, Clock,
  Zap, Shield, HeartHandshake, Monitor, MapPin,
} from "lucide-react";
import { coursesData } from "@/data/courses";

// ── Static data ───────────────────────────────────────────────────────────────

const stats = [
  { number: "50K+", label: "Students Trained", icon: Users },
  { number: "95%",  label: "Placement Rate",   icon: TrendingUp },
  { number: "100+", label: "MNC Partners",     icon: Briefcase },
  { number: "5+",   label: "Years of Excellence", icon: Award },
];

const whyUs = [
  {
    icon: Award,
    title: "100% Job Guarantee",
    desc: "Every enrolled student gets a dedicated placement coordinator and active referrals until they receive an offer letter.",
  },
  {
    icon: Users,
    title: "Any Background Welcome",
    desc: "Any degree, diploma, year gap, non-IT, or any year passout — our curriculum starts from scratch for everyone.",
  },
  {
    icon: Monitor,
    title: "Online + Offline Training",
    desc: "Flexible morning, evening, and weekend batches. Attend live from anywhere or join our Bangalore classroom.",
  },
  {
    icon: Code,
    title: "Real-World Projects",
    desc: "Every course ends with an industry-grade capstone project you can demo directly in interviews.",
  },
  {
    icon: Shield,
    title: "Transparent Fees",
    desc: "Full fee breakup shared upfront. No hidden charges, no pressure — just clear enrolment.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Mentor Support",
    desc: "Each batch has a mentor available 6 days a week for doubt clearing, code reviews, and career guidance.",
  },
];

const placementSteps = [
  { step: "01", title: "Enrol", desc: "Choose your course and batch. Meet your mentor and get your personalised learning roadmap." },
  { step: "02", title: "Train & Build", desc: "Attend live sessions, complete assignments, and build a real-world capstone project for your portfolio." },
  { step: "03", title: "Interview Prep", desc: "Mock interviews, resume building, LinkedIn optimisation, and aptitude training with industry coaches." },
  { step: "04", title: "Get Hired", desc: "Direct referrals to 100+ MNC hiring partners. Our placement cell follows up until your offer letter arrives." },
];

const tutorials = [
  { name: "HTML",       color: "bg-orange-500", desc: "Web structure & semantics" },
  { name: "CSS",        color: "bg-blue-500",   desc: "Layouts, flexbox & grid" },
  { name: "JavaScript", color: "bg-yellow-500", desc: "Interactive web apps" },
  { name: "Python",     color: "bg-emerald-500",desc: "AI, ML & automation" },
  { name: "Java",       color: "bg-red-500",    desc: "Enterprise development" },
  { name: "React",      color: "bg-cyan-500",   desc: "Modern UI library" },
];

const hiringPartners = [
  "TCS", "Infosys", "Wipro", "HCL", "Cognizant",
  "Tech Mahindra", "Accenture", "Capgemini", "Mphasis", "LTIMindtree",
];

const testimonials = [
  { name: "Priya Sharma",  role: "Frontend Developer, TCS",             quote: "I had a 2-year gap after graduation. HackifyTech didn't judge — they trained me, placed me, and changed my life." },
  { name: "Rahul Verma",   role: "Java Developer, Infosys",             quote: "From zero coding knowledge to a full-time MNC job in 4 months. The mock interviews were a game changer." },
  { name: "Ananya Gupta",  role: "Full Stack Developer, Wipro",         quote: "Best training platform. The trainers answer every doubt patiently. Unmatched placement support." },
  { name: "Kiran Naik",    role: "Data Analyst, Cognizant",             quote: "I was from a non-IT background. HackifyTech's structured curriculum made the transition seamless." },
  { name: "Sneha Patel",   role: "Python Developer, HCL",               quote: "The live projects I built during training were the first thing my interviewer asked about. Absolutely practical." },
  { name: "Arjun Mehta",   role: "React Developer, Tech Mahindra",      quote: "Joined as a diploma holder. Placed at Tech Mahindra within 3 months. HackifyTech delivers on every promise." },
];

// Featured: first 3 courses
const featuredCourses = coursesData.slice(0, 3);

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div>

      {/* ── Announcement banner ──────────────────────────────────────────────── */}
      <div className="banner-gradient py-2.5 text-center">
        <p className="text-sm font-semibold text-accent-foreground px-4">
          🎯 100% Job Guaranteed Courses — Any Degree | Diploma | Year Gap | Non-IT | Any Year Passout
        </p>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero-gradient py-20 md:py-28 lg:py-36">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
              Online + Offline Training &amp; Placement · Bangalore, India
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
              Learn to Code.{" "}
              <span className="text-primary">Build Your Career.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
              HackifyTech offers industry-ready training with{" "}
              <strong className="text-primary-foreground">guaranteed placement assistance</strong>{" "}
              in top MNC companies. Start your tech journey today — no prior experience needed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm text-primary-foreground/60">
              {["Any Degree", "Any Background", "Any Year Passout", "Year Gap OK"].map((tag) => (
                <span key={tag} className="flex items-center gap-1">
                  <CheckCircle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" className="gap-2 font-semibold">
                  View Courses <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tutorials">
                <Button size="lg" variant="outline" className="gap-2 font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Free Tutorials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────────────── */}
      <section className="border-b bg-card py-10">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <m.div
                key={stat.label}
                className="text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <stat.icon className="h-7 w-7 text-primary mx-auto mb-2" aria-hidden="true" />
                <div className="text-3xl font-bold font-heading text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Courses ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground">Job-Guaranteed Courses</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Industry-designed programs with placement assistance in top MNC companies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCourses.map((course, i) => (
              <m.div
                key={course.id}
                className="card-elevated rounded-xl border bg-card overflow-hidden flex flex-col"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                {/* Accent header */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ backgroundColor: `${course.accentColor}18`, borderBottom: `2px solid ${course.accentColor}` }}
                >
                  <span className="text-2xl">{course.icon}</span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: course.badgeColor }}
                  >
                    {course.badge}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-heading text-base font-bold text-card-foreground mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.tagline}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {course.syllabus.length} modules</span>
                    <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> {course.totalHours}h</span>
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {course.highlights.slice(0, 3).map((h, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t pt-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-bold text-lg text-foreground">{course.price}</span>
                        <span className="text-xs text-muted-foreground line-through">{course.originalPrice}</span>
                      </div>
                    </div>
                    <Link href={`/courses/${course.slug}`}>
                      <Button size="sm" className="gap-1 text-xs">
                        View Details <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/courses">
              <Button variant="outline" className="gap-2">
                View All 6 Courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why HackifyTech ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground">Why HackifyTech?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We don't just teach — we walk with every student until they are employed
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((f, i) => (
              <m.div
                key={f.title}
                className="card-elevated rounded-lg border bg-card p-5 flex gap-4"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-card-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placement process ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground">How Our Placement Process Works</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A structured 4-step journey from enrolment to your first offer letter
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {placementSteps.map((ps, i) => (
              <m.div
                key={ps.step}
                className="relative text-center"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                {/* connector line */}
                {i < placementSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-0.5 bg-primary/20" />
                )}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg font-heading">
                  {ps.step}
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{ps.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ps.desc}</p>
              </m.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/about">
              <Button variant="outline" className="gap-2">
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hiring partners ──────────────────────────────────────────────────── */}
      <section className="border-y bg-card py-10">
        <div className="container">
          <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
            Our graduates work at
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {hiringPartners.map((company, i) => (
              <m.span
                key={company}
                className="rounded-full border bg-background px-5 py-2 text-sm font-semibold text-foreground"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                {company}
              </m.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free Tutorials ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground">Free Tutorials</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Comprehensive, beginner-friendly tutorials — completely free, no login required
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((t, i) => (
              <m.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <Link
                  href={`/tutorials/${t.name.toLowerCase()}`}
                  className="card-elevated group flex items-center gap-4 rounded-lg border bg-card p-5 transition-all"
                >
                  <div
                    className={`${t.color} flex h-12 w-12 items-center justify-center rounded-lg text-sm font-bold text-white shrink-0`}
                    aria-hidden="true"
                  >
                    {t.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      Learn {t.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" aria-hidden="true" />
                </Link>
              </m.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tutorials">
              <Button variant="outline" className="gap-2">
                View All Tutorials <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground">Student Success Stories</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Real students, real jobs — hear from those who made the switch
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((s, i) => (
              <m.div
                key={s.name}
                className="card-elevated rounded-lg border bg-card p-5"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <div className="flex gap-1 mb-3" aria-label="5 stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">"{s.quote}"</p>
                <div>
                  <div className="font-heading font-semibold text-sm text-card-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role}</div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-4">
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Join 50,000+ students who transformed their careers with HackifyTech's job-guaranteed programs. Free consultation — no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="gap-2 font-semibold">
                Explore Courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Talk to a Counsellor
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
