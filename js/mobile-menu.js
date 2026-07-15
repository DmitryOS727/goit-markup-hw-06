(() => {
  const menu = document.querySelector("[data-menu]");
  const openButton = document.querySelector("[data-menu-open]");
  const closeButton = document.querySelector("[data-menu-close]");

  if (!menu || !openButton || !closeButton) {
    return;
  }

  const menuLinks = menu.querySelectorAll("a");

  const openMenu = () => {
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    openButton.setAttribute("aria-expanded", "true");
    closeButton.focus();
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    openButton.setAttribute("aria-expanded", "false");
    openButton.focus();
  };

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  window
    .matchMedia("(min-width: 768px)")
    .addEventListener("change", (event) => {
      if (event.matches && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        openButton.setAttribute("aria-expanded", "false");
      }
    });
})();
