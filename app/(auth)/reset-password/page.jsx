import ResetPasswordPage from "@/views/ResetPasswordPage";

export const metadata = {
  title: "Reset Password",
  description: "Set a new password for your HackifyTech account.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ResetPasswordPage />;
}
