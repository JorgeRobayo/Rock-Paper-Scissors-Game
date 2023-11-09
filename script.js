//                      {{GAME IDEAS}}

//Player will be able to hover over the button options
//and see the shape displayed

//once the player makes a choice the game will start.

//ROUNDS: The best of 3 rounds wins the game

//RESTART: once the game is finished it will be restarted automatically

//LOG HISTORY: this will display the History of the different rounds


//                     {{FUTURE IMPLEMNTATIONS}}

//ENVIRONMENT: I would like to have different buttons on the
//right side of the website that will allow the user to choose a
//different background (maybe add a button that will allow the user to choose a random BG) 

//MUSIC PLAYER: add a music player to reproduce while the game is happening.

//PLAYER2: add a second user player in the future.


//                          {{GAME LOGIC}}

//call all query selectors first
//


//                             {{QUERIES}}

//calling all the objects that might be needed in js for game
const gameContainer = document.querySelector('.container'),

//this is accessing the img tag inside the userResult class
userResult = document.querySelector('.userResult img'),

////this is accessing the img tag inside the macineResult class
machineResult = document.querySelector('.machineResult img'),

//this will access the result text in order to be able to change the text
//and display the winner
resultTxt = document.querySelector('resultTxt'),

//this wil access all the button options R,P,S
optionBtns = document.querySelectorAll('.optionBtns')


//                             {{FUNCTIONS}}

//THIS WILL CHANGE THE RESULT IMAGE WHEN THE USER HOVERS OVER THE OPTIONBTNS
function changeResultImg(choice){
    const userImage = document.getElementById('userImage')

    //the line below will change the machine result image but is not needed.
    // const machineImage = document.getElementById('machineImage')

    userImage.src = `images/${choice}.png`

    //the line below will change the machine result image but is not needed.
    // machineImage.src = `images/${choice}.png`

    //this console log will show that the functions is set properly
    // console.log('works')
}






