var bar = document.getElementById("bar");
function openbar(){
    bar.style.left="0";

}
function closebar(){
    bar.style.left="-300px"; 
}





const swiper = new Swiper('.slider-wrapper', {
    loop: true,
grabCursor: true,
spaceBetween: 30,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});