"use client";

import { Button } from "@/components/ui/button";
import { Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";

const cartItems = [
  { id: 1, type: "course", name: "Full Stack Web Development", price: 25000 },
  { id: 2, type: "book", name: "JavaScript for Beginners", price: 599 },
];

export default function CartPage() {
  const total = cartItems.reduce((s, i) => s + i.price, 0);
  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <h1 className="section-title text-foreground mb-8">Shopping Cart</h1>
        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border bg-card p-4">
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mr-2 capitalize">{item.type}</span>
                <span className="font-medium text-card-foreground text-sm">{item.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-heading font-bold text-foreground">₹{item.price.toLocaleString()}</span>
                <Button variant="ghost" size="sm"><Trash2 className="h-4 w-4 text-destructive" /></Button>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-muted-foreground">Total</span>
            <span className="text-2xl font-heading font-bold text-foreground">₹{total.toLocaleString()}</span>
          </div>
          <Link href="/checkout"><Button className="w-full gap-2">Proceed to Checkout <ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </div>
  );
}
