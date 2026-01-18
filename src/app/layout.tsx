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
  title: "SaaS-Exit.io | Find Open-Source Alternatives & Calculate Savings",
  description:
    "Discover open-source alternatives to expensive SaaS tools. Calculate your potential savings and take control of your software stack with self-hosted solutions.",
  keywords: [
    "open source",
    "SaaS alternatives",
    "self-hosted",
    "cost savings",
    "software tools",
  ],
  openGraph: {
    title: "SaaS-Exit.io | Exit the SaaS Tax",
    description:
      "Find open-source alternatives to expensive SaaS tools and calculate your savings.",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "SaaS-Exit.io | Exit the SaaS Tax",
  //   description: "Find open-source alternatives to expensive SaaS tools and calculate your savings.",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
