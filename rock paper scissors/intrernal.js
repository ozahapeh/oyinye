const playBtn = document.getElementById('play-btn');
const userChoiceInput = document.getElementById('user-choice');
const resultDiv = document.getElementById('result');
const choiceImages = document.getElementById('choice-images');


playBtn.addEventListener('click', () => {
    const userChoice = userChoiceInput.value.toLowerCase();
    const computerChoice = Math.random() < 0.34 ? "rock" : Math.random() < 0.67 ? "paper" : "scissors";
    
     let result;
     if (userChoice === computerChoice){
        result = "It's a tie!";
        
     } else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
     ) {
        result = "You won!";
     } else{
        result = "computer win!";
     }

     resultDiv.innerText = `Your choice: ${userChoice}\nComputer choice:${computerChoice}\n${result}`;


     const userImage = document.getElementById(`$ {userChoice}-image`);
     const computerImage = document.getElementById(`$ {computerChoice}-image`);
     choiceImages.style.display = 'block';
     userImage.style.border = '2px solid blue';
     computerImage.style.border = '2px solid red'
});