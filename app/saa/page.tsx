'use client'

import { TopicType } from "@/model/Topic";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SaaPage() {
    const [topics, setTopics] = useState<TopicType[]>([]);
    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const res = await fetch(`/api/saa`);
                const data = await res.json();
                console.log(data)
                setTopics(data);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        }
        fetchTopics()
    }, [])

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