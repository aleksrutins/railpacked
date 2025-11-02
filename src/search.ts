import Fuse from "fuse.js";

const searchBar = document.querySelector("#searchBar") as HTMLInputElement,
  recipes = document.querySelector("#recipes");
if (searchBar && recipes) {
  const items = Array.from(document.querySelectorAll("recipe-link")).map(
    (it) => ({ title: it.getAttribute("title"), el: it }),
  );

  const fuse = new Fuse(items, { keys: ["title"] });

  searchBar.addEventListener("keyup", () => {
    const results = fuse.search(searchBar.value).map((it) => it.item.el);
    recipes.replaceChildren(
      ...(results.length > 0 ? results : items.map((it) => it.el)),
    );
  });
}
