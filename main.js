import { createLayout } from "./layout.js";

const contentMap = {};

contentMap[window.location.pathname] = document.getElementById("content");

createLayout(contentMap[window.location.pathname]);

const container = document.querySelector(".container");

export async function switchPage(pageId) {
  contentMap[pageId] = (await import(`.${pageId}/index.js`)).default();
  container.replaceChild(contentMap[pageId], container.firstChild);
}
