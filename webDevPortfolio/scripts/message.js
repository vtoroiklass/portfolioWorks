const writeBtn = document.querySelector(".communication");
const messageBlock = document.querySelector(".message");
const closeMessageBlock = document.querySelector(".close-message-btn");
const input = document.querySelector(".write-message");
const sendMessageBtn = document.querySelector(".send-message-btn");

const messages = [];

function calculateMargin() {
  return 20 + messages.reduce((acc, num) => acc + num, 0) + "px";
}

function pushMessagesArr(message) {
  messages.push(message.clientHeight + 10);
}

function createMessage(messageName, innerHTML, ...classes) {
  messageName.innerHTML = innerHTML;
  for (let i = 0; i < classes.length; i++) {
    messageName.classList.add(classes[i]);
  }
  messageBlock.appendChild(messageName);

  pushMessagesArr(messageName);
}

let a = 0;

writeBtn.addEventListener("click", () => {
  messageBlock.style.display = "block";

  let showMessageBlock = setInterval(() => {
    messageBlock.style.bottom = 0;
    clearInterval(showMessageBlock);
  }, 1);

  if (a === 0) {
    a = 1;

    const firstMessage = document.createElement("div");
    firstMessage.classList.add("bot-message");
    firstMessage.classList.add("chat-message");
    firstMessage.innerHTML = "Здравствуйте!";
    messageBlock.appendChild(firstMessage);

    pushMessagesArr(firstMessage);

    // createMessage(firstMessage, 'Здравствуйте!', 'bot-message', 'chat-message')

    let sendMessage = setInterval(() => {
      firstMessage.style.left = 10 + "px";

      const secondMessage = document.createElement("div");
      secondMessage.classList.add("bot-message");
      secondMessage.classList.add("chat-message");
      secondMessage.innerHTML = "Какой у вас вопрос?";
      messageBlock.appendChild(secondMessage);

      secondMessage.style.top = calculateMargin();

      pushMessagesArr(secondMessage);

      clearInterval(sendMessage);

      let sendSecondMessage = setInterval(() => {
        secondMessage.style.left = 10 + "px";
        clearInterval(sendSecondMessage);
      }, 800);
    }, 300);
  }
});

sendMessageBtn.addEventListener("click", () => {
  if (a === 1) {
    if (input.value === "") {
      return;
    }
    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = input.value;
    input.value = "";

    userMessage.style.top = calculateMargin();

    a = 2;

    messageBlock.appendChild(userMessage);
    pushMessagesArr(userMessage);

    sendMessageBtn.style.background = "#828282";
    sendMessageBtn.style.cursor = "alias";

    let sendUserMessage = setInterval(() => {
      userMessage.style.right = 10 + "px";

      const botAnswer = document.createElement("div");
      botAnswer.classList.add("chat-message");
      botAnswer.classList.add("bot-message");
      botAnswer.innerHTML =
        "Для более точного ответа свяжитесь со мной через телеграм: @ahahclassicck";

      botAnswer.style.top = calculateMargin();

      messageBlock.appendChild(botAnswer);

      clearInterval(sendUserMessage);

      let sendBotAnswer = setInterval(() => {
        botAnswer.style.left = 10 + "px";
        clearInterval(sendBotAnswer);
      }, 800);
    }, 100);
  }
});

function closeMessageBlockFn() {
  messageBlock.style.bottom = -50 + "%";
  let hideMessageBlock = setInterval(() => {
    messageBlock.style.display = "none";
    clearInterval(hideMessageBlock);
  }, 250);
}

closeMessageBlock.addEventListener("click", () => {
  closeMessageBlockFn();
});
