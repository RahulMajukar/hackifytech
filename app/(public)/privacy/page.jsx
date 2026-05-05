import PrivacyPage from "@/views/PrivacyPage";

export const metadata = {
  title: "Privacy Policy",
  description: "HackifyTech's Privacy Policy — how we collect, use, and protect your personal data in compliance with Indian data protection laws.",
  openGraph: {
    title: "Privacy Policy | HackifyTech",
    description: "Learn how HackifyTech handles your personal information, cookies, and data rights.",
    url: "https://hackifytech.com/privacy",
  },
};

export default function Page() {
  return <PrivacyPage />;
}
