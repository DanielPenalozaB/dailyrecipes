import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

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
                    return NextResponse.json(
                        {
                            status: 'success',
                            message: 'Login successful.',
                        },
                        {
                            status: 200,
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
