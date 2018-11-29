console.log("Up and Running!");

//array for cardsInPlay
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () { 
	if (cardsInPlay [0] === cardsInPlay [1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
};

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	if (cardsInPlay.length === 2);
	else if (cardsInPlay [0] === cardsInPlay [1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};

flipCard(0);
flipCard(1);