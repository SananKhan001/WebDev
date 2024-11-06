function getNewRandom() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
function getNewRandomImage(randomNumber) {
    return "./images/dice" + randomNumber + ".png";
}

var randomNumber1 = getNewRandom();
var randomNumber2 = getNewRandom();
var winner = (randomNumber1 > randomNumber2)? 1 : (randomNumber1 === randomNumber2)? 0 : 2;

if(winner === 0) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if(winner === 1) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

document.querySelector(".img1").setAttribute("src", getNewRandomImage(randomNumber1));
document.querySelector(".img2").setAttribute("src", getNewRandomImage(randomNumber2));