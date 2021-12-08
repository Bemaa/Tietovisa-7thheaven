let answerbox = document.getElementById("vastaus").innerHTML = "";

function anwser(){

let rightAnswer1 = "Vastasit oikein!";
let wrongAnswer1 = "Väärin. Jääkiekossa yhdellä joukkueella on viisi kenttäpelaajaa ja maalivahti eli yhteensä 6pelaajaa kentällä. "
    if(document.getElementById("vastaus1").checked){
        document.getElementById("vastaus").innerHTML = wrongAnswer1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus2").checked){
        document.getElementById("vastaus").innerHTML = wrongAnswer1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus3").checked){
        document.getElementById("vastaus").innerHTML = wrongAnswer1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus4").checked){
        document.getElementById("vastaus").innerHTML = rightAnswer1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus5").checked){
        document.getElementById("vastaus").innerHTML = wrongAnswer1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;


    }



}