console.log("Up and Running!");

//array for cardsInPlay
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

//push practice
cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");

//console.log 
console.log ("user flipped " + cardOne);
console.log ("user flipped " + cardTwo);


if (cardsInPlay.length === 2); {
} if (cardsInPlay [0] === cardsInPlay [1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

