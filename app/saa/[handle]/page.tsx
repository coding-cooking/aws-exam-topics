import TopicTemplate from "@/components/TopicTemplate";

export default function TopicPage({ params }: { params: { handle: string } }) {
    const { handle } = params;
    return (
        <TopicTemplate handle={handle} />
    )
}