<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const response = await fetch(`http://localhost:5000/api/json/v1/cocktails/${id}`);
		if (response.ok) {
			const cocktail = (await response.json()).drinks[0];
			cocktail.ingredients = [];
			for (let i = 1; i <= 9; i++) {
				if (cocktail[`strIngredient${i}`] && cocktail[`strMeasure${i}`]) {
					cocktail.ingredients.push({
						name: cocktail[`strIngredient${i}`],
						amount: cocktail[`strMeasure${i}`]
					});
				}
			}
			return { props: { cocktail: cocktail } };
		}
		return { status: response.status, error: `Could not load cocktail` };
	}
</script>

<script>
	export let cocktail;
</script>

<svelte:head>
	<title>{cocktail.strDrink} | The CocktailDB</title>
</svelte:head>

<a href="/">
	<h1>&lhard; Back</h1>
</a>

<div class="outer">
	<img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink} thumbnail`} />
	<div class="inner">
		<h2>{cocktail.strDrink}</h2>
		<p>{cocktail.strInstructions}</p>
	</div>
</div>
<h2>Ingredients</h2>
<table>
	<tbody>
		{#each cocktail.ingredients as ingredient}
			<tr>
				<td>{ingredient.name}</td>
				<td>{ingredient.amount}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	div.outer {
		display: flex;
		margin-bottom: 2rem;
	}

	h1 {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}

	img {
		width: 12rem;
		height: 12rem;
		border-radius: 12rem;
	}

	div.inner {
		margin-left: 2rem;
	}

	h2 {
		margin-bottom: 1rem;
	}

	table {
		border-collapse: separate;
		border-spacing: 2rem 0.75rem;
	}

	tr td:nth-child(2) {
		color: grey;
		margin-left: 2rem;
	}
</style>
