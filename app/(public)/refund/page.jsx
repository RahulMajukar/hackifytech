import RefundPage from "@/views/RefundPage";

export const metadata = {
  title: "Refund Policy",
  description: "HackifyTech's Refund Policy — transparent refund schedule, eligibility criteria, and step-by-step process for requesting a refund.",
  openGraph: {
    title: "Refund Policy | HackifyTech",
    description: "Clear and transparent refund terms for HackifyTech courses — know your rights before you enrol.",
    url: "https://hackifytech.com/refund",
  },
};

export default function Page() {
  return <RefundPage />;
}
