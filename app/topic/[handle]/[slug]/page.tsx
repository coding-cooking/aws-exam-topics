import { options } from "@/app/api/auth/[...nextauth]/options";
import TopicTemplate from "@/components/TopicTemplate";
import { TopicType } from "@/context/TopicsContext";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const topics: TopicType[] = await fetch(`${process.env.BASE_URL}/api/topic`)
        .then((res) => res.json());
    console.log('fetch generateStaticParams from ', `${process.env.BASE_URL}/api/topic`)
    if (!topics || topics.length === 0) {
        return [];
    } else {
        console.log('Generated params:', topics.map(t => ({
            handle: t.topicType,
            slug: t.topicId,
        })));
        return topics.map((topic) => ({
            handle: topic.topicType,
            slug: topic.topicId,
        }))
    }
}

export default async function TopicPage({ params }: { params: Promise<{ handle: string, slug: string }> }) {
    const { handle, slug } = await params;
    const session = await getServerSession(options);
    console.log('Params received:', { handle, slug });
    console.log('Session:', session);

    if (!session?.user?.roles?.includes(`${handle}User`)) {
        return notFound();
    }

    try {
        const response = await fetch(`${process.env.BASE_URL}/api/topic/${handle}/${slug}`);
        console.log('fetch TopicPage', `${process.env.BASE_URL}/api/topic/${handle}/${slug}`)
        if (!response.ok) {
            return notFound();
        }

        const topic: TopicType = await response.json();

        if (!topic) return notFound();

        return (<TopicTemplate topic={topic} />);
    } catch (err) {
        console.error("Error fetching topic:", err);
        return notFound();
    }
}

