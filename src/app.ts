import { codeToHtml } from "./shiki.bundle";

document.querySelectorAll("pre > code").forEach(async (el) => {
  el.innerHTML = await codeToHtml(el.textContent ?? "", {
    lang: el?.getAttribute("class")?.substring("language-".length) ?? "json",
    theme: "rose-pine",
  });
});
