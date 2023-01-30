<script>
	import './styles.css';
	import { page } from '$app/stores';
	import hamburger from '$lib/images/hamburger.svg';

	const pathname = $page.url.pathname;
	const homeActive = pathname === '/portfolio' ? 'active' : '';
	const workActive = pathname === '/portfolio/work' ? 'active' : '';
	const contactActive = pathname === '/portfolio/contact' ? 'active' : '';
	const aboutActive = pathname === '/portfolio/about' ? 'active' : '';
	console.log(pathname)
	let navClass = '';

	function handleClick() {
		if (navClass === '') navClass = 'responsive';
		else navClass = '';
	}
</script>

<div class={`topnav ${navClass}`}>
	<a href="/portfolio" class={homeActive}>Inicio</a>
	<a href="/portfolio/work" class={workActive}>Trabajos</a>
	<a href="/portfolio/contact" class={contactActive}>Contacto</a>
	<a href="/portfolio/about" class={aboutActive}>Acerca de</a>
	<div class="separator"></div>
	<button on:click={handleClick}><img class="nav-icon" src={hamburger} alt="burger icon." /></button
	>
</div>
