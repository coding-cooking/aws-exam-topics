import TopicTemplate from "@/components/TopicTemplate";
import { TopicType } from "@/context/TopicsContext";
import { notFound } from "next/navigation";
import { Suspense } from 'react';

export async function generateStaticParams() {
    const topics: TopicType[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topic`)
        .then((res) => res.json());

    if (!topics || topics.length === 0) {
        return [];
    } else {
        return topics.map((topic) => ({
            handle: topic.topicType,
            slug: topic.topicId,
        }))
    }
}

export default async function TopicPage({ params }: { params: Promise<{ handle: string, slug: string }> }) {
    const { handle, slug } = await params;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topic/${handle}/${slug}`);

        if (!response.ok) {
            return notFound();
        }

        const topic: TopicType = await response.json();

        if (!topic) return notFound();

        return (
            <TopicTemplate topic={topic} />
        );
    } catch (err) {
        console.error("Error fetching topic:", err);
        return notFound();
    }
}

