"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiJ-Ek-_EeA.woff", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff", fontWeight: 700 },
  ],
});

const GREEN = "#16a34a";
const DARK = "#0f172a";
const GRAY = "#64748b";
const LIGHT_GRAY = "#f1f5f9";
const WHITE = "#ffffff";
const BORDER = "#e2e8f0";
const ACCENT_BG = "#f0fdf4";

const s = StyleSheet.create({
  page: { fontFamily: "Inter", backgroundColor: WHITE, paddingBottom: 50 },

  // ── Cover page ─────────────────────────────────────────────────
  coverBg: { backgroundColor: DARK, flex: 1, padding: 0 },
  coverTop: { backgroundColor: GREEN, paddingHorizontal: 48, paddingVertical: 36 },
  coverLogo: { fontSize: 13, color: WHITE, fontWeight: 700, letterSpacing: 1.5, marginBottom: 4 },
  coverLogoSub: { fontSize: 9, color: "#bbf7d0", letterSpacing: 2 },
  coverMiddle: { paddingHorizontal: 48, paddingVertical: 44, flex: 1 },
  coverIcon: { fontSize: 52, marginBottom: 20 },
  coverBadge: { backgroundColor: "#1e3a2f", borderRadius: 4, alignSelf: "flex-start", paddingHorizontal: 10, paddingVertical: 4, marginBottom: 20 },
  coverBadgeText: { fontSize: 9, color: "#86efac", fontWeight: 600, letterSpacing: 1.2 },
  coverTitle: { fontSize: 34, fontWeight: 700, color: WHITE, lineHeight: 1.25, marginBottom: 14 },
  coverTagline: { fontSize: 13, color: "#94a3b8", lineHeight: 1.6, marginBottom: 40, maxWidth: 420 },
  coverStats: { flexDirection: "row", gap: 0 },
  coverStat: { marginRight: 36 },
  coverStatNum: { fontSize: 22, fontWeight: 700, color: GREEN, marginBottom: 2 },
  coverStatLabel: { fontSize: 9, color: "#94a3b8", letterSpacing: 0.5 },
  coverBottom: { paddingHorizontal: 48, paddingVertical: 24, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderTopColor: "#1e293b" },
  coverBottomText: { fontSize: 9, color: "#475569" },
  coverModeChip: { backgroundColor: "#1e293b", borderRadius: 4, paddingHorizontal: 10, paddingVertical: 5 },
  coverModeChipText: { fontSize: 9, color: "#94a3b8" },

  // ── Section header strip ─────────────────────────────────────
  sectionHeader: { backgroundColor: GREEN, paddingHorizontal: 40, paddingVertical: 16, flexDirection: "row", alignItems: "center" },
  sectionHeaderTitle: { fontSize: 16, fontWeight: 700, color: WHITE },
  sectionHeaderSub: { fontSize: 9, color: "#bbf7d0", marginTop: 2 },

  // ── Page content area ────────────────────────────────────────
  body: { paddingHorizontal: 40, paddingTop: 28 },

  // ── TOC ──────────────────────────────────────────────────────
  tocRow: { flexDirection: "row", alignItems: "center", paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: BORDER },
  tocNum: { width: 28, height: 28, backgroundColor: GREEN, borderRadius: 14, alignItems: "center", justifyContent: "center", marginRight: 12 },
  tocNumText: { fontSize: 9, fontWeight: 700, color: WHITE },
  tocTitle: { flex: 1, fontSize: 11, color: DARK, fontWeight: 600 },
  tocDuration: { fontSize: 9, color: GRAY, marginRight: 16 },
  tocDots: { flex: 1, borderBottomWidth: 1, borderBottomStyle: "dotted", borderBottomColor: "#cbd5e1", marginHorizontal: 8 },
  tocPage: { fontSize: 9, color: GREEN, fontWeight: 600, width: 24, textAlign: "right" },

  // ── Module card ──────────────────────────────────────────────
  moduleCard: { marginBottom: 20, borderRadius: 6, borderWidth: 1, borderColor: BORDER, overflow: "hidden" },
  moduleCardHeader: { backgroundColor: ACCENT_BG, paddingHorizontal: 16, paddingVertical: 12, flexDirection: "row", alignItems: "center" },
  moduleNum: { width: 26, height: 26, backgroundColor: GREEN, borderRadius: 13, alignItems: "center", justifyContent: "center", marginRight: 12 },
  moduleNumText: { fontSize: 9, fontWeight: 700, color: WHITE },
  moduleTitle: { flex: 1, fontSize: 12, fontWeight: 700, color: DARK },
  moduleDuration: { fontSize: 9, color: GREEN, fontWeight: 600, backgroundColor: "#dcfce7", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  moduleBody: { paddingHorizontal: 16, paddingVertical: 12 },
  topicRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 6 },
  topicDot: { width: 5, height: 5, backgroundColor: GREEN, borderRadius: 3, marginTop: 4, marginRight: 10 },
  topicText: { flex: 1, fontSize: 10, color: "#334155", lineHeight: 1.5 },

  // ── Outcomes / highlights boxes ──────────────────────────────
  outcomesBox: { backgroundColor: ACCENT_BG, borderRadius: 6, borderLeftWidth: 3, borderLeftColor: GREEN, padding: 16, marginBottom: 16 },
  outcomeRow: { flexDirection: "row", alignItems: "flex-start", marginBottom: 7 },
  checkmark: { fontSize: 10, color: GREEN, marginRight: 8, fontWeight: 700 },
  outcomeText: { flex: 1, fontSize: 10, color: "#1e293b", lineHeight: 1.55 },

  // ── Tools grid ───────────────────────────────────────────────
  toolsWrap: { flexDirection: "row", flexWrap: "wrap", gap: 0 },
  toolChip: { backgroundColor: LIGHT_GRAY, borderRadius: 4, paddingHorizontal: 10, paddingVertical: 5, marginRight: 8, marginBottom: 8 },
  toolText: { fontSize: 9, color: DARK, fontWeight: 600 },

  // ── CTA box ───────────────────────────────────────────────────
  ctaBox: { backgroundColor: DARK, borderRadius: 8, padding: 24, marginTop: 24, alignItems: "center" },
  ctaTitle: { fontSize: 16, fontWeight: 700, color: WHITE, marginBottom: 6, textAlign: "center" },
  ctaSub: { fontSize: 10, color: "#94a3b8", textAlign: "center", marginBottom: 16 },
  ctaContact: { flexDirection: "row", gap: 0 },
  ctaItem: { marginRight: 28 },
  ctaLabel: { fontSize: 8, color: "#64748b", letterSpacing: 1, marginBottom: 2 },
  ctaValue: { fontSize: 11, color: GREEN, fontWeight: 600 },

  // ── Section label ─────────────────────────────────────────────
  sectionLabel: { fontSize: 8, fontWeight: 700, color: GREEN, letterSpacing: 1.5, marginBottom: 10, marginTop: 6 },

  // ── Footer ────────────────────────────────────────────────────
  footer: { position: "absolute", bottom: 0, left: 0, right: 0, height: 40, backgroundColor: DARK, flexDirection: "row", alignItems: "center", paddingHorizontal: 40, justifyContent: "space-between" },
  footerLeft: { fontSize: 8, color: "#64748b" },
  footerCenter: { fontSize: 8, color: "#475569", fontWeight: 600 },
  footerRight: { fontSize: 8, color: "#64748b" },

  // ── Misc ──────────────────────────────────────────────────────
  divider: { height: 1, backgroundColor: BORDER, marginVertical: 14 },
  pageTitle: { fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 4 },
  pageSub: { fontSize: 10, color: GRAY, marginBottom: 20, lineHeight: 1.5 },
});

function Footer({ course, pageNum, totalPages }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerLeft}>HackifyTech | hackifytech.com</Text>
      <Text style={s.footerCenter}>{course.title}</Text>
      <Text style={s.footerRight}>
        Page {pageNum} of {totalPages}
      </Text>
    </View>
  );
}

function PageFooter({ course }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerLeft}>HackifyTech | hackifytech.com</Text>
      <Text style={s.footerCenter}>{course.title}</Text>
      <Text
        style={s.footerRight}
        render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
      />
    </View>
  );
}

export function SyllabusPDF({ course }) {
  const halfModules = Math.ceil(course.syllabus.length / 2);
  const col1 = course.syllabus.slice(0, halfModules);
  const col2 = course.syllabus.slice(halfModules);

  return (
    <Document
      title={`${course.title} — Course Syllabus | HackifyTech`}
      author="HackifyTech"
      subject="Course Syllabus"
      keywords="HackifyTech, training, placement, syllabus"
    >
      {/* ═══════════════════════════════ PAGE 1 — COVER ════════════════════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.coverBg}>
          <View style={s.coverTop}>
            <Text style={s.coverLogo}>HackifyTech</Text>
            <Text style={s.coverLogoSub}>FUTURE-READY TRAINING & PLACEMENT</Text>
          </View>

          <View style={s.coverMiddle}>
            <Text style={s.coverIcon}>{course.icon}</Text>
            <View style={[s.coverBadge, { backgroundColor: "#1a2e20" }]}>
              <Text style={s.coverBadgeText}>{course.badge}</Text>
            </View>
            <Text style={s.coverTitle}>{course.title}</Text>
            <Text style={s.coverTagline}>{course.tagline}</Text>
            <View style={s.coverStats}>
              <View style={s.coverStat}>
                <Text style={s.coverStatNum}>{course.duration}</Text>
                <Text style={s.coverStatLabel}>DURATION</Text>
              </View>
              <View style={s.coverStat}>
                <Text style={s.coverStatNum}>{course.totalHours}h</Text>
                <Text style={s.coverStatLabel}>TOTAL HOURS</Text>
              </View>
              <View style={s.coverStat}>
                <Text style={s.coverStatNum}>{course.syllabus.length}</Text>
                <Text style={s.coverStatLabel}>MODULES</Text>
              </View>
              <View style={s.coverStat}>
                <Text style={[s.coverStatNum, { color: "#fbbf24" }]}>{course.price}</Text>
                <Text style={s.coverStatLabel}>COURSE FEE</Text>
              </View>
            </View>
          </View>

          <View style={s.coverBottom}>
            <Text style={s.coverBottomText}>100% Placement Assistance | Bangalore, India</Text>
            <View style={s.coverModeChip}>
              <Text style={s.coverModeChipText}>{course.mode} Training</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* ═══════════════════════════════ PAGE 2 — TOC ══════════════════════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.sectionHeader}>
          <View>
            <Text style={s.sectionHeaderTitle}>Table of Contents</Text>
            <Text style={s.sectionHeaderSub}>Complete module breakdown — {course.syllabus.length} modules across {course.totalHours} hours</Text>
          </View>
        </View>

        <View style={s.body}>
          <Text style={[s.sectionLabel, { marginTop: 18 }]}>COURSE MODULES</Text>
          {course.syllabus.map((mod, i) => (
            <View key={i} style={s.tocRow} wrap={false}>
              <View style={s.tocNum}>
                <Text style={s.tocNumText}>{String(i + 1).padStart(2, "0")}</Text>
              </View>
              <Text style={s.tocTitle}>{mod.title}</Text>
              <Text style={s.tocDuration}>{mod.duration}</Text>
              <View style={s.tocDots} />
              <Text style={s.tocPage}>{i + 3}</Text>
            </View>
          ))}

          <View style={[s.divider, { marginTop: 20 }]} />

          <Text style={s.sectionLabel}>ADDITIONAL SECTIONS</Text>
          {[
            { label: "Learning Outcomes", page: course.syllabus.length + 3 },
            { label: "Tools & Technologies", page: course.syllabus.length + 3 },
            { label: "Placement Process", page: course.syllabus.length + 4 },
          ].map((item, i) => (
            <View key={i} style={s.tocRow} wrap={false}>
              <View style={[s.tocNum, { backgroundColor: "#0f172a" }]}>
                <Text style={s.tocNumText}>→</Text>
              </View>
              <Text style={s.tocTitle}>{item.label}</Text>
              <View style={s.tocDots} />
              <Text style={s.tocPage}>{item.page}</Text>
            </View>
          ))}
        </View>

        <PageFooter course={course} />
      </Page>

      {/* ═══════════════════════════════ PAGE 3+ — MODULES ════════════════════════ */}
      {course.syllabus.map((mod, i) => (
        <Page key={i} size="A4" style={s.page}>
          <View style={s.sectionHeader}>
            <View>
              <Text style={[s.sectionHeaderSub, { marginBottom: 2 }]}>
                MODULE {String(i + 1).padStart(2, "0")}
              </Text>
              <Text style={s.sectionHeaderTitle}>{mod.title}</Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ backgroundColor: "#0f4d2e", borderRadius: 4, paddingHorizontal: 10, paddingVertical: 6 }}>
              <Text style={{ fontSize: 9, color: "#86efac", fontWeight: 600 }}>{mod.duration}</Text>
            </View>
          </View>

          <View style={s.body}>
            <Text style={[s.sectionLabel, { marginTop: 18 }]}>WHAT YOU WILL LEARN</Text>

            <View style={s.moduleCard}>
              <View style={s.moduleBody}>
                {mod.topics.map((topic, j) => (
                  <View key={j} style={s.topicRow}>
                    <View style={s.topicDot} />
                    <Text style={s.topicText}>{topic}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Progress indicator */}
            <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 8, color: GRAY, marginRight: 10 }}>Course progress</Text>
              <View style={{ flex: 1, height: 4, backgroundColor: LIGHT_GRAY, borderRadius: 2 }}>
                <View style={{ height: 4, backgroundColor: GREEN, borderRadius: 2, width: `${((i + 1) / course.syllabus.length) * 100}%` }} />
              </View>
              <Text style={{ fontSize: 8, color: GREEN, marginLeft: 10, fontWeight: 600 }}>
                {Math.round(((i + 1) / course.syllabus.length) * 100)}%
              </Text>
            </View>
          </View>

          <PageFooter course={course} />
        </Page>
      ))}

      {/* ═══════════════════════════ OUTCOMES + TOOLS PAGE ═════════════════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.sectionHeader}>
          <View>
            <Text style={s.sectionHeaderTitle}>Learning Outcomes & Tech Stack</Text>
            <Text style={s.sectionHeaderSub}>What you will be able to do — and the tools you will master</Text>
          </View>
        </View>

        <View style={s.body}>
          <Text style={[s.sectionLabel, { marginTop: 18 }]}>LEARNING OUTCOMES</Text>
          <View style={s.outcomesBox}>
            {course.outcomes.map((o, i) => (
              <View key={i} style={s.outcomeRow}>
                <Text style={s.checkmark}>✓</Text>
                <Text style={s.outcomeText}>{o}</Text>
              </View>
            ))}
          </View>

          <Text style={s.sectionLabel}>COURSE HIGHLIGHTS</Text>
          <View style={[s.outcomesBox, { backgroundColor: "#fefce8", borderLeftColor: "#ca8a04" }]}>
            {course.highlights.map((h, i) => (
              <View key={i} style={s.outcomeRow}>
                <Text style={[s.checkmark, { color: "#ca8a04" }]}>★</Text>
                <Text style={s.outcomeText}>{h}</Text>
              </View>
            ))}
          </View>

          <Text style={s.sectionLabel}>TOOLS & TECHNOLOGIES</Text>
          <View style={s.toolsWrap}>
            {course.tools.map((t, i) => (
              <View key={i} style={s.toolChip}>
                <Text style={s.toolText}>{t}</Text>
              </View>
            ))}
          </View>
        </View>

        <PageFooter course={course} />
      </Page>

      {/* ═══════════════════════════ PLACEMENT + CTA PAGE ══════════════════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.sectionHeader}>
          <View>
            <Text style={s.sectionHeaderTitle}>Placement & Enrolment</Text>
            <Text style={s.sectionHeaderSub}>Our 4-step placement process and how to get started</Text>
          </View>
        </View>

        <View style={s.body}>
          <Text style={[s.sectionLabel, { marginTop: 18 }]}>OUR 4-STEP PLACEMENT PROCESS</Text>
          {[
            { num: "01", title: "Enrol & Kickoff", desc: "Choose your batch, meet your mentor, and get your learning roadmap." },
            { num: "02", title: "Train & Build", desc: "Live sessions, assignments, and a real-world capstone project." },
            { num: "03", title: "Interview Prep", desc: "Mock interviews, resume building, and LinkedIn profile review." },
            { num: "04", title: "Get Hired", desc: "Direct referrals to 100+ MNC partners. We follow up until your offer letter." },
          ].map((step, i) => (
            <View key={i} style={{ flexDirection: "row", marginBottom: 14, alignItems: "flex-start" }} wrap={false}>
              <View style={{ width: 36, height: 36, backgroundColor: GREEN, borderRadius: 18, alignItems: "center", justifyContent: "center", marginRight: 14 }}>
                <Text style={{ fontSize: 11, fontWeight: 700, color: WHITE }}>{step.num}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 11, fontWeight: 700, color: DARK, marginBottom: 2 }}>{step.title}</Text>
                <Text style={{ fontSize: 10, color: GRAY, lineHeight: 1.5 }}>{step.desc}</Text>
              </View>
            </View>
          ))}

          <View style={s.divider} />

          <Text style={s.sectionLabel}>FREQUENTLY ASKED QUESTIONS</Text>
          {course.faqs.map((faq, i) => (
            <View key={i} style={{ marginBottom: 12 }} wrap={false}>
              <Text style={{ fontSize: 10, fontWeight: 700, color: DARK, marginBottom: 3 }}>Q: {faq.q}</Text>
              <Text style={{ fontSize: 10, color: GRAY, lineHeight: 1.55 }}>A: {faq.a}</Text>
            </View>
          ))}

          <View style={s.ctaBox}>
            <Text style={s.ctaTitle}>Ready to start your tech career?</Text>
            <Text style={s.ctaSub}>
              Join thousands of students who landed jobs at TCS, Infosys, Wipro, and 100+ MNCs through HackifyTech.
            </Text>
            <View style={s.ctaContact}>
              <View style={s.ctaItem}>
                <Text style={s.ctaLabel}>WEBSITE</Text>
                <Text style={s.ctaValue}>hackifytech.com</Text>
              </View>
              <View style={s.ctaItem}>
                <Text style={s.ctaLabel}>EMAIL</Text>
                <Text style={s.ctaValue}>info@hackifytech.com</Text>
              </View>
              <View style={s.ctaItem}>
                <Text style={s.ctaLabel}>PHONE</Text>
                <Text style={s.ctaValue}>+91 98765 43210</Text>
              </View>
            </View>
          </View>
        </View>

        <PageFooter course={course} />
      </Page>
    </Document>
  );
}
