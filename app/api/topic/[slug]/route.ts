import Topic from "@/model/Topic";
import { dbConnect } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-static';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const { slug } = await params;

    if (!slug) {
        return NextResponse.json({ message: 'Handle parameter is required!' }, { status: 404 });
    }

    try {
        await dbConnect();

        const topic = await Topic.findOne({ topicId: slug }).exec();

        if (!topic) {
            return NextResponse.json({ message: 'Not found' }, { status: 404 });
        }

        const response = NextResponse.json(topic, { status: 200 });
        response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');

        return response;

    } catch (err) {
        console.error('Error fetching topic:', err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}