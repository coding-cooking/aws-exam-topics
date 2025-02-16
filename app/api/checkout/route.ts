import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { checkoutItemType } from '@/app/cart/page';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { items } = body;
        const session = await getServerSession(options);

        const successParams = new URLSearchParams({ items: JSON.stringify(items) }).toString();

        const lineItems = items.map((item: checkoutItemType) => {
            if (!item.priceId?.startsWith('price_')) {
                throw new Error(`Invalid price ID format: ${item.priceId}`);
            }
            return {
                price: item.priceId,
                quantity: item.quantity || 1,
            };
        });

        if (!session) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
        }

        const checkoutsession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/checkout/checkout-success?${successParams}`,
            cancel_url: `${process.env.BASE_URL}/checkout/checkout-cancel`,
            metadata: {
                userId: session.user.id,
            }
        });
        return NextResponse.json({ url: checkoutsession.url }, { status: 200 });
    } catch (err: unknown) {
        if (err instanceof Stripe.errors.StripeError) {
            console.error('Stripe session creation error:', err);
            return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
        }
        const error = err as Error;
        console.error('Unexpected error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
