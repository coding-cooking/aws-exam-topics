'use client'

import { Button } from "@/components/ui/button"
// import { useSearchParams } from "next/navigation"

export default function CheckoutCancel() {
    // const searchParams = useSearchParams()
    // const itemsParam = searchParams.get('items')
    // const items = itemsParam ? JSON.parse(itemsParam) : []

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="mt-32 text-2xl text-teal-800 font-extrabold">You canceled the payment.</h1>
            <h2 className="text-lg">You can still process the payment by click this button bellow.</h2>
            <Button
                variant="destructive"
                className="w-48 h-16 mt-8 mb-2 bg-emerald-700 rounded-xl"
            >Proceed to Checkout</Button>
        </div>
    )
}