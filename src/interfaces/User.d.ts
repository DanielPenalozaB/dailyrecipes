export interface User {
    id: string;
    country: Country;
    username: string;
    image?: string;
    email: string;
    isAdmin: number;
    emailConfirmed: number;
    preferredLanguage: string;
    otp: string;
}

export interface UserSessionInterface {
    username: string;
    email: string;
    image: null;
    preferredLanguage: string;
    country: string;
}