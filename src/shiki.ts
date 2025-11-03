import { codeToHtml } from "./shiki.bundle";

document.querySelectorAll("pre > code").forEach(async (el) => {
  el.innerHTML = await codeToHtml(el.textContent ?? "", {
    lang:
      Array.from(el?.classList ?? []).find((c) => c != "sourceCode") ?? "json",
    themes: {
      light: "rose-pine-dawn",
      dark: "rose-pine",
    },
  });
});
