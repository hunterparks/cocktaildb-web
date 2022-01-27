<script context="module" lang="typescript">
	export async function load({ fetch }): Promise<
		| {
				props: {
					cocktails: Array<CocktailType>;
				};
		  }
		| Promise<{
				status: string;
				error: string;
		  }>
	> {
		const response = await fetch(
			'http://localhost:5000/api/json/v1/cocktails?type=Alcoholic&limit=50'
		);
		if (response.ok) {
			const cocktails = (await response.json()).drinks.map((drink) => {
				return {
					id: drink.idDrink,
					name: drink.strDrink,
					thumbUrl: drink.strDrinkThumb
				} as CocktailType;
			}) as Array<CocktailType>;
			return { props: { cocktails } };
		}
		return { status: response.status, error: `Could not load cocktails` };
	}
</script>

<script lang="typescript">
	import type { CocktailType } from '../global';
	import Cocktail from '../components/cocktail.svelte';

	export let cocktails: Array<CocktailType>;
</script>

<svelte:head>
	<title>Home | The CocktailDB</title>
</svelte:head>

<h1>Cocktails</h1>
<div>
	{#each cocktails as cocktail}
		<Cocktail {cocktail} />
	{/each}
</div>

<style>
	h1 {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 992px) {
		div {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 768px) {
		div {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
