'use client'

import { use } from 'react';
import ProductInfoTemplate from "@/components/ProductInfoTemplate";
import TopicList from "@/components/TopicList";
import { products, productType } from "@/data/products";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";

export default function ProductInfoPage({ params }: { params: Promise<{ handle: string }> }) {
    const { handle } = use(params);
    const { data: session } = useSession();

    try {
        const response: productType | undefined = products.find(product => product.handle === handle);

        if (response === undefined) {
            return notFound();
        } else {
            const product = response;
            return session?.user.roles.includes(`${handle}User`) ?
                <TopicList product={product} /> :
                < ProductInfoTemplate product={product} />
        }
    } catch (error) {
        console.error("Error fetching topic:", error);
        return notFound();
    }
}