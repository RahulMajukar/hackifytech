"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogs = [
  { slug: "getting-started-html", title: "Getting Started with HTML in 2025", excerpt: "A beginner's guide to modern HTML practices.", date: "Mar 1, 2025", tag: "HTML" },
  { slug: "css-grid-flexbox", title: "CSS Grid vs Flexbox: When to Use What", excerpt: "Understanding the layout systems in CSS.", date: "Feb 20, 2025", tag: "CSS" },
  { slug: "javascript-es2024", title: "New JavaScript Features in ES2024", excerpt: "Explore the latest additions to the JavaScript language.", date: "Feb 15, 2025", tag: "JavaScript" },
  { slug: "python-ml-beginners", title: "Python for Machine Learning Beginners", excerpt: "Start your ML journey with Python fundamentals.", date: "Feb 10, 2025", tag: "Python" },
  { slug: "react-best-practices", title: "React Best Practices for 2025", excerpt: "Build maintainable React apps with these patterns.", date: "Feb 5, 2025", tag: "React" },
  { slug: "career-in-tech", title: "How to Switch to a Tech Career", excerpt: "Steps to transition from non-IT to software development.", date: "Jan 28, 2025", tag: "Career" },
];

export default function BlogsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="section-title text-foreground">Blog</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Insights, tutorials, and career tips from the HackifyTech team</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <m.article key={blog.slug} className="card-elevated rounded-lg border bg-card overflow-hidden group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <div className="h-40 bg-muted flex items-center justify-center"><span className="text-3xl font-heading font-bold text-muted-foreground/30">{blog.tag}</span></div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{blog.tag}</span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h2 className="font-heading font-semibold text-card-foreground group-hover:text-primary transition-colors mb-1">{blog.title}</h2>
                <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3 hover:gap-2 transition-all">Read more <ArrowRight className="h-3 w-3" /></Link>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </div>
  );
}
