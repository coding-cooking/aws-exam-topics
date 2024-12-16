import { dbConnect } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import User from "@/model/User";
import { options } from "../auth/[...nextauth]/options";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { generateActivationCode } from "@/utils/generateActivationCode";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json()

        const session = await getServerSession(options);

        if (!session) {
            return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
            // return res.status(401).json({ message: 'Not authenticated' });
        }
        console.log('Incoming request body:', req.body);

        const userId = session.user.id;

        const { product } = body;

        if (!product) {
            return NextResponse.json({ message: "Product data is required" }, { status: 400 });
            // return res.status(400).json({ message: 'Product data is required' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
            // return res.status(404).json({ message: "User not found!" });
        }

        user.subscriptionProducts.push({
            type: product.name,
            activationDate: new Date(),
            expirationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        });

        // // Generate an activation code
        // const activationCode = generateActivationCode();

        // // Add activation info
        // user.activationInfos.push({
        //     code: activationCode,
        //     product,
        //     used: false,
        // });

        // Save the updated user data
        await user.save();

        // Return a success response
        return NextResponse.json({ message: "Product added to cart successfully" }, { status: 200 });
        // res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        // res.status(500).json({ message: 'Internal server error' });
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

}
