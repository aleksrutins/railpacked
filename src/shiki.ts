import { codeToHtml } from "./shiki.bundle";

document.querySelectorAll("pre > code").forEach(async (el) => {
  el.innerHTML = await codeToHtml(el.textContent ?? "", {
    lang: el?.getAttribute("class")?.substring("language-".length) ?? "json",
    themes: {
      light: "rose-pine-dawn",
      dark: "rose-pine",
    },
  });
});
