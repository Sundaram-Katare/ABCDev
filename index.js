import { details } from "./constants/details.js";

const cardEl = document.querySelectorAll(".element");


let index = 0;

cardEl.forEach((card) => {
  card.addEventListener("click", () => {
    playAudio();
    index = 0;  // Reset index to show the first item for the clicked card
    displayDetails(card.id, index);

    const nxt = document.getElementById("next");
    nxt.addEventListener("click", function () {
      const detail = findOne(card.id);
      if (index === detail.array.length - 1) {
        index = 0;  // Loop back to the first item
      } else {
        index++;
      }
      displayDetails(card.id, index);
    });
  });
});

function displayDetails(cardId, index) {
  const detail = findOne(cardId.toLowerCase());

  if (detail) {
    const topicEl = document.getElementById("topic");
    const aboutEl = document.getElementById("about");
    const image = document.getElementById("photo");

    topicEl.innerHTML = detail.array[index].topic;
    aboutEl.innerHTML = detail.array[index].about;
    image.src = detail.array[index].imageUrl;
    image.alt = detail?.array[index]?.imageUrl;

    const cont = document.getElementById("pc");
    cont.classList.add("active");
    const box = document.getElementById("bo");
    box.classList.add("popup-box-active");
  }
}

function findOne(cardId) {
  return details.find((item) => item.id.toLowerCase() === cardId.toLowerCase());
}

const backButton = document.getElementById("back");
backButton.addEventListener("click", () => {
  document.getElementById("pc").classList.remove("active");
  document.getElementById("bo").classList.remove("popup-box-active");
});

function playAudio() {
  var sound = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");
  sound.play();
}