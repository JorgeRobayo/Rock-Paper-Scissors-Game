//                      {{GAME IDEAS}}

//Buttons: the user will be able to hover over the button options
// and see the shape displayed

//  when the player is not hovering over any option the shape will go into a neutral shape(rock)

//once the player makes a choice the game will start.

//ROUNDS: The best of 3 rounds wins the game

//ANIMATIONS: while the game is starting there will be a  'shake' animation

//  add a settimeoout to the log results
//  add a settimeout to the user and cpu results.

//RESTART: once the game is finished it will be restarted automatically
//before the game restarts there will be a timer of 5seconds 

//LOG HISTORY: this will display the History of the different rounds


//                     {{FUTURE IMPLEMNTATIONS}}

//ENVIRONMENT: I would like to have different buttons on the
//right side of the website that will allow the user to choose a
//different background (maybe add a button that will allow the user to choose a random BG) 

//MUSIC PLAYER: add a music player to reproduce while the game is happening.

//PLAYER2: add a second user player in the future.


//                          {{GAME LOGIC OVERVIEW}}

//call all query selectors first
//


//                             {{QUERIES}}

//ADD ROUNDS

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
function changeResultImg(choice) {
    const userImage = document.getElementById('userImage')

    //the line below will change the machine result image but is not needed.
    // const machineImage = document.getElementById('machineImage')

    userImage.src = `images/${choice}.png`

    //the line below will change the machine result image but is not needed.
    // machineImage.src = `images/${choice}.png`

    //this console log will show that the function is set properly
    // console.log('works')
}


//This function will loop over each button 
optionBtns.forEach((button, index) => {

    //this is adding an event listener which is adding functionality to each optionBtn
    button.addEventListener("click", (e) => {

        //this will choose a random number between 0 and 2 (3 indexes in total)
        let randomNumber = Math.floor(Math.random() * 3) //<==(3 indexes in total)

        //this will print a random number when any optionBtn is clicked
        //it will proof that the function is working correctly
        // console.log(randomNumber)

        //Here I am creating an array of images that the machine can choose from
        let machineImg = ['images/rock.png', 'images/paper.png', 'images/scissors.png']

        //this is changing the src of the image based the outcome of the random math
        machineResult.src = machineImg[randomNumber]

        //this is setting a value to a random index
        let machineVal = ["R", "P", "S"][randomNumber]

        //this is setting a value to a set index
        //this index comes from the function itself
        //index would be the optnBtn that the user clicks on
        let userVal = ["R", "P", "S"][index]

        //these are all the possible options
        let possibilities = {
            RR: "DRAW",
            RP: "MACHINE WINS!",
            RS: "USER WINS",
            PP: "DRAW",
            PR: "MACHINE WINS!",
            PS: "USER WINS!",
            SS: "DRAW",
            SR: "MACHINE WINS!",
            SP: "USER WINS!",
        }
        //this will add both machinVal and userVal
        //and it will console log a string based on the possibilities set previously
        let finalResult = possibilities[userVal + machineVal]
        console.log(finalResult)

        resultTxt.textContent = () =>{
            if (userVal === machineVal) {
                resultTxt.textContent = 'DRAW'
            }
            else {
                resultTxt.textContent = `${finalResult} WON!`
            }
        }


    })
})





