const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hackifytech.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cart", "/checkout", "/signup", "/forgot-password", "/reset-password"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
