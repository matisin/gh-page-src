<script>
	import './navbar.styles.css';
	import { page } from '$app/stores';
	import hamburger from '$lib/images/hamburger.svg';

	$: pathname = $page.url.pathname;

	$: homeActive = pathname === '/portfolio' ? 'active' : '';
	$: workActive = pathname === '/portfolio/work' ? 'active' : '';
	$: contactActive = pathname === '/portfolio/contact' ? 'active' : '';
	$: aboutActive = pathname === '/portfolio/about' ? 'active' : '';

	let navClass = '';

	function handleClick() {
		if (navClass === '') navClass = 'responsive';
		else navClass = '';
	}
</script>

<nav class={`topnav ${navClass}`}>
	<a href="/portfolio" class={homeActive}>Inicio</a>
	<a href="/portfolio/work" class={workActive}>Trabajos</a>
	<a href="/portfolio/contact" class={contactActive}>Contacto</a>
	<a href="/portfolio/about" class={aboutActive}>Acerca de</a>
	<button class={navClass} on:click={handleClick}><img src={hamburger} alt="burger icon." /></button
	>
</nav>
