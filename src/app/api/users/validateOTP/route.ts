import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const prisma = new PrismaClient();

        const body = await request.json();

        if (body.id && body.otp) {
            const findUser = await prisma.user.findFirst({
                where: {
                    id: body.id,
                },
            });

            if (findUser?.id) {
                if (findUser.emailConfirmed === 0) {
                    if (findUser.otp.toLowerCase() === body.otp.toLowerCase()) {
                        const user = await prisma.user.update({
                            where: {
                                id: findUser.id,
                            },
                            data: {
                                emailConfirmed: 1,
                            },
                        });

                        return NextResponse.json(
                            {
                                status: 'success',
                                message: 'Email verified successfully.',
                                data: user,
                            },
                            {
                                status: 200,
                            }
                        );
                    } else {
                        return NextResponse.json(
                            {
                                status: 'error',
                                message: 'Invalid OTP.',
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
                            message: 'Email already verified.',
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
