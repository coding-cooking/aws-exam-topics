import { options } from "@/app/api/auth/[...nextauth]/options";
import TopicTemplate from "@/components/TopicTemplate";
import { TopicType } from "@/context/TopicsContext";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";

export async function generateStaticParams() {
    const topics: TopicType[] = await fetch(`${process.env.BASE_URL}/api/topic`)
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
    try {

        const { handle, slug } = await params;
        console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
        console.log('Environment:', process.env.NODE_ENV);
        const session = await getServerSession(options);
        console.log('Session debug:', {
            exists: !!session,
            user: session?.user ? 'exists' : 'null',
            expires: session?.expires
        });
        if (!session || !session.user) {
            console.log('No valid session found');
            redirect('/api/auth/signin');
            return null;
        }

        if (!session?.user?.roles?.includes(`${handle}User`)) {
            return notFound();
        }

        const response = await fetch(`${process.env.BASE_URL}/api/topic/${handle}/${slug}`, {
            next: { revalidate: 60 },
            cache: 'force-cache'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const topic: TopicType = await response.json();

        if (!topic) return notFound();

        return (<TopicTemplate topic={topic} />);
    } catch (err) {
        console.error("Error fetching topic:", err);
        return notFound();
    }
}

