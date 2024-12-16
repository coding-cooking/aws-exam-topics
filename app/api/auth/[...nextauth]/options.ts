import User, { UserType } from "@/model/User";
import { dbConnect } from "@/utils/dbConnect";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { Profile as DefaultProfile } from "next-auth";
import { Account, User as NextAuthUser } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

interface CustomProfile extends DefaultProfile {
    picture?: string | { data?: { url?: string } };
}

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            console.log('session jiu shi', session)
            if (session.user) {
                const sessionUser: UserType | null = await User.findOne({ email: session.user.email });
                if (sessionUser && token) {
                    session.user.id = sessionUser._id.toString();
                    session.user.username = sessionUser.username;
                    session.user.roles = sessionUser.roles;
                    session.user.subscriptionProducts = sessionUser.subscriptionProducts;
                    session.user.activationInfos = sessionUser.activationInfos;
                    session.user.accessToken = token;
                } else {
                    console.error('User not found in the database');
                }
            } else {
                console.error('session.user is undefined');
            }
            console.log('session hahaha', session)
            return session;
        },
        async signIn({
            account,
            profile,
            user,
            credentials
        }: {
            account: Account | null;
            profile?: CustomProfile;
            user?: NextAuthUser | AdapterUser;
            credentials?: Record<string, unknown>;
        }) {
            if (credentials) {
                return true;
            }
            if (profile && account) {
                try {
                    await dbConnect();
                    const userExists = await User.findOne({ email: profile.email });
                    console.log('profile is', profile, 'account is', account, 'user is ', user )

                    let profileImage;
                    if (account.provider === 'facebook') {
                        if (typeof profile.picture === 'object' &&
                            profile.picture &&
                            'data' in profile.picture &&
                            profile.picture.data &&
                            'url' in profile.picture.data) {
                            profileImage = (profile.picture as { data: { url: string } }).data.url;
                        }
                    } else if (account.provider === 'google') {
                        if (typeof profile.picture === 'string') {
                            profileImage = profile.picture;
                        }
                    }
                    if (!userExists) {
                        return await User.create({
                            email: profile.email,
                            username: profile.name?.replace(" ", "").toLowerCase(),
                            image: profileImage,
                            provider: account.provider,
                            roles: ['user'],
                            subscriptionTypes: [],
                            activationInfos:[],
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