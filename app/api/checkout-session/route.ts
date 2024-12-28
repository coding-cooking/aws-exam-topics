import Stripe from 'stripe';
import { checkoutItmeType } from '@/app/cart/page';
import { NextRequest, NextResponse } from 'next/server';

export type checkoutItemType = {
    name: string;
    priceId: string;
    quantity:string;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); 

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.json()
        const { items } = body;

        const successParams = new URLSearchParams({items: JSON.stringify(items)}).toString();

        const lineItems = items.map((item: checkoutItmeType) => {
            if (!item.priceId?.startsWith('price_')) {
                throw new Error(`Invalid price ID format: ${item.priceId}`);
            }
            return {
                price: item.priceId,
                quantity: item.quantity || 1,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/checkout-success?${successParams}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/checkout-cancel`,
        });
        return NextResponse.json({ url: session.url }, { status: 200 });
    } catch (err: unknown) {
        if (err instanceof Stripe.errors.StripeError) {
            console.error('Stripe session creation error:', err);
            return NextResponse.json({error: err.message}, {status: err.statusCode || 500});
        }
        const error = err as Error;
        console.error('Unexpected error:', error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
