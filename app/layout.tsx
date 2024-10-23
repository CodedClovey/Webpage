import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ['400','900']
});

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abhinav Manoj",
  description: "Abhinav Manoj's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased p-8 min-h-screen flex flex-col grow bg-[#eeeede]`}
      >
          {children}
      </body>
    </html>
  );
}
