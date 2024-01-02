import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const prisma = new PrismaClient();

        const UUID = request.url.split('/').pop();

        if (UUID && UUID !== 'auth' && UUID !== 'verify') {
            const user = await prisma.user.findUnique({
                where: {
                    id: UUID,
                },
                select: {
                    id: true,
                    username: true,
                    email: true,
                    preferredLanguage: true,
                    image: true,
                    isAdmin: true,
                    otp: true,
                    emailConfirmed: true,
                    country: true,
                },
            });

            if (user) {
                return NextResponse.json(user, {
                    status: 200,
                });
            } else {
                return NextResponse.json(
                    {
                        status: 'error',
                        message: 'User not found.',
                    },
                    {
                        status: 400,
                    }
                );
            }
        } else {
            return NextResponse.json(
                {
                    status: 'error',
                    message: 'Invalid request. Please provide a valid ID.',
                },
                {
                    status: 400,
                }
            );
        }
    } catch (error) {
        return NextResponse.json(
            {
                status: 'error',
                message: 'Internal server error. Please try again later.',
            },
            {
                status: 500,
            }
        );
    }
}
