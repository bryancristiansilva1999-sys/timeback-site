const navButtons = [...document.querySelectorAll(".nav-item[data-view]")];
const modsView = document.querySelector("#mods-view");
const filesView = document.querySelector("#files-view");
const currentBreadcrumb = document.querySelector("#breadcrumb-current");

function showView(view) {
  const isFiles = view === "files";
  modsView.hidden = isFiles;
  filesView.hidden = !isFiles;
  currentBreadcrumb.textContent = isFiles ? "Arquivos" : "Mods";

  for (const button of navButtons) {
    const isActive = button.dataset.view === view;
    button.classList.toggle("active", isActive);
    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

for (const button of navButtons) {
  button.addEventListener("click", () => showView(button.dataset.view));
}

for (const button of document.querySelectorAll("[data-open-view]")) {
  button.addEventListener("click", () => showView(button.dataset.openView));
}
