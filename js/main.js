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



// header-slider

let myBollets = [...document.querySelectorAll(".custom-swiper-pagination span")];

let myAllItems = document.querySelector(".custom-swiper-wrapper");




for (let i = 0; i < myAllItems.children.length; i++) {
    myBollets[i].innerHTML = `0${i + 1}`
}



const swiper3 = new Swiper('.Management-swiper', {
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
    breakpoints: {
        // when window width is >= 320px
      
        // when window width is >= 480px
        
       
    }
});