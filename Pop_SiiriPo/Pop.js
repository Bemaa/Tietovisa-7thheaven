document.getElementById("lukitse").addEventListener("click", correctAnswer);

const CORRECT = "Oikein, hyvä hyvä! Minecraft on erittäin kuuluisa siitä, että peli on tehty vain neliöistä."

const INCORRECT = "Ei ihan! Tässä pelissä on muitakin muotoja kuin neliöitä."

// Korjaa radiobuttonit ettei käyttäjä voi valita montaa & käyttäjä voi vaihtaa valintaansa.

function correctAnswer() {

    // Jos Lego Worlds valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
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
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    document.getElementById("seuraava").style.visibility = 'visible';
}