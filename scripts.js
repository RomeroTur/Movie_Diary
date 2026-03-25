import headerInnerHTML from "./partials/headerGen.js";
import pokemonList from "./modules/fetch.js";

const body = document.querySelector("body");
const header = document.createElement("header");
header.innerHTML = headerInnerHTML;
body.insertAdjacentElement("afterbegin", header);
