import TermsPage from "@/views/TermsPage";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read HackifyTech's Terms and Conditions — covering enrolment, payment, placement guarantee, student conduct, intellectual property, and dispute resolution.",
  openGraph: {
    title: "Terms & Conditions | HackifyTech",
    description: "HackifyTech's Terms and Conditions for course enrolment, placement assistance, and use of our services.",
    url: "https://hackifytech.com/terms",
  },
};

export default function Page() {
  return <TermsPage />;
}
