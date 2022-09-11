var startButton = document.getElementById('start-page');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('questions');
var questionCounter = 0; 
var answerBtn1 = document.getElementById('answer-btn-1')
var answerBtn2 = document.getElementById('answer-btn-2')
var answerBtn3 = document.getElementById('answer-btn-3')
var answerBtn4 = document.getElementById('answer-btn-4')
var score = 0;

startButton.addEventListener('click', startGame);


/* starting game start */
function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    questionElement.innerHTML = questions[questionCounter].question;
    answerBtn1.textContent = questions[questionCounter].answers[0];
    answerBtn2.textContent = questions[questionCounter].answers[1];
    answerBtn3.textContent = questions[questionCounter].answers[2];
    answerBtn4.textContent = questions[questionCounter].answers[3];
    answerBtn1.addEventListener('click', nextQuestion);
    answerBtn2.addEventListener('click', nextQuestion);
    answerBtn3.addEventListener('click', nextQuestion);
    answerBtn4.addEventListener('click', nextQuestion);
}
/* starting game end */

function nextQuestion() {
    console.log('answer button clicked')
     
    if (this.innerHTML === questions[questionCounter].correctAnswer) {
    
    score += 10;    
    console.log('correct answer selected')};
    
    questionCounter++ ;
    console.log(score); 


    for ( i = 0; i < 4; i++ ) {
        startGame();
    } 
}

function enterScore() {
    console.log('enter score!');
}

var questions = [
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is: ', 
        answers: [
           '1. JavaScript',
           '2. terminal / bash',
           '3. for loops',
           '4. console.log',
        ],

        correctAnswer: [
            '3. for loops', 
        ]
    },

    {
        question: 'String values must be enclosed within _____ when being assigned to variables', 
        answers: [
           '1. commas',
           '2. curly brackets',
           '3. quotes',
           '4. parenthesis',
        ],

        correctAnswer: 
            '3. quotes', 
    },

    {
        question: 'Arrays in JavaScript can be used to store', 
        answers: [
           '1. numbers and strings',
           '2. other arrays',
           '3. booleans',
           '4. all of the above',
        ],

        correctAnswer: 
            '1. numbers and strings', 
    },

    {
        question: 'The condition in an if / else statement is enclosed with _____.', 
        answers: [
           '1. quotes',
           '2. curly brackets',
           '3. parenthesis',
           '4. square brackets',
        ],

        correctAnswer: 
            '2. curly brackets', 
    },    
    
    {
        question: 'Commonly used data types DO NOT include', 
        answers: [
           '1. strings',
           '2. booleans',
           '3. alerts',
           '4. numbers',
        ],

        correctAnswer: 
            '3. alerts', 
    },    
]