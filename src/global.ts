export type CocktailIngredientType = {
	name: string;
	amount: string;
};

export type CocktailType = {
	id: string;
	name: string;
	thumbUrl: string;
	ingredients?: CocktailIngredientType[];
};
