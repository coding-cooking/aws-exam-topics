import jwt from 'jsonwebtoken';

type DecodedToken =  {
    userId: string;
    email: string;
    iat: number;
    exp: number;
}

export async function verifyToken(token: string):Promise < DecodedToken | null > {
    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) {
            throw new Error('JWT secret is not defined');
        }
    try {
        const decoded = jwt.verify(token, secret);
        return decoded as DecodedToken;
    } catch (err) {
        console.error('Token verification failed:', err);
        return null;
    }
}