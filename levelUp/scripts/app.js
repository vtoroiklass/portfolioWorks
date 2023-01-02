// Init el
const carousel = document.querySelector('.reviews-carousel');
const timerShow = document.querySelector('.timer')
const timerStartBtn = document.querySelectorAll('.levelUp-btn')

// Initializing an array of user reviews
const users = [
    {
        name: 'Sarkis Harutyunyan',
        comment: 'Вы извините. У меня пока не отзыв, а вопрос - какое время воздействия. Спасибо',
        avatar: 'https://cdnn1.img.crimea.ria.ru/img/07e5/0b/15/1121496728_0:85:960:625_600x0_80_0_0_eaa382c6c8cd2c065659b6c16c1fb438.jpg'
    },
    {
        name: 'Swilliamlee Lavander',
        comment: 'Беру LevelUp, меня хватает на двоих сразу, утром и вечером. Чувствую себя лет на 25, горжусь прямо.',
        avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3'
    },
    {
        name: 'Федор',
        comment: 'Добрый день. Мне 40 лет, сталкиваюсь периодечески с половым бессилием. Начинал пить LevelUp с дозы 100 мг. Постепенно дозировка была снижена врачом до 50 мг. Пить нужно средство не менее, чем за час до интимной близости.',
        avatar: 'https://aif-s3.aif.ru/images/007/514/210bec42976c310f2134eab46fab20b7.jpg'
    },
    {
        name: 'Александр Зноев',
        comment: 'Добрый день. Мне 60 лет, уже силы не те как в молодости. В браке 30 лет, захотел разнообразить нашу жизнь. Приобрел LevelUp. Ощутил себя снова молодым, эрекция была как в 25 лет. Хорошо, что есть такие препараты.',
        avatar: 'https://static.mk.ru/upload/entities/2022/05/16/16/articles/detailPicture/e7/25/49/2f/2fb5a550c0699c9f31ec6cf2c6d41062.jpg'
    }
]

// Creating a block with reviews
for (let i = 0; i < 4; i++) {
    const carouselElement = document.createElement('div')
    carouselElement.classList.add('reviews-carousel-el')

    const carouselAvatar = document.createElement('div')
    carouselAvatar.classList.add('reviews-avatar')

    const carouselName = document.createElement('div')
    carouselName.classList.add('reviews-name')

    const carouselText = document.createElement('div')
    carouselText.classList.add('reviews-text')

    const avatar = document.createElement('img');
    avatar.src = users[i].avatar
    avatar.style.width = 150 + 'px'
    avatar.style.height = 100 + 'px'

    const name = document.createElement('span')
    name.innerHTML = users[i].name
    name.classList.add('user-name')

    const text = document.createElement('span')
    text.innerHTML = users[i].comment

    carousel.appendChild(carouselElement)

    carouselElement.appendChild(carouselAvatar)
    carouselElement.appendChild(carouselName)
    carouselElement.appendChild(carouselText)

    carouselAvatar.appendChild(avatar)
    carouselName.appendChild(name)
    carouselText.appendChild(text)
}

// Slick slider activation
function sliderActivation() {
    if (window.screen.width < 700) {
        $(document).ready(function () {
            $('.reviews-carousel').slick({
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,

            });
        })
    } else {
        $(document).ready(function () {
            $('.reviews-carousel').slick({
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,

            });
        })
    }
}

if (window.screen.width < 700) {
    $(document).ready(function () {
        $('.reviews-carousel').slick({
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,

        });
    })
} else {
    $(document).ready(function () {
        $('.reviews-carousel').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,

        });
    })
}

//Timer
const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
let killTimer = 0
function getScrollBy() {
    window.scrollBy(0, scrollHeight)
}
for (let i = 0; i < timerStartBtn.length - 1; i++) {

    timerStartBtn[i].addEventListener('click', () => {
        getScrollBy()
        let timeMinute = 30 * 60
        if (killTimer > 0) {
            return
        }
        let timer = setInterval(function () {
            killTimer = killTimer > 2 ? killTimer : killTimer + 1
            let seconds = timeMinute % 60
            let minutes = timeMinute / 60 % 60
            --timeMinute
            if (timeMinute <= 0) {
                clearInterval(timer);
                alert('Время закончилось')
            } else {
                let strTimer = `${Math.trunc(minutes)}:0${seconds}`
                if (seconds < 10) {
                    strTimer = `${Math.trunc(minutes)}:0${seconds}`
                } else {
                    strTimer = `${Math.trunc(minutes)}:${seconds}`
                }
                timerShow.innerHTML = strTimer
            }
        }, 1000)

    })
}

// Activate animation library on scroll
AOS.init({
    disable: 'mobile',
    once: true
});