import Swiper, { Navigation, Pagination, FreeMode} from "swiper"; 
Swiper.use([Navigation, Pagination, FreeMode]); 



const cooperationSlider = new Swiper(".cooperation__slider", { 
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 40, 
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  navigation: {
    nextEl: '.cooperation__arrow--next',
    prevEl: '.cooperation__arrow--prev',
  },
});

const mobSlider = document.querySelector('.gamedev__slider');

let myMobSwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && mobSlider.dataset.mobile == 'false') {
		myMobSwiper = new Swiper(mobSlider, {
			slidesPerView: 1,
      freeMode: true,
			slideClass: 'gamedev__slide',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      },
		});

		mobSlider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		mobSlider.dataset.mobile = 'false';
		if (mobSlider.classList.contains('swiper-initialized')) {
			myMobSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});