import User, { UserType } from "@/model/User";
import { dbConnect } from "@/utils/dbConnect";
import { NextAuthOptions, Session, User as AuthUser, Account } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { Profile as DefaultProfile } from "next-auth";
import { JWT } from "next-auth/jwt";
import jwt from 'jsonwebtoken';

interface CustomProfile extends DefaultProfile {
    picture?: string | { data?: { url?: string } };
}

interface ExtendedToken extends JWT {
    accessToken?: string;
    id?: string;
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
        async jwt({ token, user}: { token: ExtendedToken; user: AuthUser}) {
            if (user) {
                const dbUser = await User.findOne({ email: token.email });
                const accessToken = jwt.sign(
                    {
                        userId: dbUser._id.toString(),
                        email: user.email
                    },
                    process.env.NEXTAUTH_SECRET!,
                    { expiresIn: '1d' } 
                );
                return {
                    ...token,
                    accessToken,
                    userId: dbUser._id.toString()
                };
            }
            return token;
        },
        async session({ session, token }: {
            session: Session; token: ExtendedToken
        }) {
            if (session.user) {
                const sessionUser: UserType | null = await User.findOne({ email: session.user.email });
                if (sessionUser && token) {
                    session.user.id = sessionUser._id.toString();
                    session.user.username = sessionUser.username;
                    session.user.accessToken = token.accessToken;
                    session.user.roles = sessionUser.roles;
                    session.user.subscriptionProducts = sessionUser.subscriptionProducts;
                    session.user.activationInfos = sessionUser.activationInfos;
                    session.user.cart = sessionUser.cart;
                } else {
                    console.error('User not found in the database');
                }
            } else {
                console.error('session.user is undefined');
            }
            return session;
        },
        async signIn({
            account,
            profile,
            // user,
            credentials
        }: {
            account: Account | null;
            profile?: CustomProfile;
            // user?: AuthUser | AdapterUser;
            credentials?: Record<string, unknown>;
        }) {
            if (credentials) {
                return true;
            }
            if (profile && account) {
                try {
                    await dbConnect();
                    const userExists = await User.findOne({ email: profile.email });

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
                            activationInfos: [],
                            cart: [],
                        });
                    }
                    return true;
                } catch (error) {
                    console.log("Error checking if user exists: ", error);
                    return false;
                }
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}