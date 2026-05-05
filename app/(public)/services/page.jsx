import ServicesPage from "@/views/ServicesPage";

export const metadata = {
  title: "Our Services",
  description:
    "HackifyTech services: Online & offline training, corporate upskilling, and 100% placement assistance with resume building, mock interviews, and MNC job referrals.",
  keywords: [
    "IT training services Bangalore",
    "corporate training India",
    "placement assistance",
    "online programming training",
    "offline classroom training Bangalore",
    "resume building service",
    "mock interview preparation",
  ],
  openGraph: {
    title: "Training & Placement Services | HackifyTech",
    description:
      "Online training, offline classroom, corporate upskilling, and placement assistance with 100+ MNC partners.",
    type: "website",
    url: "https://hackifytech.com/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
