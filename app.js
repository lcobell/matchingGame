// Get the players name 
let userName = prompt('What is your name?') 

let card = document.getElementById('cardA')

document.getElementById('cardA').addEventListener('click', flip);

function flip() {
    document.getElementById('cardA').classList.toggle('flip');
}
