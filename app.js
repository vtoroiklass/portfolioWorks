// list numbering

const list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = `${i + 1}) ${list[i].innerHTML}`;
}

// dark/lighten mod

const switchBtn = document.querySelector(".switch-mod-button");

switchBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  const ul = document.querySelector("ul");
  const links = document.querySelectorAll("a");
  const socialInfo = document.querySelectorAll(".social-info");

  if (switchBtn.innerHTML === "Темный режим") {
    body.style.background = "#2d2d2d";
    body.style.color = "#fff";

    ul.style.background = "#1212129e";
    ul.style.boxShadow = `${10}px ${5}px ${15}px #040404`;

    links.forEach((item) => (item.style.color = "#cbcbfd"));

    switchBtn.style.background = '#d6d6d6'
    switchBtn.style.color = '#000'
    switchBtn.innerHTML = "Светлый режим";

    socialInfo.forEach((item) => (item.style.color = "#bebebe"));

    return;
  }
  body.style.background = "#c7c7c791";
  body.style.color = "#000";

  ul.style.background = "#b0b0b091";
  ul.style.boxShadow = `${10}px ${5}px ${15}px #454545`;

  links.forEach((item) => (item.style.color = "#0000FF"));

  socialInfo.forEach((item) => (item.style.color = "#bebebe"));
  
  switchBtn.style.background = '#3c3c3c'
  switchBtn.style.color = '#f4f9fe'
  switchBtn.innerHTML = "Темный режим";
});