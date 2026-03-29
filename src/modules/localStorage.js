function setItem() {
	const data = [];
	localStorage.setItem("catch", JSON.stringify(data));
}

function getItem(key) {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : [];
}

function toggleFavorite(id) {
	const favorites = getItem("favorites");
	const index = favorites.indexOf(id);
	if (index === -1) {
		favorites.push(id);
	} else {
		favorites.splice(index, 1);
	}
	localStorage.setItem("favorites", JSON.stringify(favorites));
}


export { getItem, toggleFavorite };
