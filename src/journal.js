import fetchedItems from "./modules/fetch.js";
import { getItem } from "./modules/localStorage.js";

const body = document.querySelector("body");
const main = body.querySelector("main");
const favContent = body.querySelector("#favContent");

let localStorageItemsArray = getItem("id");
let fetchedItemsArray = [];
let matchingItemsArray = [];

console.log("localStorageItemsArray:", localStorageItemsArray);
//console.log("fetchedItems: ", fetchedItems);

fetchedItems
	.then((data) => {
		fetchedItemsArray = data.results;
		console.log("fetchedItemsArray: ", fetchedItemsArray);
		fillMatchingItemsArray();
	})
	.catch((err) => (main.innerHTML = err));

function fillMatchingItemsArray() {
	if (localStorageItemsArray.length !== 0 && fetchedItemsArray.length !== 0) {
		localStorageItemsArray.forEach((storageItem) => {
			fetchedItemsArray.forEach((fetchedItem) => {
				if (parseInt(fetchedItem.id) === parseInt(storageItem)) {
					matchingItemsArray.push(fetchedItem);
				}
			});
		});
		console.log("matchingItemsArray: ", matchingItemsArray);
		layoutConstruction();
	}
}

function layoutConstruction() {
	const layout = matchingItemsArray
		.map((item) => {
			return `<div class="favContent__entry">					
					<img src="https://image.tmdb.org/t/p/w780${item.poster_path}" />
					<div class="p-4">
					<div class="favContent__entry__title">${item.title}</div>
						<div>Rating: ${item.vote_average}/10</div>
					</div>
				</div>`;
		})
		.join("");
	favContent.innerHTML = layout;
}
