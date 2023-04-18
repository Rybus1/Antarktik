export const initMenu = function () {
  const header = document.querySelector(".header");
  const headerNavigation = header.querySelector(".header__navigation");
  const headerMenuButton = header.querySelector(".navigation__toggle");
  const menuLink = document.querySelectorAll(".navigation-menu__link--anchor");

  const onMenuOpen = () => {
    header.classList.add("header--open");
    document.body.classList.add("no-scroll");
  };

  const onMenuClose = () => {
    header.classList.remove("header--open");
    document.body.classList.remove("no-scroll");
  };

  const onEscPress = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      header.classList.remove("header--open");
      document.body.classList.remove("no-scroll");
    }
  };

  if (headerMenuButton) {
    headerMenuButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (header.classList.contains("header--open")) {
        onMenuClose();
        document.removeEventListener("keydown", onEscPress);
      } else {
        onMenuOpen();
        document.addEventListener("keydown", onEscPress);
      }
    });

    headerNavigation.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target;
      if (target === headerNavigation) {
        if (header.classList.contains("header--open")) {
          onMenuClose();
        }
      }
    });
  }

  menuLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      header.classList.remove('header--open');
      document.body.classList.remove('no-scroll');
      const blockID = link.getAttribute("href");
      const target = document.querySelector(`${blockID}`);
      target.scrollIntoView();
    });
  });
};
