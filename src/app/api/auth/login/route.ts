import { SESSION_TOKEN } from '@/constants';
import { PrismaClient } from '@prisma/client';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
    try {
        const prisma = new PrismaClient();

        const body = await request.json();

        if (body.email && body.password) {
            const findUser = await prisma.user.findFirst({
                where: {
                    email: body.email,
                },
            });

            if (findUser) {
                if (findUser.password !== body.password) {
                    return NextResponse.json(
                        {
                            status: 'error',
                            message: 'Incorrect password.',
                        },
                        {
                            status: 400,
                        }
                    );
                } else {
                    const secret = process.env.JWT_SECRET || '';

                    const token = sign(
                        {
                            email: findUser.email,
                        },
                        secret,
                        {
                            expiresIn: MAX_AGE,
                        }
                    );

                    const serialized = serialize(SESSION_TOKEN, token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production',
                        maxAge: MAX_AGE,
                        sameSite: 'strict',
                        path: '/',
                    });

                    return NextResponse.json(
                        {
                            status: 'success',
                            message: 'Authenticated.',
                        },
                        {
                            status: 200,
                            headers: {
                                'Set-Cookie': serialized,
                            },
                        }
                    );
                }
            } else {
                return NextResponse.json(
                    {
                        status: 'error',
                        message: 'Email not found.',
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
                    message: 'Invalid request. Please provide valid data.',
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
