'use client';

import { Navbar } from '@/components';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { RECIPES } from '@/data';
import { Recipe } from '@/interfaces';
import Image from 'next/image';

export default function Recipe({ params }: { params: { id: string } }) {
    const [data, setData] = useState<Recipe | undefined>(undefined);

    const title = `Recipe ${params.id}`;

    useEffect(() => {
        const RECIPE = RECIPES.find((recipe) => recipe.url === params.id);
        setData(RECIPE);
    }, [params.id]);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <section className="flex justify-center py-8">
                <div className="flex w-full max-w-5xl flex-col">
                    {data && (
                        <>
                            <div className="relative flex h-[30vh] w-full items-center overflow-hidden rounded-2xl border border-white">
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/60 to-white" />
                                <Image
                                    src={data.thumbnail}
                                    alt={data.title}
                                    blurDataURL={data.thumbnail}
                                    loading="lazy"
                                    placeholder="blur"
                                    width={400}
                                    height={400}
                                    className="w-full"
                                />
                                <h1 className="absolute bottom-4 left-6 text-2xl font-semibold text-gray-800">
                                    {data.title}
                                </h1>
                            </div>
                            <p className="text-gray-600">{data.description}</p>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
