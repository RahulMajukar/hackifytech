"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { m } from "framer-motion";
import { GraduationCap, Loader2, CheckCircle } from "lucide-react";
import { PasswordInput } from "@/components/PasswordInput";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
    if (password !== confirmPassword) { setError("Passwords don't match"); return; }
    setLoading(true);
    setError("");
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <m.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Password Updated!</h2>
          <p className="text-muted-foreground mb-4">Your password has been reset successfully.</p>
          <Link href="/"><Button>Go to Home</Button></Link>
        </m.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
      <m.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-heading text-2xl font-bold text-secondary">
            <GraduationCap className="h-8 w-8 text-primary" />
            Hackify<span className="text-primary">Tech</span>
          </Link>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="font-heading font-semibold text-lg text-card-foreground mb-4">Set New Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}
            <div>
              <Label>New Password</Label>
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <PasswordInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {loading ? "Updating..." : "Update Password"}
            </Button>
          </form>
        </div>
      </m.div>
    </div>
  );
}
