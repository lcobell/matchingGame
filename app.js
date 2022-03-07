let selectedCards = [];
let matches = [];

let cardInfos = [
    {
        'img': 'dogWalkingThroughFence.png',
        'alt': 'Dog walking through a fence'
    },
    {
        'img': 'dogPointingAtCat.png',
        'alt': 'Dog pointing at cat'
    },        
    {
        'img': 'dogWpups.png',
        'alt': 'Dog with pups'
    },
    {
        'img': 'recycleDog.png',
        'alt': 'Dog recycling'
    },
    {
        'img': 'guardDog.png',
        'alt': 'Dog on guard'
    },
    {
        'img': 'onlineEdu.png',
        'alt': 'Dog learning online'
    }
]
// Drawing the cards and appending them to the board
function drawCard(cardInfo) {
    let board = document.getElementById('board');
 
    let div = document.createElement('div');
    div.classList.value = 'card';
    div.dataset.name = cardInfo.img;
 
    let html = `<img src="images/${cardInfo.img}" alt="${cardInfo.alt}" width="100" height="100" class="cardFace"> \
                 <img src="images/cardBack.png" alt="Blue and black geometric design" width="100" height="100" class="back">`;
     div.innerHTML = html;
     board.appendChild(div);
  
 }

 // Interactive logic
 function shuffleCards() {
    for (var i = 0; i < cardInfos.length; i++) {
        drawCard(cardInfos[i]);
        drawCard(cardInfos[i]);
        
    }
}


 // toggle, html on top is turned off for the "flip"
 function toggleCard(card) {
    console.log('flipping ' + card.id);
    card.children[1].classList.toggle('flip');
}

function checkWin() {
    let cardsToMatch = getCards();
    if (cardsToMatch.length == 0) {
        alert('You win!');
    }
}
function makeMove(card) {

    // cannot select an already selected card
    if (selectedCards.includes(card)) {
        return;
    }

    toggleCard(card);
    selectedCards.push(card);

     // if two cards are selected....
     if (selectedCards.length == 2) {
        let name1 = selectedCards[0].dataset.name;
        let name2 = selectedCards[1].dataset.name;
        if (name1 === name2) {
            console.log('match found');
            matches.push([...selectedCards]);
            setTimeout(function() {
                selectedCards[0].innerHTML = '';
                selectedCards[0].classList.value = 'done';
                selectedCards[1].innerHTML = '';
                selectedCards[1].classList.value = 'done';
                selectedCards = [];
                checkWin();
            }, 1000);
        } else {
            console.log('match miss');
            setTimeout(function() {
                toggleCard(selectedCards[0]);
                toggleCard(selectedCards[1]);
                selectedCards = [];
            }, 1000);
        }
    }
}

function getCards() {
let cards = document.getElementsByClassName('card');
return cards;
}
function setupCards() {
    shuffleCards(); 
    let cards = getCards();
    for (var i = 0; i < cards.length; i++) {
        let card = cards[i];
        console.log('adding listener for ' + card.id);
        card.addEventListener('click', function () { makeMove(card); });
    }
    return cards;
}

function main() {
    let unmatchedCards = setupCards();
}
main()