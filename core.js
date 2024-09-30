// let userScore = 0;
// let compScore = 0;

const choices = document.querySelectorAll(".choice");
let user = document.querySelector("#userScore");
let comp = document.querySelector("#compScore");
let message = document.querySelector(".message p");
let msg;

choices.forEach(choice => {
    choice.addEventListener('click', function userChoice() {
        const userChoice = choice.id;
        console.log(userChoice);
        let compChoice = genCompChoice();
        console.log(compChoice);
        let userWin;
        userWin = whoWin(userChoice,compChoice);
        console.log(userWin);
        updScore(userWin);
    })
});

function genCompChoice() {
    let arr = ["rock", "paper", "scissors"];
    let ranInd = Math.floor(Math.random() * 3);
    return arr[ranInd];
}

function whoWin(userChoice, compChoice) {
    if(userChoice === compChoice) {
        msg = "It was a Draw...";
        message.innerText = msg;
        message.setAttribute("style","height: 50px; width: 250px; text-align: center; line-height: 50px; background-color: blue; color: white; border-radius: 15px;");
        console.log("It was a Draw...");
    }
    else {
        if(userChoice === "rock") { // paper scissors 
            if(compChoice === "scissors") {
                msg = "You won!";
                message.innerText = msg;
                message.setAttribute("style","height: 50px; width: 250px; text-align: center; line-height: 50px; background-color: green; color: white; border-radius: 15px;");
                return true;
            }
    
            else {
                msg = "You lose!";
                message.innerText = msg;
                message.setAttribute("style","height: 50px; width: 250px; text-align: center; line-height: 50px; background-color: red; color: white; border-radius: 15px;");
                return false;
            }
        }
        else if(userChoice === "paper") { // rock, scissors
            if(compChoice === "rock") {
                msg = "You won!";
                message.innerText = msg;
                message.setAttribute("style","height: 50px; width: 250px; text-align: center; line-height: 50px; background-color: green; color: white; border-radius: 15px;");
                return true;
            }
            else {
                msg = "You lose!";
                message.innerText = msg;
                message.setAttribute("style","height: 50px; width: 250px; text-align: center; line-height: 50px; background-color: red; color: white; border-radius: 15px;");
                return false;
            }
        }
        else { // rock, paper
            if(compChoice === "paper") {
                msg = "You won!";
                message.innerText = msg;
                message.setAttribute("style","height: 50px; width: 250px; text-align: center; line-height: 50px; background-color: green; color: white; border-radius: 15px;");
                return true;
            }
            else {
                msg = "You lose!";
                message.innerText = msg;
                message.setAttribute("style","height: 50px; width: 250px; text-align: center; line-height: 50px; background-color: red; color: white; border-radius: 15px;");
                return false;
            }
        }
    }
}

// function updScore(userWin) {
//     if(userWin === true) {
//         userScore += 1;
//         user.innerText = userScore;
//         message.innerText = msg;
//         console.log("User :" +userScore);
//     }
//     else if(userWin === false) {
//         compScore += 1;
//         comp.innerText = compScore;
//         message.innerText = msg;
//         console.log("Comp :" +compScore);   
//     }
// }