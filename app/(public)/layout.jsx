import "../globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { Providers } from "../providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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

export const metadata = {
  metadataBase: new URL("https://hackifytech.com"),
  title: {
    template: "%s | HackifyTech",
    default: "HackifyTech — Job Guaranteed IT Training & Placement, Bangalore",
  },
  description:
    "HackifyTech offers 100% job-guaranteed IT training in Bangalore — Full Stack, Java, Python, React, DevOps and more. Any degree, any background, any year.",
  keywords: [
    "IT training Bangalore",
    "job guarantee course",
    "full stack development course",
    "placement assistance",
    "programming tutorials",
    "React training",
    "Python course Bangalore",
    "Java full stack",
  ],
  authors: [{ name: "HackifyTech" }],
  creator: "HackifyTech",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hackifytech.com",
    siteName: "HackifyTech",
    title: "HackifyTech — Job Guaranteed IT Training & Placement, Bangalore",
    description:
      "100% job-guaranteed IT courses in Bangalore. Full Stack, Java, Python, React, DevOps and more. Learn online or offline.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HackifyTech — IT Training & Placement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackifyTech — Job Guaranteed IT Training",
    description: "100% job-guaranteed IT courses in Bangalore.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function PublicLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <MotionProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </MotionProvider>
        </Providers>
      </body>
    </html>
  );
}
