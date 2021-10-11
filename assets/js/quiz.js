(fucntion(){
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
    
        resultsContainer.innerHTML = `${numCorrect} out of {myQuestions.length}`;
    };
    
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
        }
    ];
    
    submitButton.addEventListener('click',showResults);
    })();