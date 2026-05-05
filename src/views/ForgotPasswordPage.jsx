"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { m } from "framer-motion";
import { GraduationCap, Loader2, CheckCircle, ArrowLeft, Mail, ShieldCheck, KeyRound } from "lucide-react";
import { PasswordInput } from "@/components/PasswordInput";
import { supabase } from "@/integrations/supabase/client";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1); // 1=email, 2=otp, 3=new password, 4=success
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setLoading(true);
    setError("");
    const { error: err } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);
    if (err) setError(err.message);
    else setStep(2);
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp || otp.length < 6) {
      setError("Please enter the 6-digit OTP");
      return;
    }
    setLoading(true);
    setError("");
    const { error: err } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "recovery",
    });
    setLoading(false);
    if (err) setError(err.message);
    else setStep(3);
  };

  // Step 3: Reset password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setLoading(true);
    setError("");
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) setError(err.message);
    else setStep(4);
  };

  const stepIndicator = (
    <div className="flex items-center justify-center gap-2 mb-6">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
            step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}>
            {step > s ? <CheckCircle className="h-4 w-4" /> : s}
          </div>
          {s < 3 && <div className={`w-8 h-0.5 ${step > s ? "bg-primary" : "bg-muted"}`} />}
        </div>
      ))}
    </div>
  );

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
          {step < 4 && stepIndicator}

          {/* Step 1: Enter Email */}
          {step === 1 && (
            <m.div key="step1" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-1">
                <Mail className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-semibold text-lg text-card-foreground">Forgot Password</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-5">Enter your email and we'll send you a verification code</p>
              <form onSubmit={handleSendOtp} className="space-y-4">
                {error && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}
                <div>
                  <Label htmlFor="fp-email">Email</Label>
                  <Input id="fp-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  {loading ? "Sending OTP..." : "Send OTP"}
                </Button>
              </form>
            </m.div>
          )}

          {/* Step 2: Verify OTP */}
          {step === 2 && (
            <m.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-semibold text-lg text-card-foreground">Verify OTP</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                Enter the 6-digit code sent to <strong className="text-foreground">{email}</strong>
              </p>
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                {error && <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}
                <div>
                  <Label htmlFor="fp-otp">OTP Code</Label>
                  <Input
                    id="fp-otp"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="123456"
                    className="text-center text-lg tracking-[0.5em] font-mono"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                  {loading ? "Verifying..." : "Verify OTP"}
                </Button>
                <button
                  type="button"
                  onClick={() => { setStep(1); setOtp(""); setError(""); }}
                  className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Didn't receive the code? Go back
                </button>
              </form>
            </m.div>
          )}

          {/* Step 3: New Password */}
          {step === 3 && (
            <m.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-1">
                <KeyRound className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-semibold text-lg text-card-foreground">Set New Password</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-5">Create a strong password for your account</p>
              <form onSubmit={handleResetPassword} className="space-y-4">
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
                  {loading ? "Updating..." : "Reset Password"}
                </Button>
              </form>
            </m.div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <m.div key="step4" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-4">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-heading font-bold text-card-foreground mb-2">Password Updated!</h2>
              <p className="text-sm text-muted-foreground mb-4">Your password has been reset successfully. You can now sign in.</p>
              <Link href="/"><Button>Go to Home</Button></Link>
            </m.div>
          )}

          {step < 4 && (
            <div className="mt-4 text-center">
              <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                <ArrowLeft className="h-3 w-3" /> Back to Home
              </Link>
            </div>
          )}
        </div>
      </m.div>
    </div>
  );
}
