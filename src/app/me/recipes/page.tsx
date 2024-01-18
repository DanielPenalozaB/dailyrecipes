'use client';

import { Navbar, RecipeCard } from '@/components';
import { Recipe } from '@/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Recipes() {
    const crumb = usePathname().split('/').pop();

    const [recipes, setRecipes] = useState<Recipe[] | string>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/recipes');

                const data = await response.json();

                console.log(data);

                if (data.length > 0) {
                    setRecipes(data);
                } else {
                    setRecipes('THERE_ARE_NO_RECIPES');
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <>
            <Navbar labels={false} />
            <div className="mx-auto flex h-full max-w-4xl gap-8">
                <aside className="h-full">
                    <ul className="flex flex-col gap-4 p-4 text-sm">
                        <li>
                            <Link
                                href={'/me'}
                                className={`flex items-center gap-3 ease-out duration-200 ${
                                    crumb === 'me'
                                        ? 'text-rose-500'
                                        : 'text-gray-800 hover:text-rose-500'
                                }`}
                            >
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/me/security'}
                                className={`flex items-center gap-3 ease-out duration-200 ${
                                    crumb === 'security'
                                        ? 'text-rose-500'
                                        : 'text-gray-800 hover:text-rose-500'
                                }`}
                            >
                                <div className="justi flex h-6 w-6 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Security</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/me/notifications'}
                                className={`flex items-center gap-3 ease-out duration-200 ${
                                    crumb === 'notifications'
                                        ? 'text-rose-500'
                                        : 'text-gray-800 hover:text-rose-500'
                                }`}
                            >
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                        ></path>
                                    </svg>
                                </div>
                                <span>Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/me/recipes'}
                                className={`flex items-center gap-3 ease-out duration-200 ${
                                    crumb === 'recipes'
                                        ? 'text-rose-500'
                                        : 'text-gray-800 hover:text-rose-500'
                                }`}
                            >
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 min-h-5 w-5 min-w-5"
                                    >
                                        <path d="M23,19V17A11.01,11.01,0,0,0,13,6.051V4.723a2,2,0,1,0-2,0V6.051A11.01,11.01,0,0,0,1,17v2a1,1,0,0,0,0,2H23A1,1,0,0,0,23,19ZM3,17C3.473,5.066,20.531,5.075,21,17v2H3Z"></path>
                                    </svg>
                                </div>
                                <span>Recipes</span>
                            </Link>
                        </li>
                    </ul>
                </aside>
                <main className="flex flex-1 flex-col gap-4 p-4">
                    <div className="flex flex-col gap-10">
                        <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                            Recipes
                        </h2>
                    </div>
                    <div className="mt-12 flex flex-col items-center gap-6">
                        {typeof recipes !== 'string' ? (
                            recipes.length > 0 ? (
                                recipes.map((recipe) => (
                                    <RecipeCard key={recipe.id} data={recipe} />
                                ))
                            ) : (
                                <>
                                    <div className="h-36 w-full animate-pulse rounded-2xl bg-gray-300" />
                                    <div className="h-36 w-full animate-pulse rounded-2xl bg-gray-300" />
                                    <div className="h-36 w-full animate-pulse rounded-2xl bg-gray-300" />
                                    <div className="h-36 w-full animate-pulse rounded-2xl bg-gray-300" />
                                    <div className="h-36 w-full animate-pulse rounded-2xl bg-gray-300" />
                                </>
                            )
                        ) : (
                            <a
                                href="/me/recipes/create"
                                className="group flex h-36 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl p-4 outline-dashed outline-2 outline-gray-300 duration-200 ease-out hover:outline-rose-400"
                            >
                                <div className="flex gap-4 text-gray-600 duration-300 group-hover:scale-105 group-hover:text-rose-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path d="M9,4H7V0H9Zm4-4H11V4h2ZM5,0H3V4H5ZM24,18c0,5.221-9.4,6-15,6A81.716,81.716,0,0,1,.835,22.986L0,22.847V16A9.01,9.01,0,0,1,9,7a18.144,18.144,0,0,1,2.409.164A17.517,17.517,0,0,1,17.091,6l.434-.014.538.537,1.716-1.715a1.5,1.5,0,1,1,2.063-.65A1.485,1.485,0,0,1,22.5,4a1.5,1.5,0,1,1-1.307,2.222L19.477,7.937l.538.538L20,8.909c-.006.19-.04.9-.164,1.833C22.442,12.856,24,15.548,24,18ZM10,12.312a3.667,3.667,0,0,0,1.08,2.608,3.777,3.777,0,0,0,5.215,0c1.145-1.146,1.577-4.153,1.683-5.653L16.733,8.022c-1.5.106-4.507.537-5.653,1.683A3.667,3.667,0,0,0,10,12.312ZM22,18a7.516,7.516,0,0,0-2.613-4.988,7.543,7.543,0,0,1-1.678,3.322A5.678,5.678,0,0,1,9.081,9,7.075,7.075,0,0,0,2,16v5.149A68.5,68.5,0,0,0,9,22C15,22,22,20.953,22,18Z" />
                                    </svg>
                                    <span className="text-lg font-medium">
                                        Let&apos;s cook something new...
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Add some recipes to get started with{' '}
                                    <span className="text-rose-500">
                                        Daily Recipes
                                    </span>
                                </p>
                            </a>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
