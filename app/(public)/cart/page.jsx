import CartPage from "@/views/CartPage";

export const metadata = {
  title: "Shopping Cart",
  description: "Review your selected courses and books before checkout.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CartPage />;
}
