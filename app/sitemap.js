const baseUrl = "https://hackifytech.com";

const tutorialCategories = ["html", "css", "javascript", "java", "python", "sql", "react", "spring-boot"];

const courseSlugs = [
  "full-stack-web-development",
  "java-full-stack",
  "python-data-science",
  "react-frontend-mastery",
  "devops-cloud",
  "mobile-app-development",
];

const blogSlugs = [
  "getting-started-html",
  "css-grid-flexbox",
  "javascript-es2024",
  "python-ml-beginners",
  "react-best-practices",
  "career-in-tech",
];

export default function sitemap() {
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/courses`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/tutorials`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
{ url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly",   priority: 0.6 },
    { url: `${baseUrl}/terms`,   lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
    { url: `${baseUrl}/refund`,  lastModified: new Date(), changeFrequency: "yearly",   priority: 0.3 },
  ];

  const tutorialPages = tutorialCategories.map((cat) => ({
    url: `${baseUrl}/tutorials/${cat}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const coursePages = courseSlugs.map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...tutorialPages, ...blogPages, ...coursePages];
}
