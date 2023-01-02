const output = document.querySelector(".output");
const generateBtn = document.querySelector(".generate-btn");
const input = document.querySelector(".set-output-length");

const alphabet = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numbers = "1234567890".split("");

function getRandomSymbol(max) {
  return Math.floor(Math.random() * max);
}

generateBtn.addEventListener("click", () => {
  if (input.value >= 8 && input.value <= 20) {
    input.style.background = "#005d00b4";
    return generatePassword(input.value);
  }
  input.style.background = "#4e000097";
  if (input.value < 8) {
    output.innerHTML = "Слишком маленькое число!";
  } else {
    output.innerHTML = "Слишком большое число!";
  }
});

function generatePassword(characters) {
  clearInterval(cursor);
  output.innerHTML = "";
  let counter = 0;
  let setRandomSymbol;
  let textArr = [];
  let randomSymbol = setInterval(() => {
    if (getRandomSymbol(3) === 1) {
      setRandomSymbol = alphabet[0][getRandomSymbol(alphabet[0].length + 1)];
    } else if (getRandomSymbol(3) === 2) {
      setRandomSymbol = alphabet[1][getRandomSymbol(alphabet[0].length + 1)];
    } else {
      setRandomSymbol = numbers[getRandomSymbol(numbers.length + 1)];
    }
    if (counter > 10) {
      textArr.push(setRandomSymbol);
      output.innerHTML = textArr.join("");
      counter = 0;
    } else {
      textArr.push(setRandomSymbol);
      output.innerHTML = textArr.join("");
      textArr.pop();
      counter++;
    }
    if (output.innerHTML.length > characters - 1) {
      clearInterval(randomSymbol);
      return;
    }
  }, 50);
}

let cursor = setInterval(() => {
  let textContent = output.innerHTML.split("");
  if (textContent.includes("|")) {
    textContent.splice(textContent.indexOf("|", 0), 1);
    output.innerHTML = textContent.join("");
    return;
  }
  textContent.push("|");
  output.innerHTML = textContent.join("");
}, 650);
