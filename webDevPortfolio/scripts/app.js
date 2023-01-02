const entriesBlock = document.querySelector(".entries-block");
const entries = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    date: "21.06.2020",
  },

  {
    img: "imgs/entries/1.jpg",
    title: "Как писать код быстро и безболезненно?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    date: "21.06.2020",
    themes: "создание сайтов",
  },
  {
    img: "imgs/entries/2.jpg",
    title: "Купил новый ноутбук за 150 000 руб",
    date: "21.06.2020",
    themes: "продвижение видео",
  },
  {
    img: "imgs/entries/3.jpg",
    title: "Как я сходил на FrontEnd Conf 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.",
    date: "21.06.2020",
    themes: "создание сайтов",
  },
];

for (let i = 0; i < entries.length; i++) {
  const entry = document.createElement("div");
  entry.classList.add("entry-wrapper");
  entriesBlock.appendChild(entry);

  if (entries[i].img) {
    const entryImg = document.createElement("img");
    entryImg.src = entries[i].img;
    entryImg.classList.add("entry-img");

    entry.appendChild(entryImg);
  }

  if (entries[i].title) {
    const entryTitle = document.createElement("span");
    entryTitle.innerHTML = entries[i].title;
    entryTitle.classList.add("entry-title");

    entry.appendChild(entryTitle);
  }

  if (entries[i].text) {
    const entryText = document.createElement("span");
    entryText.innerHTML = entries[i].text;
    entryText.classList.add("post-text");
    entryText.classList.add("entry-text");

    entry.appendChild(entryText);
  }

  if (entries[i].date) {
    const entryDate = document.createElement("span");
    entryDate.innerHTML = entries[i].date;
    entryDate.classList.add("entry-date");

    if (entries[i].themes) {

        const dateWrapper = document.createElement('div')
        dateWrapper.classList.add('additional-inf')
        dateWrapper.classList.add('date-wrapper')
        entry.appendChild(dateWrapper)
        dateWrapper.appendChild(entryDate)

        const dateSeparator = document.createElement('div')
        dateSeparator.classList.add('date-separator')
        dateSeparator.innerHTML = '&#9679;'
        dateWrapper.appendChild(dateSeparator)

        const entryThemes = document.createElement('div')
        entryThemes.innerHTML = entries[i].themes
        entryThemes.classList.add('entry-themes')
        dateWrapper.appendChild(entryThemes)

    } else {
      entry.appendChild(entryDate);
      entryDate.style.margin = `${20}px ${0}px ${25}px ${25}px`
    }
  }
}
