export function generateOTP(): string {
    const otpLength = 6;
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // You can customize this string
    const charactersLength = characters.length;

    const otp = Array.from({ length: otpLength }, () =>
        characters.charAt(Math.floor(Math.random() * charactersLength))
    );

    return otp.join('');
}
