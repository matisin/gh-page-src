<script>
	import './styles.css';
	import { page } from '$app/stores';
	import hamburger from '$lib/images/hamburger.svg';

	const pathname = $page.url.pathname;
	const rootClass = pathname === '/' ? 'active' : '';
	const contactClass = pathname === '/contact' ? 'active' : '';
	const portfolioClass = pathname === '/portfolio' ? 'active' : '';
  let navClass = ''

	function handleClick() {
    console.log('asd')
		if(navClass === '') navClass = 'responsive'
    else navClass = ''
	}
</script>

<nav>
	<ul>
		<li class={navClass}>
			<button on:click={handleClick}
				><img class="nav-icon" src={hamburger} alt="burger icon." /></button
			>
		</li>
		<li class={navClass}><a class={contactClass} href="contact">Contacto</a></li>
		<li class={navClass}><a class={portfolioClass} href="portfolio">Portafolio</a></li>
		<li class={navClass}><a href="new-year-countdown">Contador año nuevo</a></li>
		<li class={navClass}><a class={rootClass} href="/">Acerca de</a></li>
	</ul>
</nav>
