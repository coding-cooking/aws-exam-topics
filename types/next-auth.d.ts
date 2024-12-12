import NextAuth from "next-auth"

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
            roles?: string[];
            subscriptionProducts?: Array<{
                type: string;
                activationDate: Date;
                expirationDate: Date;
            }>;
        },
        expires: string;
    }
}