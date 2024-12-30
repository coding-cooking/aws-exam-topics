import { dbConnect } from "@/utils/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";
import { isValidObjectId } from "mongoose";
import User, { ActivationInfoType } from "@/model/User";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json()

        const { activationValue} = body;

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

        const activationSuccess = user.activationInfos.some((info: ActivationInfoType) => info.code === activationValue.toString() && info.used === false)

        if (activationSuccess){
            // also need to set the code.used to true
            const result = await User.updateOne(
                {
                    _id: userId,
                    'activationInfos.code': activationValue.toString()
                },
                {
                    $set: { 'activationInfos.$.used': true }
                }
            );

            if (result.modifiedCount === 0) {
                return NextResponse.json({ message: "Failed to update activation status" }, { status: 400 });
            }

            return NextResponse.json({message: "Activate product successfully"}, {status: 200})
        }else{
            return NextResponse.json({ message: "Activate product failed" }, { status: 400 })
        }
    }catch(error){
        console.error('Error activating the prodict', error);
        return NextResponse.json({ message:"Internal server error"},{status: 500})
    }

}