import { NextRequest, NextResponse } from 'next/server';
import { SESSION_TOKEN } from './constants';
import { verifyAuth } from './lib/auth';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get(SESSION_TOKEN)?.value;

    const verifiedToken =
        token && (await verifyAuth(token).catch((error) => console.log(error)));

    if (request.nextUrl.pathname.startsWith('/auth') && !verifiedToken) return;

    if (request.nextUrl.pathname.startsWith('/auth') && verifiedToken) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (request.nextUrl.pathname === '/account' && !verifiedToken) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    return;
}

export const config = {
    matcher: ['/', '/auth', '/account', '/security'],
};
