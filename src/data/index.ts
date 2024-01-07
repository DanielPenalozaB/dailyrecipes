const RECIPES = [
    {
        id: 'recipe1',
        title: 'Spaghetti Bolognese',
        description: 'Classic Italian pasta dish with a rich meat sauce.',
        ingredients: [
            {
                id: 'ingredient1',
                name: 'Spaghetti',
                quantity: '200g',
                unit: 'grams',
            },
            {
                id: 'ingredient2',
                name: 'Ground Beef',
                quantity: '500g',
                unit: 'grams',
            },
        ],
        instructions: [
            'Boil spaghetti until al dente.',
            'Cook ground beef until brown.',
        ],
        rating: 4.5,
        duration: '30 min',
        origin: 'Italy',
        categories: ['Dinner', 'Italian'],
        taste: ['Spicy', 'Sweet'],
        tags: ['Pasta', 'Meat'],
        thumbnail:
            'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            'https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        url: 'spaghetti-bolognese',
        tips: ['Use fresh herbs for better flavor.'],
        history: 'Spaghetti Bolognese originated in Bologna, Italy.',
        references: ['https://en.wikipedia.org/wiki/Bolognese_sauce'],
        created_at: '2023-01-01T12:00:00Z',
        created_by: {
            id: 'user1',
            name: 'ChefCook',
            email: 'chefcook@example.com',
        },
    },
    {
        id: 'recipe2',
        title: 'Grilled Chicken Salad',
        description:
            'A healthy and delicious salad with grilled chicken breast.',
        ingredients: [
            {
                id: 'ingredient1',
                name: 'Chicken Breast',
                quantity: '200g',
                unit: 'grams',
            },
            {
                id: 'ingredient2',
                name: 'Mixed Greens',
                quantity: '150g',
                unit: 'grams',
            },
        ],
        instructions: [
            'Grill chicken until fully cooked.',
            'Toss mixed greens with vinaigrette.',
        ],
        rating: 4.2,
        duration: '25 min',
        origin: 'Global',
        categories: ['Lunch', 'Salad'],
        taste: ['Sweet', 'Sour'],
        tags: ['Healthy', 'Low-Carb'],
        thumbnail:
            'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        url: 'grilled-chicken-salad',
        tips: [
            'Marinate chicken for added flavor.',
            'Add nuts for extra crunch.',
        ],
        history: 'A modern twist on the classic chicken salad.',
        references: [
            'https://www.foodnetwork.com/recipes/grilled-chicken-salad-recipe-2102906',
        ],
        created_at: '2023-01-02T14:30:00Z',
        created_by: {
            id: 'user2',
            name: 'HealthyEats',
            email: 'healthyeats@example.com',
        },
    },
    {
        id: 'recipe3',
        title: 'Vegetarian Pad Thai',
        description:
            'A flavorful and satisfying vegetarian version of the popular Thai noodle dish.',
        ingredients: [
            {
                id: 'ingredient1',
                name: 'Rice Noodles',
                quantity: '250g',
                unit: 'grams',
            },
            {
                id: 'ingredient2',
                name: 'Tofu',
                quantity: '300g',
                unit: 'grams',
            },
            {
                id: 'ingredient3',
                name: 'Bean Sprouts',
                quantity: '150g',
                unit: 'grams',
            },
            {
                id: 'ingredient4',
                name: 'Carrots',
                quantity: '100g',
                unit: 'grams',
            },
        ],
        instructions: [
            'Soak rice noodles in hot water.',
            'Stir-fry tofu and vegetables.',
            'Combine with noodles and sauce.',
        ],
        rating: 4.6,
        duration: '35 min',
        origin: 'Thailand',
        categories: ['Dinner', 'Thai', 'Vegetarian'],
        taste: ['Salty', 'Sweet'],
        tags: ['Noodles', 'Tofu'],
        thumbnail:
            'https://images.unsplash.com/photo-1565355857989-333dff0b3dc8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            'https://images.unsplash.com/photo-1565355857989-333dff0b3dc8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        url: 'vegetarian-pad-thai',
        tips: [
            'Use tamarind paste for an authentic flavor.',
            'Garnish with peanuts and lime wedges.',
        ],
        history: 'Pad Thai is a popular street food in Thailand.',
        references: [
            'https://www.allrecipes.com/recipe/42932/vegetarian-pad-thai/',
        ],
        created_at: '2023-01-03T18:45:00Z',
        created_by: {
            id: 'user3',
            name: 'TastyVeg',
            email: 'tastyveg@example.com',
        },
    },
    {
        id: 'recipe4',
        title: 'Homestyle Chicken Curry',
        description:
            'A hearty and flavorful chicken curry with aromatic spices and herbs.',
        ingredients: [
            {
                id: 'ingredient1',
                name: 'Chicken Thighs',
                quantity: '500g',
                unit: 'grams',
            },
            {
                id: 'ingredient2',
                name: 'Onions',
                quantity: '2',
                unit: 'pieces',
            },
            {
                id: 'ingredient3',
                name: 'Tomatoes',
                quantity: '3',
                unit: 'pieces',
            },
            {
                id: 'ingredient4',
                name: 'Curry Powder',
                quantity: '2 tbsp',
                unit: 'tablespoons',
            },
        ],
        instructions: [
            'Sauté onions until golden.',
            'Add chicken and brown.',
            'Simmer with tomatoes and spices.',
        ],
        rating: 4.3,
        duration: '45 min',
        origin: 'India',
        categories: ['Dinner', 'Indian', 'Curry'],
        taste: ['Salty', 'Sweet'],
        tags: ['Chicken', 'Spices'],
        thumbnail:
            'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        url: 'chicken-curry',
        tips: [
            'Serve with basmati rice or naan.',
            'Adjust spice level to taste.',
        ],
        history: 'A classic recipe passed down through generations.',
        references: [
            'https://www.foodnetwork.com/recipes/homestyle-chicken-curry-recipe-2103801',
        ],
        created_at: '2023-01-04T11:15:00Z',
        created_by: {
            id: 'user4',
            name: 'CurryMaster',
            email: 'currymaster@example.com',
        },
    },
    {
        id: 'recipe5',
        title: 'Caprese Salad',
        description:
            'A simple and refreshing salad with tomatoes, mozzarella, and basil.',
        ingredients: [
            {
                id: 'ingredient1',
                name: 'Tomatoes',
                quantity: '4',
                unit: 'pieces',
            },
            {
                id: 'ingredient2',
                name: 'Mozzarella',
                quantity: '200g',
                unit: 'grams',
            },
            {
                id: 'ingredient3',
                name: 'Fresh Basil',
                quantity: '1 bunch',
                unit: 'bunch',
            },
        ],
        instructions: [
            'Slice tomatoes and mozzarella.',
            'Arrange on a plate with basil leaves.',
            'Drizzle with balsamic glaze.',
        ],
        rating: 4.9,
        duration: '15 min',
        origin: 'Italy',
        categories: ['Appetizer', 'Italian', 'Salad'],
        taste: ['Salty', 'Sweet'],
        tags: ['Vegetarian', 'Fresh'],
        thumbnail:
            'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        url: 'caprese-salad',
        tips: [
            'Use ripe, juicy tomatoes.',
            'Sprinkle with salt and pepper to taste.',
        ],
        history: 'Named after the Isle of Capri in Italy.',
        references: [
            'https://www.food.com/recipe/authentic-italian-caprese-salad-235141',
        ],
        created_at: '2023-01-05T14:30:00Z',
        created_by: {
            id: 'user5',
            name: 'FreshEats',
            email: 'fresheats@example.com',
        },
    },
    {
        id: 'recipe7',
        title: 'Creamy Mushroom Risotto',
        description:
            'A comforting and creamy risotto with sautéed mushrooms and Parmesan cheese.',
        ingredients: [
            {
                id: 'ingredient1',
                name: 'Arborio Rice',
                quantity: '1 cup',
                unit: 'cup',
            },
            {
                id: 'ingredient2',
                name: 'Mushrooms',
                quantity: '200g',
                unit: 'grams',
            },
            {
                id: 'ingredient3',
                name: 'Chicken Broth',
                quantity: '4 cups',
                unit: 'cups',
            },
            {
                id: 'ingredient4',
                name: 'Parmesan Cheese',
                quantity: '1/2 cup',
                unit: 'cup',
            },
        ],
        instructions: [
            'Sauté mushrooms in butter.',
            'Add rice and cook until translucent.',
            'Gradually add broth, stirring until absorbed.',
        ],
        rating: 4.8,
        duration: '40 min',
        origin: 'Italy',
        categories: ['Dinner', 'Italian', 'Risotto'],
        taste: ['Salty', 'Sweet'],
        tags: ['Creamy', 'Mushrooms'],
        thumbnail:
            'https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            'https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        url: 'mushroom-risotto',
        tips: [
            'Use homemade chicken broth for richer flavor.',
            'Top with extra Parmesan before serving.',
        ],
        history:
            'Risotto is a traditional Italian dish known for its creamy texture.',
        references: [
            'https://www.foodnetwork.com/recipes/mushroom-risotto-recipe-1915756',
        ],
        created_at: '2023-01-06T12:30:00Z',
        created_by: {
            id: 'user6',
            name: 'RisottoChef',
            email: 'risottochef@example.com',
        },
    },
    {
        id: 'recipe8',
        title: 'Lemon Garlic Butter Shrimp',
        description:
            'Quick and flavorful shrimp cooked in a lemony garlic butter sauce.',
        ingredients: [
            {
                id: 'ingredient1',
                name: 'Shrimp',
                quantity: '300g',
                unit: 'grams',
            },
            {
                id: 'ingredient2',
                name: 'Garlic',
                quantity: '3 cloves',
                unit: 'cloves',
            },
            {
                id: 'ingredient3',
                name: 'Lemon',
                quantity: '1',
                unit: 'piece',
            },
            {
                id: 'ingredient4',
                name: 'Butter',
                quantity: '2 tbsp',
                unit: 'tablespoons',
            },
        ],
        instructions: [
            'Sauté shrimp in garlic butter.',
            'Squeeze lemon juice over shrimp.',
            'Serve with fresh parsley.',
        ],
        rating: 4.9,
        duration: '15 min',
        origin: 'Global',
        categories: ['Dinner', 'Seafood'],
        taste: ['Salty', 'Sweet'],
        tags: ['Quick', 'Garlic', 'Lemon'],
        thumbnail:
            'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        images: [
            'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        url: 'lemon-garlic-shrimp',
        tips: [
            'Choose fresh, large shrimp for the best flavor.',
            'Serve over pasta or rice.',
        ],
        history:
            'A versatile dish with flavors from various culinary traditions.',
        references: ['https://www.food.com/recipe/garlic-butter-shrimp-156700'],
        created_at: '2023-01-07T16:45:00Z',
        created_by: {
            id: 'user7',
            name: 'ShrimpMaster',
            email: 'shrimpmaster@example.com',
        },
    },
];

const LANGUAGES = [
    { label: 'English', abbr: 'en', image: 'usa' },
    { label: 'Español', abbr: 'es', image: 'spain' },
    { label: 'Français', abbr: 'fr', image: 'france' },
];

const COUNTRIES = [
    { label: 'United States', abbr: 'us', image: 'usa' },
    { label: 'Span', abbr: 'es', image: 'spain' },
    { label: 'Colombia', abbr: 'co', image: 'colombia' },
    { label: 'France', abbr: 'fr', image: 'france' },
    { label: 'Brazil', abbr: 'br', image: 'brazil' },
    { label: 'India', abbr: 'in', image: 'india' },
    { label: 'China', abbr: 'cn', image: 'china' },
    { label: 'Japan', abbr: 'jp', image: 'japan' },
    { label: 'Canada', abbr: 'ca', image: 'canada' },
    { label: 'Germany', abbr: 'de', image: 'germany' },
    { label: 'Turkey', abbr: 'tr', image: 'turkey' },
    { label: 'United Kingdom', abbr: 'gb', image: 'uk' },
];

export { RECIPES, LANGUAGES, COUNTRIES };
