import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { checkoutItemType } from '@/app/cart/page';
import { getServerSession } from 'next-auth';
import { options } from '../auth/[...nextauth]/options';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest, res: NextResponse) {
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
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/checkout-success?${successParams}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/checkout-cancel`,
            metadata: {
                userId: session.user.id,
            }
        });
        return NextResponse.json({ url: checkoutsession.url }, { status: 200 });

        // await dbConnect();
        // if (session) {
        //     const userId = session.user.id;
        //     const user = await User.findById(userId);
        //     if (Array.isArray(user.cart)) {
        //         items.forEach((item: checkoutItemType) => {
        //             //after checkout, add product(s) to user
        //             user.subscriptionProducts.push({
        //                 product: item.name,
        //                 activationDate: null,
        //                 expirationDate: null,
        //             })
        //             //after checkout, add activationCode to user
        //             const activationCode = generateActivationCode();
        //             user.activationInfos.push({
        //                 code: activationCode,
        //                 product: item.name,
        //                 used: false,
        //             });
        //             //after checkout, delete the items in cart
        //             user.cart = user.cart.filter((i: CartItemType) => i._id.toString() !== item.id);
        //         })
        //         await user.save();
        //     }
        // }

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
