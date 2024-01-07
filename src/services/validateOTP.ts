export async function validateOTP({ id, otp }: { id: string; otp: string }) {
    const PAYLOAD = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(
            `http://localhost:3000/api/users/${id}`,
            PAYLOAD
        );

        if (!response.ok) {
            const error = await response.json();

            return error.message;
        } else {
            const data = await response.json();

            return data;
        }
    } catch (error) {
        return 'Request error';
    }
}
