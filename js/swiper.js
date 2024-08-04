// swiper library initialization
const swiper = new Swiper('.js-testimonials-slider',{
    grabCursor: true,
    spaceBetween:10,
    pagination:{
        el:'.js-testimonials-pagination',
        clickable:true
    },
    breakpoints:{
        767:{
            slidesPerView:1
        }
    }
});