import Link from "next/link";
import dotenv from "dotenv";
import { Metadata } from "next";
dotenv.config();

export const metadata: Metadata = {
  title: "AWS Exam Topics",
  description: "Try this website and get AWS Certificates",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center p-8 pb-20 gap-16">
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
      <Link href="/saa">
        <div className="w-32 h-32 flex justify-center items-center border border-1 rounded-xl">
          SAA
        </div>
      </Link>
    </div>
  );
}



