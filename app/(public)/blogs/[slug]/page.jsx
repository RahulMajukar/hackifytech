import BlogDetailPage from "@/views/BlogDetailPage";

export async function generateMetadata({ params }) {
  const slug = params.slug ?? "";
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title,
    description: `${title} — Read the full article on HackifyTech's tech blog. Programming tips, career guidance, and industry insights.`,
    keywords: [slug.replace(/-/g, " "), "tech blog", "programming article", "HackifyTech blog"],
    openGraph: {
      title: `${title} | HackifyTech Blog`,
      description: `${title} — tech insights and programming guidance from HackifyTech.`,
      type: "article",
      url: `https://hackifytech.com/blogs/${slug}`,
    },
  };
}

export default function Page() {
  return <BlogDetailPage />;
}
