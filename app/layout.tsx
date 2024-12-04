'use client'

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopicsContext, { TopicType } from "@/context/TopicsContext";
import { useEffect, useState } from "react";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [topics, setTopics] = useState<TopicType[]>([]);
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(`/api/saa`);
        const data = await res.json();
        setTopics(data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    }
    fetchTopics()
  }, [])

  return (
    <html lang="en">
      <TopicsContext.Provider value={topics}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </TopicsContext.Provider>

    </html>
  );
}
