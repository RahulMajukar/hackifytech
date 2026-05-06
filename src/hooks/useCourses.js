"use client";

import { useQuery } from "@tanstack/react-query";
import { coursesData } from "@/data/courses";

function transformCourse(c) {
  const price = c.pricing?.isFree
    ? "Free"
    : c.pricing?.price
    ? `₹${Number(c.pricing.price).toLocaleString("en-IN")}`
    : "₹0";

  const originalPrice = c.pricing?.discountPrice
    ? `₹${Number(c.pricing.discountPrice).toLocaleString("en-IN")}`
    : "";

  const modeLabel =
    c.mode === "online"
      ? "Online"
      : c.mode === "offline"
      ? "Offline"
      : "Online & Offline";

  const levelLabel = c.level
    ? c.level.charAt(0).toUpperCase() + c.level.slice(1)
    : "";

  return {
    id: c.id,
    slug: c.slug,
    title: c.title,
    tagline: c.shortDescription || "",
    duration: c.duration || "",
    totalHours: c.totalHours || 0,
    price,
    originalPrice,
    mode: modeLabel,
    level: levelLabel,
    badge: c.cardBadge || (c.isFeatured ? "Featured" : ""),
    badgeColor: c.accentColor || "#2563eb",
    accentColor: c.accentColor || "#3b82f6",
    icon: c.cardIcon || "📚",
    highlights: (c.learningOutcomes || []).map((o) => o.outcome),
    syllabus: c.curriculum || [],
  };
}

async function fetchCourses() {
  const res = await fetch(
    "/api/courses?limit=50&where[isPublished][equals]=true&sort=createdAt",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch courses");
  const json = await res.json();
  return json.docs ?? [];
}

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    staleTime: 60_000,
    select: (docs) => {
      if (!docs || docs.length === 0) return coursesData; // fallback to static data
      return docs.map(transformCourse);
    },
    placeholderData: coursesData,
  });
}
