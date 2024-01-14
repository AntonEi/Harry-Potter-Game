harryDobbyGame();

/** This function is the jump game 
 * It was inspired by Knife... 
 * I have modified it for my own game
*/
function harryDobbyGame() {
    var harry = document.getElementById("harry");
    var dobby = document.getElementById("dobby");

    let initialScore = 0;
    let checkCounter = 0;
    let gameStarted = false;
    let targetScore = [100,300,500,700,900];

    function jump() {
        if (harry.classList != "animate") {
            harry.classList.add("animate");
        }
        setTimeout(function () {
            harry.classList.remove("animate");
        }, 500);
    }

    var checkDead = setInterval(function () {
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
        if (targetScore.includes(initialScore)){
            startQuiz();
            clearInterval(checkDead);
        }
    }, 10);

    function youLose() {
        dobby.style.animation = "none";
        dobby.style.display = "none";
        alert("You lose.");
        clearInterval(checkDead);
    }

    function isTablet() {
        return window.matchMedia("(min-width: 653px)").matches;
    }
    function isLaptop() {
        return window.matchMedia("(min-width: 1024px)").matches;
    }

    function startGame() {
        console.info('clicked');
        document.addEventListener('click', jump);
        document.getElementById('dobby').classList.add('animate-dobby');
        gameStarted = true;
    }

    let timeCounter = 5;
    let timerInterval = setInterval(() => {
        timeCounter = timeCounter - 1;
        if (timeCounter > -1) {
            document.getElementById('timer').innerHTML = timeCounter + 'Seconds';
        }
    }, 1000);

    setTimeout(function () {
        startGame();
        clearInterval(timerInterval);
    }, 6000);

}
let game = document.getElementById ('game')
let questionContainerElement = document.getElementById('question-container')
let continueButton = document.getElementById('continue-btn')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

function startQuiz(){
    console.log("Quiz Started");
    game.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion() 
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
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

function resetState() {    
    continueButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild); 
    }
}


function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    
    element.classList.remove('correct')
    element.classList.remove('wrong');
    console.log('all good here')
}


let questions = [
    {
        question: 'What is harrys name?',
        answers: [
            { text: 'Harry potter', correct: true },
            { text: 'Dumblerdore', correct: false },
            { text: 'Hagrid', correct: false },
            { text: 'Hermeiny', correct: false },
        ]
    }
]