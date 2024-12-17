'use client'

import TopicsContext, { TopicType } from "@/context/TopicsContext";
import Link from "next/link";
import { useContext } from "react";

export default function SaaPage() {
    const topics: TopicType[] = useContext(TopicsContext)

    return (
        <div className="w-4/5 h-full mx-auto flex flex-wrap items-start justify-start gap-8 px-4 py-6">
            {topics && (topics.map(item => (<div key={item._id}>
                <Link href={`/saa/${item.topicId}`}>
                    <div className="flex items-center justify-center w-8 h-8 border border-solid border-1 border-black rounded-2xl hover:bg-sky-400">{item.topicId}</div>
                </Link>
            </div>)))
            }
        </div >
    )
}