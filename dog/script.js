// create elements
let prevButton = document.querySelector('.prev-btn');
let dogImage = document.querySelector('.main-img-dog');
let sliderAmount = document.querySelector('.slider-amount-img');
let nextButton = document.querySelector('.next-btn');
let totalDog = document.querySelector('.solution-dog');
let dogName = document.querySelector('.main-dog-name');
let btnReload = document.querySelector('.btn-reload-page');

// create images array
let currentImageIndex = 0;

let arrayImg = [];
arrayImg.push("https://i.gifer.com/ent.gif");
arrayImg.push('gif/drinkwaterdog.gif');
arrayImg.push('gif/agreeingdog.gif');
arrayImg.push('gif/superdog.gif');
arrayImg.push('gif/hotdog.gif');

dogImage.src = arrayImg[currentImageIndex];

// description of dogs
let amountImg = function () {
    if (currentImageIndex == 0) {
        sliderAmount.innerHTML = `номир собачи: ${currentImageIndex + 1}, это таневальный пес`;
    }
    if (currentImageIndex == 1) {
        sliderAmount.innerHTML = `номир собачи: ${currentImageIndex + 1}, эта собачь пьет водически`;
    }
    if (currentImageIndex == 2) {
        sliderAmount.innerHTML = `номир собачи: ${currentImageIndex + 1}, он согласен`;
    }
    if (currentImageIndex == 3) {
        sliderAmount.innerHTML = `номир собачи: ${currentImageIndex + 1}, супирпес`;
    }
    if (currentImageIndex == 4) {
        sliderAmount.innerHTML = `номир собачи: ${currentImageIndex + 1}, даволны доставалец еды`;
    }
};

amountImg();

// create event button

// prev click
let onShowPrevBtnClick = function (event) {
    if (currentImageIndex == 0) {
        // reloaded slider
        currentImageIndex = (arrayImg.length - 1);
    } else {
        currentImageIndex--;
    }
    dogImage.src = arrayImg[currentImageIndex];
    amountImg();
};

// next click
let onShowNextBtnClick = function (event) {
    if (currentImageIndex >= (arrayImg.length - 1)) {
        // reloaded slider
        currentImageIndex = 0;
    } else {
        currentImageIndex++;
    }
    dogImage.src = arrayImg[currentImageIndex];
    amountImg();
};

// reload page
let onReloadBtnClick = function (event) {
    location.reload()
}


// user selection totals button
let totalBtn = function (event) {
    // remove unwanted buttons
    prevButton.remove();
    nextButton.remove();
    totalDog.remove();

    // notification of the consequences of the choice
    sliderAmount.innerHTML = `этот выбор будет иметь последствие. И его уже не изменить.`;

    // creating elements for selecting the name of the dog
    dogName.innerHTML = 'теперь введите имя этой собаки!';

    // creating new input for dog name
    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    let inputDogName = document.querySelector('.input-dog-name');
    inputDogName.appendChild(input);

    // creating a btn to accept the name
    let btn = document.createElement("input");
    btn.type = 'button';
    btn.value = 'я хочу эти имя!';
    inputDogName.appendChild(btn);

    // result game
    btn.addEventListener('click', function () {
        // selection user results
        if (input.value != '') {

            inputDogName.remove();

            if (currentImageIndex == 0) {
                dogName.innerHTML = `${input.value} танцевал(a) так долго, что стал(а) победителем в шоу танцы дети)`;
            }
            if (currentImageIndex == 1) {
                dogName.innerHTML = `онет!!! ${input.value} выпил всю воду в мире... и вас(`;
            }
            if (currentImageIndex == 2) {
                dogName.innerHTML = `${input.value} соглашался на все и на него оформили кредит. платить вам)`;
            }
            if (currentImageIndex == 3) {
                dogName.innerHTML = `${input.value} слишком долго шел и ушел(`;
            }
            if (currentImageIndex == 4) {
                dogName.innerHTML = `ура благодаря ${input.value}у вы поели!`;
            }
        } else alert('Вы не ввели имя!');
    })
}


// event buttons
totalDog.addEventListener('click', totalBtn);
prevButton.addEventListener('click', onShowPrevBtnClick);
nextButton.addEventListener('click', onShowNextBtnClick);
btnReload.addEventListener('click', onReloadBtnClick);