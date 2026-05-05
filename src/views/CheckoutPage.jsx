"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";
import { m } from "framer-motion";
import Link from "next/link";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 2000);
  };

  if (success) {
    return (
      <div className="py-20">
        <div className="container max-w-md text-center">
          <m.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Order Placed!</h2>
            <p className="text-muted-foreground mb-6">Your order has been placed successfully. Check your email for details.</p>
            <Link href="/"><Button>Back to Home</Button></Link>
          </m.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-xl">
        <h1 className="section-title text-foreground mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="rounded-lg border bg-card p-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>First Name</Label><Input required /></div>
            <div><Label>Last Name</Label><Input required /></div>
          </div>
          <div><Label>Email</Label><Input type="email" required /></div>
          <div><Label>Phone</Label><Input type="tel" required /></div>
          <div><Label>Address</Label><Input required /></div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="text-muted-foreground">Total</span>
              <span className="font-heading font-bold text-xl">₹25,599</span>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {loading ? "Processing..." : "Place Order"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
