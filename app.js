let selectedCards = [];
let matches = [];

let cardInfo = [
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

window.onload = function() {
    let clickCard = document.getElementsByClassName("moves");
    clickCard.onclick = incrementClick;
}

let clickCount = 0;
function incrementClick () {
    updateCounter(++clickCount)
}
 incrementClick = function() {
     updateCount(++clickCount)
 }

 function updateCounter(val) {
     document.getElementById("moves").innerHTML = val;
 }

// timer
let timeLeft = 30;
let elem = document.getElementById('timerDiv');
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds to match all of the cards!';
        timeLeft--;
    }
}

function doSomething() {
    alert("Time is Up!");
}
// counter
var button = document.getElementsByClassName("moves"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};



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


 function shuffleCards() {
    for (var i = 0; i < cardInfo.length; i++) {
        drawCard(cardInfo[i]);
        drawCard(cardInfo[i]);
        
    }
}


let moveCount = document.getElementById('moves');
 // toggle, html on top is turned off for the "flip"
 function toggleCard(card) {
    // moveCount.innerHTML = moves ++;
    //  moveCount.innerHTML = moves.toString().padStart("0");
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
            // moveCount = moves++;
          
            
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