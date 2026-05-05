import ContactPage from "@/views/ContactPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HackifyTech. Reach us at info@hackifytech.com or call +91 98765 43210. Located in Bangalore, Karnataka, India.",
  keywords: [
    "contact HackifyTech",
    "IT training Bangalore contact",
    "HackifyTech phone number",
    "HackifyTech email",
    "Bangalore training institute contact",
  ],
  openGraph: {
    title: "Contact HackifyTech | Get in Touch",
    description:
      "Contact HackifyTech for course enquiries, placement assistance, or any questions. Bangalore, India.",
    type: "website",
    url: "https://hackifytech.com/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
