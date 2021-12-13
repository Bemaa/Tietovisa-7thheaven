/*
    Created on : December, 2021
    Author     : Siiri Poropudas
*/

const CORRECT1 = "Oikein, hyvä hyvä! Minecraft on kuuluisa siitä, että peli on tehty vain neliöistä."
const INCORRECT1 = "Ei ihan! Kuvassa on Minecraft."

const CORRECT3 = "Hyvin menee! Tupu, Hupu ja Lupu ovat Aku Ankan siskonpoikien nimet."
const INCORRECT3 = "Hupsis! Aku Ankan siskonpoikien nimet ovat Tupu, Hupu ja Lupu."

const CORRECT4 = "Mahtavaa! Tämähän on kaikkien rakastaman Walt Disney studion logo!"
const INCORRECT4 = "Voi ei! Tämä on Disney studion logo."

let pisteet = 0

/*
Funktio 1. kysymykselle, joka tarkastaa minkä vastauksen käyttäjä on valinnut ja tuottaa elementin sivulle riippuen onko vastaus väärä vai oikea. Kun funktio on käynyt if-lauseet läpi, lopuksi se tuo "seuraava" napin esiin näkyville käyttäjälle sekä lukitsee "lukitse" napin, ettei sitä voi painaa.
*/
function correctAnswer1() {

    /*
    Jos käyttäjä on valinnut vastauksen "Lego Worlds".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Roblox".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Among Us".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Minecraft".
    Vastaus on oikein, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan oikein. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri vihreäksi sekä ilmoitustekstin väri vihreäksi.
    */
    if(document.getElementById("vastaus4").checked) {
        document.getElementById("ratkaisu").innerHTML = CORRECT1;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v4").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("correctAnswer");

        pisteet++;
    }

    /*
    Jos käyttäjä on valinnut vastauksen "The Sims 4".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    localStorage.setItem("pisteet1", pisteet);
}

/*
Funktio 2. kysymykselle, joka tarkastaa minkä vastauksen käyttäjä on valinnut ja tuottaa elementin sivulle riippuen onko vastaus väärä vai oikea. Kun funktio on käynyt if-lauseet läpi, lopuksi se tuo "seuraava" napin esiin näkyville käyttäjälle sekä lukitsee "lukitse" napin, ettei sitä voi painaa.
*/
function correctAnswer2() {
    /*
    Jos käyttäjä on valinnut vastauksen "Nuuskamuikkunen".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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
    
    /*
    Jos käyttäjä on valinnut vastauksen "Peter Pan".
    Vastaus on oikein, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan oikein. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri vihreäksi sekä ilmoitustekstin väri vihreäksi.
    */
    if(document.getElementById("vastaus2").checked) {

        document.getElementById("ratkaisu").innerHTML = "Täydellistä! Kyseessä on Peter Pan!";
    
        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v2").classList.add("correctAnswer");
        
        document.getElementById("ratkaisu").classList.add("correctAnswer");

        pisteet++;
    }
    
    /*
    Jos käyttäjä on valinnut vastauksen "Robin Hood".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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
    
    /*
    Jos käyttäjä on valinnut vastauksen "Risto Reipas".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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
    
    /*
    Jos käyttäjä on valinnut vastauksen "Ville Vallaton".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    localStorage.setItem("pisteet2", pisteet);
}

/*
Funktio 3. kysymykselle, joka tarkastaa minkä vastauksen käyttäjä on valinnut ja tuottaa elementin sivulle riippuen onko vastaus väärä vai oikea. Kun funktio on käynyt if-lauseet läpi, lopuksi se tuo "seuraava" napin esiin näkyville käyttäjälle sekä lukitsee "lukitse" napin, ettei sitä voi painaa.
*/
function correctAnswer3() {
 
    /*
    Jos käyttäjä on valinnut vastauksen "Tatu, Lapu ja Hotu".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Tupu, Hupu ja Latu".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Tupu, Hupu ja Lupu".
    Vastaus on oikein, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan oikein. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri vihreäksi sekä ilmoitustekstin väri vihreäksi.
    */
    if(document.getElementById("vastaus3").checked) {

        document.getElementById("ratkaisu").innerHTML = CORRECT3;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v3").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("correctAnswer");

        pisteet++;
    }

    /*
    Jos käyttäjä on valinnut vastauksen "Jupu, Kipa ja Tina".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Heillä ei ole nimiä".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    localStorage.setItem("pisteet3", pisteet);
}

/*
Funktio 4. kysymykselle, joka tarkastaa minkä vastauksen käyttäjä on valinnut ja tuottaa elementin sivulle riippuen onko vastaus väärä vai oikea. Kun funktio on käynyt if-lauseet läpi, lopuksi se tuo "seuraava" napin esiin näkyville käyttäjälle sekä lukitsee "lukitse" napin, ettei sitä voi painaa.
*/
function correctAnswer4() {

    /*
    Jos käyttäjä on valinnut vastauksen "Dreamworks".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Universal Pictures".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Warner Bros".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Pixar".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Walt Disney".
    Vastaus on oikein, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan oikein. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri vihreäksi sekä ilmoitustekstin väri vihreäksi.
    */
    if(document.getElementById("vastaus5").checked) {

        document.getElementById("ratkaisu").innerHTML = CORRECT4;

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;

        document.getElementById("v5").classList.add("correctAnswer");
    
        document.getElementById("ratkaisu").classList.add("correctAnswer");

        pisteet++;
    }

    if(document.getElementById("image1").style.display != 'show') {
        
        document.getElementById("image1").style.display = 'block';
        document.getElementById("image2").style.display = 'none'
    }

    document.getElementById("seuraava").style.visibility = 'visible';

    document.getElementById("lukitse").disabled = true;

    localStorage.setItem("pisteet4", pisteet);
}

/*
Funktio 5. kysymykselle, joka tarkastaa minkä vastauksen käyttäjä on valinnut ja tuottaa elementin sivulle riippuen onko vastaus väärä vai oikea. Kun funktio on käynyt if-lauseet läpi, lopuksi se tuo "seuraava" napin esiin näkyville käyttäjälle sekä lukitsee "lukitse" napin, ettei sitä voi painaa.
*/
function correctAnswer5(){
    /*
    Jos käyttäjä on valinnut vastauksen "Nasu".
    Vastaus on oikein, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan oikein. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri vihreäksi sekä ilmoitustekstin väri vihreäksi.
    */
    if(document.getElementById("vastaus1").checked) {
        document.getElementById("ratkaisu").innerHTML = "Täydellistä! Nasu on pieni, vaaleanpunainen possu.";

        document.getElementById("vastaus1").disabled = true;
        document.getElementById("vastaus2").disabled = true;
        document.getElementById("vastaus3").disabled = true;
        document.getElementById("vastaus4").disabled = true;
        document.getElementById("vastaus5").disabled = true;
    
        document.getElementById("v1").classList.add("correctAnswer");

        document.getElementById("ratkaisu").classList.add("correctAnswer");

        pisteet++;
    }

    /*
    Jos käyttäjä on valinnut vastauksen "Ihaa".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Kani".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Ruu".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    /*
    Jos käyttäjä on valinnut vastauksen "Tiikeri".
    Vastaus on väärä, joten tuotetaan sivulle teksti, joka ilmoittaa käyttäjälle vastauksen olevan väärin. Lukitaan myös radiobuttonit, jolloin vastausta ei voi enää vaihtaa. Muutetaan valitun vastauksen väri punaiseksi sekä oikean vastauksen väri vihreäksi. Muutetaan myös ilmoitustekstin väri punaiseksi.
    */
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

    localStorage.setItem("pisteet5", pisteet);
}

let lopputulos = parseInt(localStorage.getItem('pisteet1'))+ parseInt(localStorage.getItem('pisteet2'))+ parseInt(localStorage.getItem('pisteet3'))+ parseInt(localStorage.getItem('pisteet4'))+ parseInt(localStorage.getItem('pisteet5'));

document.getElementById("pisteet").innerHTML = "Pisteesi: " + lopputulos;