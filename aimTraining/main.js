const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeBtns = document.querySelector('#time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let score = 0
let colors = [
    '#33C5EE', '#90DAEE', '#6AA0AF', '#0089AF',
    '#005D77', '#004577', '#0068B2', '#00406E',
    '#1F4D6E', '#47B2FF', '#0095FF', '#003459',
    '#173D59', '#00223B', '#0022B8', '#2843B8'
]

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    setScreen(0);
})

timeBtns.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        setScreen(1);
        startGame();
    }

})

board.addEventListener('click', (event) => {

    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove();
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000);
    setTime(time);
    createRandomCircle();
}

function decreaseTime() {
    let current = --time
    if (current >= 0) {
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    } else finishGame()
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function setScreen(screen) {
    screens[screen].classList.add('up');
}

function finishGame() {
    board.innerHTML = `<h1>Ваш счет: <span class='primary'>${score}</span></h1>`;
    timeEl.parentNode.classList.add('hide');
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect()

    circle.style.background = getRandomColor();

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}

function winTheGame() {

    function kill() {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.click()
        }
    }

    setInterval(kill, 0.1)
}