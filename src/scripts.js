// import styles
import "tailwindcss";
import './style.css'

// import partials & build header/footer
import headerInnerHTML from "./partials/headerGen.js";
import footerInnerHTML from "./partials/footerGen.js";

const body = document.querySelector("body");
const header = document.createElement("header");
header.innerHTML = headerInnerHTML;
body.insertAdjacentElement("afterbegin", header);

const footer = document.createElement("footer");
footer.classList.add();
footer.innerHTML = footerInnerHTML;
body.insertAdjacentElement("beforeend", footer);

// index page
import { loadMovies } from './modules/api.js';
import { searchMovies } from './modules/api.js';
import { renderMovieList, movieContainer } from './modules/render.js';
import { toggleFavorite } from './modules/localStorage.js';



const searchform = document.querySelector('#movie-search');

// show searched movies
searchform.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchQuery = event.target.querySelector("input").value;

    try {
        const movies = await searchMovies(searchQuery);
        renderMovieList(movies);

    } catch (error) {
        console.error(error);
    }
})

// show default filmes
try {
    const movies = await loadMovies();
    renderMovieList(movies);
} catch (error) {
    console.error(error);
}

movieContainer.addEventListener("click", (e) => {
    const heart = e.target.closest(".heart-icon");
    if (!heart) return;
    const movieId = heart.closest(".movie-card").dataset.movieId;
    heart.classList.toggle("liked");
    toggleFavorite(Number(movieId));
});
