interface Recipe {
    id: number;
    title: string;
    readyInMinutes?: number;
    servings?:number;
    glutenFree: Boolean;
    dairyFree: Boolean;
    vegan: Boolean;
    extendedIngredients?: Object[];
}

export type {Recipe};