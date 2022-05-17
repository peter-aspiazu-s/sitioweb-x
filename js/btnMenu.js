const btnMenu = document.querySelector('.fa-bars');
const menuResponsive = document.querySelector('.nav-responsive');

btnMenu.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu-reaparece');
})