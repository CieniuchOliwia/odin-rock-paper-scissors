const options = ['paper', 'rock', 'scissors'];

function computerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];

}

function playerChoice(msg='Choose Paper, Rock or Scissors') {
    let myChoice = prompt(msg).toLowerCase();
    if (options.includes(myChoice)) {
        return myChoice;
    } else {
        return playerChoice('Invalid input.Choose again!');
    }

}
function compare() {
    let player=playerChoice();
    let computer=computerChoice();
    console.log(computer);

    if (player == computer) {
        return "draw";
    } else if (player == 'paper' && computer == 'scissors') {
        return 'You lose.';
    }
    else if (player == 'paper' && computer == 'rock') {
        return 'You win.';
    }
    else if (player == 'rock' && computer == 'paper') {
        return 'You lose.';
    }
    else if (player == 'rock' && computer == 'scissors') {
        return 'You win.';
    }
    else if (player == 'scissors' && computer == 'rock') {
        return 'You lose.';
    }
    else {
        return 'You win.';
    }



}

    