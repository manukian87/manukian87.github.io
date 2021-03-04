

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("reviews__item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex=slides.length
  }
  for (i = 0; i <slides.length ; i++ ){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
};



const scrollBtn = document.querySelector('.showeBtn');
window.onscroll = () => {
  if (window.scrollY > 700) {
    scrollBtn.classList.remove('showeBtn_hide');
  } else if (window.scrollY < 700) {
    scrollBtn.classList.add('showeBtn_hide');
  };
  scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
  };
};


const menu = document.querySelector('.menu__list'),
  hamburger = document.querySelector('.hamburger'),
  menulink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

menulink.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });
});