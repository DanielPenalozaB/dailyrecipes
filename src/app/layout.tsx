import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Daily recipes - Delicious recipes</title>
                <meta
                    name="description"
                    content="Discover a variety of delicious recipes for every occasion. From savory recipes to sweet treats, find the perfect recipe to satisfy your cravings."
                />
                <link rel="icon" href="/dailyrecipes.svg" sizes="any" />
                <meta
                    property="og:title"
                    content="Daily recipes - Delicious Recipes"
                />
                <meta
                    property="og:description"
                    content="Discover a variety of delicious recipes for every occasion. From savory meals to sweet treats, find the perfect recipe to satisfy your cravings."
                />
                <meta property="og:image" content="/dailyrecipes.svg" />
                <meta
                    property="og:url"
                    content="https://dailyrecipes.danielpenalozab.com/"
                />
                <meta property="og:type" content="website" />
                <meta
                    name="google-site-verification"
                    content="K5qumX_Dmh9WT6gGFFqYkFPZLK320ja5X6NqQsxuCas"
                />
            </head>
            <body className={inter.className}>
                {children}
                <Toaster position="bottom-right" />
                <GoogleTagManager gtmId="GTM-KGFCWLRB" />
            </body>
        </html>
    );
}
