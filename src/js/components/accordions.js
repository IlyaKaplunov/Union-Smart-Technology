const accordionItemHeaders = document.querySelectorAll(".accordion__header");
const accordionIcon = document.querySelectorAll(".accordion__icon");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
      
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion__header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

const vacanciesTops = document.querySelectorAll(".vacancies__top");

vacanciesTops.forEach(vacanciesTop => {
  vacanciesTop.addEventListener("click", event => {
      
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveVacanciesTop = document.querySelector(".vacancies__top.active");
    if(currentlyActiveVacanciesTop && currentlyActiveVacanciesTop!==vacanciesTop) {
       currentlyActiveVacanciesTop.classList.toggle("active");
       currentlyActiveVacanciesTop.nextElementSibling.style.maxHeight = 0;
    }

    vacanciesTop.classList.toggle("active");
    const vacanciesBody = vacanciesTop.nextElementSibling;
    if(vacanciesTop.classList.contains("active")) {
      vacanciesBody.style.maxHeight = vacanciesBody.scrollHeight + "px";
      
    }
    else {
      vacanciesBody.style.maxHeight = 0;
    }
    
  });
});