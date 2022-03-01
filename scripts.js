const options = ['paper', 'rock', 'scissors'];

function computerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];

}


//function playerChoice(msg='Choose Paper, Rock or Scissors') {
//let myChoice = prompt(msg).toLowerCase();
//if (options.includes(myChoice)) {
//return myChoice;
//} else {
//return playerChoice('Invalid input.Choose again!');
//}

//}


function compare(player, computer) {
    //let player=playerChoice();
    //let player=playerChoice;
    //let computer=computerChoice();
    //console.log(computer);

    if (player == computer) {
        return "Draw.";
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

let win = 0;
let lose = 0;

function checkIfEnd() {
    if (win == 5) {
        alert('You won 5 times!');
        win = 0;
        lose = 0;
        document.querySelectorAll('.results').forEach((element) => element.remove());



    } else if (lose == 5) {
        alert('You lost 5 times!');
        win = 0;
        lose = 0;
        let results = document.querySelectorAll('.results');
        for (let i = 0; i < results.length; i++) {
            results[i].remove();

        }

    }
};


function createButton(name){
    const button = document.createElement('button');
    button.textContent = name;
    document.body.appendChild(button);
    button.addEventListener('click', function () {
        let choice = computerChoice();
        const resultWrapper = document.createElement('div');
        resultWrapper.classList.add('results');
        let gameResult = compare(name, choice)
        resultWrapper.textContent = 'Computer choice: ' + choice + '. ' + gameResult;
        document.body.appendChild(resultWrapper);
    
        if (gameResult == 'You win.') {
            win +=1;
        } else if (gameResult == 'You lose.') {
            lose = lose+1;
        }
        
        checkIfEnd();
    }
    
    );

}

createButton('rock');
createButton('paper');
createButton('scissors');




//const buttonRock = document.createElement('button');
//buttonRock.classList.add('buttons');
//buttonRock.textContent = "ROCK";
//document.body.appendChild(buttonRock);

// buttonRock.addEventListener('click', function () {
//     let choice = computerChoice();
//     const result = document.createElement('div');
//     result.classList.add('results');
//     let compare1 = compare('rock', choice)
//     result.textContent = 'Computer choice: ' + choice + '. ' + compare1;
//     document.body.appendChild(result);

//     if (compare1 == 'You win.') {
//         win = win + 1;
//     }
//     else if (compare1 == 'You lose.') {
//         lose = lose + 1;
//     }
//     else { }

//     checkIfEnd();
// }

// );





// const buttonPaper = document.createElement('button');
// buttonPaper.classList.add('buttons');
// buttonPaper.textContent = "PAPER";
// document.body.appendChild(buttonPaper);
// buttonPaper.addEventListener('click', function () {
//     let choice = computerChoice();
//     const result = document.createElement('div');
//     result.classList.add('results');
//     let compare1 = compare('paper', choice)
//     result.textContent = 'Computer choice: ' + choice + '. ' + compare1;
//     document.body.appendChild(result);

//     if (compare1 == 'You win.') {
//         win = win + 1;
//     }
//     else if (compare1 == 'You lose.') {
//         lose = lose + 1;
//     }
//     else { }

//     checkIfEnd();
// }

// );


// const buttonScissors = document.createElement('button');
// buttonScissors.classList.add('buttons');
// buttonScissors.textContent = "SCISSORS";
// document.body.appendChild(buttonScissors);
// buttonScissors.addEventListener('click', function () {
//     let choice = computerChoice();
//     const result = document.createElement('div');
//     result.classList.add('results');
//     let compare1 = compare('scissors', choice)
//     result.textContent = 'Computer choice: ' + choice + '. ' + compare1;
//     document.body.appendChild(result);

//     if (compare1 == 'You win.') {
//         win = win + 1;
//     }
//     else if (compare1 == 'You lose.') {
//         lose = lose + 1;
//     }
//     else { }

//     checkIfEnd();
// }
// );


