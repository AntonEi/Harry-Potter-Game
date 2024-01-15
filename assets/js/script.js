let initialScore = 0;
let checkCounter = 0;
let gameStarted = false;
let harry = document.getElementById("harry");
let dobby = document.getElementById("dobby");
const targetScore = [100, 400, 700, 900, 1100, 1500];
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let checkDead = null;
/**
 * Questions for quiz
 */
let questions = [
    {
        question: 'What is Harry\'s name?',
        answers: [
            { text: 'Harry Potter', correct: true },
            { text: 'Dumbledore', correct: false },
            { text: 'Hagrid', correct: false },
            { text: 'Hermione', correct: false },
        ]
    },
    {
        question: 'Who is Harry\'s best friend?',
        answers: [
            { text: 'Draco Malfoy', correct: false },
            { text: 'Ron Weasley', correct: true },
            { text: 'Neville Longbottom', correct: false },
            { text: 'Cedric Diggory', correct: false },
        ]
    },
    {
        question: 'What is the name of the magical school Harry attends?',
        answers: [
            { text: 'Beauxbatons Academy of Magic', correct: false },
            { text: 'Durmstrang Institute', correct: false },
            { text: 'Hogwarts School of Witchcraft and Wizardry', correct: true },
            { text: 'Ilvermorny School of Witchcraft and Wizardry', correct: false },
        ]
    },
    {
        question: 'What is the name of Harry\'s owl?',
        answers: [
            { text: 'Errol', correct: false },
            { text: 'Crookshanks', correct: false },
            { text: 'Pigwidgeon', correct: false },
            { text: 'Hedwig', correct: true },
        ]
    },
    {
        question: 'Who is the headmaster of Hogwarts?',
        answers: [
            { text: 'Severus Snape', correct: false },
            { text: 'Albus Dumbledore', correct: true },
            { text: 'Minerva McGonagall', correct: false },
            { text: 'Gellert Grindelwald', correct: false },
        ]
    }
];

//This is for the tablet screen
function isTablet() {
    return window.matchMedia("(min-width: 653px)").matches;
}
//This is for the Laptop and bigger screens
function isLaptop() {
    return window.matchMedia("(min-width: 1024px)").matches;
}

/**
 * This function makes harry jump.
 * It restarts every 0,5 sec
 */
function jump() {
    if (harry.classList != "animate") {
        harry.classList.add("animate");
    }
    setTimeout(function () {
        harry.classList.remove("animate");
    }, 500);
}

/**
* Checks if Harry is hit by Dobby.
* The function checks Harry's position relative to Dobby.
* Depending on what screen you are on
* For every second Harry jumps over Dobby, it adds 10 points.
* If you survive for more than 10 seconds, a quiz game starts.
*/
let checkIfDead = () => {
    checkDead = setInterval(function () {
        checkCounter = checkCounter + 1;
        let userLoses = false;
        var harryTop = parseInt(window.getComputedStyle(harry).getPropertyValue("top"));
        var dobbyLeft = parseInt(window.getComputedStyle(dobby).getPropertyValue("left"));

        if (isLaptop()) {
            if (dobbyLeft < 80 && dobbyLeft > 0 && harryTop >= 190 && harryTop <= 250) {
                youLose();
            }
        } else if (isTablet()) {

            if (dobbyLeft < 45 && dobbyLeft > 0 && harryTop >= 190 && harryTop <= 250) {
                youLose();
            }
        } else {

            if (dobbyLeft < 45 && dobbyLeft > 0 && harryTop >= 50 && harryTop <= 150) {
                youLose();
            }
        }
        if (checkCounter % 100 === 0 && gameStarted === true) {
            if (userLoses == false) {
                initialScore = initialScore + 10;
                document.getElementById('score').innerHTML = initialScore + ' Points';
            }
        }
        if (targetScore.includes(initialScore)) {
            initialScore += 100; // Add 100 points to the score
            document.getElementById('score').innerHTML = initialScore + ' Points';
            startQuiz();
            clearInterval(checkDead);
        }
    }, 10);
};

/**
* youLose checks if Harry is hit by Dobby
*/
function youLose() {
    document.getElementById('dobby').classList.remove('animate-dobby');
    dobby.style.display = "none";
    alert("Game Over! Click 'OK' to restart the game :)");
    clearInterval(checkDead);
    let questionContainerElement = document.getElementById('question-container');
    questionContainerElement.classList.add('hide');
    game.classList.remove('hide');
    document.getElementById('guess-text').classList.add('hide')
    harryDobbyGame();
}

/**
* This function initializes the game.
* It enables Harry's jumping motion at the start.
* It starts Dobby running towards Harry.
*/
function startGame() {
    checkIfDead();
    console.info('clicked');
    document.addEventListener('click', jump);
    document.getElementById('dobby').classList.add('animate-dobby');
    gameStarted = true;
}

function restartHarryGame() {
    console.log("restart harry game");
    let questionContainerElement = document.getElementById('question-container');
    questionContainerElement.classList.add('hide');
    game.classList.remove('hide');
    document.getElementById('guess-text').classList.add('hide');
    document.getElementById('timer').classList.remove('hide');

    // Stop Dobby's animation during the countdown
    document.getElementById('dobby').classList.remove('animate-dobby');

    let timeCounter = 5;
    let timerInterval = setInterval(() => {
        timeCounter = timeCounter - 1;
        if (timeCounter > -1) {
            document.getElementById('timer').innerHTML = 'Get ready! The game will resume in ' + timeCounter + ' Seconds';;
        }
    }, 1000);

    setTimeout(function () {
        // Resume Dobby's animation when the game starts
        document.getElementById('dobby').classList.add('animate-dobby');

        // Start the game logic
        startGame();
        document.getElementById('timer').classList.add('hide');
        clearInterval(timerInterval);
    }, 6000);
}

/**
   * Initiates the quiz game.
   * Hides the game elements, shuffles the questions, and displays the first question.
   */
function startQuiz() {
    let game = document.getElementById('game');
    let questionContainerElement = document.getElementById('question-container');
    console.log("Quiz Started");
    game.classList.add('hide');
    document.getElementById('guess-text').classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}


/**
* Sets up and displays the next question.
* Resets the state, including hiding continue button and clearing answer buttons.
* Shows the question and its answer buttons.
*/
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
/**
* Displays the given question and its answer buttons.
* Creates buttons for each answer option, adds event listeners to them.
* and appends them to the answer buttons element.
* If an answer is correct, sets the corresponding dataset attribute.
*/
function showQuestion(question) {
    let questionElement = document.getElementById('question');
    questionElement.innerText = question.question;
    let answerButtonsElement = document.getElementById('answer-buttons');
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}
/**
* Resets the state for the next question:
* Hides the continue button.
* Clears all answer buttons from the answer buttons element.
*/
function resetState() {
    let continueButton = document.getElementById('continue-btn');
    let answerButtonsElement = document.getElementById('answer-buttons');
    continueButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
* Handles the user's selection of an answer:
* Sets the status class for the selected button based on correctness.
* Removes the hide class from the continue button.
*/
function selectAnswer(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct === 'true';
    setStatusClass(selectedButton, correct);

}

/**
* Sets the status class for the selected button based on correctness:
* Adds 'correct' class for a correct answer.
* Restarts the Harry Dobby game for a correct answer.
* Adds 'wrong' class for a wrong answer, and triggers a lose alert.
*/
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
        let questionContainerElement = document.getElementById('question-container');
        questionContainerElement.classList.add('hide');
        game.classList.remove('hide');
        restartHarryGame();
        setInterval;
    } else {
        element.classList.add('wrong');
        youLose();

    }
}
/**
* Clears the 'correct' and 'wrong' classes from the specified element.
* Logs a message indicating that everything is good.
*/
function clearStatusClass(element) {

    element.classList.remove('correct');
    element.classList.remove('wrong');
    console.log('all good here');
}


/** This function is the jump game 
 * It was inspired by Knife... 
 * I have modified it for my own game
*/
function harryDobbyGame() {

    /**
    * Initiates a countdown timer that updates every second.
    * Displays the remaining seconds on the HTML element with the ID 'timer'.
    * Stops the timer when the countdown reaches 0.
    */

    dobby.style.display = "inline";
    document.getElementById('timer').classList.remove('hide');
    initialScore = 0;
    checkCounter = 0;
    gameStarted = false;
    shuffledQuestions = [];
    currentQuestionIndex = 0;
    let timeCounter = 5;
    document.getElementById('score').innerHTML = initialScore + ' Points';
    let timerInterval = setInterval(() => {
        timeCounter = timeCounter - 1;
        if (timeCounter > -1) {
            document.getElementById('timer').innerHTML = 'Get ready! The game will start in ' + timeCounter + ' Seconds';
        }
    }, 1000);

    /**
    * Delays the execution of the 'startGame' function for 6 seconds.
    * After the delay, it starts the game and clears the timer interval.
    */
    setTimeout(function () {
        startGame();
        clearInterval(timerInterval);
        document.getElementById('timer').classList.add('hide');
    }, 6000);
}

function setUpStartButton() {
    // Add an event listener to the start button
    document.getElementById('start-game-btn').addEventListener('click', function () {
        // Call the function to start the game when the button is clicked
        harryDobbyGame();
        document.getElementById('start-game-btn').classList.add("hide");
    });
}

setUpStartButton();