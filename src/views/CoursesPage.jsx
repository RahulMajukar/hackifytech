"use client";

import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, BookOpen, Monitor, MapPin, Zap, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useCourses } from "@/hooks/useCourses";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
};

export default function CoursesPage() {
  const { data: courses, isLoading } = useCourses();

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-14">
          <h1 className="section-title text-foreground">Job-Guaranteed Courses</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Industry-designed, placement-focused training programs. Every course comes with 100% placement assistance and a dedicated mentor.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(courses || []).map((course, i) => (
            <m.div
              key={course.id}
              className="card-elevated rounded-xl border bg-card overflow-hidden flex flex-col group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              {/* Card header strip */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ backgroundColor: `${course.accentColor}15`, borderBottom: `2px solid ${course.accentColor}` }}
              >
                <span className="text-2xl">{course.icon}</span>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: course.badgeColor }}
                >
                  {course.badge}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: course.accentColor, backgroundColor: `${course.accentColor}15` }}
                  >
                    {course.mode === "Online"
                      ? <><Monitor className="h-3 w-3 inline mr-1" />Online</>
                      : course.mode === "Offline"
                      ? <><MapPin className="h-3 w-3 inline mr-1" />Offline</>
                      : <><Monitor className="h-3 w-3 inline mr-1" />Online & Offline</>
                    }
                  </span>
                  <span className="text-xs text-muted-foreground">{course.level}</span>
                </div>

                <h2 className="font-heading text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{course.tagline}</p>

                {/* Stats row */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {course.syllabus.length} modules</span>
                  <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> {course.totalHours}h</span>
                </div>

                {/* Top 3 highlights */}
                <ul className="space-y-1.5 mb-5">
                  {course.highlights.slice(0, 3).map((h, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto" />

                {/* Price + actions */}
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading font-bold text-xl text-foreground">{course.price}</span>
                      <span className="text-xs text-muted-foreground line-through">{course.originalPrice}</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium">
                      Save {Math.round(
                        ((parseInt(course.originalPrice.replace(/[^0-9]/g, "")) -
                          parseInt(course.price.replace(/[^0-9]/g, ""))) /
                          parseInt(course.originalPrice.replace(/[^0-9]/g, ""))) * 100
                      )}%
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/courses/${course.slug}`}>
                      <Button size="sm" variant="outline" className="gap-1 text-xs">
                        Details <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="sm" className="text-xs">Enrol</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Bottom trust band */}
        <div className="mt-16 rounded-xl bg-muted/50 border p-8 text-center">
          <h2 className="text-xl font-heading font-bold text-foreground mb-2">Not sure which course to pick?</h2>
          <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
            Our counsellors will help you choose the right course based on your background, goals, and timeline — free consultation.
          </p>
          <Link href="/contact">
            <Button className="gap-2">
              Talk to a Counsellor <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
