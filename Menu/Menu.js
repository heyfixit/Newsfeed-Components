

window.addEventListener('load', () => {

  const outsideClickListener = e => {
    if (!menu.contains(e.target)) {
      menu.classList.remove('menu--open');
      document.removeEventListener('click', outsideClickListener);
    }
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    // Toggle the "menu--open" class on your menu refence.
    menu.classList.toggle('menu--open');
    if(menu.classList.contains('menu--open')) {
      document.addEventListener('click', outsideClickListener);
    }
  };

  // Start Here: Create a reference to the ".menu" class
  const menu = document.getElementsByClassName('menu')[0];
  // create a reference to the ".menu-button" class
  const menuButton = document.getElementsByClassName('menu-button')[0];
  // Using your menuButton reference, add a click handler that calls toggleMenu
  menuButton.addEventListener('click', toggleMenu);
});
