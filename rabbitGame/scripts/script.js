const timer = document.querySelector('.timer');
const startGameBtn = document.querySelector('.start');
const roundHeader = document.querySelector('.round');
const scoreFirstPlayer = document.querySelector('.first-score');
const scoreSecondPlayer = document.querySelector('.second-score');
const exBtn = document.querySelector('.clicker');
const firstRabbit = document.querySelector('.rabbit1');
const secondRabbit = document.querySelector('.rabbit2');
const closeNameFrameBtn = document.querySelector('.close-btn');
const namePlayerFrame = document.querySelector('.enter-name-frame');
const firstPlayerNameInput = document.querySelector('.input-first-player-name');
const secondPlayerNameInput = document.querySelector('.input-second-player-name');
const firstRabbitName = document.querySelector('.first-rabbit-name');
const secondRabbitName = document.querySelector('.second-rabbit-name');
const aceptPlayersNameBtn = document.querySelector('.acept-btn');
let time = 3
let score1 = 0
let score2 = 0

closeNameFrameBtn.addEventListener('click', () => {
    namePlayerFrame.style.top = -350 + 'px'
})

aceptPlayersNameBtn.addEventListener('click', () => {
    function editName(input, player, rabbit = 'rabbit 1') {
        if (input.value.length > 0) {
            player.innerHTML = input.value
        } else {
            player.innerHTML = rabbit
        }
    }
    editName(firstPlayerNameInput, firstRabbitName)
    editName(secondPlayerNameInput, secondRabbitName)
    closeNameFrameBtn.click()
})

// function nextRound(intervalFn) {
//     timer.innerHTML = 
//     if (time === 0) {
//         timer.innerHTML = 'Время вышло:('
//         if (score1 === score2) {
//             roundHeader.innerHTML = 'Ничья!'
//         } else {
//             if (score1 > score2) {
//                 roundHeader.innerHTML = `В этом раунде победил ${firstRabbitName.innerHTML}`

//             } else roundHeader.innerHTML = `В этом раунде победил ${secondRabbitName.innerHTML}`
//         }

//         clearInterval(intervalFn)

//     } else {
//         timer.innerHTML = `Оставшееся время: ${time--}!`
//     }
// }

function roundTimer(intervalFn) {
    if (time === 0) {
        timer.innerHTML = 'Время вышло:('
        if (score1 === score2) {
            roundHeader.innerHTML = 'Ничья!'
        } else {
            if (score1 > score2) {
                roundHeader.innerHTML = `В этом раунде победил ${firstRabbitName.innerHTML}`

            } else roundHeader.innerHTML = `В этом раунде победил ${secondRabbitName.innerHTML}`
        }

        clearInterval(intervalFn)

    } else {
        timer.innerHTML = `Оставшееся время: ${time--}!`
    }
}
function startRound(intervalFn) {
    if (time === 0) {
        timer.innerHTML = 'Пуск!';
        time = 10;
        let count1 = 0;
        let count2 = 0;
        function move(e) {
            switch (e.key) {
                case 'w':
                    if (time > 0) {
                        count1 += 5;
                        scoreFirstPlayer.innerHTML = `Счет: ${score1++}`;
                        firstRabbit.style.marginLeft = score1 + count1 + 'px';
                    }
                    break;
                case 'o':
                    if (time > 0) {
                        count2 += 5;
                        scoreSecondPlayer.innerHTML = `Счет: ${score2++}`;
                        secondRabbit.style.marginLeft = score2 + count2 + 'px';
                    }
                    break;
            }
        }
        addEventListener('keyup', move)
        clearInterval(intervalFn)
    } else {
        timer.innerHTML = time--
    }
    if (time === 10) {
        const tack = setInterval(() => { roundTimer(tack) }, 1000)
    }
}

startGameBtn.addEventListener('click', () => {
    roundHeader.innerHTML = 'Раунд 1'
    const tick = setInterval(() => { startRound(tick) }, 1000)
    scoreFirstPlayer.innerHTML = `Cчет: ${score1}`
})