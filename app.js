// Get the players name 
let userName = prompt('What is your name?') 

let cards = document.querySelectorAll('.card');

for (var i =0; i < cards.length; i++) {
    let card = cards[i];
    console.log('adding listener for ' + card.id);
    card.addEventListener('click', function () {flip(card)});
}

function flip(card) {
    console.log('flipping' + card.id);
    card.children[1].classList.toggle('flip');
}