'use client'

import { productType } from "@/data/products";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

type ProductInfoTemplateProps = {
    product: productType;
}

export default function ProductInfoTemplate({ product }: ProductInfoTemplateProps) {
    const { data: session } = useSession();
    const [adding, setAdding] = useState<boolean>(false)

    async function handleAddtoCart() {
        if (!session) {
            console.log("User is not authenticated");
            return;
        }

        setAdding(true)

        try {
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.user.accessToken}`,
                },
                body: JSON.stringify({ product })
            })
            if (response.ok) {
                console.log('Product added to cart successfully');
            } else {
                // Handle error
                const errorData = await response.json();
                console.error('Error adding product to cart:', errorData.message);
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setAdding(false);
        }
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
                    <button
                        className="w-36 h-16 mx-20 my-20 bg-emerald-700 text-white rounded-lg"
                        onClick={handleAddtoCart}
                    >
                        {adding ? 'Adding to Cart...' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    )
}