import SignUpPage from "@/views/SignUpPage";

export const metadata = {
  title: "Create Account",
  description:
    "Sign up for HackifyTech and start your learning journey. Get access to courses, tutorials, and 100% placement assistance.",
  openGraph: {
    title: "Create Account | HackifyTech",
    description: "Join HackifyTech — free account, access to courses, tutorials, and placement assistance.",
    type: "website",
    url: "https://hackifytech.com/signup",
  },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SignUpPage />;
}
