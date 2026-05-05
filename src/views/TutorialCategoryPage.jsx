"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle, Menu, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const sidebarItems = ["Introduction", "Editors", "Basics", "Elements", "Attributes", "Headings", "Paragraphs", "Styles", "Forms", "Media", "SEO Basics"];

const quizQuestions = [
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: 0 },
  { q: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>", "<head>"], answer: 2 },
];

export default function TutorialCategoryPage() {
  const rawCategory = useParams().category;
  const category = Array.isArray(rawCategory) ? rawCategory[rawCategory.length - 1] : rawCategory;
  const [activeChapter, setActiveChapter] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const catName = (category || "html").toUpperCase().replace("-", " ");
  const prevChapter = activeChapter > 0 ? sidebarItems[activeChapter - 1] : null;
  const nextChapter = activeChapter < sidebarItems.length - 1 ? sidebarItems[activeChapter + 1] : null;

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <aside className="hidden lg:block w-60 shrink-0 border-r bg-card overflow-y-auto sticky top-16 h-[calc(100vh-4rem)]">
        <div className="p-4 border-b">
          <p className="font-heading font-bold text-sm text-card-foreground">{catName} Tutorial</p>
          <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${((activeChapter + 1) / sidebarItems.length) * 100}%` }} />
          </div>
          <p className="text-xs text-muted-foreground mt-1">{activeChapter + 1}/{sidebarItems.length} chapters</p>
        </div>
        <nav className="p-2 space-y-0.5">
          {sidebarItems.map((item, i) => (
            <button key={item} onClick={() => setActiveChapter(i)} className={`tutorial-sidebar-link w-full text-left flex items-center gap-2 ${i === activeChapter ? "active" : ""}`}>
              {i < activeChapter && <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />}
              <span>{item}</span>
            </button>
          ))}
        </nav>
      </aside>

      <AnimatePresence>
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-foreground/30" onClick={() => setSidebarOpen(false)} />
            <m.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} className="absolute left-0 top-0 bottom-0 w-64 bg-card overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <p className="font-heading font-bold text-sm">{catName}</p>
                <button onClick={() => setSidebarOpen(false)}><X className="h-5 w-5" /></button>
              </div>
              <nav className="p-2 space-y-0.5">
                {sidebarItems.map((item, i) => (
                  <button key={item} onClick={() => { setActiveChapter(i); setSidebarOpen(false); }} className={`tutorial-sidebar-link w-full text-left ${i === activeChapter ? "active" : ""}`}>{item}</button>
                ))}
              </nav>
            </m.aside>
          </div>
        )}
      </AnimatePresence>

      <div className="flex-1 max-w-4xl mx-auto px-4 py-8 md:px-8">
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden mb-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Menu className="h-4 w-4" /> Chapters</button>
        <m.div key={activeChapter} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="mb-2"><Link href="/tutorials" className="text-xs text-muted-foreground hover:text-primary">← Tutorials</Link></div>
          <h1 className="text-3xl font-bold font-heading text-foreground mb-6">{catName} - {sidebarItems[activeChapter]}</h1>
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed">Welcome to the <strong>{sidebarItems[activeChapter]}</strong> chapter of our {catName} tutorial. This section covers the fundamental concepts you need to understand to build modern web applications.</p>
            <div className="my-6 rounded-lg border bg-muted/50 p-4">
              <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">💡 Tip</div>
              <p className="text-sm text-muted-foreground">Practice along with the examples. The best way to learn is by doing!</p>
            </div>
            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">Example Code</h2>
            <pre className="rounded-lg bg-secondary p-4 overflow-x-auto">
              <code className="text-sm text-secondary-foreground font-mono">{`<!DOCTYPE html>\n<html>\n<head>\n  <title>${catName} Example</title>\n</head>\n<body>\n  <h1>Hello, HackifyTech!</h1>\n  <p>Learning ${catName} is fun.</p>\n</body>\n</html>`}</code>
            </pre>
            <h2 className="text-xl font-heading font-semibold text-foreground mt-8 mb-4">Key Concepts</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Understanding the core structure and syntax</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Best practices for clean, maintainable code</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Common patterns and real-world use cases</li>
            </ul>
          </div>

          <div className="mt-12 rounded-lg border bg-card p-6">
            <h3 className="font-heading font-semibold text-lg text-card-foreground mb-4">📝 Chapter Quiz</h3>
            <div className="space-y-6">
              {quizQuestions.map((qq, qi) => (
                <div key={qi}>
                  <p className="font-medium text-sm text-card-foreground mb-3">{qi + 1}. {qq.q}</p>
                  <RadioGroup value={quizAnswers[qi]} onValueChange={(v) => setQuizAnswers({ ...quizAnswers, [qi]: v })} disabled={quizSubmitted}>
                    {qq.options.map((opt, oi) => (
                      <div key={oi} className="flex items-center gap-2">
                        <RadioGroupItem value={String(oi)} id={`q${qi}-o${oi}`} />
                        <Label htmlFor={`q${qi}-o${oi}`} className={`text-sm cursor-pointer ${quizSubmitted && oi === qq.answer ? "text-primary font-medium" : quizSubmitted && quizAnswers[qi] === String(oi) && oi !== qq.answer ? "text-destructive" : ""}`}>{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>
            <Button className="mt-4" size="sm" onClick={() => setQuizSubmitted(true)} disabled={quizSubmitted || Object.keys(quizAnswers).length < quizQuestions.length}>
              {quizSubmitted ? `Score: ${quizQuestions.filter((q, i) => quizAnswers[i] === String(q.answer)).length}/${quizQuestions.length}` : "Submit Quiz"}
            </Button>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            {prevChapter ? <Button variant="outline" size="sm" onClick={() => setActiveChapter(activeChapter - 1)} className="gap-2"><ChevronLeft className="h-4 w-4" /> {prevChapter}</Button> : <div />}
            {nextChapter ? <Button size="sm" onClick={() => setActiveChapter(activeChapter + 1)} className="gap-2">{nextChapter} <ChevronRight className="h-4 w-4" /></Button> : <div />}
          </div>
        </m.div>
      </div>
    </div>
  );
}
