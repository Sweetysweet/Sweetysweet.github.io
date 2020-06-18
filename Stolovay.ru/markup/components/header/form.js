const phoneBtn = document.querySelector('.menu__contact_phone'),
    popUp = document.querySelector('.contact-popup'),
    closeBtn = document.querySelector('.contact-popup__close');
phoneBtn.addEventListener('click', () => {
    popUp.style.display = 'none' ? 'block' : 'none';
})
closeBtn.addEventListener('click', () => {
    popUp.style.display = 'none';
})