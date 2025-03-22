const quizData = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correct: "Mars",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    correct: "Einstein",
  },
];

let currentQuestionIndex = 0;
let selectedAnswer = "";
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

function loadQuestion() {
  feedbackElement.innerText = "";
  nextButton.style.display = "none";

  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(button, option));
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(button, option) {
  document
    .querySelectorAll(".option")
    .forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");
  selectedAnswer = option;

  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correct) {
    feedbackElement.innerHTML = "✅ Correct!";
    feedbackElement.classList.add("correct");
    score++;
  } else {
    feedbackElement.innerHTML = "❌ Wrong!";
    feedbackElement.classList.add("wrong");
  }

  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  questionElement.innerText = "Quiz Completed!";
  optionsContainer.innerHTML = "";
  feedbackElement.innerText = "";
  nextButton.style.display = "none";
  scoreDisplay.innerText = `Your Score: ${score}/${quizData.length}`;
}

loadQuestion();
