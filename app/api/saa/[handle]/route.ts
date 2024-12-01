import Topic from "@/model/Topic";
import { dbConnect } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-static';

export async function GET(req: NextRequest, { params }: { params: Promise<{ handle: string }> } ) {
    const { handle } = await params;

    if (!(await params).handle) {
        return NextResponse.json({ message: 'Handle parameter is required!' }, { status: 404 });
    }

    await dbConnect();

    const topic = await Topic.findOne({ topicId: handle}).exec();

    // Set cache control headers
    const response = NextResponse.json(topic, { status: 200 });
    response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');

    if (!topic) {
        return NextResponse.json({ message: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(topic, { status: 200 });
}