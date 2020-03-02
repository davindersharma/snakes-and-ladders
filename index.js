//VARIABLES
const btnRoll = document.querySelector('.btn-roll');
let currentPlayer = true

const ladder = {
    "10": 33,
    "16": 37,
    "21": 41,
    "35": 54,
    "44": 76,
    "80": 99,
    "16": 37,
    "23": 2,
    "34": 15,
    "52": 31,
    "62": 43,
    "89": 68,
    "95": 74,
}

// function changeDiceImg(diceNumber) {
// }

//FUNCTIONS
btnRoll.onclick = () => {
    let diceNumber = Math.floor(Math.random() * 6 + 1)

    document.querySelector('.dice').src = `dice-${diceNumber}.png`
        // changeDiceImg(diceNumber)

    let p1 = document.querySelector('.p1');
    let p2 = document.querySelector('.p2');

    let curPos;
    let placeToGo;


    if (currentPlayer) {
        // console.log('player 1');
        move(p1)
    } else {
        // console.log('player 2');
        move(p2)
    }

    if (diceNumber < 6) {
        currentPlayer = !currentPlayer
    }



    if (placeToGo === 100) {
        document.querySelector('.controls').style.display = "none"
        alert('you win')
    }


    //LOOP FOR CHECKING IN SNAKES AND LADDER POSITIONS
    for (const key in ladder) {
        if (placeToGo === +key) {
            document.querySelector(`#box-${ladder[key]}`).appendChild(p1)
        }
    }

    function move(player) {
        curPos = player.parentElement.id.substr(4)
        placeToGo = +curPos + diceNumber;

        if (placeToGo <= 100) {
            document.querySelector(`#box-${ placeToGo}`).appendChild(player)
        }
    }


}