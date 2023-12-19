'use client';

import { Navbar } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
    const [star, setStar] = useState(false);

    return (
        <>
            <Navbar />
            <div className="flex justify-center py-8">
                <div className="flex w-full max-w-5xl flex-col">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            What do you want to do cook today?
                        </h1>
                        <div className="flex items-center gap-4">
                            <input
                                type="search"
                                name="recipe"
                                id="recipe"
                                placeholder="Search"
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <button
                                type="button"
                                title="Filters"
                                className="rounded-lg bg-rose-500 p-2 hover:bg-rose-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Layer_1"
                                    viewBox="0 0 24 24"
                                    className="h-4 fill-white"
                                >
                                    <path d="m14 24a1 1 0 0 1 -.6-.2l-4-3a1 1 0 0 1 -.4-.8v-5.62l-7.016-7.893a3.9 3.9 0 0 1 2.916-6.487h14.2a3.9 3.9 0 0 1 2.913 6.488l-7.013 7.892v8.62a1 1 0 0 1 -1 1zm-3-4.5 2 1.5v-7a1 1 0 0 1 .253-.664l7.268-8.177a1.9 1.9 0 0 0 -1.421-3.159h-14.2a1.9 1.9 0 0 0 -1.421 3.158l7.269 8.178a1 1 0 0 1 .252.664z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 flex gap-8">
                        <Link href={'/recipes/burrito'} className="flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl border border-white bg-white p-4 duration-300 hover:border-gray-200">
                            <div className="h-48 w-64 overflow-hidden rounded-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Burritos"
                                    width={200}
                                    height={150}
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-2xl font-semibold text-gray-800">
                                    Burrito
                                </span>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className='text-gray-500'>Mexican</span>
                                    <div className='h-[3px] w-[3px] rounded-full bg-gray-500' />
                                    <span className='text-gray-500'>Spicy</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-2 rounded-md bg-gray-200 p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        viewBox="0 0 24 24"
                                        className="h-4 fill-gray-500"
                                    >
                                        <path d="m11 13.723a1.984 1.984 0 0 1 0-3.446v-3.277a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446v2.277a1 1 0 0 1 -2 0zm1-13.723a1 1 0 0 0 0 2 10 10 0 0 1 0 20 1 1 0 0 0 0 2 12 12 0 0 0 0-24zm-10.173 6.784a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm.173 5.216a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm2.221-8.793a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558-2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm-5.952 14.375a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z" />
                                    </svg>
                                    <span className="text-sm text-gray-500">
                                        50 min
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 rounded-md bg-gray-200 p-2">
                                    {star ? (
                                        <svg
                                            onClick={() => setStar(false)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="Filled"
                                            viewBox="0 0 24 24"
                                            className="h-4 fill-yellow-500"
                                        >
                                            <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            onClick={() => setStar(true)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="Outline"
                                            viewBox="0 0 24 24"
                                            className="h-4 fill-gray-400"
                                        >
                                            <path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z" />
                                        </svg>
                                    )}
                                    <span className="text-sm text-gray-500">
                                        4 (10)
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
