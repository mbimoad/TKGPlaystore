injectElement("screenshots1", 5); 
createSwiper('screenshots1', 2, 2, 2, 1, 2000);


injectElement("cards1", 12); 
createSwiper('cards1', 6, 4, 2, 1, 3000);

const installer = document.querySelector('.sticky-installer'); 
window.addEventListener('scroll', function() {
    let scrollPositionY = window.scrollY;
    if(scrollPositionY >= 400) {
        installer.classList.add('active');
    } else {
        installer.classList.remove('active');
    }
});