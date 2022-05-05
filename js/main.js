// background
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Particle(x, y, directionX, directionY, size, color) {
  this.x = x;
  this.y = y;
  this.directionX = directionX;
  this.directionY = directionY;
  this.size = size;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  };
}

const particleNum = 150;
let particlesArray = [];

function particles() {
  for (let i = 0; i < particleNum; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let directionX = Math.random() * 2 - 1;
    let directionY = Math.random() * 2 - 1;
    let size = Math.random() * 5;
    let color = `rgba(225, 225, 225, ${Math.round(Math.random() * 5)})`;

    const p = new Particle(x, y, directionX, directionY, size, color);
    particlesArray.push(p);
  }
}

function createParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    p = particlesArray[i];
    p.draw();
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate() {
  requestAnimationFrame(animate);
  clearCanvas();
  createParticles();
}

function createBg() {
  particles();
  createParticles();
}

createBg();

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
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  clearCanvas();
  particlesArray = [];
  createBg();

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
const projectBoxWrap = document.querySelector("#project_box_wrap");
const project = document.getElementById("project");
const progressCircle = document.querySelector(".progress");
const moon = document.getElementById("moon");
const homeTitle = document.getElementById("home_title");
const mainTitle = homeTitle.querySelectorAll(".main_title");
const circle = document.getElementById("circle");
const projectWrap = document.querySelector("#project_wrap");
const contactBox = document.querySelector(".contact_box");
const contact = document.getElementById("contact");

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
  // progress
  const currentScroll = document.body.scrollTop
    ? document.body.scrlollTop
    : document.documentElement.scrollTop;

  const calcHeight =
    document.body.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = (currentScroll / calcHeight) * 100;

  progressCircle.style.background = `conic-gradient(var(--gradient-color2)${scrollValue}%, #d3dadb ${scrollValue}%)`;

  if (currentScroll === 0) {
    progressCircle.classList.add(HIDDEN);
  } else {
    progressCircle.classList.remove(HIDDEN);
  }

  progressCircle.addEventListener("click", () => {
    document.documentElement.scrollTo(0, 0);
  });

  // home scroll event
  moon.style.marginTop = currentScroll / 2 + "px";
  homeTitle.style.marginTop = currentScroll / 2 + "px";
  mainTitle[0].style.transform = `translateX(${currentScroll / 10 + "px"})`;
  mainTitle[1].style.transform = `translateX(${-currentScroll / 10 + "px"})`;

  // project scroll event
  const textPos = project.offsetTop;
  const text = project.querySelector("h2");

  const SHOW = "show";
  const EXPAND = "expand";
  const SHRINK = "shrink";

  if (currentScroll > textPos - 500) {
    text.classList.add(SHOW);
  } else {
    text.classList.remove(SHOW);
  }

  if (currentScroll > textPos + 500) {
    circle.classList.add(EXPAND);
    projectBoxWrap.classList.add(SHOW);

    const offset = currentScroll - textPos - 1024;
    projectBoxWrap.style.left = -offset + "px";
  } else {
    circle.classList.remove(EXPAND);
    projectBoxWrap.classList.remove(SHOW);
  }

  const time = "1s";
  if (currentScroll < 4000) {
    circle.style.backgroundColor = "var(--green-color)";
    circle.style.transition = time;
  } else if (currentScroll < 6000) {
    circle.style.backgroundColor = "var(--red-color)";
    circle.style.transition = time;
  } else if (currentScroll < 8000) {
    circle.style.background = `var(--gradient-color2)`;
    circle.style.transition = time;
    circle.classList.add(EXPAND);
    circle.classList.remove(SHRINK);
  } else {
    circle.classList.add(SHRINK);
    circle.classList.remove(EXPAND);
  }

  // contact scroll event
  if (currentScroll > contact.offsetTop - 100) {
    contactBox.classList.add(SHOW);
  } else {
    contactBox.classList.remove(SHOW);
  }
});

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
