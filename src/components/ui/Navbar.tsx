import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className="flex w-full items-center justify-between border-b border-gray-300 px-52 py-8">
                <div className="flex items-center gap-12">
                    <Link href={'/'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            className="h-8 fill-rose-500"
                        >
                            <path d="M23,19V17A11.01,11.01,0,0,0,13,6.051V4.723a2,2,0,1,0-2,0V6.051A11.01,11.01,0,0,0,1,17v2a1,1,0,0,0,0,2H23A1,1,0,0,0,23,19ZM3,17C3.473,5.066,20.531,5.075,21,17v2H3Z" />
                        </svg>
                    </Link>
                    <ul className="flex gap-8">
                        <li>
                            <Link
                                href={'/'}
                                className="text-gray-500 hover:text-rose-500"
                            >
                                Meal plans
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/recipes'}
                                className="text-gray-500 hover:text-rose-500"
                            >
                                Recipes
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/my-recipes'}
                                className="text-gray-500 hover:text-rose-500"
                            >
                                My recipes
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ingredients'}
                                className="text-gray-500 hover:text-rose-500"
                            >
                                Ingredients
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button
                        type="button"
                        title="Search"
                        className="rounded-lg border border-gray-200 bg-white fill-gray-600 p-3 hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            className="h-4"
                        >
                            <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        title="User"
                        className="rounded-lg border border-gray-200 bg-white fill-gray-600 p-3 hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Outline"
                            viewBox="0 0 24 24"
                            className="h-4"
                        >
                            <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                            <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div className="flex justify-between border-b border-gray-300 px-52">
                <div className="flex w-full items-center justify-between">
                    <ul className="flex">
                        <li
                            className="cursor-pointer border-b border-rose-500 px-4 py-2 text-rose-500"
                            title="All"
                        >
                            All
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Specials"
                        >
                            Specials
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Lunch"
                        >
                            Lunch
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Dinner"
                        >
                            Dinner
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Snacks"
                        >
                            Snacks
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Breakfasts"
                        >
                            Breakfasts
                        </li>
                        <li
                            className="cursor-pointer border-b border-white px-4 py-2 text-gray-500 hover:border-rose-500 hover:text-rose-500"
                            title="Drinks"
                        >
                            Drinks
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-1/2 w-[1px] bg-gray-300" />
                    <button
                        type="button"
                        className="flex items-center gap-2 fill-gray-500 px-2 py-1 text-sm text-gray-500 hover:fill-gray-400 hover:text-gray-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            viewBox="0 0 24 24"
                            className="h-5"
                        >
                            <path d="m22.942 6.837-2.182-2.183.947-.947a1 1 0 1 0 -1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 0 0 -5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 0 0 -5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-.947.947a1 1 0 1 0 1.414 1.414l.947-.947 2.183 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105l-2.182-2.182 5.9-5.895 2.182 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105zm-11.942 13.553a1.6 1.6 0 0 1 -.472 1.138 1.647 1.647 0 0 1 -2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779a1.6 1.6 0 0 1 .472 1.139zm10.528-9.862a1.647 1.647 0 0 1 -2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779a1.609 1.609 0 0 1 0 2.277z" />
                        </svg>
                        Dietary
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-2 fill-gray-500 px-2 py-1 text-sm text-gray-500 hover:fill-gray-400 hover:text-gray-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            className="h-5"
                        >
                            <path d="M13,0h-2c-2.206,0-4,1.794-4,4V20c0,2.206,1.794,4,4,4h2c2.206,0,4-1.794,4-4V4c0-2.206-1.794-4-4-4Zm0,22h-2c-1.103,0-2-.897-2-2V4c0-1.103,.897-2,2-2h2c1.103,0,2,.897,2,2v1h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v2h-2c-.553,0-1,.447-1,1s.447,1,1,1h2v1c0,1.103-.897,2-2,2Z" />
                        </svg>
                        Calories
                    </button>
                    <div className="flex gap-1 text-sm">
                        <span className="whitespace-nowrap text-gray-500">
                            Sort by:
                        </span>
                        <button className="flex cursor-pointer gap-1 fill-gray-800 text-gray-800 hover:fill-gray-600 hover:text-gray-600">
                            <span className="font-semibold">Recommended</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Outline"
                                viewBox="0 0 24 24"
                                className="h-5"
                            >
                                <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            title="List"
                            className="stroke-gray-600 hover:stroke-gray-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                data-slot="icon"
                                className="h-5 stroke-inherit"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            title="Cards"
                            className="stroke-gray-600 hover:stroke-gray-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                data-slot="icon"
                                className="h-5 stroke-inherit"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
