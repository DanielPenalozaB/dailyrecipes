export interface User {
    id: string;
    Country: Country;
    countryId: string;
    createdAt: Date;
    modifiedAt: Date;
    username: string;
    image?: string;
    email: string;
    password: string;
    isAdmin: number;
    emailConfirmed: number;
    preferredLanguage: string;
}
