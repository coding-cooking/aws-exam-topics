'use client'

import TopicsContext, { TopicType } from "@/context/TopicsContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function SaaPage() {
    const topics: TopicType[] = useContext(TopicsContext)

    return (
        <div className="flex items-start justify-start gap-8 px-4 py-6 font-[family-name:var(--font-geist-sans)]">
            {topics && (topics.map(item => (<div key={item._id}>
                <Link href={`/saa/${item.topicId}`}>
                    <div className="flex items-center justify-center w-6 h-6 border border-solid border-1 border-black rounded-xl">{item.topicId}</div>
                </Link>
            </div>)))
            }
        </div >
    )
}