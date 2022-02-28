var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var spanRight = document.getElementById("right");
var spanWrong = document.getElementById("wrong");
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz-name")
var quizQuestionEl = document.getElementById("hidden-container");
var questionTextEl = document.getElementById("question-text");
var quizScoreEl = document.getElementById("hidden-score-container");
var submitButton = document.getElementById("submit-button");
var controlsEl = document.getElementById("hidden-controls-container");
var answerEl = document.getElementById("options");
var answerButtons = document.querySelectorAll(".answers");
var rightEl = document.getElementById("right-answers");
var btn = document.createElement("button");
var rightResultsEl = document.getElementById("hidden-right");
var wrongResultsEl = document.getElementById("hidden-wrong");
var highScoreButton = document.getElementById("high-score-button");
var highScoreEl = document.getElementById("hidden-high-score");
var playAgainButton = document.getElementById("play-again");

btn.className += "buttons";
var btn2 = document.createElement("button");
btn2.className += "buttons";
let btn3 = document.createElement("button");
btn3.className += "buttons";
let btn4 = document.createElement("button");
btn4.className += "buttons";

var nameInput = document.getElementById("name");

var score = 0;
var timeInterval 

var quizQuestions = ['What house colors are red and gold?', 'In quidditch, what is the smallest and quickest ball called?', 'What was Voldemorts actual name?', 'Who belongs to the Hufflepuff house?'];

var buttonOneAnswers = ['Slytherin', 'Gryffindor', 'Hufflepuff', 'Ravenclaw'];
var buttonTwoAnswers = ['Quaffle', 'Bludger', 'Snitch', 'Quiffle'];
var buttonThreeAnswers = ['Tom Riddle', 'Timothy Raddler', 'Tommy Boy', 'Tom Reddler'];
var buttonFourAnswers = ['Hermione Granger', 'Cho Change', 'Cedric Diggory', 'Draco Malfoy'];
var rightAnswers = ['Gryffindor', 'Snitch', 'Tom Riddle', 'Cedric Diggory'];

var index = 0;

var buttonOneIndex = 0;
var buttonTwoIndex = 0;
var buttonThreeIndex = 0;
var buttonFourIndex = 0;
var rightAnswersIndex = 0;

function quizStart() {
    startButton.addEventListener("click", function () {
        quizEl.setAttribute("style", "display:none");
        quizQuestionEl.setAttribute("style", "display: block");
        controlsEl.setAttribute("style", "display: block;");
        questionTextEl.innerText = quizQuestions[0];

        btn.textContent = buttonOneAnswers[0];
        answerEl.appendChild(btn);

        btn2.textContent = buttonTwoAnswers[0];
        answerEl.appendChild(btn2);

        btn3.textContent = buttonThreeAnswers[0];
        answerEl.appendChild(btn3);

        btn4.textContent = buttonFourAnswers[0];
        answerEl.appendChild(btn4);

        btn.addEventListener("click", function (event) {
            if (event.target.innerText === rightAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");

            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;
            }
        })

        btn2.addEventListener("click", function (event) {
            if (event.target.innerText === rightAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");

            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;

            }
        })

        btn3.addEventListener("click", function (event) {
            if (event.target.innerText === rightAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");
            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;
            }
        })

        btn4.addEventListener("click", function (event) {
            if (event.target.innerText === rightAnswers[index]) {
                score++;
                rightResultsEl.setAttribute("style", "display: block;");
            }
            else {
                score--;
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;
            }
        })

        countdownTimer();

    })
}

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    index++;
    index %= quizQuestions.length;
    questionTextEl.innerText = quizQuestions[index];

    rightAnswersIndex++;
    rightAnswersIndex %= rightAnswers.length;

    rightResultsEl.setAttribute("style", "display: none;");
    wrongResultsEl.setAttribute("style", "display: none;");

    btn.addEventListener("click", function (event) {
        if (event.target.innerText === rightAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;
        }
    })
    btn2.addEventListener("click", function (event) {
        if (event.target.innerText === rightAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;
        }
    })

    btn3.addEventListener("click", function (event) {
        if (event.target.innerText === rightAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;
        }
    })

    btn4.addEventListener("click", function (event) {
        if (event.target.innerText === rightAnswers[index]) {
            score +
                rightResultsEl.setAttribute("style", "display: block;");
        }
        else {
            score -
                wrongResultsEl.setAttribute("style", "display: block;");
                timeLeft = timeLeft - 2;

        }
    })

    buttonOneIndex++;
    buttonOneIndex %= buttonOneAnswers.length;
    btn.textContent = buttonOneAnswers[index];


    buttonTwoIndex++
    buttonTwoIndex %= buttonTwoAnswers.length;
    btn2.textContent = buttonTwoAnswers[index];

    buttonThreeIndex++
    buttonThreeIndex %= buttonThreeAnswers.length;
    btn3.textContent = buttonThreeAnswers[index];

    buttonFourIndex++
    buttonFourIndex %= buttonFourAnswers.length;
    btn4.textContent = buttonFourAnswers[index];


    if (index < quizQuestions.length - 1) {
    }
    else {
        nextButton.setAttribute("style", "display: none;");
        

    }
    
}