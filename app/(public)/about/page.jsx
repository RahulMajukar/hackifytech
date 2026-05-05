import AboutPage from "@/views/AboutPage";

export const metadata = {
  title: "About HackifyTech",
  description:
    "Learn about HackifyTech — a future-ready IT training and placement company based in Bangalore, India. Our mission, vision, and 100% job guarantee model.",
  keywords: [
    "about HackifyTech",
    "IT training company Bangalore",
    "job guarantee training institute",
    "software training placement Bangalore",
  ],
  openGraph: {
    title: "About HackifyTech | IT Training & Placement, Bangalore",
    description:
      "HackifyTech bridges the gap between education and employment with 100% placement assistance for all graduates.",
    type: "website",
    url: "https://hackifytech.com/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
