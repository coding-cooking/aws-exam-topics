'use client'

import { checkoutItemType } from "@/app/cart/page"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

export default function CheckoutSuccess() {
    const searchParams = useSearchParams()
    const itemsParam = searchParams.get('items')
    const items = itemsParam ? JSON.parse(itemsParam) : []
    const itemNames = items.map((item: checkoutItemType) => item.name)

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="mt-32 text-2xl text-teal-800 font-extrabold">Thank you!</h1>
            <h2 className="text-lg">You've got access to <b>{itemNames.join(',')}</b></h2>
            <Button
                variant="destructive"
                className="w-36 h-16 mt-8 mb-2 bg-emerald-700 rounded-xl"
            >View product</Button>
        </div>
    )
}