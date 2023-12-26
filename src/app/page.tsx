'use client';

import { Navbar, RecipeCard } from '@/components';
import { RECIPES } from '@/data';
import { Recipe } from '@/interfaces';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const refreshRecipes = useCallback(async () => {
        setRecipes(RECIPES);
    }, []);

    useEffect(() => {
        refreshRecipes();

        const interval = setInterval(() => {
            refreshRecipes();
        }, 10000);

        return () => clearInterval(interval);
    }, [refreshRecipes]);

    return (
        <>
            <Navbar />
            <div className="flex justify-center py-8">
                <div className="flex w-full max-w-7xl flex-col">
                    <div className="flex w-full flex-col items-center justify-between gap-4 px-8 sm:flex-row">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            What do you want to do cook today?
                        </h1>
                        <div className="flex items-center gap-4">
                            <input
                                type="search"
                                name="recipe"
                                id="recipe"
                                placeholder="Search"
                                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
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
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                        {recipes.length > 0 ? (
                            recipes.map((recipe) => (
                                <RecipeCard key={recipe.id} data={recipe} />
                            ))
                        ) : (
                            <>
                                <div className="h-[354px] w-[290px] animate-pulse rounded-2xl bg-gray-300" />
                                <div className="h-[354px] w-[290px] animate-pulse rounded-2xl bg-gray-300" />
                                <div className="h-[354px] w-[290px] animate-pulse rounded-2xl bg-gray-300" />
                                <div className="h-[354px] w-[290px] animate-pulse rounded-2xl bg-gray-300" />
                                <div className="h-[354px] w-[290px] animate-pulse rounded-2xl bg-gray-300" />
                                <div className="h-[354px] w-[290px] animate-pulse rounded-2xl bg-gray-300" />
                            </>
                        )}
                    </div>
                </div>
            </div>
            <footer className='flex h-[10vh] w-full justify-center bg-rose-100'></footer>
        </>
    );
}
