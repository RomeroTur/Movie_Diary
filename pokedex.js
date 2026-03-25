import fetchedPokemonList from "./modules/fetch.js";
import { getItem } from "./modules/localStorage.js";

const body = document.querySelector("body");
const main = body.querySelector("main");

let itemsStorage = getItem("catch");

fetchedPokemonList
	.then((data) => (main.innerHTML = data))
	.catch((err) => (main.innerHTML = err));

if (itemsStorage.length !== 0) {
}
