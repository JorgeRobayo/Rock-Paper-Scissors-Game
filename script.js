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
    resultTxt = document.querySelector('.resultTxt'),

    //this will access all the button options R,P,S
    optionBtns = document.querySelectorAll('.optionBtns'),

    //this will access the restart button to add functionality
    restartBtn = document.querySelector('.restartBtn'),

    //this will access the rounds txt
    rounds = document.querySelector('.rounds'),

    //this will call the log info class in order to append text
    logInfo = document.querySelector('.logInfo'),

    logHist = document.querySelector('.logHist'),

    //this will access the rounds txt to update while the game is happening
    roundsTxt = document.querySelector('#roundsTxt'),

    //this will add the vs div in order to stylize it
    vsImg = document.querySelector('.vsImg')

//                              {{CLASSES}}

//Here I am definign a class of player
//later on I can instanciate the User and the Machine
class Player {
    constructor(name) {

        //this will set the name based on the name property when the class is instaniciated 
        this.name = name

        //this will be the neutral resulimg for user
        this.choice = 'rock'

        //this are the are the amount of rounds won for eath class
        //later on there will be code to add 1 once the any player wins a round
        this.winningRounds = 0
    }

    makeChoice(choice) {
        this.choice = choice
    }

    roundWon() {
        this.winningRounds++
    }
}

//Here I have instanciated a User and a Machine class
const user = new Player('User')
const machine = new Player('Machine')



//                             {{FUNCTIONS}}

//THIS WILL CHANGE THE RESULT IMAGE WHEN THE USER HOVERS OVER THE OPTIONBTNS
function changeResultImg(choice) {
    // const userImage = document.getElementById('userImage')

    //the line below will change the machine result image but is not needed.
    // const machineImage = document.getElementById('machineImage')

    userResult.src = `images/${choice}.png`

    //the line below will change the machine result image but is not needed.
    // machineImage.src = `images/${choice}.png`

    //this console log will show that the function is set properly
    // console.log('works')
}

//THIS WILL SET THE USER RESULT IMG TO ROCK WHEN USER IS NO HOVERING OVER THE BUTTONS
optionBtns.forEach((button) => {
    button.addEventListener('mouseout', () => {
        user.makeChoice('rock')
        changeResultImg('rock')
    })
})

//here I am creating a new round counter outside the classes
//so it can be used in the functions
let currentRound = 0

//this function will display the result in the log Hist
function logHistTxt(logText) {
    const newLog = document.createElement('p')
    newLog.textContent = logText
    logInfo.appendChild(newLog)
}

//this function will display the round as a H2
function updateRound(newRoundTxt) {
    roundsTxt.textContent = newRoundTxt
}



//Here I am creating a new function that will toggle between two different classes
//in order to add a new enviroment. 
//NEED TO CREATE A NEW BUTTON CALLED WINTER IN HTML AND CUSTOMIZE IT IN CCSS
//THEN I NEED TO REMOVE THE CLASS OF THE CURRENT DIV AND REPLACE IT WITH THE NEW ONE


function swithEnv(environment) {
    // this will remove all existing environment classes from the body
    document.body.classList.remove("winterEnv", "spaceEnv");

    // this will add new environment class to body
    document.body.classList.add(`${environment}Env`);

    // this removes and add classes as needed
    gameContainer.classList.remove("winterEnv", "spaceEnv");
    gameContainer.classList.add(`${environment}Env`);

    vsImg.classList.remove("winterEnv", "spaceEnv");
    vsImg.classList.add(`${environment}Env`);

    logHist.classList.remove("winterEnv", "spaceEnv");
    logHist.classList.add(`${environment}Env`);
    
    optionBtns.forEach(button => {
        button.classList.remove("winterEnv", "spaceEnv");
        button.classList.add(`${environment}Env`);
    });

    restartBtn.classList.remove("winterEnv", "spaceEnv");
    restartBtn.classList.add(`${environment}Env`);
}


//This function will loop over each button 
optionBtns.forEach((button, index) => {

    //this is adding an event listener which is adding functionality to each optionBtn when clicked
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

        // this object stores all the possible options
        let possibilities = {
            RR: "DRAW",
            RP: "MACHINE",
            RS: "USER",
            PP: "DRAW",
            PR: "USER",
            PS: "MACHINE",
            SS: "DRAW",
            SR: "MACHINE",
            SP: "USER",
        }
        //this will add both machinVal and userVal
        //and it will console log a string based on the possibilities set previously in the object above
        let finalResult = possibilities[userVal + machineVal]
        // console.log(finalResult)

        //======================[[CODE NOT WORKING]]=================================
        // resultTxt.textContent = () => {
        //     if (userVal === machineVal) {
        //         return 'DRAW'
        //     }
        //     else {
        //         return`${finalResult} WON!`
        //     }
        // }
        //=============================================================================

        //this line will change the text content to display the winner
        resultTxt.textContent = (userVal === machineVal) ? 'DRAW!' : `${finalResult} WON!`


        //this line is comparing the different outcomes and checking is it is a draw
        //then it is printing appending a string to the log hist
        if (finalResult === possibilities.PP || finalResult === possibilities.RR || finalResult === possibilities.SS) {

            setTimeout(() => {
                logHistTxt(`ROUND ${currentRound} IS A DRAW!`)
            }, 500)

        }

        else if (finalResult === possibilities.RS || finalResult === possibilities.SP || finalResult === possibilities.PR) {

            setTimeout(() => {
                logHistTxt(`${finalResult} WON ROUND ${currentRound}`)
            }, 500)

            user.roundWon()

            //this line checks if function works
            // console.log(user)
        }

        else {

            setTimeout(() => {
                logHistTxt(`${finalResult} WON ROUND ${currentRound}`)
            }, 500)

            machine.roundWon()

            //this line checks if function works
            // console.log(machine)
        }

        //This line adds 1 to the round count
        currentRound++

        //this line updates the the h2 in the screen 
        updateRound(currentRound)

        //this line gives the next turn to the user
        user.makeChoice(userVal)

        //This will check the different outcomes and will display winner
        if (user.winningRounds === 2) {

            setTimeout(() => {
                logHistTxt(`${finalResult} Won all rounds Game will restart in 5 seconds.`)
            }, 500)


            setTimeout(() => {
                location.reload()
            }, 5000) //5000 milliseconds = 5 seconds


            // console.log(`${user.name} Won all rounds`)
        }
        else if (machine.winningRounds === 2) {

            setTimeout(() => {
                logHistTxt(`${finalResult} Won all rounds. Game will restart in 5 seconds.`)
            }, 500)


            setTimeout(() => {
                location.reload()
            }, 5000) //5000 milliseconds = 5 seconds

            // console.log(`${machine.name} Won all rounds`)
        }

    })
})

//this function will reload the page once the restart button is clicked
function reload() {
    location.reload()
}


