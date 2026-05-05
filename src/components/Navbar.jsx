"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { m, AnimatePresence } from "framer-motion";
import { LoginDialog } from "@/components/LoginDialog";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  // { label: "Tutorials", href: "/tutorials" },
  { label: "Courses", href: "/courses" },
  // { label: "Blogs", href: "/blogs" },
  // { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-secondary">
            <GraduationCap className="h-7 w-7 text-primary" />
            <span>Hackify<span className="text-primary">Tech</span></span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted hover:text-primary ${
                  pathname.startsWith(item.href) ? "text-primary bg-primary/5" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <Button size="sm" variant="ghost" className="ml-2" onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Button size="sm" className="ml-2" onClick={() => setLoginOpen(true)}>
                Login
              </Button>
            )}
          </nav>

          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t lg:hidden"
            >
              <nav className="container flex flex-col gap-1 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors hover:bg-muted ${
                      pathname.startsWith(item.href) ? "text-primary bg-primary/5" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {user ? (
                  <Button size="sm" variant="ghost" className="w-full mt-2" onClick={() => { signOut(); setMobileOpen(false); }}>
                    Logout
                  </Button>
                ) : (
                  <Button size="sm" className="w-full mt-2" onClick={() => { setLoginOpen(true); setMobileOpen(false); }}>
                    Login
                  </Button>
                )}
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </header>

      <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
