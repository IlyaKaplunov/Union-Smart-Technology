const showButton = document.querySelector(".team__show");
const itemNone = document.querySelectorAll(".team__item--none");

showButton.addEventListener("click", function (e) {
  for (let item of itemNone) {
    item.classList.toggle("_block");
    if (item.classList.contains("_block")) {
      showButton.innerHTML = `Свернуть`;
    } else {
      showButton.innerHTML = `Вся команда`;
    }
  }
});