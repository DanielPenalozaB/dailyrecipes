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
                            <div className="group flex h-36 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl p-4 outline-dashed outline-2 outline-gray-300 duration-200 ease-out hover:outline-rose-400">
                                <div className="flex gap-4 text-gray-600 duration-300 group-hover:scale-105 group-hover:text-rose-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path d="M9,5.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Zm15-.5v6c0,2.76-2.24,5-5,5H10c-2.76,0-5-2.24-5-5V5C5,2.24,7.24,0,10,0h9c2.76,0,5,2.24,5,5ZM7,11c0,.77,.29,1.47,.77,2.01l5.24-5.24c.98-.98,2.69-.98,3.67,0l1.04,1.04c.23,.23,.62,.23,.85,0l3.43-3.43v-.38c0-1.65-1.35-3-3-3H10c-1.65,0-3,1.35-3,3v6Zm15,0v-2.79l-2.02,2.02c-.98,.98-2.69,.98-3.67,0l-1.04-1.04c-.23-.23-.61-.23-.85,0l-4.79,4.79c.12,.02,.24,.02,.37,.02h9c1.65,0,3-1.35,3-3Zm-3.91,7.04c-.53-.15-1.08,.17-1.23,.7l-.29,1.06c-.21,.77-.71,1.42-1.41,1.81-.7,.4-1.51,.5-2.28,.29l-8.68-2.38c-1.6-.44-2.54-2.09-2.1-3.69l.96-3.56c.14-.53-.17-1.08-.7-1.23-.53-.14-1.08,.17-1.23,.7L.18,15.29c-.73,2.66,.84,5.42,3.5,6.15l8.68,2.38c.44,.12,.89,.18,1.33,.18,.86,0,1.7-.22,2.47-.66,1.16-.66,1.99-1.73,2.35-3.02l.29-1.06c.15-.53-.17-1.08-.7-1.23Z" />
                                    </svg>
                                    <span className="text-lg font-medium">
                                        Add an image
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Only JPG, PNG and WEBP files are
                                    accepted
                                </p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
