import fetchedPokemonList from "./modules/fetch.js";

const body = document.querySelector("body");
const main = body.querySelector("main");

fetchedPokemonList
	.then((data) => (main.innerHTML = data))
	.catch((err) => (main.innerHTML = err));

localStorage.setItem("catch", ["wartortle", "squirtle", "metapod"]);
const localStorageItems = localStorage.getItem("catch");

if (localStorageItems.length !== 0) {
}
