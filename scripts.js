var nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns
//initialize the game
function reset(){
    let btn = document.querySelectorAll('button');
    for(i=0;i<9;i++){
        btn[i].disabled = false;
        btn[i].innerText = "[ ]"
    }

}

// use the value stored in the nextPlayer variable to indicate who the next player is
let lbl = document.getElementById('next-lbl');
lbl.innerText = nextPlayer;


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let cells = document.querySelectorAll('td');
    for(i=0;i<cells.length;i++){

        cells[i].innerHTML = '<button> [ ] </button>';

        //var btns = document.createElement('button');
        //btns[i].innerText = "[   ]"
        //cells[i].appendChild(btns);
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
   let game_lbl = document.getElementById('game-over-lbl');
   game_lbl.innerHTML = '<h1></h1>'
   var target = event.target;
   target.innerText = "[" + nextPlayer + "]";
   target.disabled = true;
    if(nextPlayer==='X'){
        nextPlayer = 'O';
        lbl.innerText = nextPlayer;
    }
    else{
        nextPlayer = 'X';
        lbl.innerText = nextPlayer;
    }


    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let game_lbl = document.getElementById('game-over-lbl');
        game_lbl.innerHTML = '<h1>Game Over</h1>'
        reset();
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

// This function returns true if all the buttons are disabled and false otherwise 
function isGameOver()
{
    let counter = 0;
    let btn = document.querySelectorAll('button');
    for(i=0;i<9;i++){
        if(btn[i].disabled === true){
            counter++;
        }
    }
    if(counter===9){
        return true;
    }
    else{
        return false;
    }
}
