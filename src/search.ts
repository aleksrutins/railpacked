import Fuse from "fuse.js";

const searchBar = document.querySelector("#searchBar") as HTMLInputElement,
  recipes = document.querySelector("#recipes");
if (searchBar && recipes) {
  const items = Array.from(
    document.querySelectorAll("#recipes > div.card"),
  ).map((it) => ({
    title: it.querySelector("h2 > a")!.textContent,
    desc: it.querySelector("p")!.textContent,
    el: it,
  }));

  const fuse = new Fuse(items, { keys: ["title", "desc"] });

  searchBar.addEventListener("keyup", () => {
    if (searchBar.value.trim() == "")
      recipes.replaceChildren(...items.map((it) => it.el));
    else
      recipes.replaceChildren(
        ...fuse.search(searchBar.value).map((it) => it.item.el),
      );
  });
}
