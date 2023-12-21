export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: Ingredient[];
    instructions: string[];
    rating: number;
    duration: string;
    origin: string;
    categories: string[];
    tags: string[];
    taste: string[];
    thumbnail: string;
    images: string[];
    url: string;
    tips: string[];
    history: string;
    references: string[];
    created_at: string;
    created_by: CreatedBy;
}

export interface CreatedBy {
    id: string;
    name: string;
    email: string;
}

export interface Ingredient {
    id: ID;
    name: string;
    quantity: string;
    unit: string;
}
