<script>
	import '../global.css';
</script>

<main>
	<h1>🍹 CocktailDB 🍹</h1>
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		width: 100%;
	}

	section {
		width: 60vw;
		margin: 0 auto;
	}

	@media screen and (max-width: 992px) {
		section {
			width: 85vw;
		}
	}

	@media screen and (max-width: 768px) {
		section {
			width: 95vw;
		}
	}

	h1 {
		text-align: center;
		padding: 1.5rem 0;
		background-color: lightgray;
	}
</style>
