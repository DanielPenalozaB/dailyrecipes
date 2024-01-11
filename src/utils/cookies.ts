/**
 * Retrieves the value of a cookie with the specified name.
 *
 * @param {string} cookieName - The name of the cookie to retrieve.
 * @return {string | null} - The value of the cookie, or null if the cookie does not exist.
 */
export function getCookie(cookieName: string): string | null {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());

    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');

        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}
