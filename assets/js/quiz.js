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
var correctEl = document.getElementById("right-answers");
var btn = document.createElement("button");
var correctResultsEl = document.getElementById("hidden-right");
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












/*This is the old js stuff, I realize now why it wasn't working. I'm going to use the var method to get this working(fucntion(){
    function buildQuiz(){

        const output = [];
    
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                
                const answers = [];
    
                for(letter in currentQuestion.answers){
    
                    answers.push(
                        `<label>
                        <input type="radio" name="question${questionNumber}" value="${number}
                        ${number} :
                        ${currentQuestion.answers[number]}
                        </label>`
                    );
                }
    
                outpush.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
    
        quizContainer.innerHTML = output.join('');
    };
    
    function showResults(){
        const answerContainers = quizContainer.quereySelectorAll('.answers');
    
        let numCorrect = 0;
    
        myQuestions.forEach( (currentQuestion, questionNumber) => {
            
            const answerContainer = answerContainers[qeustionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
            if(userAnswer === currentQuestion.correctAnswer){
    
                numCorrect++;
    
                answerContainers[questionNumber].style.color = 'purple';
            }
    
            else{
    
                answerContainers[questionNumber].style.color = 'red';
            }
        });
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "Commonly used data types do NOT include:"
            answers: {
                1. "Strings",
                2. "Booleans",
                3. "Alerts",
                4. "Numbers"
            },
            correctAnswer: "3."
        };
    ];
    
    submitButton.addEventListener('click',showResults);
    })();
    console.log(click, hello);