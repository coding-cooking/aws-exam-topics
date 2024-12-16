import { NextResponse } from "next/server";
import Topic from "@/model/Topic";
import { dbConnect } from "@/utils/dbConnect";

export async function POST(request: Request) {
    try {
        await dbConnect();

        const topics = await Topic.find({}).lean().exec();

        const response = NextResponse.json(topics, { status: 200 });
        response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');

        if (topics.length === 0) return NextResponse.json({ message: "No topics found!" }, { status: 204 });
        return NextResponse.json(topics, { status: 200 });
    } catch (err) {
        console.error('Error fetching topics:', err);
        return NextResponse.json({ message: "Error fetching topics" }, { status: 500 });
    }
}