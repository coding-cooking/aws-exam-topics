'use client'

import useCart from "@/hooks/useCart";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function cartPage() {
    const { cartList, removeItem } = useCart();
    const safeCartList = Array.isArray(cartList) ? cartList : [];

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-center py-16 bg-stone-100">
                <h1 className="text-2xl font-sans">Your shoping cart</h1>
            </div>

            <div className="w-full flex justify-around font-sans">
                <div className="basis-1/2 px-12 flex flex-col items-center">
                    <h2 className="py-12 text-xl">
                        Your products
                    </h2>
                    {safeCartList.map(item => (
                        <div key={`${item._id}-${item.name}`} className='w-11/12 mx-auto flex gap-2 p-4 border border-solid border-slate-300 rounded-lg'>
                            <div>
                                <Image src={item.image} alt={item.name} width={100} height={40} />
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
                <div className="basis-1/2 px-12 flex flex-col justify-center items-center">
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

                    <button className="w-3/4 h-20 mt-8 mb-2 bg-emerald-700 rounded-xl">Proceed to Checkout</button>

                    <div className="w-full flex justify-center gap-4">
                        <Image src='/visa_icon.png' alt='visa' width={24} height={20} />
                        <Image src='/mastercard_icon.png' alt='mastercard' width={24} height={20} />
                        <Image src='/amex_icon.png' alt='amex' width={24} height={20} />
                        <Image src='/alipay_icon.png' alt='alipay' width={24} height={20} />
                    </div>

                </div>

            </div>
        </div>
    )
}