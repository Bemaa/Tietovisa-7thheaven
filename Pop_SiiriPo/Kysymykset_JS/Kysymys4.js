document.getElementById("lukitse").addEventListener("click", correctAnswer);

const CORRECT = "Mahtavaa! Tämähän on kaikkien rakastaman Disney studion logo!"

const INCORRECT = "Voi ei! Tämä on Disney studion logo."

function correctAnswer() {

    // Jos Dreamworks valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v1").classList.add("incorrectAnswer");
        document.getElementById("v5").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Universal pictures valittu
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v2").classList.add("incorrectAnswer");
        document.getElementById("v5").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Warner Bros valittu
    if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v3").classList.add("incorrectAnswer");
        document.getElementById("v5").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Pixar valittu
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v4").classList.add("incorrectAnswer");
        document.getElementById("v5").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Disney valittu
    if(document.getElementById("vastaus5").checked) {
        document.getElementById("ratkaisu").innerHTML = CORRECT;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v5").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("correctAnswer");
    }

    if(document.getElementById("image1").style.display != 'show') {
        
        document.getElementById("image1").style.display = 'block';
        document.getElementById("image2").style.display = 'none'
    };

    document.getElementById("seuraava").style.visibility = 'visible';

    document.getElementById("lukitse").disabled = true;
}