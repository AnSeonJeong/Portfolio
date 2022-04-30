// fliped card
const flipedCard = document.querySelector(".card");

flipedCard.addEventListener("click", () => {
  flipedCard.classList.toggle("fliped");
});

// scroll
const ocean = document.querySelectorAll("#ocean");
const topSection = document.querySelectorAll(".top");
const projectBox = document.querySelector("#project_box_wrap");
const home = document.getElementById("home");

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
console.log(ocean);
window.addEventListener("scroll", () => {
  const currentScroll = document.body.scrollTop
    ? document.body.scrollTop
    : document.documentElement.scrollTop;

  home.style.marginTop = -currentScroll / 2 + "px";
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
