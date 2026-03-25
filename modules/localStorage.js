function setItem() {
	const data = ["wartortle", "squirtle", "metapod"];
	localStorage.setItem("catch", JSON.stringify(data));
}

function getItem(key) {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : [];
}

export { setItem, getItem };
