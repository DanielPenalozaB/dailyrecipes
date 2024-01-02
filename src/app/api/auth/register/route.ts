import { VerifyEmail } from '@/emails/verify/verify';
import { generateOTP } from '@/utils';
import { PrismaClient } from '@prisma/client';
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
                const findCountry = await prisma.country.findFirst({
                    where: {
                        id: body.countryId,
                    },
                });

                if (!findCountry) {
                    return NextResponse.json(
                        {
                            status: 'error',
                            message: 'Country not found.',
                        },
                        {
                            status: 404,
                        }
                    );
                }

                const FORMATED_USER = {
                    id: uuid(),
                    otp: generateOTP(),
                    ...body,
                };

                const user = await prisma.user.create({ data: FORMATED_USER });

                const OTPArray = user.otp.split('');

                if (user.id) {
                    const checkEmail = await resend.emails.send({
                        to: user.email,
                        from: 'Daily Recipes <info@danielpenalozab.com>',
                        subject:
                            'Welcome to Daily Recipes - Verify Your Account',
                        html: VerifyEmail({
                            id: user.id,
                            username: user.username,
                            otp: OTPArray,
                        }),
                    });

                    if (checkEmail.error) {
                        return NextResponse.json(
                            {
                                status: 'error',
                                message:
                                    'There was an error sending the email.',
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
