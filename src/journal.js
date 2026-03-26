import fetchedPokemonList from "./modules/fetch.js";
import { getItem } from "./modules/localStorage.js";

const body = document.querySelector("body");
const main = body.querySelector("main");

let itemsStorage = getItem("catch");

console.log(itemsStorage);

fetchedPokemonList
	.then((data) => {
		main.innerHTML = data;
		console.log(data);
	})
	.catch((err) => (main.innerHTML = err));

if (itemsStorage.length !== 0) {
	itemsStorage.map((item) => {
		console.log("item: ", item);
	});
}
