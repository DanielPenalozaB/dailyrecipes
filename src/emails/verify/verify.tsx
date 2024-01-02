import { BASE_URL } from '@/constants';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

interface EmailTemplateProps {
    username: string;
    id: string;
    otp: string[];
}

export function VerifyEmail({ username, id, otp }: EmailTemplateProps): string {
    return `<html>

<head></head>

<body style="margin: 0;padding: 0;">
    <div style="padding:32px 8px;background: #f3f4f6;font-family: Helvetica, sans-serif;">
        <table cellpadding="0" cellspacing="0"
            style="width:100%; margin:0 auto; max-width:540px; border-radius:30px; overflow:hidden; background-color:#ffffff;">
            <tbody>
                <tr>
                    <td style="padding: 30px;">
                        <span style="color:#1f2937;font-size:28px;font-weight:600;padding:0;text-align:center">
                            Verify your account,
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 30px;line-height: 1.5;">
                        <p style="margin:0;color: #1f2937 !important;font-size: 18px;">
                            Hello ${username},
                            <br />
                            <br />
                            Welcome to Daily Recipes We're excited to have you on board.
                            <br />
                            <br />
                            To get started, please verify your email address by clicking the link below and entering the
                            verification code:
                        </p>

                    </td>
                </tr>
                <tr>
                    <td style="padding: 30px 30px 0;">
                        <table style="border-collapse: collapse;border-spacing: 0px;width: 100%;font-size: 16px;">
                            <tbody>
                                <tr>
                                    <td align="center"
                                        style="overflow-wrap:break-word;word-break:break-word;font-family:arial,helvetica,sans-serif;padding: 0;">
                                        <div
                                            style="margin:0; padding: 15px 0; width: 40px; border: 1.5px solid #9ca3af;border-radius: 20px;color: #1f2937;text-align: center;">
                                            ${otp[0]}
                                        </div>
                                    </td>
                                    <td align="center"
                                        style="overflow-wrap:break-word;word-break:break-word;font-family:arial,helvetica,sans-serif;padding: 0;">
                                        <div
                                            style="margin:0; padding: 15px 0; width: 40px; border: 1.5px solid #9ca3af;border-radius: 20px;color: #1f2937;text-align: center;">
                                            ${otp[1]}
                                        </div>
                                    </td>
                                    <td align="center"
                                        style="overflow-wrap:break-word;word-break:break-word;font-family:arial,helvetica,sans-serif;padding: 0;">
                                        <div
                                            style="margin:0; padding: 15px 0; width: 40px; border: 1.5px solid #9ca3af;border-radius: 20px;color: #1f2937;text-align: center;">
                                            ${otp[2]}
                                        </div>
                                    </td>
                                    <td align="center"
                                        style="overflow-wrap:break-word;word-break:break-word;font-family:arial,helvetica,sans-serif;padding: 0;">
                                        <div
                                            style="margin:0; padding: 15px 0; width: 40px; border: 1.5px solid #9ca3af;border-radius: 20px;color: #1f2937;text-align: center;">
                                            ${otp[3]}
                                        </div>
                                    </td>
                                    <td align="center"
                                        style="overflow-wrap:break-word;word-break:break-word;font-family:arial,helvetica,sans-serif;padding: 0;">
                                        <div
                                            style="margin:0; padding: 15px 0; width: 40px; border: 1.5px solid #9ca3af;border-radius: 20px;color: #1f2937;text-align: center;">
                                            ${otp[4]}
                                        </div>
                                    </td>
                                    <td align="center"
                                        style="overflow-wrap:break-word;word-break:break-word;font-family:arial,helvetica,sans-serif;padding: 0;">
                                        <div
                                            style="margin:0; padding: 15px 0; width: 40px; border: 1.5px solid #9ca3af;border-radius: 20px;color: #1f2937;text-align: center;">
                                            ${otp[5]}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:30px">
                        <span style="display:block;background-color:#f43f5e;border:0px;border-radius:30px;width:auto">
                            <a rel="noopener" style="display:block;width:auto;padding:15px 20px 15px 20px;background-color:#f43f5e;font-weight:bold;border-radius:30px;font-size:22px;font-style:normal;line-height:120%;color:#ffffff;text-align:center;text-decoration: none;"
                                target="_blank"
                                href="https://dailyrecipes.danielpenalozab.com/auth/verify/${id}">Verify</a>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 30px 30px;line-height: 1.5;">
                        <p style="margin:0;color: #6b7280;font-size: 16px;">
                            Thank you for joining Daily Recipes! We look forward to providing you with a great
                            experience.
                            <br />
                            <br />
                            Best regards, The Daily Recipes Team.
                        </p>

                    </td>
                </tr>
            </tbody>
        </table>
        <table
            style="width:100%; margin:0 auto; max-width:540px;border-collapse: collapse;border-spacing: 0px;border: 0px;">
            <tbody>
                <tr>
                    <td style="padding: 30px 30px 0;color: #1f2937;font-size: 13px;text-align: center;">
                        <a href="http://dailyrecipes.danielpenalozab.com/privacy-policy" target="_blank"
                            rel="noopener noreferrer" style="color: inherit;text-decoration: none;">
                            Privacy Policy
                        </a>
                        <span style="margin: 0 10px;">
                            •
                        </span>
                        <a href="http://dailyrecipes.danielpenalozab.com/privacy-policy" target="_blank"
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
