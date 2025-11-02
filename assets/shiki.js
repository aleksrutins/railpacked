import { codeToHtml } from "https://esm.sh/shiki@3.0.0";

document.querySelectorAll("pre > code").forEach(async (el) => {
  el.innerHTML = await codeToHtml(el.textContent, {
    lang: el.getAttribute("class").substring("language-".length),
    theme: "rose-pine",
  });
});
