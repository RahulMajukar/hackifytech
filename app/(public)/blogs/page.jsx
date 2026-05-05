import BlogsPage from "@/views/BlogsPage";

export const metadata = {
  title: "Blog",
  description:
    "Tech insights, programming tutorials, and career tips from the HackifyTech team. Stay updated on HTML, CSS, JavaScript, Python, React, and how to break into the tech industry.",
  keywords: [
    "tech blog",
    "programming articles",
    "career in tech",
    "software development tips",
    "JavaScript ES2024",
    "React best practices",
    "Python machine learning",
    "how to switch to tech career",
  ],
  openGraph: {
    title: "Tech Blog — Insights & Tutorials | HackifyTech",
    description:
      "Programming tutorials, career guides, and tech insights from HackifyTech.",
    type: "website",
    url: "https://hackifytech.com/blogs",
  },
};

export default function Page() {
  return <BlogsPage />;
}
