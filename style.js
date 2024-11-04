function classToggle() {
    const navs = document.querySelectorAll('.menu-nav__Items')
    
    navs.forEach(nav => nav.classList.toggle('menu-nav__ToggleShow'));
  }
  
  document.querySelector('.menu-nav__Link-toggle')
    .addEventListener('click', classToggle);