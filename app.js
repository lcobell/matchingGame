let selectedCards = [];

function flipCard(card) {

    if (selectedCards.includes(card)) {
        return;
    }

    console.log('flipping ' + card.id);
    card.children[1].classList.toggle('flip');

    selectedCards.push(card);

    //if (selectedCards.length == 2) {

    //}

}

function getCards() {
    let cards = document.getElementsByClassName('card');
    return cards;
}

function setupCards() {
    let cards = getCards();
    for (var i = 0; i < cards.length; i++) {
        let card = cards[i];
        console.log('adding listener for ' + card.id);
        card.addEventListener('click', function () { flipCard(card); });
    }
}

function main() {
    // Get the players name 
    let userName = 'abc'; //prompt('What is your name?') 

    setupCards();

    let cardsToMatch = getCards();

    //while (cardsToMatch.length > 0) {

    //}

}

main()