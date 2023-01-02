const sidebar = document.querySelector(".sidebar");
const wrapper = document.querySelector(".wrapper");
const mediaWrapper = document.querySelector(".media-wrapper");
const body = document.querySelector("body");
const addSidebarBtn = document.querySelector(".add-sidebar-btn");
const showArticlesBtn = document.querySelector(".show-articles-btn");
const articlesUl = document.querySelector(".articles-ul");

showArticlesBtn.addEventListener("click", () => {
  const articlesUlStyles = window.getComputedStyle(articlesUl);
  if (articlesUlStyles.getPropertyValue("display") === "block") {
    articlesUl.style.display = "none";
    return;
  }

  articlesUl.style.display = "block";
});

addSidebarBtn.addEventListener("click", () => {
  const sidebarStyles = window.getComputedStyle(sidebar);

  if (parseInt(sidebarStyles.getPropertyValue("left")) < 0) {
    return openSidebar();
  } else {
    closeSidebar();
  }
});

function openSidebar() {
  sidebar.style.left = 0 + "%";

  if (body.clientWidth > 500) {
    wrapper.style.left = 300 + "px";
  } else {
    mediaWrapper.style.left = 350 + "px";
  }
}

function closeSidebar() {
  sidebar.style.left = -100 + "%";

  if (body.clientWidth > 500) {
    wrapper.style.left = 0;
  } else {
    mediaWrapper.style.left = 0;
  }
}

// touchscreen

let touchstartX = 0;
let touchendX = 0;
let touchstartY = 0;
let touchendY = 0;

function checkDirection(e) {
  if (e.composedPath().includes(document.querySelector(".story-block"))) {
    return;
  }

  // left
  if (touchendX + 20 < touchstartX) closeSidebar();

  // right
  if (
    touchendX > touchstartX + 10 &&
    touchstartY - touchendY <= 30 &&
    touchendY - touchstartY <= 30
  )
    openSidebar();
}

document.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
  touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  checkDirection(e);
});
