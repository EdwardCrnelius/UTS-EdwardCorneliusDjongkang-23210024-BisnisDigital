
const navbar = document.querySelector('.navbar-container');
const hamburgerButton = document.getElementById('hamburger-menu');
const navbarLinks = document.querySelector('.links-container');

const closeIcon = '<i class="ri-close-line"></i>';
const menuButton = '<i class="ri-menu-line"></i>';

hamburgerButton.addEventListener('click' , function() {
    hamburgerButton.innerHTML = this.classList.contains('active') ? closeIcon : menuButton;
    navbarLinks.classList.toggle('active');

    if(navbarLinks.classList.contains("active"))  {
        hamburgerButton.innerHTML = closeIcon;
   } else {
       hamburgerButton.innerHTML = menuButton;
   }
});