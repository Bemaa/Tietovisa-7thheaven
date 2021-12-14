document.getElementById("lukitse").addEventListener("click", correctAnswer);

let rightAnswer = "Hienoa, sinä osaat!";
let wrongAnswer = "Väärin. Hyvä yritys!";

let pisteet = 0

function correctAnswer() {

    // Jos "Turku" valittuna
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = rightAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v1").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("correctAnswer");

        pisteet++
    }

    // Jos "Oulu" valittuna
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v2").classList.add("incorrectAnswer");
        document.getElementById("v1").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }
    
    // Jos "Kuopio" valittuna
        if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v3").classList.add("incorrectAnswer");
        document.getElementById("v1").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos "Rovaniemi" valittuna
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v4").classList.add("incorrectAnswer");
        document.getElementById("v1").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos "Helsinki" valittuna
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v5").classList.add("incorrectAnswer");
        document.getElementById("v1").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    document.getElementById("seuraava").style.visibility = 'visible';

    document.getElementById("lukitse").disabled = true;

    localStorage.setItem("pisteet5", pisteet);

}