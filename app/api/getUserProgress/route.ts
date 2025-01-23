import User, { ProductProgressType, UserProgressType } from "@/model/User";
import { cookies } from "next/headers";
import { dbConnect } from "@/utils/dbConnect";
import { isValidObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ProgressCookieItemType } from "../saveUserProgress/route";


export async function GET(req: NextRequest) {
    try {
        await dbConnect();

        const url = new URL(req.url);
        const userId = url.searchParams.get('userId');
        const topicId = url.searchParams.get('topicId');
        const productType = url.searchParams.get('productType');

        if (!userId || !topicId || !productType) {
            return NextResponse.json({ message: "Missing required parameters" }, { status: 400 })
        }

        if (!isValidObjectId(userId)) {
            return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
        }

        const progressCookie = (await cookies()).get('user-progress');

        if (progressCookie) {
            console.log('progressCookie', progressCookie)
            try {
                const cookieData = JSON.parse(progressCookie.value);

                // Check if the data in the cookie matches the requested topic and product type
                const topicCookieExists = cookieData.findIndex((item: ProgressCookieItemType) => item.topicId === topicId && item.product.toLowerCase().startsWith(productType))

                if (topicCookieExists > -1
                    // cookieData.topicId === topicId &&
                    // cookieData.product.toLowerCase().startsWith(productType)
                ) {
                    return NextResponse.json({
                        completed: true,
                        selectedOptions: cookieData[topicCookieExists].selectedOptions || []
                    }, { status: 200 });
                }
            } catch (err) {
                console.error('Failed to parse cookie data:', err);
            }
        }

        // If no valid data in cookies, fall back to the database
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        //progress.product是saa-c03，productType是saa
        const currentProductProgress = user.productProgress.find((progress: ProductProgressType) => progress.product.toLowerCase().startsWith(productType));

        // if (!currentProductProgress) {
        //     return NextResponse.json({ message: "No product progress found for this product type" }, { status: 400 })
        // }

        if (!currentProductProgress) {
            return NextResponse.json({
                completed: false,
                selectedOptions: []
            }, { status: 200 });
        }
        const currentTopic = currentProductProgress.completedTopics.find(
            (topic: UserProgressType) => topic.topicId === topicId
        );

        if (!currentTopic) {
            return NextResponse.json({
                completed: false,
                selectedOptions: []
            }, { status: 200 });
        }
        
        return NextResponse.json({
            completed: true,
            selectedOptions: currentTopic.selectedOptions || []
        }, { status: 200 });
    } catch (error) {
        console.log('API Error:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })

    }

}