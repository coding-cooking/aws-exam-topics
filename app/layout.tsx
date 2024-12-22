'use client'

import "./globals.css";
import TopicsContext, { TopicType } from "@/context/TopicsContext";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Provider, { ProviderProps } from "@/context/Provider";
import CartDrawer from "@/components/CartDrawer";

export default function RootLayout({ children, session }: ProviderProps) {
  const [topics, setTopics] = useState<TopicType[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/saa`);
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
        <body>
          <Provider session={session}>
            <Nav />
            {/* <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} showIcon={false} /> */}
            {children}
          </Provider>
        </body>
      </TopicsContext.Provider>

    </html>
  );
}
