import { dbConnect } from "@/utils/dbConnect";
import User from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";
import { verifyToken } from "@/utils/verifyToken";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json();

        const authHeader = req.headers.get('authorization');

        if (!authHeader?.startsWith('Bearer ')) {
            return NextResponse.json({ message: "Invalid authorization header" }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return NextResponse.json({ message: "No token provided" }, { status: 401 });
        }

        let decodedToken;

        try {
            decodedToken = await verifyToken(token);
        } catch (error) {
            console.error('Error verifying token:', error);
            return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
        }

        const userId = decodedToken && decodedToken.userId;

        if (!isValidObjectId(userId)) {
            return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
        }

        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const { product } = body;

        if (!product) {
            return NextResponse.json({ message: "Product data is required" }, { status: 400 });
        }

        //retrive db, is that product already exists in db?
        //if not directly push, if yes, only add the quantity
        //or if user has bought this product or add the cart, he/she can't add more 
        
        user.cart.push({
            name: product.name,
            description: product.description,
            image: product.image,
            handle: product.handle,
            price: product.price,
            priceId: product.priceId,
            quantity: product.quantity
        });

        await user.save();

        return NextResponse.json({ message: "Product added to cart successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
