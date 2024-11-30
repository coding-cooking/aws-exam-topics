'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SaaPage() {
    const [topics, setTopics] = useState(null);
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
        <div className="flex items-start justify-start gap-8 px-4 py-6 font-[family-name:var(--font-geist-sans)]">
            {/* {topics.map(item => (<div key={item.id}>
                <Link href={`/saa/${item.id}`}>
                    <div className="flex items-center justify-center w-6 h-6 border border-solid border-1 border-black rounded-xl">{item.id}</div>
                </Link>
            </div>))
            } */}
        </div >
    )
}