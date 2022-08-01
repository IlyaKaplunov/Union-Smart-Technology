/* import { auto } from "@popperjs/core"; */
import Swiper, { Navigation, Pagination, FreeMode} from "swiper"; 
Swiper.use([Navigation, Pagination, FreeMode]); 



const cooperationSlider = new Swiper(".cooperation__slider", { 
  speed: 1000,
  slidesPerView: 1,
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
  breakpoints: {
    920: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1
    }
  }
});

const mobSlider = document.querySelector('.gamedev__slider');

let myMobSwiper;

function mobileSlider() {
	if (window.innerWidth <= 768 && mobSlider.dataset.mobile == 'false') {
		myMobSwiper = new Swiper(mobSlider, {
			slidesPerView: 1,
      spaceBetween: 40,
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

	if (window.innerWidth > 768) {
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

const mobSlider2 = document.querySelector('.office__slider');

let myMobSwiper2;

function mobileSlider2() {
	if (window.innerWidth <= 768 && mobSlider2.dataset.mobile == 'false') {
		myMobSwiper2 = new Swiper(mobSlider2, {
			slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
			slideClass: 'office__img',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      },
		});

		mobSlider2.dataset.mobile = 'true';
	}

	if (window.innerWidth > 768) {
		mobSlider2.dataset.mobile = 'false';
		if (mobSlider2.classList.contains('swiper-initialized')) {
			myMobSwiper2.destroy();
		}
	}
}

mobileSlider2()

window.addEventListener('resize', () => {
	mobileSlider2();
});