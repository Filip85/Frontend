document.addEventListener("DOMContentLoaded", function () {
    init();
});

const init = () => {
    let play = new PlayGround();
}

const button = document.querySelector("button");
const dices = document.querySelectorAll(".dices")
const diceOne = document.querySelectorAll(".dice-one");
const diceTwo = document.querySelectorAll(".dice-two");
const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score ");
const rounds = document.querySelector(".round-number");

//globl variables
// let playerScore1 = 0;
// let playerScore2 = 0;
// let extraPoint = 1;

class Dice {
    diceOne;
    diceTwo;

    constructor(diceOne, diceTwo) {
        this.diceOne = diceOne;
        this.diceTwo = diceTwo;
    }
}

class PlayGround {
    sumOfPlayer1;
    sumOfPlayer2;
    playerOne;
    playerTwo;

    constructor() {
        this.bindEventListenr();
    }

    bindEventListenr() {
        button.addEventListener("click", this.play.bind(this));
    }

    play() {
        rounds.innerHTML = parseInt(rounds.innerHTML) + 1;
        this.create();
        this.playerNumbers();
        this.clearPonts();
        this.sumOfClearPonts();
        this.extraPoint();
        this.extraTwoPoints();
        this.checkSum();
        this.endGame();
    }

    create() {
        this.playerOne = new Dice(Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6))
        this.playerTwo = new Dice(Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6))
    }

    playerNumbers(){
        diceOne[0].innerHTML = this.playerOne.diceOne;
        diceTwo[0].innerHTML = this.playerOne.diceTwo;
        diceOne[1].innerHTML = this.playerTwo.diceOne;
        diceTwo[1].innerHTML = this.playerTwo.diceTwo;
    }

    clearPonts() {
        this.sumOfPlayer1 = this.playerOne.diceOne + this.playerOne.diceTwo
        this.sumOfPlayer2 = this.playerTwo.diceOne + this.playerTwo.diceTwo;
    }

    sumOfClearPonts() {
        if (this.sumOfPlayer1 > this.sumOfPlayer2) {
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
        }
        else if (this.sumOfPlayer1 === this.sumOfPlayer2) {
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
        }
        else {
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
        }
    }

    extraPoint() {
        if (this.playerOne.diceOne === 1 && this.playerOne.diceTwo === 1) {
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) - 1;
        }
        else if(this.playerTwo.diceOne === 1 && this.playerTwo.diceTwo === 1) {
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) - 1;
        }
        else if ((this.playerOne.diceOne === this.playerOne.diceTwo)) {
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
        }
        else if (this.playerTwo.diceOne === this.playerTwo.diceTwo) {
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
        }
    }

    extraTwoPoints() {
        if ((this.playerOne.diceOne === 6 && this.playerOne.diceTwo === 6) && (this.playerTwo.diceOne === 6 && this.playerTwo.diceTwo === 6)) {
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
        }
        if (this.playerOne.diceOne === 6 && this.playerOne.diceTwo === 6) {
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 2;
        }
        else if (this.playerTwo.diceOne === 6 && this.playerTwo.diceTwo === 6) {
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 2;
        }
    }

    checkSum() {
        if ((this.playerOne.diceOne + this.playerOne.diceTwo) === (this.playerTwo.diceOne + this.playerOne.diceTwo)) {
            playerOneScore.innerHTML = parseInt(playerOneScore.innerHTML) + 1;
            playerTwoScore.innerHTML = parseInt(playerTwoScore.innerHTML) + 1;
        }
    }

    endGame() {
        if (parseInt(playerOneScore.innerHTML) >= 10 && parseInt(playerTwoScore.innerHTML) >= 10) {
            if ((parseInt(playerOneScore.innerHTML) - parseInt(playerTwoScore.innerHTML)) > 0) {
                console.log("Player one is a winner");
                playerOneScore.innerHTML = "0";
                playerTwoScore.innerHTML = "0";
                rounds.innerHTML = "0";
            }
            else if ((parseInt(playerTwoScore.innerHTML) - parseInt(playerOneScore.innerHTML)) > 0) {
                console.log("Player two is a winner");
                playerOneScore.innerHTML = "0";
                playerTwoScore.innerHTML = "0";
                rounds.innerHTML = "0";
            }
        }
        else if (parseInt(playerOneScore.innerHTML) >= 10 && parseInt(playerTwoScore.innerHTML) <= 10) {
            console.log("Player one is a winner");
            playerOneScore.innerHTML = "0";
            playerTwoScore.innerHTML = "0";
            rounds.innerHTML = "0";
        }
        else if (parseInt(playerTwoScore.innerHTML) >= 10 && parseInt(playerOneScore.innerHTML) <= 10) {
            console.log("Player two is a winner");
            playerOneScore.innerHTML = "0";
            playerTwoScore.innerHTML = "0";
            rounds.innerHTML = "0";
        }
    }
}

