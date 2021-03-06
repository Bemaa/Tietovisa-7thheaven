/*
    Created on : December, 2021
    Maker     : Carita Niskanen
*/

// Ensimäisenä asetan jokaiselle kysymykselle oikean-, ja väärän vastauksen infoboxin. Teksti sisältää pienen infon jokaisesta vastauksesta.
const CORRECT1 = "Oikea vastaus! Mona Lisan maalasi Leonardo Da Vinci vuonna 1503."
const WRONG1 = "Väärä vastaus! Oikea vastaus olisi ollut Leonardo Da Vinci, joka maalasi Mona Lisan vuonna 1503."

const CORRECT2 = "Oikein meni! J.K. Rowling julkaisi seitsemän osaisen sarjan ensimmäisen kirjan vuonna 1997."
const WRONG2 = "Väärä vastaus! Oikea vastaus on J.K. Rowling."

const CORRECT3 = "Huippua, tiesit oikean vastauksen! Kuvassa on todellakin Kalevalan päähenkilö Väinämöinen ja Pohjolan emäntä Louhi."
const WRONG3 = "Hitsit, väärin meni! Kuvassa taistelevat Kalevalan päähenkilö Väinämöinen ja Pohjolan emäntä Louhi. "

const CORRECT4 = "Tietenkin hurmaava Robin Packalen, hyvin tiedetty!"
const WRONG4 = "Väärin, oikea vastaus on Robin Packalen."

const CORRECT5 = "Kyllä, juuri näin! Tove Jansson oli suomenruotsalainen kirjailija, taidemaalari ja sarjakuvataiteilija. Muumit syntyivät 1940. "
const WRONG5 = "Hups, väärin! Oikea vastaus on Tove Jansson."

// Asetan muuttujan pistelaskurille, joka lisääntyy jokaisen kysymyksen kohdalla. 
let points = 0;

/* Seuraavaksi määrittelen muuttujat jokaiselle kysymykselle. Jokainen kysymysrakenne on samanlainen, jossa vain vastauksen kohdat muutuvat oikein/väärin. 
Radiobutton checkataan omalla rivillä, että käyttäjä on tehnyt valinnan ja sitten ne lukitaan. 
Oikean vastauksen if-lausekkeen sisällä lisätään 1 piste loppusivulle.
Lopuksi pushataan localStorageen talteen vastauksen tulos. */

function answer1(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = CORRECT1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus1").classList.add("correctAnswer");

        points++;
        
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    

    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

    }

    if (document.getElementById("vastaus5").checked){
        document.getElementById("info").innerHTML = WRONG1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

    }

    localStorage.setItem("vastaus1",  points);

    document.getElementById("next").style.visibility = 'visible';
}

function answer2(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
      
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = CORRECT2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("vastaus2").classList.add("correctAnswer");

        points++;
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

    }

    if (document.getElementById("vastaus5").checked){
        document.getElementById("info").innerHTML = WRONG2;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

    }

    localStorage.setItem("vastaus2",  points);
        
    document.getElementById("next").style.visibility = 'visible';
}

function answer3(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
          
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = CORRECT3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
        
        points++;
    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
      
    }

    localStorage.setItem("vastaus3",  points);

    document.getElementById("next").style.visibility = 'visible';

}

function answer4(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        
    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        

    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
      

    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
       
    }

    if (document.getElementById("vastaus5").checked){
        document.getElementById("info").innerHTML = CORRECT4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
      
        points++;
    }
    localStorage.setItem("vastaus4",  points);
        

    document.getElementById("next").style.visibility = 'visible';
}

function answer5(){

    if (document.getElementById("vastaus1").checked){
        document.getElementById("info").innerHTML = WRONG5;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
    
            
        document.getElementById("vastaus1").classList.add("incorrectAnswer");
        document.getElementById("vastaus3").classList.add("correctAnswer");

    }

    if (document.getElementById("vastaus2").checked){
        document.getElementById("info").innerHTML = WRONG5;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
    
             
        document.getElementById("vastaus2").classList.add("incorrectAnswer");
        document.getElementById("vastaus3").classList.add("correctAnswer");

    }

    if (document.getElementById("vastaus3").checked){
        document.getElementById("info").innerHTML = CORRECT5;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;

            
        document.getElementById("vastaus3").classList.add("correctAnswer");


        points++;
        
    }

    if (document.getElementById("vastaus4").checked){
        document.getElementById("info").innerHTML = WRONG5;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;

     
        document.getElementById("vastaus4").classList.add("incorrectAnswer");
        document.getElementById("vastaus3").classList.add("correctAnswer");

    }


    document.getElementById("next").style.visibility = "visible";

    localStorage.setItem("vastaus5", points);
}
// Lopussa määritellään muuttuja, johon ilmoitetaan oikeiden vastauksien summa ja tulostetaan lopputulos tekstin kanssa.

let lopputulos = parseInt(localStorage.getItem("vastaus1")) +
        parseInt(localStorage.getItem("vastaus2")) +
        parseInt(localStorage.getItem("vastaus3")) +
        parseInt(localStorage.getItem("vastaus4")) + 
        parseInt(localStorage.getItem("vastaus5"));


document.getElementById("end").innerHTML = "Sait " + lopputulos + " pistettä!"