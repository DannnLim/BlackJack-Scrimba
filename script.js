
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// console.log("sumEl");
let cardsEl = document.getElementById("cards-el");
// console.log(cards);

let player = {
  name: "Danny",
  chips: 145,
};


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: "; /* cards[0] + " " + cards[1];*/
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Blackjack";
    hasBlackjack = true;
  } else {
    message = "You're out!";
    isAlive = false;
  }
  messageEL.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
