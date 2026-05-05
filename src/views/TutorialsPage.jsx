"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "HTML", color: "bg-orange-500", desc: "Learn web structure & semantic markup", chapters: 15 },
  { name: "CSS", color: "bg-blue-500", desc: "Style, layout, animations & responsive design", chapters: 20 },
  { name: "JavaScript", color: "bg-yellow-500", desc: "Programming fundamentals & DOM manipulation", chapters: 25 },
  { name: "Java", color: "bg-red-500", desc: "OOP, enterprise development & Spring", chapters: 30 },
  { name: "Python", color: "bg-emerald-500", desc: "Scripting, data science & automation", chapters: 22 },
  { name: "SQL", color: "bg-indigo-500", desc: "Database queries & management", chapters: 18 },
  { name: "React", color: "bg-cyan-500", desc: "Component-based UI development", chapters: 20 },
  { name: "Spring Boot", color: "bg-green-600", desc: "Java backend framework & REST APIs", chapters: 16 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

export default function TutorialsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="section-title text-foreground">Tutorials</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Free, comprehensive tutorials covering all major programming languages and technologies</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <m.div key={cat.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Link href={`/tutorials/${cat.name.toLowerCase().replace(" ", "-")}`} className="card-elevated group flex flex-col rounded-lg border bg-card p-6 h-full transition-all">
                <div className={`${cat.color} flex h-14 w-14 items-center justify-center rounded-xl text-lg font-bold text-primary-foreground mb-4`}>{cat.name.slice(0, 2).toUpperCase()}</div>
                <h2 className="font-heading text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors mb-2">{cat.name}</h2>
                <p className="text-sm text-muted-foreground flex-1">{cat.desc}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <span className="text-xs text-muted-foreground">{cat.chapters} chapters</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}
