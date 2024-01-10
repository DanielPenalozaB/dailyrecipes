import { SESSION_TOKEN, LAST_SESSION_DATA } from '@/constants';
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
                include: {
                    country: true,
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
                    const headers = new Headers();

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

                    const USER_SESSION = {
                        username: findUser.username,
                        email: findUser.email,
                        image: findUser.image,
                        preferredLanguage: findUser.preferredLanguage,
                        country: findUser.country.name,
                    };

                    const serializedUser = serialize(
                        LAST_SESSION_DATA,
                        JSON.stringify(USER_SESSION),
                        {
                            secure: process.env.NODE_ENV === 'production',
                            maxAge: MAX_AGE,
                            sameSite: 'strict',
                            path: '/',
                        }
                    );

                    headers.set('Set-Cookie', serialized);

                    headers.append('Set-Cookie', serializedUser);

                    return NextResponse.json(
                        {
                            status: 'success',
                            message: 'Authenticated.',
                        },
                        {
                            status: 200,
                            headers,
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
