import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string;
            username:string;
            email: string;
            image: string;
            accessToken: JWT;
            roles?: string[];
            subscriptionProducts?: Array<{
                type: string;
                activationDate: Date;
                expirationDate: Date;
            }>;
            activationInfos?: Array<{
                code: string;
                product: string;
                used: boolean;
            }>;
            cart?: Array<{
                name: string;
                description: string;
                image: string;
                handle: string;
            }>
        },
        expires: string;
    }
}