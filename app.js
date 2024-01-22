let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userscorechange = document.querySelector("#user-score");

let compscorechange = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}
const gameDraw = () =>{
   
        console.log("Game draw")
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081f31"; 
};

const showWinner = (userWin, userchoice, compChoice) =>{
    if(userWin){
        userScore++;
        userscorechange.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win!. your ${userchoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green"; 
    }
    else{
        compScore++;
        compscorechange.innerText = compScore;
        console.log("You Loss!");
        msg.innerText = "You Loss!";
        msg.innerText = `You Loss. Computer ${compChoice} beats ${userchoice}.`;
        msg.style.backgroundColor = "red"; 
    }

};

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);

    const compChoice = genComputerChoice() 
    console.log("comp choice = ", compChoice);
    
    if (userchoice === compChoice){
        gameDraw();
    }
    else {
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if( userchoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
    
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userchoice =choice.getAttribute("id")
        playGame(userchoice);
     
    });
});
