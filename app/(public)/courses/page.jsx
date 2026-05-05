import CoursesPage from "@/views/CoursesPage";

export const metadata = {
  title: "IT Courses",
  description:
    "Explore job-guaranteed IT courses at HackifyTech: Full Stack Web Development, Java Full Stack, Python & Data Science, React, DevOps, Mobile App Development. Online & offline training in Bangalore.",
  keywords: [
    "full stack web development course Bangalore",
    "Java full stack course",
    "Python data science course",
    "React course",
    "DevOps cloud course",
    "mobile app development course",
    "job guarantee IT course Bangalore",
    "software development course fees",
  ],
  openGraph: {
    title: "IT Courses — Job Guaranteed | HackifyTech",
    description:
      "Job-guaranteed programming courses in Bangalore. Full Stack, Java, Python, React, DevOps and more. Placement assistance in top MNCs.",
    type: "website",
    url: "https://hackifytech.com/courses",
  },
};

export default function Page() {
  return <CoursesPage />;
}
