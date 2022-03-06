document.addEventListener('DomContentLoaded', () => {

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

// let card = document.getElementById('cardA')

// document.getElementById('cardA').addEventListener('click', flip);

// function flip() {
//     document.getElementById('cardA').classList.toggle('flip');
// }

// card Array
const ArrayOfCards = [
    {
        front: "fenceDog",
        img: "images/dogWalkingThruFence.png", 
    },
    {
        front: "fenceDog",
        img: "images/dogWalkingThruFence.png",
    },
    {
        front: "pointingDog",
        img: "images/dogPointingAtCat.png"
    },
    {
        front: "pointingDog",
        img: "images/dogPointingAtCat.png"
    },
    {
        front: "tvCat",
        img: "images/catWatchingTv.png"
    },
    {
        front: "tvCat",
        img: "images/catWatchingTv.png"
    },
    {
        front: "recycleDog",
        img: "images/recycleDog.png"
    },
    {
        front: "recycleDog",
        img: "images/recycleDog.png"
    },
    {
        front: "guardDog",
        img: "images/guardDog.png"
    },
    {
        front: "guardDog",
        img: "images/guardDog.png"
    },
    {
        front: "eduDog",
        img: "images/onlineEdu.png"
    },
    {
        front: "eduDog",
        img: "images/onlineEdu.png"
    }
]


const board = document.querySelector(".board")

function setBoard () {
    for (let i = 0; i < ArrayOfCards.length; i++) {
        let card = document.createElement("img")
        card.setAttribute("src", "images/cardBack.png")
        card.setAttribute("data-id", i)
        board.appendChild(card)
        
        //card.addEventListener("onclick", flip)

    }
}
setBoard()

})
>>>>>>> Stashed changes
