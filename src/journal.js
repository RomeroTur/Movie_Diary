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
		.map((item) => `<div>${item.id}</div>`)
		.join("");
	favContent.innerHTML = layout;
}
