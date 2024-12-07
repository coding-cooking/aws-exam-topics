import Link from "next/link";
import dotenv from "dotenv";
import { Metadata } from "next";
import Nav from "@/components/Nav";
dotenv.config();

export const metadata: Metadata = {
  title: "AWS Exam Topics",
  description: "Try this website and get AWS Certificates",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/saa">SAA</Link>
    </div>
  );
}



