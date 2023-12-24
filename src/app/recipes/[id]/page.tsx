'use client';

import { Navbar } from '@/components';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { RECIPES } from '@/data';
import { Recipe } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

export default function Recipe({ params }: { params: { id: string } }) {
    const [data, setData] = useState<Recipe | undefined>(undefined);
    const [share, setShare] = useState(false);

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
                <div className="flex w-full max-w-5xl flex-col gap-8">
                    {data && (
                        <>
                            <div className="relative flex h-[30vh] w-full items-center border border-white">
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/60 to-white" />
                                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={data.thumbnail}
                                        alt={data.title}
                                        blurDataURL={data.thumbnail}
                                        loading="lazy"
                                        placeholder="blur"
                                        width={400}
                                        height={400}
                                        className="w-full select-none"
                                    />
                                </div>
                                <div className="absolute bottom-4 left-6 flex gap-4">
                                    <h1 className="text-3xl font-semibold text-gray-800">
                                        {data.title}
                                    </h1>
                                    <div className="flex gap-2">
                                        {data.tags.map((tag) => (
                                            <div
                                                key={tag}
                                                className="rounded-lg bg-white/50 p-2 text-sm text-gray-600"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="relative z-20 overflow-visible">
                                        <button
                                            onClick={() => setShare(!share)}
                                            type="button"
                                            title="Share"
                                            className="flex items-center p-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                id="Outline"
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5 fill-gray-800 hover:fill-gray-700"
                                            >
                                                <path d="M19.333,14.667a4.66,4.66,0,0,0-3.839,2.024L8.985,13.752a4.574,4.574,0,0,0,.005-3.488l6.5-2.954a4.66,4.66,0,1,0-.827-2.643,4.633,4.633,0,0,0,.08.786L7.833,8.593a4.668,4.668,0,1,0-.015,6.827l6.928,3.128a4.736,4.736,0,0,0-.079.785,4.667,4.667,0,1,0,4.666-4.666ZM19.333,2a2.667,2.667,0,1,1-2.666,2.667A2.669,2.669,0,0,1,19.333,2ZM4.667,14.667A2.667,2.667,0,1,1,7.333,12,2.67,2.67,0,0,1,4.667,14.667ZM19.333,22A2.667,2.667,0,1,1,22,19.333,2.669,2.669,0,0,1,19.333,22Z" />
                                            </svg>
                                        </button>
                                        {share && (
                                            <div className="absolute left-0 top-[calc(100%_+_0.5rem)] rounded-2xl bg-white shadow-2xl">
                                                <div className="flex flex-col gap-4 p-4">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <span className="text-gray-600">
                                                            Share
                                                        </span>
                                                        <button
                                                            type="button"
                                                            title="Close"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                id="Outline"
                                                                viewBox="0 0 24 24"
                                                                className="h-3 w-3 fill-gray-600"
                                                            >
                                                                <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-between gap-2">
                                                        <div className="rounded-xl bg-gray-200">
                                                            facebook
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 text-sm">
                                <span className="text-gray-600">
                                    Created by
                                </span>
                                <Link
                                    href={`/user/${data.created_by.id}`}
                                    className="font-semibold text-gray-800"
                                >
                                    {data.created_by.name}
                                </Link>
                                <span className="text-gray-600">
                                    at {data.created_at}
                                </span>
                            </div>
                            <div className="flex min-h-[10vh] items-center gap-6">
                                <p className="h-full flex-1 text-gray-600">
                                    {data.description}
                                </p>
                                <div className="h-2/3 w-0.5 rounded-full bg-gray-300" />
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="h-4 fill-gray-500"
                                        >
                                            <path d="m11 13.723a1.984 1.984 0 0 1 0-3.446v-3.277a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446v2.277a1 1 0 0 1 -2 0zm1-13.723a1 1 0 0 0 0 2 10 10 0 0 1 0 20 1 1 0 0 0 0 2 12 12 0 0 0 0-24zm-10.173 6.784a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm.173 5.216a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm2.221-8.793a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558-2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm-5.952 14.375a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z" />
                                        </svg>
                                        <div className="flex w-full justify-between gap-1">
                                            <span className="font-semibold text-gray-600">
                                                Duration:
                                            </span>
                                            <span className="text-gray-600">
                                                {data.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="Outline"
                                            viewBox="0 0 24 24"
                                            className="h-4 fill-gray-500"
                                        >
                                            <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z" />
                                        </svg>
                                        <div className="flex w-full justify-between gap-1">
                                            <span className="font-semibold text-gray-600">
                                                Origin:
                                            </span>
                                            <span className="text-gray-600">
                                                {data.origin}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="Filled"
                                            viewBox="0 0 24 24"
                                            className="h-4 fill-yellow-500"
                                        >
                                            <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                                        </svg>
                                        <div className="flex w-full justify-between gap-1">
                                            <span className="font-semibold text-gray-600">
                                                Rating:
                                            </span>
                                            <span className="text-gray-600">
                                                {data.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-2 rounded-xl bg-rose-100 p-4">
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        className="h-5 fill-rose-500"
                                    >
                                        <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                                        <path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z" />
                                        <rect
                                            x="11"
                                            y="17"
                                            width="2"
                                            height="2"
                                            rx="1"
                                        />
                                    </svg>
                                    <span className="text-lg font-semibold text-rose-500">
                                        Tips
                                    </span>
                                </div>
                                <p className="text-rose-400">{data.tips}</p>
                            </div>
                            <span className="mt-4 text-xl font-semibold">
                                History
                            </span>
                            <p className="text-gray-600">{data.history}</p>
                            <div className="mt-4 flex items-center gap-4">
                                <span className="text-xl font-semibold">
                                    Categories
                                </span>
                                <ul className="flex gap-2">
                                    {data.categories.map((category) => (
                                        <li key={category}>
                                            <Link
                                                href={`/categories/${category.toLowerCase()}`}
                                                title={category}
                                                className="flex gap-2 rounded-lg bg-slate-200 p-2 text-sm text-gray-600 hover:bg-slate-300"
                                            >
                                                <span className="font-medium">
                                                    {category}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4 flex items-center gap-4">
                                <span className="text-xl font-semibold">
                                    Taste
                                </span>
                                <ul className="flex gap-2">
                                    {data.taste.map((taste) => (
                                        <li key={taste}>
                                            <Link
                                                href={`/tastes/${taste.toLowerCase()}`}
                                                title={taste}
                                                className="flex gap-2 rounded-lg bg-slate-200 p-2 text-sm text-gray-600 hover:bg-slate-300"
                                            >
                                                <span className="font-medium">
                                                    {taste}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <span className="mt-4 text-xl font-semibold">
                                Ingredients
                            </span>
                            <ul className="flex gap-4">
                                {data.ingredients.map((ingredient) => (
                                    <li key={ingredient.id}>
                                        <Link
                                            href={`/ingredients/${ingredient.name
                                                .toLowerCase()
                                                .replaceAll(' ', '-')}`}
                                            title={ingredient.name}
                                            className="flex gap-2 rounded-lg bg-slate-100 p-2 text-gray-600 hover:bg-slate-200"
                                        >
                                            <div className="rounded-lg bg-yellow-100 fill-yellow-500 p-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    id="Layer_1"
                                                    data-name="Layer 1"
                                                    viewBox="0 0 24 24"
                                                    className="h-8 w-8"
                                                >
                                                    <path d="M23.194,11.6a3.942,3.942,0,0,0-2.143-1.447,21.606,21.606,0,0,0,.922-3.731,3.008,3.008,0,0,0-3.4-3.392c-.126.017-.5.072-1.011.171A4.979,4.979,0,0,0,18,.968a1,1,0,1,0-2,.064,3.021,3.021,0,0,1-.289,1.4A3.894,3.894,0,0,0,15.1,1.352,4.006,4.006,0,0,0,11.5.034,3.8,3.8,0,0,0,9.5.8,3.939,3.939,0,0,0,7.233.01,3.949,3.949,0,0,0,4.348.887,4.028,4.028,0,0,0,3,3.782,4.1,4.1,0,0,0,3.73,6.248a4.951,4.951,0,0,0-1.7,4.288A3.967,3.967,0,0,0,.164,15.15a14.749,14.749,0,0,0,3.707,6.316A8.922,8.922,0,0,0,10.139,24h3.722a8.918,8.918,0,0,0,6.267-2.534,14.741,14.741,0,0,0,3.708-6.316A4,4,0,0,0,23.194,11.6ZM18.851,5.01A1.013,1.013,0,0,1,19.99,6.152,20.024,20.024,0,0,1,18.975,10H16.414l1.293-1.293a1,1,0,0,0-1.414-1.414L13.586,10H12.037a3.428,3.428,0,0,1,.976-2.9C13.44,6.669,15.077,5.5,18.851,5.01ZM5,3.849a2.026,2.026,0,0,1,.665-1.457A2.035,2.035,0,0,1,7.1,2.006a1.748,1.748,0,0,1,1.328.531A1.438,1.438,0,0,0,9.5,3.016h0a1.44,1.44,0,0,0,1.068-.482,1.64,1.64,0,0,1,1.156-.513,2.031,2.031,0,0,1,1.828.6A2.118,2.118,0,0,1,14,3.985c0,.065,0,.207,0,.207a6.446,6.446,0,0,0-3.228,2.563,4.916,4.916,0,0,0-5.284-1.5A2.064,2.064,0,0,1,5,3.849ZM4,10a3,3,0,0,1,6,0H4Zm17.916,4.589a12.919,12.919,0,0,1-3.2,5.46A6.9,6.9,0,0,1,13.861,22H10.139a6.909,6.909,0,0,1-4.857-1.951,12.917,12.917,0,0,1-3.2-5.46A2.019,2.019,0,0,1,2.406,12.8,1.978,1.978,0,0,1,4,12H20a1.978,1.978,0,0,1,1.6.8A2.019,2.019,0,0,1,21.916,14.589Z" />
                                                </svg>
                                            </div>
                                            <div className="mr-1 flex flex-col gap-1">
                                                <span className="text-lg font-medium">
                                                    {ingredient.name}
                                                </span>
                                                <span className="text-sm font-medium text-gray-400">
                                                    {ingredient.quantity}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <span className="mt-4 text-xl font-semibold">
                                Instructions
                            </span>
                            <ul className="flex list-inside list-decimal flex-col gap-4">
                                {data.instructions.map((instruction) => (
                                    <li
                                        key={instruction}
                                        className="text-gray-600"
                                    >
                                        {instruction}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
