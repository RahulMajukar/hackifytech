import HomePage from "@/views/HomePage";

export const metadata = {
  title: "HackifyTech — Job Guaranteed IT Training & Placement, Bangalore",
  description:
    "HackifyTech offers 100% job-guaranteed IT training in Bangalore. Full Stack, Java, Python, React, DevOps. Any degree, diploma, year gap or non-IT background welcome.",
  keywords: [
    "IT training Bangalore",
    "job guarantee course India",
    "full stack development course",
    "software training institute Bangalore",
    "100% placement assistance",
  ],
  openGraph: {
    title: "HackifyTech — Job Guaranteed IT Training & Placement",
    description:
      "100% job-guaranteed IT courses. Full Stack, Java, Python, React & more. Online & offline training from Bangalore.",
    type: "website",
    url: "https://hackifytech.com",
  },
};

export default function Home() {
  return <HomePage />;
}
