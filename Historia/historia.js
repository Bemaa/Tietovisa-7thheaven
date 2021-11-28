const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "Ensimmäinen kysymys?",
      answers: {
        a: "Eka",
        b: "Toka",
        c: "Kolmas"
      },
      correctAnswer: "c"
    },
    {
      question: "Toinen kysymys?",
      answers: {
        a: "Eka",
        b: "Toka",
        c: "Kolmas"
      },
      correctAnswer: "c"
    },
    {
      question: "Kolmas kysymys?",
      answers: {
        a: "Eka",
        b: "Toka",
        c: "Kolmas",
        d: "Neljäs"
      },
      correctAnswer: "d"
    }
  ];