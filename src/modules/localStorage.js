function setItem() {
	const data = ["875828", "687163", "83533"];
	localStorage.setItem("id", JSON.stringify(data));
}

function getItem(key) {
	const value = localStorage.getItem(key);
	return value ? JSON.parse(value) : [];
}

export { setItem, getItem };
