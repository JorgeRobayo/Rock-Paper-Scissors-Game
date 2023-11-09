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

//



//                             {{QUERIES}}

function changeResultImg(choice){
    const userImage = document.getElementById('userImage')
    const machineImage = document.getElementById('machineImage')

    userImage.src = `images/${choice}.png`
    machineImage.src = `images/${choice}.png`

    console.log('works')
}




