"use client"

import { SessionProvider } from "next-auth/react";

export type ProviderProps = {
    children: React.ReactNode;
    session: {
        user: {
            username: string;
            email: string;
            image: string;
            id: string;
            roles: string[];
            accessToken?: string;
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
                price: string;
            }>
        };
        expires: string;
    };
};

const Provider = ({ children, session }: ProviderProps) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider
