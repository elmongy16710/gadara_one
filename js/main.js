const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



let myBollets = [...document.querySelectorAll(".custom-swiper-pagination span")];


for(let i = 0 ; i < 10; i++){
    myBollets[i].innerHTML = `0${i + 1}`
}