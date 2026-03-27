import { movieTeaserCardImgPath } from '../config.js';

const movieContainer = document.querySelector('#movie-list');

function renderMovieList(movies) {
    const movieListHtml = movies.map(
        (movie) => `
            <div class="movie-card">
                <figure class="movie-card__figure">
                    <img src="${movieTeaserCardImgPath}${movie.poster_path}" alt="${movie.title} poster" class="movie-card__img">
                </figure>
                <div class="movie-card__body">
                    <h3 class="movie-card__title">${movie.title}</h3>
                    <p class="movie-card__release">${movie.release_date}</p>
                    <p class="movie-card__rating">${movie.vote_average}</p>
                </div>
            </div>
        `,
    ).join('');
    movieContainer.innerHTML = movieListHtml;
}

export { renderMovieList };