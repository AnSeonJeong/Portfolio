// fliped card
const flipedCard = document.querySelector(".card");

flipedCard.addEventListener("click", () => {
  flipedCard.classList.toggle("fliped");
});

// resize
const menu = document.querySelector("#header .menu");
const HIDDEN = "hidden";

function hideMenu() {
  if (document.body.getBoundingClientRect().width < 600) {
    menu.classList.add(HIDDEN);
  } else {
    menu.classList.remove(HIDDEN);
  }
}

hideMenu();

window.addEventListener("resize", () => {
  hideMenu();
});

const ham = document.querySelector(".ham");
const hamMenu = document.querySelector(".mobile_menu .menu");

const ACTIVE = "active";
let active = false;

ham.addEventListener("click", () => {
  if (!active) {
    ham.classList.add(ACTIVE);
    hamMenu.classList.add(ACTIVE);
    active = true;
  } else {
    ham.classList.remove(ACTIVE);
    hamMenu.classList.remove(ACTIVE);
    active = false;
  }
});

// scroll
const ocean = document.querySelectorAll("#ocean");
const topSection = document.querySelectorAll(".top");
const projectBox = document.querySelector("#project_box_wrap");
const home = document.getElementById("home");
const projectText = document.querySelector(".project_text");
const progressCircle = document.querySelector(".progress");

/*
window.addEventListener("scroll", () => {
  const currentScroll = document.documentElement.scrollTop;

  topSection.forEach((section) => {
    section.style.bottom = `${currentScroll * 2}px`;
  });
  waves.forEach((wave) => {
    if (topSection[0].getBoundingClientRect().width > 1200) {
      wave.style.bottom = `${currentScroll * 2 - 100}px`;
    } else {
      wave.style.bottom = `${currentScroll * 2 - 300}px`;
    }
  });
});
*/

window.addEventListener("scroll", () => {
  // fade in
  let currentScroll = document.body.scrollTop
    ? document.body.scrlollTop
    : document.documentElement.scrollTop;
  let offsetTop = projectText.offsetTop + "150px";

  // if (currentScroll > offsetTop) {
  //   projectText.querySelector("h2").classList.add("show");
  // }

  // progress
  let calcHeight =
    document.body.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = (currentScroll / calcHeight) * 100;

  progressCircle.style.background = `conic-gradient(var(--gradient-color2)${scrollValue}%, #d3dadb ${scrollValue}%)`;

  if (currentScroll === 0) {
    progressCircle.classList.add(HIDDEN);
  } else {
    progressCircle.classList.remove(HIDDEN);
  }

  progressCircle.addEventListener("click", () => {
    document.documentElement.scrollTo(0, 0);
  });
  // home.style.marginTop = -currentScroll / 2 + "px";
});

// projectBox.addEventListener("scroll", (e) => {
//   e.preventDefault();
//   projectBox.scrollLeft += e.deltaY;
// });

const projectWrap = document.querySelector("#project_wrap");

function createBox() {
  const greenBox = document.createElement("div");
  const redBox = document.createElement("div");
  const gradientBox = document.querySelector("#circle");

  greenBox.className = "box green";
  redBox.className = "box red";
  gradientBox.className = "box gradient";

  projectWrap.prepend(redBox);
  projectWrap.prepend(greenBox);
}

createBox();

// projectBtn
const projectBtn = document.querySelectorAll(
  ".project_content .btn_wrap button"
);
console.log(projectBtn);

const krispyImg = [
  "krispyKreme_main.jpg",
  "krispyKreme_menu.jpg",
  "krispyKreme_brand.jpg",
];

function changeImg(other) {
  document.querySelector(".krispy img").src = `images/` + other;
}

projectBtn[0].addEventListener("click", () => {
  changeImg(krispyImg[0]);
});
projectBtn[1].addEventListener("click", () => {
  changeImg(krispyImg[1]);
});
projectBtn[2].addEventListener("click", () => {
  changeImg(krispyImg[2]);
});
