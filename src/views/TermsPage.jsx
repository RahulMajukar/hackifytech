"use client";

import { m } from "framer-motion";
import Link from "next/link";

const LAST_UPDATED = "April 15, 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using HackifyTech's website (hackifytech.com), enrolling in any course, or using any service offered by HackifyTech, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.",
      "These Terms constitute a legally binding agreement between you and HackifyTech (operated by Hackify Technologies, Bangalore, Karnataka, India). We reserve the right to update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "services",
    title: "2. Services Offered",
    body: [
      "HackifyTech provides IT training and placement assistance services including online live training, offline classroom training, self-paced learning materials, mentorship, resume building, mock interviews, and job placement referrals.",
      "We offer courses in Full Stack Web Development, Java Full Stack, Python & Data Science, React & Frontend Mastery, DevOps & Cloud Engineering, and Mobile App Development, among others. Course content, curriculum, and fees are subject to change without prior notice.",
    ],
  },
  {
    id: "enrolment",
    title: "3. Enrolment & Payment",
    body: [
      "Enrolment is confirmed only upon receipt of the full course fee or the agreed instalment as per the payment plan. Seats are allocated on a first-come, first-served basis. Provisional enrolment without payment does not guarantee a seat in your preferred batch.",
      "Course fees are quoted in Indian Rupees (INR) and are inclusive of all applicable taxes unless stated otherwise. Payment can be made via UPI, bank transfer, debit/credit card, or any method offered on our platform.",
      "HackifyTech reserves the right to defer or cancel a batch if the minimum enrolment threshold is not met. In such cases, enrolled students will be offered a full refund or transfer to the next available batch.",
    ],
  },
  {
    id: "placement",
    title: "4. Placement Assistance & Job Guarantee",
    body: [
      "HackifyTech offers 100% placement assistance, which means we will actively support every eligible student with resume preparation, mock interviews, LinkedIn optimisation, and direct referrals to our hiring partner companies.",
      "Placement assistance is contingent upon the student: (a) successfully completing the course and all assignments; (b) attending at least 80% of scheduled sessions; (c) completing the capstone project; and (d) actively participating in the placement preparation programme.",
      "The 'job guarantee' refers to our commitment to continue placement support until the student receives a job offer. It does not guarantee a specific salary, designation, company, or location. Placement outcomes depend on student performance, market conditions, and employer decisions, which are beyond HackifyTech's control.",
      "HackifyTech is not responsible for the terms, conditions, or continuity of employment offered by hiring partners.",
    ],
  },
  {
    id: "conduct",
    title: "5. Student Code of Conduct",
    body: [
      "Students are expected to attend sessions punctually, complete assignments on time, and interact respectfully with trainers, mentors, and fellow students. Disruptive, abusive, or dishonest behaviour may result in suspension or termination from the programme without refund.",
      "Sharing course materials, recordings, or proprietary content with third parties outside of the programme is strictly prohibited. All course content remains the intellectual property of HackifyTech.",
      "Academic dishonesty, including plagiarism in assignments or projects, will result in disciplinary action at HackifyTech's sole discretion.",
    ],
  },
  {
    id: "ip",
    title: "6. Intellectual Property",
    body: [
      "All content on the HackifyTech website and within course materials — including text, graphics, logos, videos, code samples, and curriculum documents — is owned by HackifyTech or its licensors and is protected by applicable intellectual property laws.",
      "You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content without our express written permission. Personal, non-commercial use for the purpose of learning is permitted.",
    ],
  },
  {
    id: "privacy",
    title: "7. Privacy",
    body: [
      "Your use of HackifyTech's services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the data practices described in our Privacy Policy.",
    ],
  },
  {
    id: "disclaimer",
    title: "8. Disclaimer of Warranties",
    body: [
      "HackifyTech's services are provided on an 'as-is' and 'as-available' basis. We make no warranties, express or implied, regarding the accuracy, completeness, or reliability of course content or placement outcomes.",
      "We do not guarantee that our website will be uninterrupted, error-free, or free from viruses or other harmful components. Use of the website is at your own risk.",
    ],
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    body: [
      "To the maximum extent permitted by applicable law, HackifyTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, even if we have been advised of the possibility of such damages.",
      "Our total liability to you for any claim arising out of these Terms or your use of our services shall not exceed the total fees paid by you to HackifyTech in the six months preceding the claim.",
    ],
  },
  {
    id: "governing",
    title: "10. Governing Law & Disputes",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.",
      "Before initiating any legal proceedings, parties agree to attempt to resolve disputes amicably through good-faith negotiation for a period of 30 days.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact",
    body: [
      "For questions regarding these Terms, please contact us at info@hackifytech.com or call +91 98765 43210.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-4xl">

        {/* Header */}
        <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
          <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4 text-sm text-muted-foreground leading-relaxed">
            Please read these Terms and Conditions carefully before using HackifyTech's services. By enrolling in a course or using our website, you agree to be bound by these terms.
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
            >
              <h2 className="text-lg font-heading font-bold text-foreground mb-3 scroll-mt-20">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((para, j) => (
                  <p key={j} className="text-sm text-muted-foreground leading-relaxed">{para}</p>
                ))}
              </div>
            </m.div>
          ))}
        </div>

        {/* Footer links */}
        <div className="mt-14 pt-8 border-t flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>See also:</span>
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          <Link href="/refund" className="text-primary hover:underline">Refund Policy</Link>
          <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
