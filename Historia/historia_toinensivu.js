/*
    Created on : December, 2021
    Author     : Liisa Pikkarainen
*/

// Javascriptin pohjaa lainattu Siiri Poroputaalta

document.getElementById("lukitse").addEventListener("click", correctAnswer);

let rightAnswer = "Oikein, esihistoriahan se!";
let wrongAnswer = "Väärin. Älä luovuta!";

let pisteet = 0

function correctAnswer() {

    // Jos Keskiaika valittuna
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v1").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Nykyaika valittuna
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v2").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }
    
    // Jos Varhaishistoria valittuna
        if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
        
        document.getElementById("v3").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }
    // Jos Esihistoria valittuna
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = rightAnswer;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v4").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("correctAnswer");

        pisteet++
    }
    // Jos Renessanssi valittuna
    if(document.getElementById("vastaus5").checked) {
        document.getElementById("ratkaisu").innerHTML = wrongAnswer;
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
        
        document.getElementById("v5").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }


    document.getElementById("lukitse").disabled = true;

    localStorage.setItem("pisteet2", pisteet);

}

let lopputulos = parseInt(localStorage.getItem('pisteet1'))+ parseInt(localStorage.getItem('pisteet2'))+ parseInt(localStorage.getItem('pisteet3'))+ parseInt(localStorage.getItem('pisteet4'))+ parseInt(localStorage.getItem('pisteet5'));

document.getElementById("pisteet").innerHTML = "Pisteesi: " + lopputulos;