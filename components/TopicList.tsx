'use client'

import { productType } from "@/data/products";
import TopicsContext, { TopicType } from "@/context/TopicsContext";
import Link from "next/link";
import { useContext } from "react";

type TopicListProps = {
    product: productType;
}

export default function TopicList({ product }: TopicListProps) {
    const topics: TopicType[] = useContext(TopicsContext)

    return (
        <div className="w-4/5 h-full mx-auto flex flex-col justify-center items-center ">
            <h2 className="w-full py-6 flex justify-center items-center text-3xl">
                {product.name}
            </h2>
            <div className="flex flex-wrap items-start justify-start gap-8 px-4 py-6">
                {topics && (topics.map(item => (<div key={item._id}>
                    <Link href={`/topic/${item.topicType}/${item.topicId}`}>
                        <div className="flex items-center justify-center w-8 h-8 border border-solid border-1 border-black rounded-2xl hover:bg-sky-400">{item.topicId}</div>
                    </Link>
                </div>)))}
            </div>

        </div >
    )
}