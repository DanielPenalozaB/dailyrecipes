import { isNumberOrLetter } from '@/utils';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

const NUMBER_OF_DIGITS = 6;

interface OtpInputInterface {
    otp: string[];
    setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function OtpInput({ otp, setOtp }: OtpInputInterface) {
    const otpBoxReference = useRef<HTMLInputElement[]>([]);

    /**
     * Updates the OTP value at the specified index and sets the new OTP array.
     *
     * @param {string} value - The new value to update the OTP array with.
     * @param {number} index - The index of the OTP array to update.
     * @return {void} This function does not return anything.
     */
    function handleChange(value: string, index: number) {
        let newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);

        if (value && index < NUMBER_OF_DIGITS - 1) {
            otpBoxReference.current[index + 1].focus();
        }
    }

    /**
     * Handles the backspace and enter key events for the OTP input boxes.
     *
     * @param {KeyboardEvent<HTMLInputElement>} e - The keyboard event object.
     * @param {number} index - The index of the current input box.
     */
    function handleBackspaceAndEnter(
        e: KeyboardEvent<HTMLInputElement>,
        index: number
    ) {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            otpBoxReference.current[index - 1].focus();
        }

        if (
            e.key === 'Enter' &&
            e.currentTarget.value &&
            index < NUMBER_OF_DIGITS - 1
        ) {
            otpBoxReference.current[index + 1].focus();
        }

        if (
            isNumberOrLetter(e.key, /^[0-9A-Za-z]$/) &&
            e.currentTarget.value &&
            index < NUMBER_OF_DIGITS - 1
        ) {
            otpBoxReference.current[index + 1].focus();
            handleChange(e.key, index + 1);
        }
    }

    return (
        <article className="w-full">
            <p className="mb-4 text-base font-medium text-gray-700">
                Verification code
            </p>
            <div className="flex items-center gap-4">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        value={digit}
                        maxLength={1}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleChange(e.target.value, index)
                        }
                        onKeyUp={(e: KeyboardEvent<HTMLInputElement>) =>
                            handleBackspaceAndEnter(e, index)
                        }
                        ref={(reference) =>
                            (otpBoxReference.current[index] = reference!)
                        }
                        className={`block h-auto min-h-14 min-w-10 flex-1 rounded-xl bg-white p-3 text-center outline outline-2 outline-gray-300 focus:outline-rose-500`}
                    />
                ))}
            </div>
        </article>
    );
}
