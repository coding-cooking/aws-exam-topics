import User, { UserType } from "@/model/User";
import { dbConnect } from "@/utils/dbConnect";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        
        async signIn({ account, profile, user, credentials }) {
            if (credentials) {
                return true; 
            }
            if (profile && account) {
                try {
                    await dbConnect();
                    // check if user already exists
                    const userExists = await User.findOne({ email: profile.email });
                    // if not, create a new document and save user in MongoDB
                    if (!userExists) {
                        return await User.create({
                            email: profile.email,
                            username: profile.name?.replace(" ", "").toLowerCase(),
                            // image: profile.picture,
                            provider: account.provider
                        });
                    }
                    return true;
                } catch (error: any) {
                    console.log("Error checking if user exists: ", error.message);
                    return false;
                }
            }
        },   
    },
    secret: process.env.NEXTAUTH_SECRET,

}