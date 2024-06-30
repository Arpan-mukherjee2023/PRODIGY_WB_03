const playBtn = document.getElementById("start-play");
const cardDiv = document.getElementsByClassName("card")[0];

// second page
const heading = document.getElementsByClassName("heading")[0];
const gameBoard = document.getElementsByClassName("board")[0];
const showTurn = document.getElementsByClassName("turn-show")[0];

// restart page
const showRestart = document.getElementsByClassName("show-restart")[0];
const showWinner = document.getElementsByClassName("text-winner")[0];
const restartBtn = document.getElementsByClassName("restart")[0];

// grid cells
const cells = document.getElementsByClassName("cell");
let isXsTurn = true;
let arr = Array(9).fill(null);

function checkForWinner() {
    if (
        (arr[0] != null && arr[0] == arr[1] && arr[0] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[3] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[6] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[0] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[1] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[2] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[0] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[2] == arr[6])
    ) {
        let winner = isXsTurn ? 'O' : 'X';
        showRestart.style.display = "flex";
        showWinner.textContent = `${winner} Wins`;
    }
}

let handleClick = (el) => {
    console.log(el.id);
    if (isXsTurn) {
        if (arr[el.id] == null) {
            el.textContent = "X";
            arr[el.id] = 'X';
            isXsTurn = false;
        }
        showTurn.textContent = `O's Turn`;
    } else {
        if (arr[el.id] == null) {
            el.textContent = "O";
            arr[el.id] = 'O';
            isXsTurn = true;
        }
        showTurn.textContent = `X's Turn`;
    }
    checkForWinner();
}




playBtn.addEventListener('click', () => {
    cardDiv.className = "card1";
    playBtn.style.display = "none";
    heading.style.display = "grid";
    gameBoard.style.display = "flex";
    showTurn.style.display = "block";
});


restartBtn.addEventListener("click", () => {
    // clear the array
    arr = arr.fill(null);

    // clear the board
    for(let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }

    isXsTurn = true;

    // make class adjustments
    cardDiv.classList.remove("card1");
    cardDiv.classList.add("card");
    showRestart.style.display = "none";
    heading.style.display = "none";
    gameBoard.style.display = "none";
    showTurn.style.display = "none";
    playBtn.style.display = "block";
    showTurn.textContent = `X's Turn`;

})