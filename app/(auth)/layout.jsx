import "../globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { Providers } from "../providers";
import { MotionProvider } from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function AuthLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <MotionProvider>
            {children}
          </MotionProvider>
        </Providers>
      </body>
    </html>
  );
}
