import { jwtVerify } from 'jose';

interface UserJWTPayload {
    jti: string;
    iat: number;
}

const getJWTSecretKey = () => {
    const secret = process.env.JWT_SECRET;

    if (!secret || secret.length === 0) {
        throw new Error('Missing JWT secret');
    }

    return secret;
};

export async function verifyAuth(token: string) {
    try {
        const verified = await jwtVerify(
            token,
            new TextEncoder().encode(getJWTSecretKey())
        );

        return verified.payload as UserJWTPayload;
    } catch (error) {
        throw new Error('Your session has expired. Please log in again.');
    }
}
