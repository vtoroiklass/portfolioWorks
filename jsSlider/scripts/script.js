// init el
const showPrevBtn = document.querySelector('.prev-btn');
const showNextBtn = document.querySelector('.next-btn');
const sliderImage = document.querySelector('.my-img');
const slider = document.querySelector('.slides');
const sliderWrapper = document.querySelector('.slider');
const board = document.querySelector('.counter-board');
function initImgWrapper() {
    return document.querySelectorAll('.slides-item');
}
initImgWrapper();

// create images array
let imagesArray = [];
imagesArray.push('imgs/1.jpg');
imagesArray.push('imgs/2.jpg');
imagesArray.push('imgs/3.jpeg');
imagesArray.push('imgs/4.jpg');
imagesArray.push('imgs/5.jpg');
imagesArray.push('imgs/6.jpg');
imagesArray.push('imgs/7.jpg');
imagesArray.push('imgs/8.jpg');

// sets the position of the circles under the image
let numImg = -1;

// active circle is set
function activeCircle() {
    const counterImg = document.querySelectorAll('.my-circles');

    for (let i = 0; i < counterImg.length; i++) {
        counterImg[i].style.height = 5 + 'px';
        counterImg[i].style.width = 5 + 'px';
        counterImg[i].style.marginTop = 25 + 'px';
        counterImg[i].style.background = '#3E3E3E';
        if (i === numImg) {
            counterImg[i].style.height = 10 + 'px';
            counterImg[i].style.width = 10 + 'px';
            counterImg[i].style.marginTop = 22.5 + 'px';
            counterImg[i].style.background = '#2C2C2C';
        }
    }
}

// switching image by clicking circles
function switchImgUsCircle(countImg) {
    numImg = countImg;
    document.querySelector('img').src = imagesArray[numImg];
    activeCircle();
}

// init circles
for (let i = 0; i < imagesArray.length; i++) {
    const circles = document.createElement('div');
    circles.className = 'my-circles';
    board.appendChild(circles);
    circles.addEventListener('click', () => {
        switchImgUsCircle(i);
    })
}

// create next or previous image
function createImgEl(route = 'next') {
    const ImgEl = document.createElement('img');
    ImgEl.src = imagesArray[numImg];
    const ImgElWrapper = document.createElement('div');
    ImgElWrapper.className = 'slides-item';
    if (route == 'prev') {
        ImgElWrapper.classList.add('slides-item2');
        const first = slider.childNodes[0];
        ImgElWrapper.appendChild(ImgEl);
        slider.insertBefore(ImgElWrapper, first);
    } else {
        ImgElWrapper.classList.add('slides-item1');
        slider.appendChild(ImgElWrapper);
        ImgElWrapper.appendChild(ImgEl);
    }
}

// "next" button click handler
showNextBtn.addEventListener('click', () => {
    const wrapper = initImgWrapper();
    if (wrapper.length > 1) {
        return
    }

    if (numImg >= imagesArray.length - 1) {
        numImg = 0;
    } else {
        numImg++;
    }

    if (wrapper.length <= 1) {
        createImgEl();
    }

    activeCircle();

    setInterval(() => {
        wrapper[0].remove();
    }, 500)

    wrapper[0].style.marginLeft = -100 + '%';
})

showNextBtn.click();


// previous img display function
function showPrevImg() {
    const wrapper = initImgWrapper();

    if (wrapper.length < 2) {
        createImgEl('prev');
    }

    activeCircle();

    if (wrapper.length > 1) {
        setInterval(() => {
            wrapper[wrapper.length - 1].remove();
        }, 500)
    }

    wrapper[0].style.marginLeft = 0 + '%';
}

// "prev" button click handler
showPrevBtn.addEventListener('click', () => {
    const wrapper = initImgWrapper();
    if (wrapper.length > 1) {
        return
    }
    if (numImg <= 0) {
        numImg = imagesArray.length - 1;
    } else {
        numImg--;
    }
    showPrevImg();
    setTimeout(showPrevImg, 10);
})