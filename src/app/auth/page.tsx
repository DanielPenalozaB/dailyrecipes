'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

export default function Auth() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [variant, setVariant] = useState<'signin' | 'signup'>('signin');

    const year = new Date().getFullYear();

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) =>
            currentVariant === 'signin' ? 'signup' : 'signin'
        );
    }, []);

    const login = useCallback(async () => {
        setDisabled(true);
        setError(null);

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

            const { message } = await response.json();

            switch (message) {
                case 'Authenticated.':
                    router.push('/');
                    toast.success('Autenticado.');
                    break;

                case 'Incorrect password.':
                    setError('Contraseña incorrecta.');
                    break;

                case 'Email not found.':
                    setError('No hay coincidencias con el email ingresado.');
                    break;

                case 'Invalid request. Please provide valid data.':
                    setError('Ocurrió un error con el formato de los datos.');
                    break;

                case 'Internal server error. Please try again later.':
                    setError('Ocurrió un error con el servidor.');
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }

        setDisabled(false);
    }, [email, password, router]);

    const register = useCallback(async () => {
        setDisabled(true);
        setError(null);

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

        setDisabled(false);
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
                                                    onKeyDown={(
                                                        e: React.KeyboardEvent<HTMLInputElement>
                                                    ) => {
                                                        if (
                                                            email !== '' &&
                                                            password !== '' &&
                                                            e.key === 'Enter'
                                                        ) {
                                                            login();
                                                        }
                                                    }}
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
                                                    onKeyDown={(
                                                        e: React.KeyboardEvent<HTMLInputElement>
                                                    ) => {
                                                        if (
                                                            email !== '' &&
                                                            password !== '' &&
                                                            e.key === 'Enter'
                                                        ) {
                                                            login();
                                                        }
                                                    }}
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
                                {disabled === false && variant === 'signin' && (
                                    <button
                                        type="button"
                                        className="self-end text-sm text-rose-500 selection:bg-slate-200 hover:text-rose-400"
                                    >
                                        Forgot password?
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={disabled}
                                    onClick={
                                        variant === 'signin' ? login : register
                                    }
                                    className="inline-flex w-full justify-center rounded-lg bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 disabled:cursor-not-allowed disabled:bg-gray-200"
                                >
                                    {disabled ? (
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="mr-2 inline h-5 w-5 animate-spin text-gray-400"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                className="fill-rose-500"
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            ></path>
                                        </svg>
                                    ) : variant === 'signin' ? (
                                        'Sign in'
                                    ) : (
                                        'Sign up'
                                    )}
                                </button>
                                {disabled === false && (
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
                                )}
                                <span className="text-sm text-rose-500">
                                    {error}
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
