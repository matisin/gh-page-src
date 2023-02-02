<script>
	import './styles.scss'
	import { onMount } from 'svelte';
	import moment from 'moment';

	const date = moment('2024-01-01T00:00:00.000');
	let now = moment();

	$: currentTimeString = now.format('hh:mm A');
	$: hoursDate = date.hours() === 0 ? 23 : date.hours();
	$: minutesDate = date.minutes() === 0 ? 59 : date.minutes();
	$: secondsDate = date.seconds() === 0 ? 59 : date.seconds();

	$: daysTo = date.diff(now, 'days');
	$: hoursTo = hoursDate - now.hours();
	$: minutesTo = minutesDate - now.minutes();
	$: secondsTo = secondsDate - now.seconds();
	$: newYear = now >= date;

	onMount(() => {
		const interval = setInterval(() => {
			now = moment();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>New Year Counter</title>
	<meta name="New Year Counter" content="A counter for next new year" />
</svelte:head>

<section>
	<div class="main-container">
		<div class="sub-container">
			<h1>Cuanto falta para año nuevo?</h1>
			<h3>Son las <strong>{currentTimeString}</strong></h3>
			{#if !newYear}
				<div class="countdown">
					<div class="box">
						<h1>{daysTo < 10 ? `0${daysTo}` : daysTo}</h1>
						<h2>DÍAS</h2>
					</div>

					<div class="dots">
						<h1>:</h1>
					</div>

					<div class="box">
						<h1>{hoursTo < 10 ? `0${hoursTo}` : hoursTo}</h1>
						<h2>HORAS</h2>
					</div>

					<div class="dots">
						<h1>:</h1>
					</div>

					<div class="box">
						<h1>{minutesTo < 10 ? `0${minutesTo}` : minutesTo}</h1>
						<h2>MINUTOS</h2>
					</div>

					<div class="dots">
						<h1>:</h1>
					</div>

					<div class="box">
						<h1>{secondsTo < 10 ? `0${secondsTo}` : secondsTo}</h1>
						<h2>SEGUNDOS</h2>
					</div>
				</div>
			{:else}
				<h1>Feliz año nuevo!!!</h1>
				<div class="firework" />
				<div class="firework" />
				<div class="firework" />
			{/if}
			<div class="sky">
				<div class="stars" />
				<div class="stars2" />
				<div class="stars3" />
				<div class="comet" />
			</div>
		</div>
	</div>
</section>
