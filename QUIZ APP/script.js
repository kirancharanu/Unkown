const questions = [
{
    question: "which is the largest animal in the world",
    answer: [
        {text: "shark", correct: false},
        {text: "blue whale", correct: true},
        {text: "elephant", correct: false},
        {text: "giraffe", correct: false},
    ]
},
{
    question: "which is the smallest country in the world",
    answer: [
        {text: "vatican city", correct: true},
        {text: "bhutan", correct: false},
        {text: "nepal", correct: false},
        {text: "sri lanka", correct: false},
    ]
},
{
    question: "which is the largest desert in the world",
    answer: [
        {text: "kalahari", correct: false},
        {text: "gobi", correct: false},
        {text: "sahara", correct: false},
        {text: "antarctica", correct: true},
    ]
},
{
    question: "which is the smallest continent in the world",
    answer: [
        {text: "asia", correct: false},
        {text: "australia", correct: true},
        {text: "arctic", correct: false},
        {text: "africa", correct: false},
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
nextButton.innerHTML = "Next";
showQuestion():
}

function showQuestion(){
resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectebtn = e.target;
    const iscorrect = selectebtn.dataset.correct === "true";
    if(iscorrect){
        selectebtn.classList.add("correct"): 
        score++;   
    }else{
        selectebtn.classList.add("inncorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showscore(){
    resetState();
    questionElement.innerHTML = 'you scored ${scored} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}

function handleNextbutton(){
    currentQuestionindex++;
    if(currentQuestionindex < question.length){
        showQuestion();
    }else{
        showscore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionindex < questions.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
})

startQuiz();