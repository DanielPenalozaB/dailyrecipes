'use client';

import { Navbar } from '@/components';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { RECIPES } from '@/data';
import { Recipe } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BASE_URL } from '@/constants';
import { useOutsideClick } from '@/hooks';

export default function Recipe({ params }: { params: { id: string } }) {
    const [data, setData] = useState<Recipe | undefined>(undefined);
    const [share, setShare] = useState(false);
    const [copied, setCopied] = useState(false);
    const URL = BASE_URL + usePathname();

    const title = `Recipe ${params.id}`;

    useEffect(() => {
        const RECIPE = RECIPES.find((recipe) => recipe.url === params.id);
        setData(RECIPE);
    }, [params.id]);

    const shareRef = useOutsideClick(() => setShare(false));

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <section className="flex justify-center py-8">
                <div className="flex w-full max-w-5xl flex-col gap-8">
                    {data ? (
                        <>
                            <div className="relative flex h-[30vh] w-full items-center border border-white">
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-white/60 to-white" />
                                <div className="flex h-full w-full items-center justify-center overflow-hidden sm:rounded-t-2xl">
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
                                <div className="absolute bottom-4 left-6 flex flex-col gap-4 sm:flex-row">
                                    <h1 className="text-3xl font-semibold text-gray-800">
                                        {data.title}
                                    </h1>
                                    <div className="flex gap-4">
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
                                                <div
                                                    ref={shareRef}
                                                    className="absolute left-0 top-[calc(100%_+_0.5rem)] rounded-2xl bg-white shadow-2xl"
                                                >
                                                    <div className="flex flex-col gap-4 p-4">
                                                        <div className="flex items-center justify-between gap-4">
                                                            <span className="font-medium text-gray-600">
                                                                Share recipe
                                                            </span>
                                                            <button
                                                                onClick={() =>
                                                                    setShare(
                                                                        false
                                                                    )
                                                                }
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
                                                        <div className="flex justify-between gap-4">
                                                            <div className="flex flex-col items-center gap-2">
                                                                <button
                                                                    type="button"
                                                                    title="Facebook"
                                                                    className="h-12 w-12 max-w-12 rounded-full bg-gray-200 p-3 hover:bg-gray-300"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 16 16"
                                                                        id="facebook"
                                                                        className="h-6 w-6 fill-gray-600"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                                                                            clipRule="evenodd"
                                                                        ></path>
                                                                    </svg>
                                                                </button>
                                                                <span className="text-sm text-gray-500">
                                                                    Facebook
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-col items-center gap-2">
                                                                <button
                                                                    type="button"
                                                                    title="Instagram"
                                                                    className="h-12 w-12 max-w-12 rounded-full bg-gray-200 p-3 hover:bg-gray-300"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 2476 2476"
                                                                        id="instagram"
                                                                        className="h-6 w-6 fill-gray-600"
                                                                    >
                                                                        <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                                                                    </svg>
                                                                </button>
                                                                <span className="text-sm text-gray-500">
                                                                    Instagram
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-col items-center gap-2">
                                                                <button
                                                                    type="button"
                                                                    title="Twitter"
                                                                    className="rounded-full bg-gray-200 p-3 hover:bg-gray-300"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 30 30"
                                                                        className="h-6 w-6 fill-gray-600"
                                                                    >
                                                                        <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                                                                    </svg>
                                                                </button>
                                                                <span className="text-sm text-gray-500">
                                                                    Twitter
                                                                </span>
                                                            </div>
                                                            <div className="flex flex-col items-center gap-2">
                                                                <button
                                                                    type="button"
                                                                    title="YouTube"
                                                                    className="rounded-full bg-gray-200 p-3 hover:bg-gray-300"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        x="0px"
                                                                        y="0px"
                                                                        viewBox="0 0 30 30"
                                                                        className="h-6 w-6 fill-gray-600"
                                                                    >
                                                                        <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                                                                    </svg>
                                                                </button>
                                                                <span className="text-sm text-gray-500">
                                                                    WhatsApp
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="text-sm text-gray-600">
                                                            Page link
                                                        </span>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="text"
                                                                name="copy-url"
                                                                id="copy-url"
                                                                placeholder="recipes.juanpenaloza.com/recipes"
                                                                readOnly
                                                                defaultValue={URL.replaceAll(
                                                                    'recipes.juanpenaloza.com/recipes',
                                                                    '...'
                                                                )}
                                                                className={`block w-full rounded-l-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ${
                                                                    copied
                                                                        ? 'ring-rose-300'
                                                                        : 'ring-gray-300'
                                                                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                                            />
                                                            <button
                                                                onClick={() => {
                                                                    navigator.clipboard.writeText(
                                                                        URL
                                                                    );
                                                                    setCopied(
                                                                        true
                                                                    );
                                                                }}
                                                                type="button"
                                                                title="Copy URL"
                                                                className={`h-9 min-h-[2.25rem] w-9 min-w-[2.25rem] rounded-r-md border border-l-0 ${
                                                                    copied
                                                                        ? 'bg-rose-200 hover:bg-rose-300 fill-rose-600 border-rose-300'
                                                                        : 'bg-gray-200 hover:bg-gray-300 fill-gray-600 border-gray-300'
                                                                } p-2`}
                                                            >
                                                                {copied ? (
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        id="Outline"
                                                                        viewBox="0 0 24 24"
                                                                        className="h-4 w-4 fill-inherit"
                                                                    >
                                                                        <path d="M22.319,4.431,8.5,18.249a1,1,0,0,1-1.417,0L1.739,12.9a1,1,0,0,0-1.417,0h0a1,1,0,0,0,0,1.417l5.346,5.345a3.008,3.008,0,0,0,4.25,0L23.736,5.847a1,1,0,0,0,0-1.416h0A1,1,0,0,0,22.319,4.431Z" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        id="Layer_1"
                                                                        data-name="Layer 1"
                                                                        viewBox="0 0 24 24"
                                                                        className="h-4 w-4 fill-inherit"
                                                                    >
                                                                        <path d="M7.835,16.17c-.23-.23-.446-.482-.641-.748-.325-.446-.227-1.072,.22-1.397,.446-.325,1.071-.227,1.397,.219,.129,.178,.274,.349,.437,.511,.803,.803,1.87,1.245,3.005,1.245s2.203-.442,3.005-1.245l5.5-5.5c1.657-1.657,1.657-4.354,0-6.011s-4.354-1.657-6.011,0l-1.058,1.058c-.391,.391-1.023,.391-1.414,0s-.391-1.023,0-1.414l1.058-1.058c2.437-2.438,6.402-2.438,8.839,0,2.437,2.437,2.437,6.402,0,8.839l-5.5,5.5c-1.18,1.181-2.75,1.831-4.419,1.831s-3.239-.65-4.418-1.83Zm-1.582,7.83c1.67,0,3.239-.65,4.419-1.831l1.058-1.058c.391-.39,.391-1.023,0-1.414-.39-.391-1.023-.39-1.414,0l-1.059,1.058c-.803,.803-1.87,1.245-3.005,1.245s-2.202-.442-3.005-1.245-1.245-1.87-1.245-3.005,.442-2.203,1.245-3.005l5.5-5.5c.803-.803,1.87-1.245,3.005-1.245s2.203,.442,3.005,1.245c.16,.161,.306,.332,.436,.51,.324,.447,.949,.547,1.397,.221,.447-.325,.546-.95,.221-1.397-.19-.262-.405-.513-.639-.747-1.181-1.182-2.751-1.832-4.42-1.832s-3.239,.65-4.419,1.831L1.834,13.331C.653,14.511,.003,16.081,.003,17.75c0,1.669,.65,3.239,1.831,4.419,1.18,1.181,2.749,1.831,4.419,1.831Z" />
                                                                    </svg>
                                                                )}
                                                            </button>
                                                        </div>
                                                        {copied && (
                                                            <span className="text-sm text-rose-500">
                                                                URL copied!
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 px-2 text-sm">
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
                            <div className="flex min-h-[10vh] items-center gap-6 px-2">
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
                            <span className="mt-4 px-2 text-xl font-semibold">
                                History
                            </span>
                            <p className="px-2 text-gray-600">{data.history}</p>
                            <div className="mt-4 flex items-center gap-4 px-2">
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
                            <div className="mt-4 flex items-center gap-4 px-2">
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
                            <span className="mt-4 px-2 text-xl font-semibold">
                                Ingredients
                            </span>
                            <ul className="grid grid-cols-2 flex-wrap gap-4 px-2 sm:flex">
                                {data.ingredients.map((ingredient) => (
                                    <li key={ingredient.id}>
                                        <Link
                                            href={`/ingredients/${ingredient.name
                                                .toLowerCase()
                                                .replaceAll(' ', '-')}`}
                                            title={ingredient.name}
                                            className="flex gap-2 rounded-lg bg-slate-100 p-2 text-gray-600 hover:bg-slate-200"
                                        >
                                            <div className="flex items-center justify-center rounded-lg bg-yellow-100 fill-yellow-500 p-2">
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
                                            <div className="mr-1 flex flex-col gap-1 truncate">
                                                <span className="truncate text-lg font-medium">
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
                            <span className="mt-4 px-2 text-xl font-semibold">
                                Instructions
                            </span>
                            <ul className="flex list-inside list-decimal flex-col gap-4 px-2">
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
                    ) : (
                        <>
                            <div className="h-[30vh] w-full animate-pulse rounded-2xl bg-gray-300" />
                            <div className="flex gap-2 px-2">
                                <div className="h-5 w-16 animate-pulse rounded-md bg-gray-300" />
                                <div className="h-5 w-16 animate-pulse rounded-md bg-gray-300" />
                                <div className="h-5 w-40 animate-pulse rounded-md bg-gray-300" />
                            </div>
                            <div className="flex min-h-[10vh] min-w-full items-center gap-6 px-2">
                                <div className="h-full flex-1 animate-pulse rounded-md bg-gray-300" />
                                <div className="h-2/3 w-0.5 animate-pulse rounded-full bg-gray-300" />
                                <div className="flex w-40 flex-col gap-2">
                                    <div className="h-6 animate-pulse rounded-md bg-gray-300" />
                                    <div className="h-6 animate-pulse rounded-md bg-gray-300" />
                                    <div className="h-6 animate-pulse rounded-md bg-gray-300" />
                                </div>
                            </div>
                            <div className="mt-4 h-24 animate-pulse rounded-xl bg-gray-300 px-2" />
                            <div className="mt-4 h-7 w-28 animate-pulse rounded-md bg-gray-300 px-2" />
                            <div className="mt-4 h-7 animate-pulse rounded-md bg-gray-300 px-2" />
                            <div className="flex items-center gap-4 px-2">
                                <div className="h-7 w-28 animate-pulse rounded-md bg-gray-300" />
                                <div className="flex gap-2">
                                    <div className="h-9 w-16 animate-pulse rounded-md bg-gray-300" />
                                    <div className="h-9 w-16 animate-pulse rounded-md bg-gray-300" />
                                    <div className="h-9 w-16 animate-pulse rounded-md bg-gray-300" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-2">
                                <div className="h-7 w-16 animate-pulse rounded-md bg-gray-300" />
                                <div className="flex gap-2">
                                    <div className="h-9 w-16 animate-pulse rounded-md bg-gray-300" />
                                    <div className="h-9 w-16 animate-pulse rounded-md bg-gray-300" />
                                </div>
                            </div>
                            <div className="mt-4 h-7 w-28 animate-pulse rounded-md bg-gray-300 px-2" />
                            <div className="flex gap-4 px-2">
                                <div className="h-16 w-52 animate-pulse rounded-lg bg-gray-300" />
                                <div className="h-16 w-32 animate-pulse rounded-lg bg-gray-300" />
                                <div className="h-16 w-40 animate-pulse rounded-lg bg-gray-300" />
                            </div>
                            <div className="mt-4 h-7 w-28 animate-pulse rounded-md bg-gray-300 px-2" />
                            <div className="flex gap-2 px-2">
                                <div className="h-6 w-6 animate-pulse rounded-lg bg-gray-300" />
                                <div className="h-6 w-72 animate-pulse rounded-lg bg-gray-300" />
                            </div>
                            <div className="flex gap-2 px-2">
                                <div className="h-6 w-6 animate-pulse rounded-lg bg-gray-300" />
                                <div className="h-6 w-72 animate-pulse rounded-lg bg-gray-300" />
                            </div>
                            <div className="flex gap-2 px-2">
                                <div className="h-6 w-6 animate-pulse rounded-lg bg-gray-300" />
                                <div className="h-6 w-72 animate-pulse rounded-lg bg-gray-300" />
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
