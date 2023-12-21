import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Recipes',
    description: 'List of recipes',
};

export default function RecipesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
