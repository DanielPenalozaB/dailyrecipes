import { Country, PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';

export async function GET() {
    try {
        const prisma = new PrismaClient();

        const countries = await prisma.country.findMany();

        return NextResponse.json(countries);
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

export async function POST(request: NextRequest) {
    try {
        const prisma = new PrismaClient();

        const body = (await request.json()) as Country;

        if (!request.body) {
            return NextResponse.json({
                status: 'error',
                message: 'Invalid request. Please provide a valid name.',
            });
        }

        if (body.name) {
            const findCountry = await prisma.country.findFirst({
                where: {
                    name: body.name,
                },
            });

            if (findCountry) {
                return NextResponse.json(
                    {
                        status: 'error',
                        message: 'Country already exists.',
                    },
                    {
                        status: 209,
                    }
                );
            } else {
                const country = await prisma.country.create({
                    data: {
                        id: uuid(),
                        name: body.name,
                    },
                });

                if (country.id) {
                    return NextResponse.json(
                        {
                            status: 'success',
                            message: 'Country created successfully.',
                        },
                        {
                            status: 201,
                        }
                    );
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
                    message: 'Invalid request. Please provide a valid name.',
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
