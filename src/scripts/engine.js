const emojis = [
  "🦁",
  "🦁",
  "🐒",
  "🐒",
  "🐶",
  "🐶",
  "🦊",
  "🦊",
  "🐻",
  "🐻",
  "🦄",
  "🦄",
];

let openCards = [];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));
let matchedCards = 0;

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards.length === 2) {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
      matchedCards += 2;
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (matchedCards === emojis.length) {
      alert("Você venceu!");
    }
  }
}
