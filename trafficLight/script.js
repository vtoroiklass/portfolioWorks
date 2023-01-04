// init el
const circles = document.querySelectorAll('.light-el');
const inputs = document.querySelectorAll('.choose-time-input');
const startBtn = document.querySelector('.start-btn');
const pedestrianBtn = document.querySelector('.pedestrian-btn');
const timer = document.querySelector('.time');
const reloadBtn = document.querySelector('.reboot-btn');

// init counters
let switchCounter = 0;
let start = 0;

// init inputs values
inputs[0].value = 5;
inputs[1].value = 3;
inputs[2].value = 5;

// timer value
timer.innerHTML = `Осталось ждать: </br> <b>${+inputs[0].value + +inputs[1].value}</b> секунд`

// changing the waiting time depending on the value of the inputs
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', () => {
        if (start === 1) return;

        timer.innerHTML = `Осталось ждать: </br> <b>${+inputs[0].value + +inputs[1].value}</b> секунд`
    })
}

// page reload btn handler
reloadBtn.addEventListener('click', () => {
    location.reload()
})


// "passive" traffic light colors
const darkColors = [
    '#ff01012a',
    '#ffaf0127',
    '#01ff0e1e'
]

// active traffic light colors
const lightColors = [
    '#ff0000b9',
    '#ff8800b9',
    '#00ff0db9'
]

// default traffic light colors
for (let i = 0; i < circles.length; i++) {
    circles[i].style.background = darkColors[i]
}

// changing traffic light color
function trafficLight(count) {
    circles[count].style.background = lightColors[count]
}

// return default traffic light colors
function clearLight() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].style.background = darkColors[i]
    }
}

// traffic light operation
function trafficLightFunction(btn, firstTime, secondTime, thirdTime) {

    if (btn == 'start') {
        if (!firstTime || !secondTime || !thirdTime) {
            alert(1)
            return
        }
        secondTime = +firstTime + +secondTime
        thirdTime = +secondTime + +thirdTime
        trafficLight(0)
        circles[0].innerHTML = firstTime

        var switchColors = setInterval(() => {
            // init timeout
            let wait = secondTime - (switchCounter + 1)

            // changing the timeout value
            if (wait < 1) {
                timer.innerHTML = 'Не нужно ждать - идите!'

            } else {
                let waitLastEl = wait.toString().split('')
                waitLastEl = +(waitLastEl[waitLastEl.length - 1])
                if (waitLastEl === 1) {
                    timer.innerHTML = `Осталось ждать: </br> <b>${secondTime - (switchCounter + 1)}</b> секунду`
                } else if (waitLastEl === 2 ||
                    waitLastEl === 3 ||
                    waitLastEl === 4) {
                    timer.innerHTML = `Осталось ждать: </br> <b>${secondTime - (switchCounter + 1)}</b> секунды`
                } else {
                    timer.innerHTML = `Осталось ждать: </br> <b>${secondTime - (switchCounter + 1)}</b> секунд`
                }
            }

            // timeout green
            if (switchCounter + 2 > +secondTime) {
                circles[2].innerHTML = (thirdTime - 1) - switchCounter
                if (((thirdTime - 1) - switchCounter) < 1) {
                    circles[2].innerHTML = ''
                }
            }

            // timeout orange
            if (switchCounter + 2 > +firstTime && switchCounter + 3 < thirdTime) {
                circles[1].innerHTML = (secondTime - 1) - switchCounter
                if (((secondTime - 1) - switchCounter) < 1) {
                    circles[1].innerHTML = ''
                }
            }

            // timeout red
            if (switchCounter - 1 < firstTime || switchCounter < secondTime) {
                circles[0].innerHTML = (firstTime - 1) - switchCounter
                if (((firstTime - 1) - switchCounter) < 1) {
                    circles[0].innerHTML = ''
                }
            }

            switchCounter++

            // orange activation
            if (switchCounter === +firstTime) {
                clearLight()
                trafficLight(1)
                return
            }

            // green activation
            if (switchCounter === +secondTime) {
                clearLight()
                trafficLight(2)
                return
            }

            // red activation
            if (switchCounter === +thirdTime) {
                clearLight()
                trafficLight(0)
                circles[0].innerHTML = firstTime
                timer.innerHTML = `Осталось ждать: </br> <b>${secondTime}</b> секунд`

                switchCounter = 0
                return
            }


        }, 1000)
    }
}

// startBtn click handler
startBtn.addEventListener('click', () => {
    // double click protection
    if (start === 1) return;
    start = 1
    
    trafficLightFunction('start', inputs[0].value, inputs[1].value, inputs[2].value)
})
