import { dbConnect } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import User from "@/model/User";
import { CartItemType } from "@/model/User";

export async function DELETE(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json()

        const session = await getServerSession(options);

        if (!session) {
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
        }
        console.log('Incoming request body:', req.body);

        const userId = session.user.id;

        const { product } = body;

        if (!product) {
            return NextResponse.json({ message: "Product data is required" }, { status: 400 });
        }

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        user.cart = user.cart.filter((item: CartItemType) => item !== product )

        await user.save();

        return NextResponse.json({ message: "Product delete from cart successfully" }, { status: 200 });


    } catch (error) {
        console.error('Error deleting product from cart:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });

    }
}