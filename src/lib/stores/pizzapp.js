import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = {
  doughQuantity: 4,
  doughWeight: 360,
  hidration: 70,
  saltHidration: 3,
  yeastHidration: 100,
  yeastWeigth: 80
}

const loadingValue = {
  doughQuantity: 0,
  doughWeight: 0,
  hidration: 0,
  saltHidration: 0,
  yeastHidration: 0,
  yeastWeigth: 0
}

const initialValue = browser ? JSON.parse(localStorage.getItem('pizza-recipe')) ?? defaultValue : Object.assign({ loading: true }, loadingValue);

const pizzapp = writable(initialValue);

pizzapp.subscribe((value) => {
  if (browser) {
    localStorage.setItem('pizza-recipe', JSON.stringify(value));
  }
});

export default pizzapp;