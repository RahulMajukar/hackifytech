"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

const LAST_UPDATED = "April 15, 2026";

const refundTable = [
  { period: "Before batch start date",          percentage: "100%",  condition: "Full refund, no questions asked" },
  { period: "Within 3 days of batch start",     percentage: "75%",   condition: "Refund of fees paid minus processing charges" },
  { period: "4–7 days after batch start",       percentage: "50%",   condition: "50% refund if fewer than 3 sessions attended" },
  { period: "8–14 days after batch start",      percentage: "25%",   condition: "25% refund on written request with valid reason" },
  { period: "After 14 days / post-completion",  percentage: "0%",    condition: "No refund applicable" },
];

const eligible = [
  "Cancellation before the batch officially starts.",
  "HackifyTech cancels or indefinitely postpones the batch.",
  "Technical inability to access online sessions due to a platform error on our side (not your internet connection).",
  "Medical emergency — supported by a valid medical certificate submitted within 7 days.",
  "Duplicate payment — full refund of the extra amount charged.",
];

const notEligible = [
  "Change of mind after attending more than 3 sessions.",
  "Inability to attend due to personal schedule conflicts that arise post-enrolment.",
  "Partial completion or voluntary dropout after the refund window.",
  "Dissatisfaction with placement outcomes (placement assistance is a best-effort service).",
  "Failure to meet the minimum attendance requirement (80%) without a valid reason.",
  "EMI defaults — any outstanding instalments remain payable regardless of course participation.",
];

const process = [
  { step: "01", title: "Submit a Request", desc: "Email info@hackifytech.com with the subject line 'Refund Request — [Your Name]'. Include your enrolment ID, reason, and relevant supporting documents." },
  { step: "02", title: "Acknowledgement", desc: "We will acknowledge your request within 2 business days and confirm whether it qualifies under our refund policy." },
  { step: "03", title: "Review & Approval", desc: "Eligible refunds are reviewed and approved within 5 business days of receiving all required documents." },
  { step: "04", title: "Processing", desc: "Approved refunds are processed to the original payment method within 7–10 business days. Bank processing times may vary." },
];

export default function RefundPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-4xl">

        {/* Header */}
        <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">Refund Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
          <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4 text-sm text-muted-foreground leading-relaxed">
            We want every student to feel confident enrolling with HackifyTech. This policy explains exactly when and how refunds are granted — no fine print, no surprises.
          </div>
        </m.div>

        {/* Refund schedule table */}
        <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <h2 className="text-lg font-heading font-bold text-foreground mb-4">Refund Schedule</h2>
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-muted px-5 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wide">
              <span>Time of Request</span>
              <span className="text-center">Refund Amount</span>
              <span className="text-right">Notes</span>
            </div>
            {refundTable.map((row, i) => (
              <m.div
                key={i}
                className={`grid grid-cols-3 items-center px-5 py-4 border-t text-sm gap-4 ${i % 2 === 0 ? "bg-card" : "bg-background"}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="text-foreground font-medium">{row.period}</span>
                <span
                  className={`text-center font-bold text-base font-heading ${
                    row.percentage === "100%" ? "text-green-600"
                    : row.percentage === "0%"   ? "text-destructive"
                    : "text-yellow-600"
                  }`}
                >
                  {row.percentage}
                </span>
                <span className="text-right text-muted-foreground">{row.condition}</span>
              </m.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            * All refund amounts are calculated on the total course fee paid. Payment gateway charges (if any) are non-refundable.
          </p>
        </m.div>

        {/* Eligible / Not eligible */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h2 className="font-heading font-bold text-foreground">Eligible for Refund</h2>
            </div>
            <ul className="space-y-3">
              {eligible.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-5 w-5 text-destructive" />
              <h2 className="font-heading font-bold text-foreground">Not Eligible for Refund</h2>
            </div>
            <ul className="space-y-3">
              {notEligible.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </m.div>
        </div>

        {/* Refund process */}
        <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-lg font-heading font-bold text-foreground mb-6">How to Request a Refund</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((ps, i) => (
              <m.div
                key={ps.step}
                className="rounded-lg border bg-card p-5 text-center"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold font-heading text-sm">
                  {ps.step}
                </div>
                <h3 className="font-heading font-semibold text-card-foreground mb-2">{ps.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ps.desc}</p>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* Batch transfer option */}
        <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20 p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading font-bold text-foreground mb-2">Prefer a Batch Transfer?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you need to pause due to personal reasons, we offer a free one-time batch transfer to the next available batch of the same course. This option is available up to 7 days after the batch start date and is often a better alternative to a refund. Contact us at{" "}
                <a href="mailto:info@hackifytech.com" className="text-primary font-medium hover:underline">info@hackifytech.com</a> to request a transfer.
              </p>
            </div>
          </div>
        </m.div>

        {/* Additional clauses */}
        <div className="space-y-6 mb-12">
          {[
            {
              title: "EMI & Instalment Plans",
              body: "Students on instalment plans who request a refund will have the refund calculated on the total fees paid at the time of the request. Outstanding instalments are cancelled for the unused portion if the refund is approved within the eligible window. EMI processing fees are non-refundable.",
            },
            {
              title: "Placement Assistance Fee",
              body: "If a separate placement assistance component is included in your course fee, this portion is non-refundable once placement activities (resume review, mock interviews, referrals) have been initiated for your profile.",
            },
            {
              title: "HackifyTech-Initiated Cancellations",
              body: "If HackifyTech cancels a batch or course permanently, all enrolled students will receive a 100% refund within 10 business days, regardless of when they enrolled or how many sessions they attended.",
            },
          ].map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <h2 className="text-base font-heading font-bold text-foreground mb-2">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </m.div>
          ))}
        </div>

        {/* Contact */}
        <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border bg-card p-6 mb-10">
          <h2 className="font-heading font-bold text-foreground mb-3">Questions About a Refund?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Reach our student support team — we aim to resolve all refund queries within 2 business days.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <p className="font-medium text-foreground">Email</p>
              <a href="mailto:info@hackifytech.com" className="text-primary hover:underline">info@hackifytech.com</a>
            </div>
            <div>
              <p className="font-medium text-foreground">Phone / WhatsApp</p>
              <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>
            </div>
          </div>
        </m.div>

        {/* Footer links */}
        <div className="pt-8 border-t flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>See also:</span>
          <Link href="/terms" className="text-primary hover:underline">Terms &amp; Conditions</Link>
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
