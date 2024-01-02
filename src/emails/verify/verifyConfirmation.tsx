export function VerifyConfirmationEmail({ username }: { username: string }) {
    return `<html>
        <head></head>
        <body style="margin: 0;padding: 0;">
            <div style="padding:32px 8px;background: #f3f4f6;font-family: Helvetica, sans-serif;">
                <table cellpadding="0" cellspacing="0"
                    style="width:100%; margin:0 auto; max-width:600px; border-radius:30px; overflow:hidden; background-color:#ffffff;">
                    <tbody>
                        <tr>
                            <td style="padding: 30px;">
                                <span style="color:#1f2937;font-size:28px;font-weight:600;padding:0;text-align:center">
                                    Your Account is Verified!
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 30px;line-height: 1.5;">
                                <p style="margin:0;color: #1f2937 !important;font-size: 18px;">
                                    Hello ${username},
                                    <br />
                                    <br />
                                    Exciting news! Your account has been successfully <strong>verified,</strong> and you are now
                                    officially a
                                    part of the <a href="https://dailyrecipes.danielpenalozab.com" target="_blank"
                                        rel="noopener noreferrer" style="color: #f43f5e;">Daily Recipes</a> community!
                                    🌮🍰
                                    <br />
                                    <br />
                                    Ready to embark on your culinary journey? Log in now and start cooking up something
                                    <strong>extraordinary!</strong>
                                    <br />
                                    <br />
                                    If you have any questions, need assistance, or want to share your feedback, our support team
                                    is here for you. Simply
                                    reach out to us at <a href="mailto:support@danielpenalozab.com"
                                        style="color: #f43f5e;text-decoration: none;">support</a>.
                                </p>
                                <hr style="margin: 30px 0 0; border-top: 1px solid #d1d5db;border-radius: 9999px;">
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 30px;line-height: 1.5;">
                                <span style="margin:0;color: #f43f5e;font-size: 24px;font-weight: 600;">
                                    Discover a world of culinary delights at your fingertips:
                                </span>
                            </td>
                        </tr>
                        <tr style="width: 100%;">
                            <td style="padding: 0 30px 30px">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style="width: 100%;">
                                                <a href="https://dailyrecipes.danielpenalozab.com" target="_blank"
                                                    rel="noopener noreferrer">
                                                    <div
                                                        style="position: relative;max-height: 250px;border-radius: 15px;overflow: hidden;">
                                                        <img src="https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                            alt="Spaghetti Bolognese" style="width: 100%;">
                                                        <div
                                                            style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgb(244,63,94);background: linear-gradient(90deg, rgba(244,63,94,1) 0%, rgba(255,255,255,0) 100%);">
                                                        </div>
                                                        <span
                                                            style="position: absolute;bottom: 15px;left: 20px;color: #ffffff; font-size: x-large; font-weight: 600;">
                                                            Explore a vast collection of mouth-watering recipes.
                                                        </span>
                                                    </div>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%;padding-top: 15px;">
                                                <a href="https://dailyrecipes.danielpenalozab.com" target="_blank"
                                                    rel="noopener noreferrer">
                                                    <div
                                                        style="position: relative;max-height: 250px;border-radius: 15px;overflow: hidden;">
                                                        <img src="https://images.unsplash.com/photo-1657422779024-fea66fec80cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                            alt="Spaghetti Bolognese" style="width: 100%;max-height: 250px;">
                                                        <div
                                                            style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgb(244,63,94);background: linear-gradient(-90deg, rgba(244,63,94,1) 0%, rgba(255,255,255,0) 100%);">
                                                        </div>
                                                        <span
                                                            style="position: absolute;bottom: 15px;left: 20px;color: #ffffff; font-size: x-large; font-weight: 600;">
                                                            Create and share your own culinary masterpieces with our vibrant
                                                            community.
                                                        </span>
                                                    </div>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%;padding-top: 15px;">
                                                <a href="https://dailyrecipes.danielpenalozab.com" target="_blank"
                                                    rel="noopener noreferrer" style="width: 100%;text-decoration: none;">
                                                    <div
                                                        style="position: relative;padding: 15px 20px;max-height: 250px;border-radius: 15px;overflow: hidden;background-color: #f3f4f6;">
                                                        <span
                                                            style="color: #f43f5e; font-size: x-large; font-weight: 600;line-height: 1.5;text-decoration: none;">
                                                            Save your favorite recipes for quick access anytime, anywhere.
                                                        </span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                                                            viewBox="0 0 24 24"
                                                            style="position: absolute;top: 50%;right: 0;transform: translateY(-50%);height: 150px;width: 150px;fill: #f43f5e;opacity: 0.3;">
                                                            <path
                                                                d="M1.333,7.238C.484,5.522-1.2,1.269,1.2.15A1.949,1.949,0,0,1,3.329.573l4.96,5.3A1,1,0,1,1,6.887,7.3L2,2.08c.119,3.777,2.343,6.6,4.841,9.439a1,1,0,0,1-1.39,1.446A24.522,24.522,0,0,1,1.333,7.238ZM18.005,16.2a1.259,1.259,0,0,0-1.09-.4,8.055,8.055,0,0,1-3.458-.29.985.985,0,0,0-.981.254c-1.494,2.256,3.274,2.113,4.312,2.08l5.483,5.839a1,1,0,0,0,1.458-1.371ZM15,14a4.99,4.99,0,0,0,3.536-1.462l5.171-5.172A1,1,0,1,0,22.293,5.95l-5.171,5.172a3,3,0,0,1-3.406.576l6.991-6.991a1,1,0,1,0-1.414-1.414L12.3,10.284a3,3,0,0,1,.576-3.406L18.05,1.707A1,1,0,0,0,16.636.293L11.464,5.464a5.01,5.01,0,0,0-.635,6.293L.293,22.293a1,1,0,0,0,1.414,1.414L12.243,13.171A5,5,0,0,0,15,14Z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 0 30px 30px;line-height: 1.5;">
                                <p style="margin:0;color: #6b7280;font-size: 16px;">
                                    Thank you for choosing Daily Recipes! We're thrilled to have you on board.
                                    <br />
                                    <br />
                                    Happy cooking! Best regards, The Daily Recipes Team.
                                </p>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    style="width:100%; margin:0 auto; max-width:600px;border-collapse: collapse;border-spacing: 0px;border: 0px;">
                    <tbody>
                        <tr>
                            <td style="padding: 30px 30px 0;color: #1f2937;font-size: 13px;text-align: center;">
                                <a href="https://dailyrecipes.danielpenalozab.com/privacy-policy" target="_blank"
                                    rel="noopener noreferrer" style="color: inherit;text-decoration: none;">
                                    Privacy Policy
                                </a>
                                <span style="margin: 0 10px;">
                                    •
                                </span>
                                <a href="https://dailyrecipes.danielpenalozab.com/privacy-policy" target="_blank"
                                    rel="noopener noreferrer" style="color: inherit;text-decoration: none;">
                                    Unsubscribe
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 30px 30px 0;color: #1f2937;font-size: 14px;text-align: center;">
                                Copyright © 2022 Daily Recipes
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    </html>`;
}
