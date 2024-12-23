'use client'

import useCart from "@/hooks/useCart";

export default function cartPage() {
    const { cartList, removeItem } = useCart();

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="w-full text-2xl my-8">Your shoping cart</h1>
            <div>
                <div className="">
                    <h2 className="text-xl">
                        Your products
                    </h2>
                    { }

                </div>
                <div>

                </div>

            </div>
        </div>
    )
}