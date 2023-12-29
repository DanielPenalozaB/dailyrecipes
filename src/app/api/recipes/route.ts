import { PrismaClient, Recipe } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuid } from 'uuid';
import { Country } from '../../../interfaces/Country';

export async function GET() {
    try {
        const prisma = new PrismaClient();

        const recipes = await prisma.recipe.findMany({
            select: {
                id: true,
                createdAt: true,
                modifiedAt: true,
                title: true,
                description: true,
                url: true,
                thumbnail: true,
                rating: true,
                duration: true,
                isPublished: true,
                isPublic: true,
                origin: true,
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                    },
                },
            },
        });

        return NextResponse.json(recipes);
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

        const body = await request.json();

        const findRecipe = await prisma.recipe.findFirst({
            where: {
                OR: [
                    {
                        title: body.title,
                    },
                    {
                        url: body.url,
                    },
                ],
            },
        });

        if (findRecipe) {
            return NextResponse.json(
                {
                    status: 'error',
                    message: 'Recipe already exists.',
                },
                {
                    status: 409,
                }
            );
        } else {
            console.log('PRINT', body);

            const recipe = await prisma.recipe.create({
                data: { id: uuid(), ...body },
            });

            console.log(recipe);
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
