
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},

{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},

{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
cardsInPlay.push('cards[cardId].rank');

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
};

function flipCard (){
	this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank + " " + cards[cardId].suit + " " + cards[cardId].cardImage);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', 'flipCard');
    cardElement.appendChild('game-board');
	}
};

createBoard();




