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
    console.log('INITIAL_LOG: Page component starting');
    const startTime = performance.now();
    try {

        const { handle, slug } = await params;
        console.log('PARAMS_RECEIVED:', { handle, slug, time: performance.now() - startTime });

        console.log('🔐 Starting session check');
        const session = await getServerSession(options);
        console.log('Session:', session);

        if (!session?.user?.roles?.includes(`${handle}User`)) {
            console.log('❌ Role check failed');
            return notFound();
        }

        console.log('fetch TopicPage', `${process.env.BASE_URL}/api/topic/${handle}/${slug}`)
        const response = await fetch(`${process.env.BASE_URL}/api/topic/${handle}/${slug}`, { signal: AbortSignal.timeout(5000) });
        console.log('📡 Response received:', response.status);
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

export const runtime = 'edge';

