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
  title: "FastPrep Academy — Florida FAST Exam Practice",
  description:
    "Ace your Florida FAST ELA Reading (Grades 3–10) and Math (Grades 3–8) exams with realistic adaptive practice tests that mirror PM1, PM2, and PM3.",
  keywords: [
    "Florida FAST exam",
    "FAST practice test",
    "ELA Reading",
    "Math grades 3-8",
    "Florida student assessment",
    "FAST PM1 PM2 PM3",
  ],
  authors: [{ name: "FastPrep Academy" }],
  openGraph: {
    title: "FastPrep Academy — Florida FAST Exam Practice",
    description:
      "Ace your Florida FAST ELA Reading (Grades 3–10) and Math (Grades 3–8) exams with realistic adaptive practice tests.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
