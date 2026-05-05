"use client";

import { m } from "framer-motion";
import Link from "next/link";

const LAST_UPDATED = "April 15, 2026";

const sections = [
  {
    id: "intro",
    title: "1. Introduction",
    body: [
      "HackifyTech (Hackify Technologies, Bangalore, Karnataka, India) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, who we share it with, and what rights you have over your information.",
      "This policy applies to all users of our website (hackifytech.com), students enrolled in our courses, and anyone who contacts us through any channel. By using our services, you consent to the practices described in this policy.",
    ],
  },
  {
    id: "data-collected",
    title: "2. Information We Collect",
    subsections: [
      {
        heading: "2.1 Information you provide directly",
        points: [
          "Name, email address, phone number — when you fill in a contact form, enrol in a course, or sign up for our newsletter.",
          "Educational background, work experience, and career goals — shared during counselling or enrolment.",
          "Payment information — processed securely through third-party payment gateways. We do not store card numbers or bank details.",
          "Messages and enquiries sent via our contact form or WhatsApp.",
        ],
      },
      {
        heading: "2.2 Information collected automatically",
        points: [
          "Device type, browser, operating system, and IP address.",
          "Pages visited, time spent on pages, and referral source — collected via cookies and analytics tools.",
          "Click patterns and interaction data to improve our website experience.",
        ],
      },
      {
        heading: "2.3 Information from third parties",
        points: [
          "If you sign in using Google or another OAuth provider, we receive your name and email address from that provider.",
          "Publicly available profile information if you connect a social media account.",
        ],
      },
    ],
  },
  {
    id: "usage",
    title: "3. How We Use Your Information",
    points: [
      "To process your course enrolment and manage your account.",
      "To communicate with you about your enquiry, batch timings, assignments, and placement activities.",
      "To send course updates, study material, and placement-related communications.",
      "To personalise your learning experience and recommend relevant courses.",
      "To process payments and issue receipts or certificates.",
      "To improve our website, curriculum, and services based on usage patterns.",
      "To comply with legal obligations and prevent fraud.",
      "To send marketing communications — you can opt out at any time.",
    ],
  },
  {
    id: "sharing",
    title: "4. How We Share Your Information",
    body: [
      "We do not sell your personal data. We may share your information only in the following circumstances:",
    ],
    points: [
      "Hiring partners — with your explicit consent, your resume and profile may be shared with companies recruiting through HackifyTech's placement programme.",
      "Service providers — third-party tools we use to run our business (e.g., payment processors, email platforms, cloud storage). These providers are contractually obligated to protect your data.",
      "Legal requirements — if required by law, court order, or government authority.",
      "Business transfers — in the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity with the same protections in place.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking",
    body: [
      "We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us remember your preferences, analyse traffic, and understand how visitors interact with our content.",
      "Types of cookies we use:",
    ],
    points: [
      "Essential cookies — required for the website to function (authentication, session management).",
      "Analytics cookies — help us understand which pages are most visited and how users navigate the site (Google Analytics).",
      "Preference cookies — remember your settings and choices.",
      "Marketing cookies — used to deliver relevant advertisements (only with your consent).",
    ],
    footer: "You can control or disable cookies through your browser settings. Disabling essential cookies may affect website functionality.",
  },
  {
    id: "retention",
    title: "6. Data Retention",
    body: [
      "We retain your personal data only as long as necessary for the purposes described in this policy or as required by law.",
      "Student records and placement data are retained for up to 5 years after course completion to support alumni services and placement requests.",
      "You may request deletion of your data at any time by contacting us at info@hackifytech.com. We will process deletion requests within 30 days, subject to legal retention requirements.",
    ],
  },
  {
    id: "security",
    title: "7. Data Security",
    body: [
      "We implement industry-standard security measures to protect your personal information, including HTTPS encryption, secure database storage, access controls, and regular security audits.",
      "While we take reasonable precautions, no method of data transmission over the internet is completely secure. We cannot guarantee absolute security and are not liable for unauthorised access resulting from circumstances beyond our reasonable control.",
    ],
  },
  {
    id: "rights",
    title: "8. Your Rights",
    body: [
      "Under applicable Indian data protection laws and international standards, you have the following rights:",
    ],
    points: [
      "Access — request a copy of the personal data we hold about you.",
      "Correction — ask us to correct inaccurate or incomplete data.",
      "Deletion — request deletion of your personal data, subject to legal obligations.",
      "Portability — receive your data in a structured, machine-readable format.",
      "Objection — object to processing of your data for marketing purposes.",
      "Withdraw consent — withdraw consent for data processing at any time without affecting prior processing.",
    ],
    footer: "To exercise any of these rights, contact us at info@hackifytech.com. We will respond within 30 days.",
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    body: [
      "Our services are intended for individuals aged 16 and above. We do not knowingly collect personal data from children under 16. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.",
    ],
  },
  {
    id: "updates",
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we make significant changes, we will notify you by email or by posting a prominent notice on our website. The 'Last updated' date at the top of this page will always reflect the most recent revision.",
      "Continued use of our services after changes are posted constitutes acceptance of the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact Us",
    body: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Privacy team:",
    ],
    contact: [
      { label: "Email", value: "info@hackifytech.com" },
      { label: "Phone", value: "+91 98765 43210" },
      { label: "Address", value: "HackifyTech, Bangalore, Karnataka, India" },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-4xl">

        {/* Header */}
        <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
          <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4 text-sm text-muted-foreground leading-relaxed">
            Your privacy matters to us. This policy explains clearly and honestly what data we collect, why we collect it, and how you can control it.
          </div>
        </m.div>

        {/* Table of contents */}
        <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-lg border bg-card p-5 mb-10">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Contents</p>
          <ul className="grid sm:grid-cols-2 gap-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-primary hover:underline">{s.title}</a>
              </li>
            ))}
          </ul>
        </m.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <m.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="scroll-mt-20"
            >
              <h2 className="text-lg font-heading font-bold text-foreground mb-3">{section.title}</h2>

              {section.body?.map((para, j) => (
                <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-3">{para}</p>
              ))}

              {section.subsections?.map((sub, j) => (
                <div key={j} className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">{sub.heading}</p>
                  <ul className="space-y-1.5 pl-4">
                    {sub.points.map((pt, k) => (
                      <li key={k} className="text-sm text-muted-foreground leading-relaxed list-disc list-outside">{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.points && (
                <ul className="space-y-1.5 pl-4 mb-3">
                  {section.points.map((pt, j) => (
                    <li key={j} className="text-sm text-muted-foreground leading-relaxed list-disc list-outside">{pt}</li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-sm text-muted-foreground leading-relaxed mt-2 italic">{section.footer}</p>
              )}

              {section.contact && (
                <div className="mt-3 space-y-1.5">
                  {section.contact.map((c) => (
                    <p key={c.label} className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{c.label}:</span> {c.value}
                    </p>
                  ))}
                </div>
              )}
            </m.div>
          ))}
        </div>

        {/* Footer links */}
        <div className="mt-14 pt-8 border-t flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>See also:</span>
          <Link href="/terms" className="text-primary hover:underline">Terms &amp; Conditions</Link>
          <Link href="/refund" className="text-primary hover:underline">Refund Policy</Link>
          <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
