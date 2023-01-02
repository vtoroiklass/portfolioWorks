const navBtn = document.querySelector('#nav-button');
const nav = document.querySelector('#nav');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
        navBtnImg.src = 'imgs/icons/nav-open.svg'
        nav.classList.remove('open');
        document.querySelector('body').style.overflow = 'auto'
    } else {
        navBtnImg.src = 'imgs/icons/nav-close.svg'
        document.querySelector('body').style.overflow = 'hidden'
        nav.classList.add('open')
    }
})

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        navBtn.style.opacity = 0.3
    } else {
        navBtn.style.opacity = 1
    }
})

AOS.init({
    disable: 'mobile',
    once: true
});