'use client'

import { products } from "@/data/products";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function TopicCard() {
    const { data: session } = useSession();
    const productNames = session?.user.subscriptionProducts && session.user.subscriptionProducts?.map(item => item.product);
    const cartItemNames = session?.user.cart && session.user.cart.map(item => item.name);

    function checkProductExist(ProductName: string) {
        const hasSameProduct =
            productNames?.includes(ProductName) || cartItemNames?.includes(ProductName)
        return hasSameProduct
    }

    return (
        <div className="w-full h-full flex flex-col md:flex-row gap-20 justify-center items-center">
            {products.map(product => (
                <div key={product.name} className="w-[360px] h-[300px] flex flex-col border border-1 border-slate-500 rounded-xl overflow-hidden">
                    <div className="w-full h-[200px] overflow-hidden">
                        <Image src={product.image} alt={product.name} width={360} height={200} className="object-cover" />
                    </div>
                    <div className="flex gap-10 pt-4 px-6 items-center">
                        <div className="w-2/3">
                            <h3 className="text-lg text-sky-700">{product.name}</h3>
                            <p className="text-sm text-slate-500">{product.description}</p>
                        </div>
                        <div>
                            <Link
                                href={`/topic/${product.handle}`}
                                onClick={(e) => checkProductExist(product.name) && e.preventDefault()}>
                                <Button
                                    className="w-[60px] h-[40px] bg-emerald-700 hover:bg-emerald-500 rounded-xl text-white"
                                    disabled={checkProductExist(product.name)}>
                                    Buy</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}