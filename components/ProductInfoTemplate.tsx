'use client'

import { productType } from "@/data/products";
import { useCart } from '@/context/CartContext';
import Image from "next/image";
import CartDrawer from "./CartDrawer";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";

type ProductInfoTemplateProps = {
    product: productType;
}

export default function ProductInfoTemplate({ product }: ProductInfoTemplateProps) {
    const { handleAddToCart, adding, drawerOpen, setDrawerOpen } = useCart();
    const { data: session } = useSession();
    const productNames = session?.user.subscriptionProducts?.map(item => item.product);
    const cartItemNames = session?.user.cart.map(item => item.name);

    function checkProductExist(ProductName: string) {
        const hasSameProduct =
            productNames?.includes(ProductName) || cartItemNames?.includes(ProductName)
        return hasSameProduct
    }

    return (
        <div className="w-[full] h-[full] flex flex-col justify-center item-start pt-20 pl-20">
            <h2 className="text-2xl text-black font-semibold">
                {product.name} Exam Topics
            </h2>
            <div className="w-[full] flex flex-col md:flex-row gap-32 mt-6 ">
                <div className="mt-8">
                    <Image src={product.image} alt={product.name} width={300} height={200} />
                </div>
                <div className="">
                    <p>{product.description}</p>
                    <Button
                        className="w-36 h-16 mx-20 my-20 bg-emerald-700 text-white rounded-lg"
                        onClick={() => { handleAddToCart(product) }}
                        disabled={checkProductExist(product.name)}
                    >
                        {adding ? 'Adding to Cart...' : 'Add to Cart'}
                    </Button>
                </div>
            </div>
            <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} showIcon={false} />
        </div>
    )
}