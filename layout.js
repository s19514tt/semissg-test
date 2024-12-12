import { switchPage } from "./main.js";

export function createLayout(contentDiv) {
  // Create elements
  let header = document.createElement("header");
  header.id = "main-header";

  let h1 = document.createElement("h1");
  h1.textContent = "Dummy Blog";

  let navbar = document.createElement("nav");
  navbar.id = "navbar";

  let ul = document.createElement("ul");
  [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
  ].forEach(function (link) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.addEventListener("click", function (event) {
      if (
        event.button === 0 &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.shiftKey &&
        !event.altKey
      ) {
        event.preventDefault();
        history.pushState({ page: link.href }, "", link.href);
        switchPage(link.href);
      }
    });
    li.appendChild(a);
    ul.appendChild(li);
  });

  navbar.appendChild(ul);
  header.appendChild(h1);
  header.appendChild(navbar);

  let container = document.createElement("div");
  container.className = "container";

  // Add dummy article
  let article = document.createElement("div");
  article.className = "article";

  container.appendChild(contentDiv);

  document.body.insertBefore(header, document.body.firstChild);
  document.body.appendChild(container);
}
