var yellowStone = 0;
var redStone = 0;
var greenStone = 0;
var blueStone = 0;
var randomNumber = 0;
var totalScore = 0;
var win = 0;
var lose = 0;
resetGame();

function resetGame() {
    // personal score will be 0 , assign new value to all the stones , value to be gussed. number to be gussed 19-120 and for stone  1 to 12
    yellowStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    redStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    greenStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    blueStone = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    randomNumber = Math.floor(Math.random() * (120 - 19 + 19) + 19);
    totalScore = 0;
    $("#UserScore").text(totalScore);
    console.log("Reset Called")

    $("#randomNumber").text(randomNumber);



}

function updateScoreBoard() {

    $("#WinLoss").text(" WINNING :" + win + "Loss :" + lose);
}




$(document).ready(function () {


    $("#yellowStone").on("click", function () {
        totalScore = yellowStone + totalScore;

        $("#UserScore").text(totalScore);
        console.log(totalScore)
        if (randomNumber === totalScore) {
            win++;
            updateScoreBoard();
            resetGame();
        }
        else if (totalScore > randomNumber) {
            lose++;
            updateScoreBoard();
            resetGame();
        }


    });

    $("#redStone").on("click", function () {
        totalScore = redStone + totalScore;
        console.log(totalScore)
        $("#UserScore").text(totalScore);
        if (randomNumber === totalScore) {
            win++;
            updateScoreBoard();
            resetGame();
        }
        else if (totalScore > randomNumber) {
            lose++;
            updateScoreBoard();
            resetGame();
        }

    });

    $("#greenStone").on("click", function () {
        totalScore = greenStone + totalScore;
        console.log(totalScore)

        $("#UserScore").text(totalScore);
        if (randomNumber === totalScore) {
            win++;
            updateScoreBoard();
            resetGame();
        }
        else if (totalScore > randomNumber) {
            lose++;
            updateScoreBoard();
            resetGame();
        }

    });

    $("#blueStone").on("click", function () {
        totalScore = blueStone + totalScore;
        console.log(totalScore)

        $("#UserScore").text(totalScore);
        if (randomNumber === totalScore) {
            win++;
            updateScoreBoard();
            resetGame();
        }
        else if (totalScore > randomNumber) {
            lose++;
            updateScoreBoard();
            resetGame();
        }
    });



});