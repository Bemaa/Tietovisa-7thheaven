


//pisteitten laskua
let pisteet = 0

function anwser(){
  
    
    let rightAnswer1 = "Vastasit oikein!";
    let wrongAnswer1 = "Väärin. Jääkiekossa yhdellä joukkueella on viisi kenttäpelaajaa ja maalivahti eli yhteensä kuusi pelaajaa kentällä. "
    if(document.getElementById("vastaus1").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus2").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus3").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus4").checked){
    document.getElementById("vastaus").innerHTML = rightAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid green;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;

    pisteet++;
    }
    if(document.getElementById("vastaus5").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;


    }
    document.getElementById("seuraava").disabled = false;
    localStorage.setItem("pisteet1", pisteet);
}


function anwser2(){

    let rightAnswer1 = "Vastasit oikein!";
    let wrongAnswer1 = "Väärin meni. Oikea vastaus on Portugalista."
    if(document.getElementById("vastaus1").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus2").checked){
    document.getElementById("vastaus").innerHTML = rightAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid green;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    pisteet++;
    }
    if(document.getElementById("vastaus3").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus4").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus5").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;


    }
    document.getElementById("seuraava").disabled = false;
    localStorage.setItem("pisteet2", pisteet);
}

function anwser3(){


    let rightAnswer1 = "Vastasit oikein!";
    let wrongAnswer1 = "Väärin meni. Oikea vastaus on tennikseen."
    if(document.getElementById("vastaus1").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus2").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus3").checked){
    document.getElementById("vastaus").innerHTML = rightAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid green;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    pisteet++;
    }
    if(document.getElementById("vastaus4").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus5").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    
    
    }
    document.getElementById("seuraava").disabled = false;
    localStorage.setItem("pisteet3", pisteet);
}

function anwser4(){


    let rightAnswer1 = "Vastasit oikein!";
    let wrongAnswer1 = "Väärin meni. Oikea vastaus on koripallossa."
    if(document.getElementById("vastaus1").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus2").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus3").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");


    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus4").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus5").checked){
    document.getElementById("vastaus").innerHTML = rightAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid green;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;

    pisteet++;
    }   
    document.getElementById("seuraava").disabled = false;
    localStorage.setItem("pisteet4", pisteet);
}

function anwser5(){


    let rightAnswer1 = "Vastasit oikein!";
    let wrongAnswer1 = "Väärin meni. Oikea vastaus on golffissa."
    if(document.getElementById("vastaus1").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus2").checked){
    document.getElementById("vastaus").innerHTML = rightAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid green;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;

    pisteet++;
    }
    if(document.getElementById("vastaus3").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus4").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }
    if(document.getElementById("vastaus5").checked){
    document.getElementById("vastaus").innerHTML = wrongAnswer1;
    document.getElementById("quiz").setAttribute("style"," border: 15px solid red;");

    document.getElementById("vastaus1").disabled = true;
    document.getElementById("vastaus2").disabled = true;
    document.getElementById("vastaus3").disabled = true;
    document.getElementById("vastaus4").disabled = true;
    document.getElementById("vastaus5").disabled = true;
    }

    document.getElementById("seuraava").disabled = false;
    localStorage.setItem("pisteet5", pisteet);
}




let lopputulos = parseInt(localStorage.getItem('pisteet1'))+ parseInt(localStorage.getItem('pisteet2'))+ parseInt(localStorage.getItem('pisteet3'))+ parseInt(localStorage.getItem('pisteet4'))+ parseInt(localStorage.getItem('pisteet5'));
document.getElementById("pisteet").innerHTML = "Pisteesi: " + lopputulos;