import { LAST_SESSION_DATA, SESSION_TOKEN } from '@/constants';
import { serialize } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const cookie = request.cookies.get(SESSION_TOKEN);

    if (cookie) {
        const headers = new Headers();

        const serialized = serialize(SESSION_TOKEN, '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: -1,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/',
        });

        const serializedUser = serialize(LAST_SESSION_DATA, '', {
            secure: process.env.NODE_ENV === 'production',
            maxAge: -1,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/',
        });

        headers.set('Set-Cookie', serialized);

        headers.append('Set-Cookie', serializedUser);

        return NextResponse.json(
            {
                status: 'success',
                message: 'Logged out.',
            },
            {
                status: 200,
                headers,
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
