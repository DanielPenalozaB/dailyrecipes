export async function validateOTP({ id, otp }: { id: string; otp: string }) {
    const PAYLOAD = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, otp }),
    };

    try {
        const response = await fetch(
            "http://localhost:3000/api/users/validateOTP",
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
