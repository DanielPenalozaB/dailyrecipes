'use client';

import { Navbar } from '@/components';
import { COUNTRIES, LANGUAGES } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Account() {
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
                            Account
                        </h2>
                        <div className="flex items-center gap-4">
                            <div
                                title="Change picture"
                                className="relative h-24 w-24 cursor-pointer overflow-hidden rounded-xl before:absolute before:left-0 before:top-0 before:hidden before:h-24 before:w-24 before:bg-pink-500/30 before:hover:block"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Profile"
                                    width={96}
                                    height={96}
                                    loading="lazy"
                                    className="h-full w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <button
                                    type="button"
                                    title="Change picture"
                                    className="w-fit rounded-lg bg-rose-500 px-3 py-2 text-sm text-white hover:bg-red-400"
                                >
                                    Change picture
                                </button>
                                <span className="text-sm text-gray-500">
                                    JPG, GIF or PNG. 1MB max.
                                </span>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-2 gap-8">
                            <label
                                htmlFor="firstName"
                                className="block font-medium text-gray-700"
                            >
                                Name
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="mt-1 block w-full rounded-md px-3 py-1.5 outline-none ring-1 ring-inset ring-gray-300 focus:border-rose-500 focus:ring-rose-500"
                                />
                            </label>
                            <label
                                htmlFor="email"
                                className="block font-medium text-gray-700"
                            >
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md px-3 py-1.5 outline-none ring-1 ring-inset ring-gray-300 focus:border-rose-500 focus:ring-rose-500"
                                />
                            </label>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold leading-7 text-gray-900">
                                Language
                            </h3>
                            <hr className="border-gray-300" />
                            <div className="flex flex-col gap-4">
                                <label
                                    htmlFor="firstName"
                                    className="flex flex-col items-start gap-2 font-medium text-gray-700"
                                >
                                    Preferred language
                                </label>
                                <div className="relative w-fit">
                                    <button
                                        onClick={() =>
                                            setLangMenu((langMenu) => !langMenu)
                                        }
                                        onBlur={() => setLangMenu(false)}
                                        type="button"
                                        title="Change language"
                                        className="flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-gray-200 p-2 pr-3 text-sm font-normal text-gray-800 hover:bg-gray-100"
                                    >
                                        <Image
                                            src="/images/languages/usa.png"
                                            alt="usa"
                                            width={24}
                                            height={24}
                                            loading="lazy"
                                            className="h-6 w-6 overflow-hidden rounded-full"
                                        />
                                        <span>English</span>
                                    </button>
                                    {langMenu && (
                                        <div className="absolute left-[calc(100%+1rem)] top-0">
                                            <ul className="flex flex-col gap-1 rounded-xl border border-gray-300 bg-white p-2 shadow-xl">
                                                {LANGUAGES.map((lang) => (
                                                    <li
                                                        key={lang.abbr}
                                                        title={`Choose ${lang.label}`}
                                                        className="flex cursor-pointer items-center gap-4 rounded-md p-2 text-gray-700 hover:text-rose-500"
                                                    >
                                                        <Image
                                                            src={`/images/languages/${lang.image}.png`}
                                                            alt="usa"
                                                            width={24}
                                                            height={24}
                                                            loading="lazy"
                                                            className="h-6 min-h-6 w-6 min-w-6 overflow-hidden rounded-full"
                                                        />
                                                        <span
                                                            className={`${
                                                                lang.abbr ===
                                                                'en'
                                                                    ? 'text-rose-500'
                                                                    : ''
                                                            }`}
                                                        >
                                                            {lang.label}
                                                        </span>
                                                        {lang.abbr === 'en' && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="h-6 w-6 stroke-rose-500"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                />
                                                            </svg>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label
                                    htmlFor="firstName"
                                    className="flex flex-col items-start gap-2 font-medium text-gray-700"
                                >
                                    Country
                                </label>
                                <div className="relative w-fit">
                                    <button
                                        onClick={() =>
                                            setCounMenu((counMenu) => !counMenu)
                                        }
                                        onBlur={() => setCounMenu(false)}
                                        type="button"
                                        title="Change language"
                                        className="flex w-fit items-center gap-2 rounded-full border border-gray-300 bg-gray-200 p-2 pr-3 text-sm font-normal text-gray-800 hover:bg-gray-100"
                                    >
                                        <Image
                                            src="/images/languages/usa.png"
                                            alt="usa"
                                            width={24}
                                            height={24}
                                            loading="lazy"
                                            className="h-6 w-6 overflow-hidden rounded-full"
                                        />
                                        <span>United States</span>
                                    </button>
                                    {counMenu && (
                                        <div className="absolute left-[calc(100%+1rem)] top-0">
                                            <ul className="flex flex-col gap-1 rounded-xl border border-gray-300 bg-white p-2 shadow-xl">
                                                {COUNTRIES.map((country) => (
                                                    <li
                                                        key={country.abbr}
                                                        title={`Choose ${country.label}`}
                                                        className="flex cursor-pointer items-center gap-4 rounded-md p-2 text-gray-700 hover:text-rose-500"
                                                    >
                                                        <Image
                                                            src={`/images/languages/${country.image}.png`}
                                                            alt="usa"
                                                            width={24}
                                                            height={24}
                                                            loading="lazy"
                                                            className="h-6 min-h-6 w-6 min-w-6 overflow-hidden rounded-full"
                                                        />
                                                        <span
                                                            className={`whitespace-nowrap ${
                                                                country.abbr ===
                                                                'us'
                                                                    ? 'text-rose-500'
                                                                    : ''
                                                            }`}
                                                        >
                                                            {country.label}
                                                        </span>
                                                        {country.abbr ===
                                                            'us' && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={
                                                                    1.5
                                                                }
                                                                stroke="currentColor"
                                                                className="h-6 w-6 stroke-rose-500"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                />
                                                            </svg>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button
                                type="button"
                                title="Save"
                                className="w-fit rounded-lg bg-rose-500 px-3 py-2 text-white hover:bg-red-400"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
