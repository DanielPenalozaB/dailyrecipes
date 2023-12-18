import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
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
                        <Link href={'/'} className='text-gray-500 hover:text-rose-500'>Meal plans</Link>
                    </li>
                    <li>
                        <Link href={'/recipes'} className='text-gray-500 hover:text-rose-500'>Recipes</Link>
                    </li>
                    <li>
                        <Link href={'/my-recipes'} className='text-gray-500 hover:text-rose-500'>My recipes</Link>
                    </li>
                    <li>
                        <Link href={'/ingredients'} className='text-gray-500 hover:text-rose-500'>Ingredients</Link>
                    </li>
                </ul>
            </div>
            <div className='flex gap-4'>
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
    );
}
