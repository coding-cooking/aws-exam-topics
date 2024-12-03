import TopicTemplate from "@/components/TopicTemplate";
import { TopicType } from "@/model/Topic";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const topics: TopicType[] = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/saa`)
        .then((res) => res.json())
        .catch((err) => {
            console.error('Error fetching topics:', err);
            return [];
        });

    if (!topics || topics.length === 0) {
        return [];
    } else {
        return topics.map((topic) => ({
            handle: topic.topicId,
        }))
    }
}

export default async function TopicPage({ params }: { params: { handle: string } }) {
    const { handle } = await params;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/saa/${handle}`);

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