import { MotionProvider } from "@/components/MotionProvider";

export default function AuthLayout({ children }) {
  return <MotionProvider>{children}</MotionProvider>;
}
