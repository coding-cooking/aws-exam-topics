'use client'

import { checkoutItemType } from "@/app/cart/page"
import ActivateForm from "@/components/ActicationForm"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export default function CheckoutSuccess() {
    return (
        <div className="w-full h-full">
            <Suspense fallback={<div>Loading...</div>}>
                <CheckoutContent />
            </Suspense>
        </div>
    )
}

function CheckoutContent() {
    const searchParams = useSearchParams()
    const itemsParam = searchParams.get('items')
    const items = itemsParam ? JSON.parse(itemsParam) : []
    const itemNames = items.map((item: checkoutItemType) => item.name)

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="mt-32 text-2xl text-teal-800 font-extrabold">Thank you!</h1>
            <h2 className="text-lg">You have got access to <b>{itemNames.join(',')}</b></h2>
            <div className="p-8">
                <p>We have sent you an email with the activation code. </p>
                <p>You can only get access to the product by submitting the code.</p>
                <p>After activating the product, you will have the right to use this product for 1 year.</p>
            </div>
            <ActivateForm />
        </div>
    )
}