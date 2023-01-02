// initial el
const myBtnOperation = document.querySelectorAll('.btn-operation');
const myBtnNum = document.querySelectorAll('.btn-num')
const myInput = document.querySelector('.main-my-input');
const myBtnEquals = document.querySelector('.btn-equals');
const myBtnCleaner = document.querySelector('.btn-cleaner');
const myBtnRemove = document.querySelector('.btn-removal');
const myBtnHooks = document.querySelector('.btn-hooks');
const myBtnSign = document.querySelector('.btn-sign');
const myBtnDot = document.querySelector('.btn-dot');

// local storage
const inp = document.querySelectorAll('.save'),
    vals = localStorage.getItem('vals') ? localStorage.getItem('vals').split`,` : '';
for (let i = 0; i < inp.length; i++) vals[i] ? inp[i].value = vals[i] : '';
window.addEventListener('beforeunload', () => localStorage.setItem('vals', [...inp].map(e => e.value)));


// click numBtn & click operationBtn
function onClickBtn(btn) {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            if (btn === myBtnNum) {
                const result = [myInput.value].join('').split('')
                if (!Number.isFinite(+result[result.length - 1]) && result[result.length - 1] != '(' && result.length > 1) {
                    myInput.value += '*' + btn[i].innerHTML
                } else myInput.value += btn[i].innerHTML
            } else myInput.value += ` ${btn[i].innerHTML} `
        })
    }
}

// implementation of num btns
onClickBtn(myBtnNum)
onClickBtn(myBtnOperation)

// calculate result
myBtnEquals.addEventListener('click', () => {
    if (myInput.value) {
        myInput.value = eval(myInput.value);
    }
})

// imput cleansing
myBtnCleaner.addEventListener('click', () => {
    myInput.value = ''
    arr = []
})

// remove the last num
myBtnRemove.addEventListener('click', () => {
    myInput.value = myInput.value.slice(0, -1)
})

// change the sign of the next input number
myBtnSign.addEventListener('click', () => {
    const lastEl = myInput.value[myInput.value.length - 1];
    if (myInput.value) {
        if (Number.isFinite(+lastEl) ||
            lastEl === ')' ||
            lastEl === '(') {
            myInput.value += '*(-'
        } else myInput.value += '(-'
    } else myInput.value += '(-'
})

// implementation adding a fractional num to the input
myBtnDot.addEventListener('click', () => {
    const lastEl = myInput.value[myInput.value.length - 1]
    const arrEl = myInput.value.split(' ')
    if (!Number.isFinite(+lastEl) && lastEl != '.' || arrEl[arrEl.length - 1] === '') {
        myInput.value += '0.'
    } else if (!arrEl[arrEl.length - 1].split('').includes('.')) {
        myInput.value += '.'
    }
})

// adding parentheses
myBtnHooks.addEventListener('click', () => {
    const result = [myInput.value].join('').split('')
    let arr = 0

    for (let i = 0; i < myInput.value.length; i++) {
        if (myInput.value[i] === '(') arr++
    }

    if (result.indexOf('(') === -1) {
        if (Number.isFinite(+result[result.length - 1]) && result[result.length - 1] != ' ') {
            myInput.value += '*('
        } else myInput.value += '('

    } else if ((result.filter(item => item === ')').length) === arr) {

        if (Number.isFinite(+result[result.length - 1]) && result[result.length - 1] != ' ' || result[result.length - 1] === ')') {
            myInput.value += '*('
        } else myInput.value += '('
    } else {
        result[result.length - 1] === '(' ? myInput.value += '(' : a()
        function a() {
            if ((result.filter(item => item === ')')).length < arr) {
                myInput.value += ')'
            }
        }
    }
})