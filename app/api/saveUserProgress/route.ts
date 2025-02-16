import User, { ProductProgressType, UserProgressType } from "@/model/User";
import { dbConnect } from "@/utils/dbConnect";
import { verifyToken } from "@/utils/verifyToken";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';

export type ProgressCookieItemType = {
    topicId: string;
    product: string;
    selectedOptions: Array<string>;
    isCorrect: boolean;
    attemptedAt: Date;
}

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json();

        const { topicId, product, selectedOptions, isCorrect } = body;

        if (!topicId || !product || !Array.isArray(selectedOptions) || typeof isCorrect !== 'boolean') {
            return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
        }

        const authHeader = req.headers.get('authorization');

        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ message: "Invalid authorization header" }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];

        const decodedToken = await verifyToken(token);

        const userId = decodedToken && decodedToken.userId;

        if (!isValidObjectId(userId)) {
            return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
        }

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const currentProductProgress = user.productProgress.find((progress: ProductProgressType) => progress.product === product);

        if (!currentProductProgress) {
            user.productProgress.push({
                product,
                completedTopics: [],
                lastAccessedAt: new Date(),
            });
        }

        const topicIndex = currentProductProgress.completedTopics.findIndex(
            (topic: UserProgressType) => topic.topicId === topicId
        );

        if (topicIndex > -1) {
            currentProductProgress.completedTopics[topicIndex] = {
                topicId,
                selectedOptions,
                isCorrect,
                attemptedAt: new Date(),
            };
        } else {
            currentProductProgress.completedTopics.push({
                topicId,
                selectedOptions,
                isCorrect,
                attemptedAt: new Date(),
            })
        }
        await user.save();

        // Save the data into cookies
        const userCookies = await cookies();
        const existingCookie = userCookies.get('user-progress');

        let cookieDataArray = [];

        if (existingCookie) {
            try {
                cookieDataArray = JSON.parse(existingCookie.value) || [];
            } catch (err) {
                console.error('Failed to parse existing cookie data:', err);
            }
        }

        const newCookieData = {
            topicId,
            product,
            selectedOptions,
            isCorrect,
            attemptedAt: new Date(),
        };

        const existingTopicIndex = cookieDataArray.findIndex(
            (data: ProgressCookieItemType) => data.topicId === topicId && data.product === product
        );

        if (existingTopicIndex > -1) {
            // Update the existing topic data
            cookieDataArray[existingTopicIndex] = newCookieData;
        } else {
            // Add the new topic data
            cookieDataArray.push(newCookieData);
        }

        userCookies.set('user-progress', JSON.stringify(cookieDataArray), {
            httpOnly: true,
            secure: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return NextResponse.json({ message: "Save selection to database successfully" }, { status: 200 });

    } catch (error) {
        console.error('Error saving selection:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}