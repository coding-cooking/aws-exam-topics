import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export default async function handler(req: NextRequest) {
    if (req.method === 'POST') {
        const body = await req.json()

        const { email, activationCode } = body;

        // Create a transporter using your email provider (Gmail example here)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,  
                pass: process.env.EMAIL_PASS,  
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,  // sender address
            to: email,  
            subject: 'Your Activation Code',
            text: `Your activation code is: ${activationCode}`,
        };

        try {
            // Send email
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message:'Email sent successfully'}, { status: 401 });
        } catch (error) {
            console.error(error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
    }
}