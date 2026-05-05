"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailPage() {
  const rawSlug = useParams().slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[rawSlug.length - 1] : rawSlug;
  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <article>
          <div className="mb-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Tutorial</span>
            <span className="text-xs text-muted-foreground ml-2">Mar 1, 2025</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6 capitalize">{slug?.replace(/-/g, " ")}</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>This is a sample blog post content for <strong>{slug?.replace(/-/g, " ")}</strong>. In a production app, this content would be loaded from markdown files or a CMS.</p>
            <p>HackifyTech provides in-depth tutorials, career guidance, and hands-on training to help you succeed in the tech industry.</p>
            <h2 className="text-xl font-heading font-semibold text-foreground mt-8">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Understand the fundamentals before diving deep</li>
              <li>Practice with real-world projects</li>
              <li>Stay updated with industry trends</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}
