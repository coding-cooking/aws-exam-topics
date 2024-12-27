import Stripe from 'stripe';
import { checkoutItmeType } from '@/app/cart/page';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string); // Use your Stripe secret key

export async function POST(req:NextRequest, res:NextResponse) {
    try {
        // Extract items from the request body
        const body = await req.json()
        const { items } = body;

        console.log('Received items:', items);

        const lineItems = items.map((item: checkoutItmeType) => {
            if (!item.priceId?.startsWith('price_')) {
                throw new Error(`Invalid price ID format: ${item.priceId}`);
            }
            return {
                price: item.priceId,
                quantity: item.quantity || 1,
            };
        });


        // Create Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${req.headers.origin}/success`, // Redirect on success
            cancel_url: `${req.headers.origin}/cancel`, // Redirect on cancel
        });
        return NextResponse.json({ url: session.url }, { status: 200 }); // Return the checkout URL
    } catch (error) {
        console.error('Stripe session creation error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });     }
}
