"use client";

import { m } from "framer-motion";
import {
  Award, Users, Target, BookOpen, Briefcase, GraduationCap,
  CheckCircle, Star, TrendingUp, Shield, Clock, HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "50K+", label: "Students Trained" },
  { number: "95%", label: "Placement Rate" },
  { number: "100+", label: "MNC Partners" },
  { number: "5+", label: "Years of Excellence" },
];

const pillars = [
  { icon: GraduationCap, title: "Expert Trainers", desc: "Industry professionals with 10+ years of hands-on MNC experience — not just academics." },
  { icon: Briefcase, title: "100% Placement", desc: "Guaranteed placement assistance with active referrals to our 100+ MNC hiring partners." },
  { icon: Users, title: "50K+ Alumni", desc: "A thriving community of placed graduates who vouch for our process and support each other." },
  { icon: BookOpen, title: "200+ Tutorials", desc: "Free, comprehensive learning resources open to everyone — no login required." },
  { icon: Target, title: "Project-Based", desc: "Every course ends with a real-world capstone project you can showcase to employers." },
  { icon: Award, title: "Certifications", desc: "Industry-recognized certificates accepted by hiring managers at top MNC companies." },
];

const whyTrust = [
  { icon: Shield, title: "Transparent Fee Structure", desc: "No hidden charges. Full course fee breakup shared upfront before enrolment." },
  { icon: HeartHandshake, title: "Dedicated Mentor Support", desc: "Each batch gets a dedicated mentor available for doubt clearing 6 days a week." },
  { icon: Clock, title: "Flexible Batch Timings", desc: "Morning, evening, and weekend batches — designed around working professionals and students." },
  { icon: TrendingUp, title: "Live Industry Projects", desc: "Work on live projects from our partner companies, not dummy assignments." },
];

const testimonials = [
  { name: "Priya Sharma", role: "Frontend Developer, TCS", quote: "I had a 2-year gap after graduation. HackifyTech didn't judge — they trained me, placed me, and changed my life." },
  { name: "Rahul Verma", role: "Java Developer, Infosys", quote: "From zero coding knowledge to a full-time MNC job in 4 months. The mock interviews and resume workshops were a game changer." },
  { name: "Ananya Gupta", role: "Full Stack Developer, Wipro", quote: "The trainers answer every doubt patiently. The placement cell kept following up until I got the offer letter. Unmatched support." },
  { name: "Kiran Naik", role: "Data Analyst, Cognizant", quote: "I was from a non-IT background. HackifyTech's structured curriculum and hands-on projects made the transition seamless." },
  { name: "Sneha Patel", role: "Python Developer, HCL", quote: "The live projects I built during training were the first thing my interviewer asked about. Absolutely practical training." },
  { name: "Arjun Mehta", role: "React Developer, Tech Mahindra", quote: "Joined as a diploma holder. Placed at Tech Mahindra within 3 months. HackifyTech delivers on every promise." },
];

const placementCompanies = ["TCS", "Infosys", "Wipro", "HCL", "Cognizant", "Tech Mahindra", "Accenture", "Capgemini", "Mphasis", "LTIMindtree"];

const processSteps = [
  { step: "01", title: "Enrol", desc: "Choose your course, discuss your goals with our counsellor, and lock in your batch." },
  { step: "02", title: "Train", desc: "Attend live classes, work on projects, and clear doubts with your dedicated mentor." },
  { step: "03", title: "Prepare", desc: "Mock interviews, resume building, LinkedIn optimisation, and aptitude training." },
  { step: "04", title: "Get Placed", desc: "Get referred to our hiring partners. Our placement cell follows up until you sign the offer." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.45 } }),
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="section-title text-foreground">About HackifyTech</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            A future-ready online &amp; offline training and placement company based in Bangalore, India — built on one promise: your job is our responsibility.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <m.div key={s.label} className="rounded-lg border bg-card p-5 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <div className="text-3xl font-bold font-heading text-primary mb-1">{s.number}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </m.div>
          ))}
        </div>

        {/* Mission + Vision */}
        <div className="max-w-3xl mx-auto space-y-8 mb-16">
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">HackifyTech was founded to bridge the gap between education and employment. We believe every student — regardless of degree, diploma, year gap, or background — deserves access to quality tech training and a guaranteed career. We do not just teach; we walk with every student until they are employed.</p>
          </m.div>
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">The 100% Job Guarantee Model</h2>
            <p className="text-muted-foreground leading-relaxed">Our placement model is not a marketing claim — it is a structured process. Every enrolled student gets a dedicated placement coordinator, mock interview sessions, resume reviews, and direct referrals to our partner companies. We track every student's placement status and do not stop until you receive an offer letter.</p>
          </m.div>
          <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Online + Offline, Both Done Right</h2>
            <p className="text-muted-foreground leading-relaxed">Our Bangalore classroom center offers in-person mentoring, lab access, and peer learning. Our online batches offer the same curriculum with live sessions, recorded backups, and direct mentor chat. You get the same quality, flexibility of choice.</p>
          </m.div>
        </div>

        {/* Trust pillars */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-8">Why Students Choose Us</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item, i) => (
              <m.div key={item.title} className="card-elevated rounded-lg border bg-card p-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><item.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="font-heading font-semibold text-card-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </m.div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16 bg-muted/50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-10">How Our Placement Process Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((ps, i) => (
              <m.div key={ps.step} className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg font-heading">{ps.step}</div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{ps.title}</h3>
                <p className="text-sm text-muted-foreground">{ps.desc}</p>
              </m.div>
            ))}
          </div>
        </div>

        {/* Additional trust signals */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-8">What Sets Us Apart</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyTrust.map((item, i) => (
              <m.div key={item.title} className="rounded-lg border bg-card p-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3"><item.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="font-heading font-semibold text-card-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </m.div>
            ))}
          </div>
        </div>

        {/* Hiring partners */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Our Hiring Partners</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Our students have been placed in 100+ companies including these top MNCs</p>
          <div className="flex flex-wrap justify-center gap-3">
            {placementCompanies.map((c, i) => (
              <m.span key={c} className="rounded-full border bg-card px-5 py-2 text-sm font-medium text-card-foreground" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                {c}
              </m.span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-8">What Our Alumni Say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <m.div key={t.name} className="card-elevated rounded-lg border bg-card p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="flex gap-1 mb-3" aria-label="5 stars">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">"{t.quote}"</p>
                <div>
                  <div className="font-heading font-semibold text-sm text-card-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        {/* Commitment list */}
        <div className="mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-6">Our Commitment to You</h2>
          <ul className="space-y-3">
            {[
              "No student is left without placement support after course completion",
              "All trainers are active industry professionals, not just certified instructors",
              "Course content is updated every quarter to match current hiring trends",
              "You get access to recorded sessions for the entire duration of your batch",
              "Free resume review and LinkedIn profile optimisation for every student",
              "Access to alumni network and peer referral opportunities post placement",
            ].map((point, i) => (
              <m.li key={i} className="flex items-start gap-3 text-sm text-muted-foreground" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                {point}
              </m.li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <m.div className="hero-gradient rounded-2xl p-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-foreground mb-3">Ready to Start Your Journey?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">Talk to our counsellors today — free consultation, no pressure, just clarity on your career path.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/courses"><Button size="lg" className="font-semibold">Browse Courses</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">Talk to a Counsellor</Button></Link>
          </div>
        </m.div>

      </div>
    </div>
  );
}
