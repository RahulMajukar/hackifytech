import TutorialCategoryPage from "@/views/TutorialCategoryPage";

const categoryMeta = {
  html: {
    title: "HTML Tutorial",
    description: "Learn HTML from scratch — elements, attributes, forms, semantic markup, SEO basics, and more. Free chapter-by-chapter tutorial by HackifyTech.",
    keywords: ["HTML tutorial", "learn HTML", "HTML for beginners", "HTML elements", "semantic HTML"],
  },
  css: {
    title: "CSS Tutorial",
    description: "Master CSS styling — flexbox, grid, animations, responsive design, and more. Free CSS tutorial by HackifyTech.",
    keywords: ["CSS tutorial", "learn CSS", "CSS grid", "CSS flexbox", "responsive design"],
  },
  javascript: {
    title: "JavaScript Tutorial",
    description: "Learn JavaScript from fundamentals to DOM manipulation, ES2024 features, and async programming. Free tutorial by HackifyTech.",
    keywords: ["JavaScript tutorial", "learn JavaScript", "JS DOM", "ES2024", "async JavaScript"],
  },
  java: {
    title: "Java Tutorial",
    description: "Comprehensive Java tutorial — OOP, collections, Spring Boot, Hibernate, and more. Free tutorial by HackifyTech.",
    keywords: ["Java tutorial", "learn Java", "Java OOP", "Spring Boot", "Java enterprise"],
  },
  python: {
    title: "Python Tutorial",
    description: "Learn Python for scripting, data science, automation, and machine learning. Free tutorial by HackifyTech.",
    keywords: ["Python tutorial", "learn Python", "Python data science", "Python automation"],
  },
  sql: {
    title: "SQL Tutorial",
    description: "Learn SQL database queries — SELECT, JOIN, GROUP BY, indexes, and database design. Free tutorial by HackifyTech.",
    keywords: ["SQL tutorial", "learn SQL", "database queries", "SQL joins", "MySQL tutorial"],
  },
  react: {
    title: "React Tutorial",
    description: "Learn React — components, hooks, state management, and best practices. Free React tutorial by HackifyTech.",
    keywords: ["React tutorial", "learn React", "React hooks", "React components", "React best practices"],
  },
  "spring-boot": {
    title: "Spring Boot Tutorial",
    description: "Learn Spring Boot — REST APIs, JPA, security, and microservices. Free tutorial by HackifyTech.",
    keywords: ["Spring Boot tutorial", "learn Spring Boot", "REST API Java", "Spring JPA"],
  },
};

export async function generateMetadata({ params }) {
  const category = params.category?.toLowerCase() ?? "";
  const meta = categoryMeta[category];
  const name = meta?.title ?? `${category.replace(/-/g, " ").toUpperCase()} Tutorial`;

  return {
    title: meta?.title ?? `${name} | Free Tutorial`,
    description:
      meta?.description ??
      `Learn ${name} with HackifyTech's free chapter-by-chapter tutorial. Includes examples, quizzes, and hands-on exercises.`,
    keywords: meta?.keywords ?? [`${category} tutorial`, `learn ${category}`, "free programming tutorial"],
    openGraph: {
      title: `${meta?.title ?? name} | HackifyTech`,
      description: meta?.description ?? `Free ${name} tutorial by HackifyTech.`,
      type: "article",
      url: `https://hackifytech.com/tutorials/${category}`,
    },
  };
}

export default function Page() {
  return <TutorialCategoryPage />;
}
