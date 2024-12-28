'use client'

import useCart from "@/hooks/useCart";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export type checkoutItmeType = {
    priceId: string,
    quantity: number
}

export default function cartPage() {
    const { cartList, removeItem } = useCart();
    const { data: session } = useSession();
    const safeCartList = Array.isArray(cartList) ? cartList : [];

    console.log('safeCartList', safeCartList)

    async function handleCheckout() {
        if (!session) {
            console.log("User is not authenticated");
            return;
        }
        const items: checkoutItmeType[] = safeCartList.map(item => ({
            name: item.name,
            priceId: item.priceId,
            quantity: 1
        }))
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.user.accessToken}`,
            },
            body: JSON.stringify({ items }),
        });
        if (response.ok) {
            const { url } = await response.json();
            window.location.href = url;
        } else {
            console.error('Failed to check out:', await response.text());
        }
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-center py-16 bg-stone-100">
                <h1 className="text-2xl font-sans">Your shoping cart</h1>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-around font-sans">
                <div className="flex flex-col items-center basis-1 md:basis-1/2 px-4 md:px-12">
                    <h2 className="py-12 text-xl">
                        Your products
                    </h2>
                    {safeCartList.map(item => (
                        <div key={`${item._id}-${item.name}`} className='w-11/12 mx-auto flex gap-2 p-4 border border-solid border-slate-300 rounded-lg'>
                            <div className="w-[100px]">
                                <Image src={item.image} alt={item.name} width={100} height={40} style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-6'>
                                    <h2>{item.name}</h2>
                                    <Trash2 className="w-5 h-5 cursor-pointer" onClick={() => { removeItem(item._id) }} />
                                </div>
                                <div>$ {item.price}</div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="flex flex-col items-center basis-1 md:basis-1/2 px-4 md:px-12">
                    <h2 className="py-12 text-xl">
                        Summary
                    </h2>
                    <div className="w-3/4 px-4 flex justify-between text-xl">
                        <p>Total</p>
                        {
                            safeCartList.length > 0 ? <p>$ {safeCartList.reduce((acc, cur) => acc + Number(cur.price), 0).toFixed(2)}</p>
                                : <p>$ 0</p>
                        }
                    </div>

                    <Button
                        variant="destructive"
                        className="w-3/4 h-20 mt-8 mb-2 bg-emerald-700 rounded-xl"
                        onClick={handleCheckout}
                    >Proceed to Checkout</Button>

                    <div className="w-full flex justify-center gap-4">
                        <Image src='/visa_icon.png' alt='visa' width={36} height={24} style={{ width: "auto", height: "auto" }} />
                        <Image src='/mastercard_icon.png' alt='mastercard' width={36} height={24} style={{ width: "auto", height: "auto" }} />
                        <Image src='/amex_icon.png' alt='amex' width={36} height={24} style={{ width: "auto", height: "auto" }} />
                        <Image src='/unionpay_icon.png' alt='unionpay' width={36} height={24} style={{ width: "auto", height: "auto" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}