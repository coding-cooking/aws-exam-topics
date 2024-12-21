import { dbConnect } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import User from "@/model/User";
import { options } from "../../auth/[...nextauth]/options";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json()

        const session = await getServerSession(options);

        if (!session) {
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
        }

        const userId = session.user.id;

        const { product } = body;

        if (!product) {
            return NextResponse.json({ message: "Product data is required" }, { status: 400 });
        }

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        user.cart.push({
            name: product.name,
            description: product.description,
            image: product.image,
            handle: product.handle,
            price: product.price,
        });

        // // Generate an activation code
        // const activationCode = generateActivationCode();

        // // Add activation info
        // user.activationInfos.push({
        //     code: activationCode,
        //     product,
        //     used: false,
        // });

        await user.save();

        return NextResponse.json({ message: "Product added to cart successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
