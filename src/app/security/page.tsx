'use client';

import { Navbar } from '@/components';
import { COUNTRIES, LANGUAGES } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Security() {
    const crumb = usePathname().split('/').pop();

    const [langMenu, setLangMenu] = useState(false);
    const [counMenu, setCounMenu] = useState(false);

    return (
        <>
            <Navbar labels={false} />
            <div className="mx-auto flex h-full max-w-4xl gap-8">
                <aside className="h-full">
                    <ul className="flex flex-col gap-4 p-4 text-sm">
                        <li>
                            <Link
                                href={'/account'}
                                className={`flex items-center gap-3 ease-out duration-200 ${
                                    crumb === 'account'
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
                                href={'/security'}
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
                                href={'/notifications'}
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
                                href={'/recipes'}
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
                <main className="flex flex-1 flex-col gap-16 p-4">
                    <div className="flex flex-col gap-10">
                        <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                            Security
                        </h2>

                        <button
                            type="button"
                            title="Change password"
                            className="flex w-fit items-center gap-2 rounded-lg bg-rose-500 px-3 py-2 text-white hover:bg-red-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                />
                            </svg>
                            Change password
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
}
