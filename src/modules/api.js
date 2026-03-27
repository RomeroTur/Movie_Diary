const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
};

const dataSource = "https://api.themoviedb.org/3/movie/popular?language=de-DE&page=1";
 async function loadMovies() {
    const res = await fetch(dataSource, options);
    if (!res.ok) throw new Error("Failed to get Data");
    const movieList = await res.json();
    return movieList.results;
}

export { loadMovies };