let answerbox = document.getElementById("vastaus").innerHTML = "";
document.getElementById("seuraava").disabled = true;

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
        
        
        }
        document.getElementById("seuraava").disabled = false;
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
    }