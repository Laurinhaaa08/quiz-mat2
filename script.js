const questions = [
    {
        question: "qual é o maior animal do mundo?",
        answers: [
            { id: 1, text: "tubarão", correct: false };
            { id: 2, text: "baleia azul", correct: true };
            { id: 3, text: "elefante", correct: false };
            { id: 4, text: "mamute", correct: false };
        ]
    },
{
    question: "qual é o maior pís do mundo?",
        answers: [
            { id: 1, text: "china", correct: false };
            { id: 2, text: "indonesia", correct: false };
            { id: 3, text: "africa", correct: false };
            { id: 4, text: "russia", correct: true };
        ],
    },
{
    question: "qual a cor mais usada no mundo?",
        answers: [
            { id: 1, text: "vermelho", correct: false };
            { id: 2, text: "azul", correct: true };
            { id: 3, text: "verde", correct: false };
            { id: 4, text: "roxo", correct: false };
        ],
    },
{
    question: "qual é a rede social mais usada no mundo?",
        answers: [
            { id: 1, text: "instagram", correct: false };
            { id: 2, text: "WhatsApp", correct: true };
            { id: 3, text: "tiktok", correct: false };
            { id: 4, text: "twitwer", correct: false };
        ],
    },
{
    question: "qual é o nome mais comum no Brsil??",
        answers: [
            { id: 1, text: "Miguel", correct: false };
            { id: 2, text: "Maria", correct: true };
            { id: 3, text: "João", correct: false };
            { id: 4, text: "Helena", correct: false };
        ],
    },
]

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "próxima";
    showQuestion();
}

function resetState(){
    nextButton.style.display = "none";
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.detaset.id_da_resposta = answer.id;
      button.classList.add("btn");
      button.addEventListener("click",selectAnswer);
      answersButtons.appendChild(button);
    })
}
   
startQuiz();
