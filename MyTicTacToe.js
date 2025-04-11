let button = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let Msg = document.querySelector("#status");
let Game = document.querySelector("#board");
let isGameOver = false;

let playerX = true;

const Wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

button.forEach((btn)=>{
    btn.addEventListener("click",() => {
        if(isGameOver) return;

        if(playerX === true){
            btn.innerText = 'O';
            playerX = false;
            btn.disabled = true;
        }else{
            btn.innerText = 'X';
            playerX = true;
            btn.disabled = true;
        }
        WinCheck();
                
    })
});

const DisplayWinner = (winner) =>{
    Msg.innerText = `Congrats, the Winner is ${winner}`;
    Game.classList.add("hide");
    isGameOver = true;
}

const WinCheck = () => {
    let winnerFound = false;

    for(let i of Wins){
        let Val1 = button[i[0]].innerText;
        let Val2 = button[i[1]].innerText;
        let Val3 = button[i[2]].innerText;

        if(Val1 != "" && Val2 != "" && Val3 != ""){
            if(Val1 === Val2 && Val2 === Val3){
                DisplayWinner(Val1);
                winnerFound = true;
                break;                
            }
        }
    }
    if(winnerFound == false){
        let isDraw = true;
        button.forEach((btn) => {
            if(btn.innerText === ""){
                isDraw = false;
            }
        });
        if(isDraw == true){
            Msg.innerText = "It is a Draw!"
            isGameOver = true;
        }
    }
}

resetBtn.addEventListener("click",() => {
    button.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
    });
    playerX = true;
    isGameOver = false;
    Msg.innerText = "Game Start"
});
