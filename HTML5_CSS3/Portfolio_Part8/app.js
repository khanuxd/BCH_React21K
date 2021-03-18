let header = document.querySelector('.navbar-main');
let buttonBackToTop = document.getElementById('backToTop');
let buttonMobile = document.getElementById('Burger-menu');
let nav = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a');

window.onscroll = function () {
    progressBar();
    scrollFunction();
};

const scrollFunction = () => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        header.classList.add('bg');
        buttonBackToTop.style.visibility = 'visible';
    } else {
        header.classList.remove('bg');
        buttonBackToTop.style.visibility = 'hidden';
    }
}

const progressBar = () => {

    let pageScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (pageScroll > 100) {
        document.querySelector('.progress-container').style.display = 'block';
    } else {
        document.querySelector('.progress-container').style.display = 'none';
    }

    let scrolledHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolledPercentage = (pageScroll / scrolledHeight) * 100;

    document.querySelector('.progress-bar').style.width = scrolledPercentage + "%";
}

const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', mobMenu)
    }
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';

    } else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
    }
}

buttonBackToTop.addEventListener('click', goToTop);
buttonMobile.addEventListener('click', mobMenu);