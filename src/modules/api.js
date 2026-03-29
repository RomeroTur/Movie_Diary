const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
};

const dataSource = "https://api.themoviedb.org/3/movie/popular?language=de-DE&page=1";
const dataSourceSearch = 'https://api.themoviedb.org/3/search/movie?query=';
 async function loadMovies() {
    const res = await fetch(dataSource, options);
    if (!res.ok) throw new Error("Failed to get Data");
    const movieList = await res.json();
    return movieList.results;
}

async function searchMovies(query) {
    const searchQueryUrl = `${dataSourceSearch}${encodeURIComponent(query)}&language=de-DE`
    const res = await fetch(searchQueryUrl, options);
    if (!res.ok) throw new Error("Failed to get Data");
    const movieList = await res.json();
    return movieList.results;
}

export { loadMovies, searchMovies };
