import TutorialsPage from "@/views/TutorialsPage";

export const metadata = {
  title: "Free Tutorials",
  description:
    "Free programming tutorials on HTML, CSS, JavaScript, Java, Python, SQL, React, and Spring Boot. Comprehensive chapter-by-chapter guides for beginners and professionals.",
  keywords: [
    "free programming tutorials",
    "HTML tutorial",
    "CSS tutorial",
    "JavaScript tutorial",
    "Java tutorial",
    "Python tutorial",
    "React tutorial",
    "SQL tutorial",
    "learn programming free",
  ],
  openGraph: {
    title: "Free Programming Tutorials | HackifyTech",
    description:
      "Free, comprehensive tutorials covering all major programming languages — HTML, CSS, JavaScript, Java, Python, SQL, React, Spring Boot.",
    type: "website",
    url: "https://hackifytech.com/tutorials",
  },
};

export default function Page() {
  return <TutorialsPage />;
}
