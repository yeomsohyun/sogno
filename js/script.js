/* Initialize Swiper */
var swiper = new Swiper(".main", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".review_img", {
    spaceBetween: 10,
    /*swiper-slide들 사이에 들어가는 여백설정*/
    slidesPerView: 4,
    /*한번에 보이는 swiper-slide객수를 정함*/
    cssMode: true,
    navigation: {
        nextEl: ".btn_next",
        prevEl: ".btn_prev",
    },
});
