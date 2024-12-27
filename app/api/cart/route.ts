import { dbConnect } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";
import User from "@/model/User";
import { isValidObjectId } from "mongoose";

export async function GET(req: NextRequest) {
    try {
        await dbConnect();

        const session = await getServerSession(options);

        if (!session) {
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
        }

        const userId = session.user.id;

        if (!isValidObjectId(userId)) {
            return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
        }

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const cart = user.cart;

        console.log('cart is', cart)

        return NextResponse.json(cart, { status: 200 });
    } catch (error) {
        console.error('Error fetching cart data:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
