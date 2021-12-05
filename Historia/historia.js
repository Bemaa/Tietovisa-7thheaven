document.getElementById("lukitse").addEventListener("click", correctAnswer);

const CORRECT = "Oikein, Agricola kehitti Suomen kirjakielen!"

const INCORRECT = "Väärin meni. Yritä vielä uudelleen."

function correctAnswer() {

    // Jos Sauli Niinistö valittuna
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("Niinistö").classList.add("incorrectAnswer");
        document.getElementById("Agricola").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

}

