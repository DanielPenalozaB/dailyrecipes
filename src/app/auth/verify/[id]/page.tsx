'use client';

import { OTPInput } from '@/components';
import { getUser, validateOTP } from '@/services';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Verify() {
    const pathname = usePathname();
    const year = new Date().getFullYear();
    const router = useRouter();

    const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
    const [id, setId] = useState('');
    const [correctOTP, setCorrectOTP] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState('');

    const getOTP = useCallback(
        async (uuid: string) => {
            const response = await getUser(uuid);

            if (typeof response !== 'string') {
                setId(response.id);

                if (response.emailConfirmed === 1) {
                    setError('Email already confirmed');
                } else {
                    setCorrectOTP(response.otp);
                }
            } else {
                router.push('/auth');
            }
        },
        [router]
    );

    useEffect(() => {
        const UUID = pathname?.split('/').pop();

        if (UUID && UUID !== 'auth' && UUID !== 'verify') {
            getOTP(UUID);
        }
    }, [pathname, getOTP]);

    useEffect(() => {
        if (
            otp.join('') !== '' &&
            otp.join('').toLowerCase() !== correctOTP.toLowerCase()
        ) {
            setDisabled(true);
        } else {
            const hasEmpty = otp.some((digit) => digit === '');

            if (!hasEmpty) {
                setDisabled(false);
            } else {
                setDisabled(true);
            }
        }
    }, [otp, correctOTP]);

    const validateUserOTP = async () => {
        const OTP = otp.join('');

        const body = {
            id,
            otp: OTP,
        };

        try {
            const response = await fetch('/api/users/validateOTP', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const { message } = await response.json();

                switch (message) {
                    case 'Email verification failed.':
                        toast.error(
                            'Error al verificar el correo electrónico.'
                        );
                        break;

                    case 'Email verified successfully.': {
                        toast.success(
                            'Correo electrónico verificado correctamente.'
                        );
                        router.push('/auth');
                        break;
                    }

                    case 'Invalid OTP.': {
                        toast.error('Código de verificación inválido.');
                        break;
                    }

                    case 'Email already verified.': {
                        toast.error('Correo electrónico ya verificado.');
                        break;
                    }

                    case 'User not found.': {
                        toast.error('Usuario no encontrado.');
                        break;
                    }

                    case 'Invalid request. Please provide valid data.': {
                        toast.error(
                            'Solicitud inválida. Por favor, proporcione datos válidos.'
                        );
                        break;
                    }

                    case 'Internal server error. Please try again later.': {
                        toast.error(
                            'Error del servidor. Por favor, inténtelo de nuevo más tarde.'
                        );
                        break;
                    }

                    default:
                        break;
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const login = async () => router.push('/auth');

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex h-full w-full items-center justify-center">
                <div className="flex w-full flex-col gap-8 self-center bg-white p-8 sm:p-16 lg:h-auto lg:max-w-xl lg:rounded-3xl">
                    {error === '' ? (
                        <>
                            <h2 className="w-full self-center text-3xl font-semibold text-rose-500 selection:bg-slate-200 sm:text-4xl">
                                Verify your account
                            </h2>
                            <p className="text-gray-600">
                                Confirm your account registration by entering
                                the verification code emailed to you.
                            </p>
                            {correctOTP !== '' && (
                                <>
                                    <OTPInput otp={otp} setOtp={setOtp} />
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <button
                                            onClick={() => validateUserOTP()}
                                            className="text-md inline-flex w-full justify-center rounded-lg bg-rose-500 px-4 py-3 font-semibold text-white shadow-sm hover:bg-rose-400 disabled:cursor-not-allowed disabled:bg-gray-400"
                                            disabled={disabled}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    ) : error === 'Email already confirmed' ? (
                        <>
                            <h2 className="w-full self-center text-3xl font-semibold text-rose-500 selection:bg-slate-200 sm:text-4xl">
                                Email already confirmed!
                            </h2>
                            <p className="text-gray-600">
                                Your account has already been confirmed.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <button
                                    onClick={login}
                                    className="text-md inline-flex w-full justify-center rounded-lg bg-rose-500 px-4 py-3 font-semibold text-white shadow-sm"
                                >
                                    Login
                                </button>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-sm text-gray-500">
                Copyright © Daniel Peñaloza {year}.
            </span>
        </div>
    );
}
