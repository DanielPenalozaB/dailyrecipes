export function getCookie(
    cookieName: string
): Record<string, unknown> | null {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());

    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');

        if (name === cookieName) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(value));
                return parsedData;
            } catch (error) {
                console.error('Error parsing cookie data:', error);
                return null;
            }
        }
    }

    return null;
}
