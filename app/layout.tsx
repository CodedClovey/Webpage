import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ['400','900']
});

import "./globals.css";

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
        className={` ${roboto.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
