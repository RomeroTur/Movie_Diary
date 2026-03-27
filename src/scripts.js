// import styles
import "tailwindcss";
import './style.css'

// import partials & build header/footer
import headerInnerHTML from "./partials/headerGen.js";
import footerInnerHTML from "./partials/footerGen.js";
import pokemonList from "./modules/fetch.js";

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
import { renderMovieList } from './modules/render.js';

try {
    const movies = await loadMovies();
    renderMovieList(movies);
} catch (error) {
    console.error(error);
}