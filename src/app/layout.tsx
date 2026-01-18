import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Exit-Saas.io | Find Open-Source Alternatives & Calculate Savings",
  description:
    "Discover open-source alternatives to expensive SaaS tools. Calculate your potential savings and take control of your software stack with self-hosted solutions.",
  keywords: [
    "open source",
    "SaaS alternatives",
    "self-hosted",
    "cost savings",
    "software tools",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Exit-Saas.io | Exit the SaaS Tax",
    description:
      "Find open-source alternatives to expensive SaaS tools and calculate your savings.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Exit-Saas.io Logo",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Exit-Saas.io | Exit the SaaS Tax",
  //   description: "Find open-source alternatives to expensive SaaS tools and calculate your savings.",
  //   images: ["/logo.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const cookieScriptId = process.env.NEXT_PUBLIC_COOKIESCRIPT_ID;

  return (
    <html lang="en">
      <head>
        {/* CookieScript - Cookie Consent Management */}
        {cookieScriptId && (
          <Script
            id="cookiescript"
            src="https://cdn.cookie-script.com/s/YOUR_COOKIE_SCRIPT_ID.js"
            strategy="beforeInteractive"
            data-cs-id={cookieScriptId}
          />
        )}

        {/* Google Analytics 4 - Only loads after cookie consent */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    cookie_flags: 'SameSite=None;Secure'
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
