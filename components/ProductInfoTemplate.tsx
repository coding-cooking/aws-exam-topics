'use client'

import { productType } from "@/data/products";
import { useCart } from '@/context/CartContext';
import Image from "next/image";
import CartDrawer from "./CartDrawer";

type ProductInfoTemplateProps = {
    product: productType;
}

export default function ProductInfoTemplate({ product }: ProductInfoTemplateProps) {
    const { handleAddToCart, adding, drawerOpen, setDrawerOpen } = useCart();

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
                    <button
                        className="w-36 h-16 mx-20 my-20 bg-emerald-700 text-white rounded-lg"
                        onClick={() => { handleAddToCart(product) }}
                    >
                        {adding ? 'Adding to Cart...' : 'Add to Cart'}
                    </button>
                </div>
            </div>
            <CartDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} showIcon={false} />
        </div>
    )
}