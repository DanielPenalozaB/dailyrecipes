import { SESSION_TOKEN } from '@/constants';
import { verifyAuth } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const cookie = request.cookies.get(SESSION_TOKEN);

    if (cookie) {
        const verified = await verifyAuth(cookie.value);

        const prisma = new PrismaClient();

        if (verified.email) {
            try {
                const user = await prisma.user.findUnique({
                    where: {
                        email: verified.email,
                    },
                });

                console.log(user);
            } catch (error) {
                return NextResponse.json(
                    { message: 'There was an error' },
                    { status: 500 }
                );
            }
        } else {
            return NextResponse.json(
                { message: 'Invalid token' },
                { status: 401 }
            );
        }
    }

    return NextResponse.json({ klk: 'mmgv' });
}
