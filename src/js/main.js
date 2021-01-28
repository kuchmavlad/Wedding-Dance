// Burger

let nav = document.querySelector('#nav');
let navBtn = document.querySelector('#navBtn');
let menu = document.querySelector('.header__menu');
let navBurger = document.querySelector('#navBurger');

navBurger.addEventListener('click', function(e) {
	e.preventDefault();

	navBurger.classList.toggle('burger__active');
	nav.classList.toggle('show');
	menu.classList.toggle('show');
	navBtn.classList.toggle('btn--pink');

});


// Services Slider

let services = new Swiper('.services-slider' , {

     pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets: true,
       },
       	// к-тво слайдов
       slidesPerView: 3,

       // отступы между слайдами
       spaceBetween: 16,

       // отключение фукционала если слайдом меньше чем нужно
       watchOverflow: true,

       // респонсив
       breakpoints: {
       	320: {
       		slidesPerView: 1.2,
       	},
       	540: {
       		slidesPerView: 2.2,
       	},
       	992: {
       		slidesPerView: 3,
       	}

       },
});

// Coaches Slider

let coaches = new Swiper('.coaches-slider' , {

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

     pagination: {
         el: '.swiper-pagination',

         // фракция
         type: 'fraction',

         // Кастомная фракция
         renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
          ' of ' +
          '<span class="' + totalClass + '"></span>';
         }
       },
        // к-тво слайдов
       slidesPerView: 2,

       // отступы между слайдами
       spaceBetween: 16,


       // респонсив
       breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        540: {
          slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 2,
        }

       },
})

new WOW().init();