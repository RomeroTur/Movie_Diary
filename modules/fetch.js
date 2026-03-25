const url = "https://pokeapi.co/api/v2/pokemon/";

const pokemonList = async () => {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("Keine Pokemonen also!");
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export default pokemonList();
