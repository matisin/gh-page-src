<script>
	import './portfolio.styles.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>

<div class="app">
	<main>
		<Navbar/>
		<slot />
	</main>
</div>