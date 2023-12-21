'use client';

import Head from 'next/head';

export default function Recipe({ params }: { params: { id: string } }) {
    const title = `Recipe ${params.id}`;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section>Recipe {params.id}</section>
        </>
    );
}
