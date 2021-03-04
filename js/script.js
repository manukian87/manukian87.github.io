const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
    
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.myskills__block-percent'),
    lins = document.querySelectorAll('.myskills__block-line span');

percent.forEach((item, i) => {
    lins[i].style.width = item.innerHTML;
        
});



let btnPortfolio = document.querySelector('#btnPortfolio');
let btnAbout = document.querySelector('#btnAbout');
let btn = document.querySelector('.btn');

btnPortfolio.onclick = () => {
    btnPortfolio.style.background = '#ffa501';
    btnAbout.style = btn.classList.remove('active');
};

btnAbout.onclick = () => {
    btnAbout.style.background = '#ffa501';
    btnPortfolio.style = btn.classList.remove('active');
};



   