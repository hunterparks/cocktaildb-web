<script>
	export let cocktail;
</script>

<a href={`/cocktail/${cocktail.idDrink}`}>
	<img src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink} thumbnail`} />
	<p>{cocktail.strDrink}</p>
</a>

<style>
	a {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		margin: 1rem;
		background-color: hsl(0, 0%, 96%);
		border-radius: 1rem;
		box-shadow: gray 0.125rem 0.125rem 0.5rem;
		transition-duration: 100ms;
		transition-timing-function: ease-in-out;
		transition-property: all;
	}

	a:hover {
		transform: scale(102%);
	}

	img {
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 4.5rem;
		margin-right: 0.5rem;
	}
</style>
