import { dbConnect } from '@/utils/dbConnect';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import User, { CartItemType } from '@/model/User';
import { generateActivationCode } from '@/utils/generateActivationCode';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: NextRequest) {
    const sig = req.headers.get('stripe-signature');

    if (!sig) {
        return NextResponse.json(
            { message: 'No signature found' },
            { status: 400 }
        );
    }

    try {
        const body = await req.text();
        const event = stripe.webhooks.constructEvent(
            body,
            sig,
            endpointSecret
        );
        // Handle the event
        switch (event.type) {
            case 'payment_intent.created':
                break;
            case 'payment_intent.succeeded':
                break;
            case 'charge.succeeded':
                break;
            case 'checkout.session.completed':
                // Handle successful payment
                const checkoutSessionCompleted = event.data.object;
                if (checkoutSessionCompleted.payment_status === 'paid') {
                    // console.log('Payment for session completed successfully');
                    const checkoutSession = await stripe.checkout.sessions.retrieve(
                        checkoutSessionCompleted.id,
                        {
                            expand: ['line_items']
                        }
                    );
                    const lineItems = checkoutSession.line_items?.data || [];
                    
                    await dbConnect();
                    const userId = checkoutSession.metadata?.userId;
                    const user = await User.findById(userId);

                    if (Array.isArray(user.cart)) {
                        lineItems.forEach(item => {
                            //after checkout, add product(s) to user
                            user.subscriptionProducts.push({
                                product: item.description,
                                activationDate: null,
                                expirationDate: null,
                            })
                            //after checkout, add activationCode to user
                            const activationCode = generateActivationCode();
                            user.activationInfos.push({
                                code: activationCode,
                                product: item.description,
                                used: false,
                            });
                            //after checkout, delete the items in cart
                            user.cart = user.cart.filter((i: CartItemType) => i.name !== item.description);
                        })
                        await user.save();
                    }
                }
                break;
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }
        return NextResponse.json({ received: true });

    } catch (err: any) {
        console.error('Error verifying webhook signature:', err);
        return NextResponse.json({ message: `Webhook Error: ${err.message}` }, { status: 400 })
    }
} 