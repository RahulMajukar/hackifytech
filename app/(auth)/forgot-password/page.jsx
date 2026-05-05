import ForgotPasswordPage from "@/views/ForgotPasswordPage";

export const metadata = {
  title: "Forgot Password",
  description: "Reset your HackifyTech account password via email OTP verification.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ForgotPasswordPage />;
}
