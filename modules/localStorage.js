function setItem() {
	localStorage.setItem("catch", ["wartortle", "squirtle", "metapod"]);
}

function getItem(item) {
	localStorage.getItem(item);
}

export { setItem, getItem };
