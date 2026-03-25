import fetchedPokemonList from "./modules/fetch.js";

const body = document.querySelector("body");
const main = body.querySelector("main");

let itemsStorage = [];

fetchedPokemonList
	.then((data) => (main.innerHTML = data))
	.catch((err) => (main.innerHTML = err));

const localStorageItems = localStorage.getItem("catch");

if (localStorageItems.length !== 0) {
	itemsStorage = localStorageItems;
}
