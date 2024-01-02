export const isNumberOrLetter = (value: string, allowedCharsRegex: RegExp) =>
    allowedCharsRegex.test(value);
