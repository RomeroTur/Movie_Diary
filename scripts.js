import headerInnerHTML from "./partials/headerGen.js";

const body = document.querySelector("body");
const header = document.createElement("header");
header.innerHTML = headerInnerHTML;
body.insertAdjacentElement("afterbegin", header);
