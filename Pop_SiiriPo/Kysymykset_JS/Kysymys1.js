document.getElementById("lukitse").addEventListener("click", correctAnswer);

const CORRECT = "Oikein, hyvä hyvä! Minecraft on kuuluisa siitä, että peli on tehty vain neliöistä."

const INCORRECT = "Ei ihan! Kuvassa on Minecraft."

function correctAnswer() {

    // Jos Lego Worlds valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v1").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Roblox valittu
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v2").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Among Us valittu
    if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v3").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Minecraft valittu
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = CORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v4").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("correctAnswer");
    }

    // Jos The Sims 4 valittu
    if(document.getElementById("vastaus5").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v5").classList.add("incorrectAnswer");
        document.getElementById("v4").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    document.getElementById("seuraava").style.visibility = 'visible';

    document.getElementById("lukitse").disabled = true;
}