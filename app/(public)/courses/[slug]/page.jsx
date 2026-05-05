import { notFound } from "next/navigation";
import CourseDetailPage from "@/views/CourseDetailPage";
import { coursesData, getCourseBySlug } from "@/data/courses";

export async function generateStaticParams() {
  return coursesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} Course`,
    description: course.tagline,
    keywords: [
      `${course.title} course Bangalore`,
      `${course.title} training`,
      "job guaranteed IT course",
      "placement assistance",
      "HackifyTech",
    ],
    openGraph: {
      title: `${course.title} — Job Guaranteed | HackifyTech`,
      description: course.tagline,
      type: "website",
      url: `https://hackifytech.com/courses/${course.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  return <CourseDetailPage course={course} />;
}
