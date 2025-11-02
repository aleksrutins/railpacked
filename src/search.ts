import Fuse from "fuse.js";

const searchBar = document.querySelector("#searchBar") as HTMLInputElement,
  recipes = document.querySelector("#recipes");
if (searchBar && recipes) {
  const items = Array.from(document.querySelectorAll("recipe-link")).map(
    (it) => ({
      title: it.getAttribute("title"),
      desc: it.querySelector("p > slot")!.textContent,
      el: it,
    }),
  );

  const fuse = new Fuse(items, { keys: ["title", "desc"] });

  searchBar.addEventListener("keyup", () => {
    if (searchBar.value.trim() == "") return;
    const results = fuse.search(searchBar.value).map((it) => it.item.el);
    recipes.replaceChildren(...results);
  });
}
