import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sujanks.dev"),
  title: {
    default: "Sujan K S | AI/ML Engineer Portfolio",
    template: "%s | Sujan K S",
  },
  description:
    "Premium AI/ML Engineer portfolio for Sujan K S, featuring computer vision, NLP, deep learning, YOLOv8, GAN, analytics, and MLOps-focused projects.",
  keywords: [
    "Sujan K S",
    "AI/ML Engineer",
    "Computer Vision Engineer",
    "NLP",
    "YOLOv8",
    "Deep Learning",
    "Machine Learning Portfolio",
  ],
  authors: [{ name: "Sujan K S" }],
  openGraph: {
    title: "Sujan K S | AI/ML Engineer Portfolio",
    description:
      "Recruiter-focused portfolio showcasing AI, Computer Vision, Deep Learning, NLP, and analytics projects.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
