import CheckoutPage from "@/views/CheckoutPage";

export const metadata = {
  title: "Checkout",
  description: "Complete your purchase securely at HackifyTech.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CheckoutPage />;
}
