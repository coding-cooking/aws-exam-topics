import { dbConnect } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import User from "@/model/User";
import { CartItemType } from "@/model/User";
import { isValidObjectId } from "mongoose";

export async function DELETE(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json()

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

        const { id } = body;

        if (!id) {
            return NextResponse.json({ message: "Product data is required" }, { status: 400 });
        }

        if (!Array.isArray(user.cart)) {
            return NextResponse.json({ message: "Invalid cart data" }, { status: 400 });
        }

        const cartItemIndex = user.cart.findIndex((item: CartItemType) => item._id.toString() === id);

        if (cartItemIndex === -1) {
            return NextResponse.json({ message: "Item not found in cart" }, { status: 404 });
        }

        user.cart = user.cart.filter((item: CartItemType) => item._id.toString() !== id);

        await user.save();

        return NextResponse.json({ message: "Product delete from cart successfully" }, { status: 200 });

    } catch (error) {
        console.error('Error deleting product from cart:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}