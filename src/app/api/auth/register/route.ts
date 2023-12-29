import { VerifyEmail } from '@/emails';
import { PrismaClient, User } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { v4 as uuid } from 'uuid';

export async function POST(request: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const prisma = new PrismaClient();

        const body = await request.json();

        if (!request.body) {
            return NextResponse.json({
                status: 'error',
                message: 'Invalid request. Please provide valid data.',
            });
        }

        if (
            body.countryId &&
            body.username &&
            body.password &&
            body.email &&
            body.preferredLanguage
        ) {
            const findUser = await prisma.user.findFirst({
                where: {
                    email: body.email,
                },
            });

            if (findUser) {
                return NextResponse.json(
                    {
                        status: 'error',
                        message: 'Email is already registered.',
                    },
                    {
                        status: 209,
                    }
                );
            } else {
                const user = await prisma.user.create({
                    data: {
                        id: uuid(),
                        ...body,
                    },
                });

                if (user.id) {
                    const { error } = await resend.emails.send({
                        to: body.email,
                        from: 'Daily Recipes <info@danielpenalozab.com>',
                        subject: 'Account Verification',
                        react: VerifyEmail(body.username),
                        text: 'Account Verification',
                    });

                    if (error) {
                        return NextResponse.json(
                            {
                                status: 'error',
                                message: 'There was an error sending the email.',
                            },
                            {
                                status: 500,
                            }
                        );
                    } else {
                        return NextResponse.json(
                            {
                                status: 'success',
                                message: 'User created successfully.',
                            },
                            {
                                status: 201,
                            }
                        );
                    }
                } else {
                    return NextResponse.json(
                        {
                            status: 'error',
                            message:
                                'Internal server error. Please try again later.',
                        },
                        {
                            status: 500,
                        }
                    );
                }
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
