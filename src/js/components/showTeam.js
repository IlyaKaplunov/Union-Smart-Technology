const showMore = document.querySelector('.team__show');
const productsLength = document.querySelectorAll('.team__item').length;
let items = 6;

showMore.addEventListener('click', () => {
	items += 3;
	const array = Array.from(document.querySelector('.team__inner').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
});
