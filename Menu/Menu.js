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

  const body = document.getElementsByTagName("body")[0];
  const html = document.getElementsByTagName("html")[0];
  document.getElementById('flap-it-up').addEventListener('click', () => {
    html.style.backgroundImage = 'url(../assets/flappy_bg.png)';
    html.style.backgroundColor = '';
    body.style.backgroundColor = '#fffef7';
    TweenMax.to(body, 1, {scale: 0.15});
    const gravity = 0.0010;
    let vertSpeed = 0;
    document.addEventListener('click', () => {
      vertSpeed = 0.35;
    });

    let time = Date.now();
    const draw = () => {
      elapsed = Date.now() - time;
      time = Date.now();
      if(vertSpeed > 0) {
        TweenMax.to(body, 0, {y: `-=${Math.abs(vertSpeed) * elapsed}`});
      } else {
        TweenMax.to(body, 0, {y: `+=${Math.abs(vertSpeed) * elapsed}`});
      }
      vertSpeed -= gravity * elapsed;
      requestAnimationFrame(draw);
    };

    draw();
  });
});
