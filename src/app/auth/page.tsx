'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

export default function Auth() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [variant, setVariant] = useState<'signin' | 'signup'>('signin');

    const year = new Date().getFullYear();

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) =>
            currentVariant === 'signin' ? 'signup' : 'signin'
        );
    }, []);

    const login = useCallback(async () => {
        try {
            const PAYLOAD = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            };

            const response = await fetch('/api/auth/login', PAYLOAD);

            const data = await response.json();

            console.log(data);

            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    }, [email, password, router]);

    const register = useCallback(async () => {
        try {
            console.log(email, password, name);
            /*await axios.post('/api/user/register/', {
                email,
                name,
                password,
            });*/

            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="relative h-screen flex-1">
                <button
                    onClick={() => router.back()}
                    title="Go back"
                    className="absolute left-4 top-4 flex items-center justify-center gap-2 fill-gray-600 text-gray-600 hover:fill-rose-500 hover:text-rose-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        className="w-6 rotate-180 fill-inherit"
                    >
                        <path d="M23.12,9.91,19.25,6a1,1,0,0,0-1.42,0h0a1,1,0,0,0,0,1.41L21.39,11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H21.45l-3.62,3.61a1,1,0,0,0,0,1.42h0a1,1,0,0,0,1.42,0l3.87-3.88A3,3,0,0,0,23.12,9.91Z" />
                    </svg>
                    <span>Go back</span>
                </button>
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex w-full flex-col self-center bg-white p-16 lg:h-auto lg:max-w-md lg:rounded-3xl">
                        <h2 className="mb-8 w-full max-w-xs self-center text-3xl font-semibold text-rose-500 selection:bg-slate-200 sm:text-4xl">
                            {variant === 'signin' ? 'Welcome back' : 'Hi there'}
                        </h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <form
                                action=""
                                className="items flex w-full max-w-xs flex-col gap-4"
                            >
                                {variant == 'signin' ? (
                                    <>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor={'email'}
                                                className="block text-sm font-medium leading-6 text-gray-700"
                                            >
                                                Email
                                            </label>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Enter your email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor={'password'}
                                                className="block text-sm font-medium leading-6 text-gray-700"
                                            >
                                                Password
                                            </label>
                                            <div>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter your password"
                                                    autoComplete="current-password"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor={'signup-email'}
                                                className="block text-sm font-medium leading-6 text-gray-700"
                                            >
                                                Email
                                            </label>
                                            <div>
                                                <input
                                                    type="email"
                                                    name="signup-email"
                                                    id="signup-email"
                                                    value={email}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Enter your email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor={'new-password'}
                                                className="block text-sm font-medium leading-6 text-gray-700"
                                            >
                                                Password
                                            </label>
                                            <div>
                                                <input
                                                    type="password"
                                                    name="new-password"
                                                    id="new-password"
                                                    value={password}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter your password"
                                                    autoComplete="new-password"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                htmlFor={'repeat-password'}
                                                className="block text-sm font-medium leading-6 text-gray-700"
                                            >
                                                Repeat password
                                            </label>
                                            <div>
                                                <input
                                                    type="password"
                                                    name="repeat-password"
                                                    id="repeat-password"
                                                    value={password}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Repeat your password"
                                                    autoComplete="new-password"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </form>
                            <div className="flex w-full max-w-xs flex-col gap-4">
                                {variant === 'signin' && (
                                    <button
                                        type="button"
                                        className="self-end text-sm text-rose-500 selection:bg-slate-200 hover:text-rose-400"
                                    >
                                        Forgot password?
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    onClick={
                                        variant === 'signin' ? login : register
                                    }
                                    className="inline-flex w-full justify-center rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 disabled:cursor-not-allowed disabled:bg-gray-400"
                                >
                                    {variant === 'signin'
                                        ? 'Sign in'
                                        : 'Sign up'}
                                </button>
                                <span className="flex gap-1 text-sm text-slate-500 selection:bg-slate-200">
                                    {variant === 'signin'
                                        ? "Don't have and account?"
                                        : 'Already have an account?'}
                                    <button
                                        className="text-sm text-rose-500 hover:text-rose-400"
                                        onClick={toggleVariant}
                                    >
                                        {variant === 'signin'
                                            ? 'Sign in'
                                            : 'Sign up'}
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-sm text-gray-500">
                    Copyright © Daniel Peñaloza {year}.
                </span>
            </div>
            <div className="hidden h-screen rounded-l-3xl py-4 lg:block">
                <Image
                    src={'/images/louis-hansel-0sYLBZjgTTw-unsplash.webp'}
                    alt="Louis hansel"
                    loading="lazy"
                    width={2048}
                    height={2988}
                    quality={1}
                    className="h-full w-auto rounded-l-5xl"
                />
            </div>
        </div>
    );
}
