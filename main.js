const navBtn = document.querySelector('.nav_button');
const mobileNav = document.querySelector('.mobile_nav');

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile_nav_active');

})