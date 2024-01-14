'use client';

import { Recipe } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function RecipeCard({ data }: { data: Recipe }) {
    const [star, setStar] = useState(false);

    return (
        <Link
            href={`/recipes/${data.url}`}
            title={data.title}
            className="flex w-full max-w-full cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl border border-white bg-white p-4 duration-300 hover:border-gray-200 sm:max-w-[290px]"
        >
            <div className="h-48 w-full overflow-hidden rounded-lg sm:w-64">
                <Image
                    src={data.thumbnail}
                    alt={data.title}
                    blurDataURL={data.thumbnail}
                    loading="lazy"
                    placeholder="blur"
                    width={200}
                    height={150}
                    className="h-64 w-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="truncate text-2xl font-semibold text-gray-800">
                    {data.title}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-gray-500">{data.origin}</span>
                    <div className="h-[3px] w-[3px] rounded-full bg-gray-500" />
                    <span className="text-gray-500">{data.taste[0]}</span>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex items-center gap-2 rounded-md bg-gray-200 p-2" title={data.duration}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        viewBox="0 0 24 24"
                        className="h-4 fill-gray-500"
                    >
                        <path d="m11 13.723a1.984 1.984 0 0 1 0-3.446v-3.277a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446v2.277a1 1 0 0 1 -2 0zm1-13.723a1 1 0 0 0 0 2 10 10 0 0 1 0 20 1 1 0 0 0 0 2 12 12 0 0 0 0-24zm-10.173 6.784a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm.173 5.216a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm2.221-8.793a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558-2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm-5.952 14.375a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z" />
                    </svg>
                    <span className="text-sm text-gray-500">
                        {data.duration}
                    </span>
                </div>
                <div className="flex items-center gap-2 rounded-md bg-gray-200 p-2" title={`${data.rating} out of 5`}>
                    <svg
                        onClick={() => setStar(false)}
                        xmlns="http://www.w3.org/2000/svg"
                        id="Filled"
                        viewBox="0 0 24 24"
                        className="h-4 fill-yellow-500"
                    >
                        <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                    </svg>
                    <span className="text-sm text-gray-500">{data.rating}</span>
                </div>
            </div>
        </Link>
    );
}
