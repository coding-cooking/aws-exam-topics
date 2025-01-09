import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const body = await req.json()

    const { userEmail, activationCode } = body;

    console.log('userEmail is', userEmail, 'activationCode is', activationCode.code)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: "my.smtp.host",
        // port: 465,
        // secure: true, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,  
        to: userEmail,
        subject: 'The Activation Code of your product',
        text: `Your activation code for ${activationCode.product} is: ${activationCode.code}. 
        After activating the product, you will have the right to use this product for 1 year.
        Please click this link to activate your product: ${ process.env.NEXT_PUBLIC_BASE_URL }/activate
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 401 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}