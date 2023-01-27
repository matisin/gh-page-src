<script>
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

<style lang="scss">
	$starFieldWidth: 2560;
	$starFieldHeight: 2560;
	$starStartOffset: 600px;

	$starOneScrollDuration: 100s;
	$starTwoScrollDuration: 125s;
	$starThreeScrollDuration: 175s;
	$numStarOneStars: 1700;
	$numStarTwoStars: 700;
	$numStarThreeStars: 200;
	$numComet: 10;

	.main-container {
		height: 100vh;
		background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
		display: flex;
		flex-direction: column;
		flex: 0.6;
	}

	.sub-container {
		margin-top: 200px;
	}

	section {
		min-width: max-content;

		flex: 0.6;
	}

	.sky {
		width: 100vh;
	}

	h1,
	h3,
	h2 {
		color: white;
		width: 100%;
		text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
	}

	h3 {
		font-size: 3vh;
	}

	.countdown {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.box h1 {
		font-size: 15vh;
		margin: 10px 0px 10px 0px;
	}

	.dots h1 {
    font-size: 15vh;
		margin: 0px 0px 50px 0px;
	}

	.box h2 {
		margin: 10px 0px 20px 0px;
		font-size: 2vh;
		text-align: center;
		font-weight: 800;
	}

	@function create-stars($n) {
		$stars: '#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF';

		@for $i from 2 through $n {
			$stars: '#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF';
		}
		@return unquote($stars);
	}

	@mixin star-template($numStars, $starSize, $scrollSpeed) {
		z-index: 10;
		width: $starSize;
		height: $starSize;
		border-radius: 50%;
		background: transparent;
		box-shadow: create-stars($numStars);
		animation: animStar $scrollSpeed linear infinite;
		&:after {
			content: ' ';
			top: -$starStartOffset;
			width: $starSize;
			height: $starSize;
			border-radius: 50%;
			position: absolute;
			background: transparent;
			box-shadow: create-stars($numStars);
		}
	}

	@mixin shooting-star-template($numStars, $starSize, $speed) {
		z-index: 10;
		width: $starSize;
		height: $starSize + 80px;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		position: absolute;
		bottom: 0;
		right: 0;
		background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
		animation: animShootingStar $speed linear infinite;
	}

	.stars {
		@include star-template($numStarOneStars, 1px, $starOneScrollDuration);
	}
	.stars2 {
		@include star-template($numStarTwoStars, 2px, $starTwoScrollDuration);
	}
	.stars3 {
		@include star-template($numStarThreeStars, 3px, $starThreeScrollDuration);
	}
	.comet {
		@include shooting-star-template($numComet, 5px, 10s);
	}

	@keyframes animShootingStar {
		from {
			transform: translateY(0px) translateX(0px) rotate(-45deg);
			opacity: 1;
			height: 5px;
		}
		to {
			transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px) rotate(-45deg);
			opacity: 1;
			height: 800px;
		}
	}
</style>
