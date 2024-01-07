import { SESSION_TOKEN } from '@/constants';
import { serialize } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const cookie = request.cookies.get(SESSION_TOKEN);

    if (cookie) {
        const token = '';

        const serialized = serialize(SESSION_TOKEN, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: -1,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/',
        });

        return NextResponse.json(
            {
                status: 'success',
                message: 'Logged out.',
            },
            {
                status: 200,
                headers: {
                    'Set-Cookie': serialized,
                },
            }
        );
    } else {
        return NextResponse.json(
            {
                status: 'error',
                message: 'Session token not found.',
            },
            {
                status: 404,
            }
        );
    }
}
