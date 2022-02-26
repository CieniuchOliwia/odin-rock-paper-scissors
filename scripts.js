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


function compare(player,computer) {
    //let player=playerChoice();
    //let player=playerChoice;
    //let computer=computerChoice();
    //console.log(computer);

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


const buttonRock=document.createElement('button');
buttonRock.classList.add('buttons');
buttonRock.textContent="ROCK";
document.body.appendChild(buttonRock);
buttonRock.addEventListener('click', function(){
    let choice=computerChoice();
    const result=document.createElement('div');
    result.textContent='Computer choice: '+choice+'. '+compare('rock',choice);
   document.body.appendChild(result);
}
);
 



const buttonPaper=document.createElement('button');
buttonPaper.classList.add('buttons');
buttonPaper.textContent="PAPER";
document.body.appendChild(buttonPaper);  
buttonPaper.addEventListener('click', function(){
    let choice=computerChoice();
    const result=document.createElement('div');
    result.textContent='Computer choice: '+choice+'. '+compare('paper',choice);
   document.body.appendChild(result);
}
);


const buttonScissors =document.createElement('button');
buttonScissors.classList.add('buttons');
buttonScissors.textContent="SCISSORS";
document.body.appendChild(buttonScissors);  
buttonScissors.addEventListener('click', function(){
    let choice=computerChoice();
    const result=document.createElement('div');
    result.textContent='Computer choice: '+choice+'. '+compare('scissors',choice);
   document.body.appendChild(result);
}
);



