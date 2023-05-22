// // const firstName = "Danny";
// // const lastName = "Lim";

// // const fullName = firstName + " " + lastName;
// // console.log(fullName);

// // let name = "Linda";
// // let gretting = "Hi there";

// // function greetLinda() {
// //   console.log(gretting + ", " + name + "!");
// // }
// // greetLinda();

// // let myPoints = 3;

// // function addpoints() {
// //   myPoints += 3;
// // }

// // function removePoints() {
// //   myPoints -= 1;
// // }
// // addpoints();
// // addpoints();
// // addpoints();
// // removePoints();
// // removePoints();
// // console.log(myPoints);

// let purchaseError = document.getElementById("error");
// console.log(purchaseError);

// function purchase() {
//   console.log("button clicked");
//   purchaseError.textContent = "Something went wrong, please try again";
// }

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// let sumEL = document.getElementById("sum-el");

// function add() {
//   let result = num1 + num2;
//   sumEL.textContent = "Sum: " + result;
// }

// function subtract() {
//   let result = num1 - num2;
//   sumEL.textContent = "sum: " + result;
// }

// function divide() {
//   let result = num1 / num2;
//   sumEL.textContent = "Sum: " + result;
// }

// function multiply() {
//   let result = num1 * num2;
//   sumEL.textContent = "Sum: " + result;
// }

// let firstCard = 4;

// let secondCard = 11;

// let sum = firstCard + secondCard;

// // sum();

// console.log(sum);

// let age = 22;

// if (age < 21) {
//   console.log("You cannot enter");
// } else {
//   if (age >= 21) {
//     console.log("You can enter");
//   }
// }

// console.log(age);

// let age = 100;

// if (age < 100) {
//   console.log("Not elegible");
// } else if (age === 100) {
//   console.log("Here is your birthday card from the king");
// } else {
//   console.log("Not elegible");
// }

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
// let cards = [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];

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
