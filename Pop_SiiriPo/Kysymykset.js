const CORRECT1 = "Oikein, hyvä hyvä! Minecraft on kuuluisa siitä, että peli on tehty vain neliöistä."

const INCORRECT1 = "Ei ihan! Kuvassa on Minecraft."

const CORRECT3 = "Hyvin menee! Tupu, Hupu ja Lupu ovat Aku Ankan siskonpoikien nimet."

const INCORRECT3 = "Hupsis! Aku Ankan siskonpoikien nimet ovat Tupu, Hupu ja Lupu."

const CORRECT4 = "Mahtavaa! Tämähän on kaikkien rakastaman Walt Disney studion logo!"

const INCORRECT4 = "Voi ei! Tämä on Disney studion logo."


function correctAnswer1() {

    // Jos Lego Worlds valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT1;

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
        document.getElementById("ratkaisu").innerHTML = INCORRECT1;

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
        document.getElementById("ratkaisu").innerHTML = INCORRECT1;

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
        document.getElementById("ratkaisu").innerHTML = CORRECT1;

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
        document.getElementById("ratkaisu").innerHTML = INCORRECT1;

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

function correctAnswer2() {

    // Jos Nuuskamuikkunen valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = "Melkein! Nuuskamuikkunen ei ole kuvan henkilö.";
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
        
        document.getElementById("v1").classList.add("incorrectAnswer");
        document.getElementById("v2").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }
    
    // Jos Peter Pan valittu
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = "Täydellistä! Kyseessä on Peter Pan!";
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v2").classList.add("correctAnswer");
        
        document.getElementById("ratkaisu").classList.add("correctAnswer");
    }
    
    // Jos Robin Hood valittu
    if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = "Ei ihan! Robin Hood ei ole kuvan henkilö.";
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v3").classList.add("incorrectAnswer");
        document.getElementById("v2").classList.add("correctAnswer");
        
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }
    
    // Jos Risto Reipas valittu
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = "Väärin meni. Risto Reipas ei ole kyseinen henkilö.";
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v4").classList.add("incorrectAnswer");
        document.getElementById("v2").classList.add("correctAnswer");
        
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }
    
    // Jos The Ville Vallaton valittu
    if(document.getElementById("vastaus5").checked) {
        document.getElementById("ratkaisu").innerHTML = "Aijai! Ville Vallaton ei ole kuvan henkilö.";
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v5").classList.add("incorrectAnswer");
        document.getElementById("v2").classList.add("correctAnswer");
        
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    document.getElementById("seuraava").style.visibility = 'visible';

    document.getElementById("lukitse").disabled = true;
}

function correctAnswer3() {

    // Jos Tatu, Lapu ja Hopu valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v1").classList.add("incorrectAnswer");
        document.getElementById("v3").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Roblox valittu
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v2").classList.add("incorrectAnswer");
        document.getElementById("v3").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Among Us valittu
    if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = CORRECT3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v3").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("correctAnswer");
    }

    // Jos Minecraft valittu
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v4").classList.add("incorrectAnswer");
        document.getElementById("v3").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos The Sims 4 valittu
    if(document.getElementById("vastaus5").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT3;

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

function correctAnswer4() {

    // Jos Dreamworks valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = INCORRECT4;

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
        document.getElementById("ratkaisu").innerHTML = INCORRECT4;

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
        document.getElementById("ratkaisu").innerHTML = INCORRECT4;

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
        document.getElementById("ratkaisu").innerHTML = INCORRECT4;

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
        document.getElementById("ratkaisu").innerHTML = CORRECT4;

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

function correctAnswer5() {

    // Jos Nasu valittu
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = "Täydellistä! Nasu on pieni, vaaleanpunainen possu.";

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v1").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("correctAnswer");
    }

    // Jos Ihaa valittu
    if(document.getElementById("vastaus2").checked) {
        document.getElementById("ratkaisu").innerHTML = "Voi ei! Ihaa on harmaa aasi.";

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v2").classList.add("incorrectAnswer");
        document.getElementById("v1").classList.add("correctAnswer");

    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Kani valittu
    if(document.getElementById("vastaus3").checked) {
        document.getElementById("ratkaisu").innerHTML = "Väärin meni! Kani on keltainen jänis.";

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v3").classList.add("incorrectAnswer");
        document.getElementById("v1").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Ruu valittu
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = "Ei ihan! Ruu on pieni ruskea kenguru.";

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v4").classList.add("incorrectAnswer");
        document.getElementById("v1").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("incorrectAnswer");
    }

    // Jos Tiikeri valittu
    if(document.getElementById("vastaus5").checked) {
        document.getElementById("ratkaisu").innerHTML = "Aijai! Tiikeri on mustaraitainen oranssi tiikeri.";

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
}