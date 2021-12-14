/*
    Created on : December, 2021
    Maker     : Carita Niskanen
*/

const CORRECT1 = "Oikea vastaus! Mona Lisan maalasi Leonardo Da Vinci vuonna 1503."
const WRONG1 = "Väärä vastaus! Oikea vastaus olisi ollut Leonardo Da Vinci, joka maalasi Mona Lisan vuonna 1503."

const CORRECT2 = "Oikein meni! J.K. Rowling julkaisi seitsemän osaisen sarjan ensimmäisen kirjan vuonna 1997."
const WRONG2 = "Väärä vastaus! Oikea vastaus olisi ollut J.K. Rowling."

const CORRECT3 = "Huippua, tiesit oikean vastauksen! Kuvassa on todellakin Kalevalan päähenkilö Väinämöinen ja Pohjolan emäntä Louhi."
const WRONG3 = "Hitsit, väärin meni! Kuvassa taistelevat Kalevalan päähenkilö Väinämöinen ja Pohjolan emäntä Louhi. "

const CORRECT4 = "Tietenkin hurmaava Robin Packalen, hyvin tiedetty!"
const WRONG4 = "Väärin, oikea vastaus olisi ollut Robin Packalen."

const CORRECT5 = ""
const WRONG5 = ""

let points = 0

/*

*/
function answer1(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = CORRECT1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus1").classList.add("correctAnswer");

        document.getElementById("info").classList.add("correctAnswer");

        points++;
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus2").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus3").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus4").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus5").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus5").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }
}

function answer2(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus1").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");

        
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus2").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = CORRECT2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus3").classList.add("correctAnswer");

        document.getElementById("info").classList.add("correctAnswer");
        
        points++;
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus4").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus5").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus5").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

}

function answer3(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus1").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");

        
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = CORRECT3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus3").classList.add("correctAnswer");

        document.getElementById("info").classList.add("correctAnswer");
        
        points++;
    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus4").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus4").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus5").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
      
    
        document.getElementById("vastaus5").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }
}

function answer4(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus1").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");

        
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus4").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus4").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
        document.getElementById("vastaus4").classList.add("wrongAnswer");

        document.getElementById("info").classList.add("wrongAnswer");
    }

    if (document.getElementById("vastaus5").checked){
        document.getElementById("info").innerHTML = CORRECT4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
      
    
        document.getElementById("vastaus3").classList.add("correctAnswer");

        document.getElementById("info").classList.add("correctAnswer");
        
        points++;
    }
}