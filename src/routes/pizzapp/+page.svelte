<script>
	import './pizzapp.styles.css';
	import store from '$lib/stores/pizzapp';
	import copy from '$lib/images/copy.svg';

	$: totalWeigth = $store.doughQuantity * $store.doughWeight;

	$: yeastFlour = $store.yeastHidration > 0 ? $store.yeastWeigth / (1 + $store.yeastHidration / 100) : 0;
	$: yeastWater = $store.yeastHidration > 0 ? $store.yeastWeigth / (1 + 100 / $store.yeastHidration) : 0;

	$: flour = Math.round(totalWeigth / (1 + $store.hidration / 100) - yeastFlour);
	$: water = Math.round(totalWeigth / (1 + 100 / $store.hidration) - yeastWater);
	$: salt = Math.round((flour * $store.saltHidration) / 100);

	
</script>

<section>
	<div class="title">
		<h1>PIZZAPP</h1>
	</div>
	<div class="ingredients">
		<div class="ingredient-title">
			<p>Ingredientes</p>
			<img class="icon" src={copy} alt="copiar." />
		</div>
		<div class="ingredient-box">
			<p class="subtitle">Harina</p>
			<p class="ingredient-value">{flour} gr</p>
		</div>
		<div class="ingredient-box">
			<p class="subtitle">Agua</p>
			<p class="ingredient-value">{water} gr</p>
		</div>
		<div class="ingredient-box">
			<p class="subtitle">Sal</p>
			<p class="ingredient-value">{salt} gr</p>
		</div>
		<div class="ingredient-box">
			<p class="subtitle">Levadura</p>
			<p class="ingredient-value">{$store.yeastWeigth} gr</p>
		</div>
	</div>
	<div class="inputs">
		<div class="input-container">
			<label for="doughQuantity">Cantidad de masas</label>
			<input
				name="doughQuantity"
				type="number"
				inputmode="decimal"
				bind:value={$store.doughQuantity}
				min="1"
			/>
		</div>

		<div class="input-container">
			<label for="doughWeight">Peso de las masas (gr)</label>
			<input
				name="doughWeight"
				type="number"
				inputmode="decimal"
				bind:value={$store.doughWeight}
				min="1"
			/>
		</div>
		<div class="input-container">
			<label for="hidration">Hidratación (%)</label>
			<input name="hidration" type="number" inputmode="decimal" bind:value={$store.hidration} />
		</div>
		<div class="input-container">
			<label for="saltHidration">Sal (%)</label>
			<input name="saltHidration" type="number" inputmode="decimal" bind:value={$store.saltHidration} />
		</div>

		<div class="input-container">
			<label for="yeastHidration">Hidratación levadura (%)</label>
			<input name="yeastHidration" type="number" inputmode="decimal" bind:value={$store.yeastHidration} />
		</div>

		<div class="input-container">
			<label for="yeastWeigth">Cantidad levadura (gr)</label>
			<input name="yeastWeigth" type="number" inputmode="decimal" bind:value={$store.yeastWeigth} />
		</div>
	</div>
</section>
