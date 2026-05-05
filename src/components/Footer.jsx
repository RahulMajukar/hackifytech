import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span>Hackify<span className="text-primary">Tech</span></span>
            </Link>
            <p className="mt-3 text-sm text-secondary-foreground/70">
              Future-ready online & offline training with 100% placement assistance in top MNC companies.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Tutorials</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {["HTML", "CSS", "JavaScript", "Python", "Java", "React"].map((t) => (
                <li key={t}><Link href={`/tutorials/${t.toLowerCase()}`} className="hover:text-primary transition-colors">{t}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {[["About", "/about"], ["Services", "/services"], ["Courses", "/courses"], ["Contact", "/contact"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="hover:text-primary transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              {[["Terms & Conditions", "/terms"], ["Privacy Policy", "/privacy"], ["Refund Policy", "/refund"]].map(([l, h]) => (
                <li key={h}><Link href={h} className="hover:text-primary transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@hackifytech.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Bangalore, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} HackifyTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
