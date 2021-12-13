document.getElementById("lukitse").addEventListener("click", correctAnswer);

let rightAnswer = "Loistavaa, tiesit vastauksen!";
let wrongAnswer = "Väärin. Kokeile seuraavaa kysymystä!";

function correctAnswer() {

    // Jos "1915" valittuna
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v1").classList.add("incorrectAnswer");
        document.getElementById("v3").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos "1817" valittuna
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v2").classList.add("incorrectAnswer");
        document.getElementById("v3").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }
    
    // Jos "1917" valittuna
        if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = rightAnswer;
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v3").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos "1901" valittuna
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v4").classList.add("incorrectAnswer");
        document.getElementById("v3").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos "1989" valittuna
    if(document.getElementById("vastaus5").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v5").classList.add("incorrectAnswer");
        document.getElementById("v3").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    document.getElementById("seuraava").style.visibility = 'visible';

    document.getElementById("lukitse").disabled = true;
}