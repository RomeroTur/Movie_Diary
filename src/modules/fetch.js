const dataSource =
	"https://api.themoviedb.org/3/movie/popular?language=de-DE&page=1";

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
	},
};

const itemsList = async () => {
	try {
		const response = await fetch(dataSource, options);
		if (!response.ok) throw new Error("No connection to server");
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export default itemsList();
