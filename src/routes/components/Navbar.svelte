<script>
	import { page } from '$app/stores';

	const pathname = $page.url.pathname;
	const rootClass = pathname === '/' ? 'active' : '';
	const contactClass = pathname === '/contact' ? 'active' : '';
	const portfolioClass = pathname === '/portfolio' ? 'active' : '';
</script>

<nav>
	<ul>
		<li><a class={contactClass} href="contact">Contacto</a></li>
		<li><a class={portfolioClass} href="portfolio">Portafolio</a></li>
		<li><a href="new-year-countdown">Contador año nuevo</a></li>
		<li><a class={rootClass} href="/">Acerca de</a></li>
	</ul>
</nav>

<style>
	ul {
		position: fixed;
		top: 0;
		width: calc(100% - var(--global-padding) - var(--global-padding));
		background: var(--color-bg-0);
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	li {
		float: right;
	}

	li a {
		display: block;
		color: var(--color-text);
		text-align: center;
		padding: 14px 16px 8px 16px;
		text-decoration: none;
		opacity: 0.4;
    transition: 0.3s;
	}

	/* Change the link color to #111 (black) on hover */
	li a:hover {
		background-color: var(--color-bg-1);
		opacity: 1;
	}

	.active {
		opacity: 1;
		border-bottom: 2px solid var(--color-text);
	}
</style>
