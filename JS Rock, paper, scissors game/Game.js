const prompt = require('prompt-sync')();

function humanChoice() {

    let choice = prompt("Enter choice: ");
    // const lower = choice.toLowerCase();
    choice = choice.toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log("Invalid choice");
        return null;
    }
    // else console.log(choice);
    return choice;
}

function compChoice() {
    let rand = Math.random();

    if (rand <= 0.3) {
        return "rock";
        // console.log("comp choice: rock");
    }

    else if (0.3 < rand && rand < 0.6) {
        return "paper";
        //  console.log("comp choice: paper");
    }

    else if (rand >= 0.6) {
        return "scissors";
        //console.log("comp choice: scissors");
    }
}

function gameLogic() {

    let human = humanChoice();
    if (!human) return;

    let comp = compChoice();
    console.log("computer choice: " + comp);

    if (human === comp) {
        return "It's a draw!";
    }
    else if ((human === "rock" && comp === "scissors") ||
        (human === "paper" && comp === "rock") ||
        (human === "scissors" && comp === "paper")) {
        return "Human wins!";
    }
    else {
        return "Computer wins!";
    }

}

function rounds() {
    let round = prompt("Enter the number of rounds you want to play");
    let humScore = 0;
    let compScore = 0;

    for (let i = 0; i < round; i++) {
        let res = gameLogic();
        if (res === "Human wins!") {
            humScore++;
        }
        else if (res === "Computer wins!") {
            compScore++;
        }
    }

    if (humScore > compScore) {
        console.log("Human wins");
    }

    else if (compScore > humScore) {
        console.log("comp wins");
    }

    else {
        console.log("its a draw");
    }
}

rounds();



