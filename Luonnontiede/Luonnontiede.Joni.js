let points = 0;

function anwser(){
    if(document.getElementById("vastaus1").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeHirvi.Joni.html")
    }
    if(document.getElementById("vastaus2").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeIlves.Joni.html")
    }
    if(document.getElementById("vastaus3").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeTiikeri.Joni.html");
        points++;
    }
    if(document.getElementById("vastaus4").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeHuuhkaja.Joni.html")
    }
    if(document.getElementById("vastaus5").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeKettu.Joni.html")
    }
    localStorage.setItem("points1",  points);
};
function anwser2(){
    if(document.getElementById("vastaus6").checked){
        window.location.replace("../../Luonnontiede/Kysymys2/infoSivut2/LuonnontiedeHiili.html")
    }
    if(document.getElementById("vastaus7").checked){
        window.location.replace("../../Luonnontiede/Kysymys2/infoSivut2/LuonnontiedeMagma.html")
    }
    if(document.getElementById("vastaus8").checked){
        window.location.replace("../../Luonnontiede/Kysymys2/infoSivut2/LuonnontiedeTuli.html")
    }
    if(document.getElementById("vastaus9").checked){
        window.location.replace("../../Luonnontiede/Kysymys2/infoSivut2/LuonnontiedeLaava.html");
        points++;
    }
    if(document.getElementById("vastaus10").checked){
        window.location.replace("../../Luonnontiede/Kysymys2/infoSivut2/LuonnontiedeGraniitti.html")
    }
    localStorage.setItem("points2",  points);
};
function anwser3(){
    if(document.getElementById("vastaus11").checked){
        window.location.replace("../../Luonnontiede/Kysymys3/infoSivut3/LuonnontiedeSinivalas.html");
        points++;
    }
    if(document.getElementById("vastaus12").checked){
        window.location.replace("../../Luonnontiede/Kysymys3/infoSivut3/LuonnontiedeAfrikannorsu.html")
    }
    if(document.getElementById("vastaus13").checked){
        window.location.replace("../../Luonnontiede/Kysymys3/infoSivut3/LuonnontiedeVirtahepo.html")
    }
    if(document.getElementById("vastaus14").checked){
        window.location.replace("../../Luonnontiede/Kysymys3/infoSivut3/LuonnontiedeSarvikuono.html")
    }
    if(document.getElementById("vastaus15").checked){
        window.location.replace("../../Luonnontiede/Kysymys3/infoSivut3/LuonnontiedeLeijona.html")
    }
    localStorage.setItem("points3",  points);
};
function anwser4(){
    if(document.getElementById("vastaus16").checked){
        window.location.replace("../../Luonnontiede/Kysymys4/infoSivut4/LuonnontiedeLaulujoutsen.html")
    }
    if(document.getElementById("vastaus17").checked){
        window.location.replace("../../Luonnontiede/Kysymys4/infoSivut4/LuonnontiedeKarhu.html");
        points++;
    }
    if(document.getElementById("vastaus18").checked){
        window.location.replace("../../Luonnontiede/Kysymys4/infoSivut4/LuonnontiedeAhven.html")
    }
    localStorage.setItem("points4",  points);
};
function anwser5(){
    if(document.getElementById("vastaus19").checked){
        window.location.replace("../../Luonnontiede/Kysymys5/infoSivut5/LuonnontiedeKissankello.html")
    }
    if(document.getElementById("vastaus20").checked){
        window.location.replace("../../Luonnontiede/Kysymys5/infoSivut5/LuonnontiedeMaitohorsma.html")
    }
    if(document.getElementById("vastaus21").checked){
        window.location.replace("../../Luonnontiede/Kysymys5/infoSivut5/LuonnontiedeKielo.html");
        points++;
    }
    localStorage.setItem("points5",  points);
};

let totalPoints = 
parseInt(localStorage.getItem('points1')) + 
parseInt(localStorage.getItem('points2')) + 
parseInt(localStorage.getItem('points3')) + 
parseInt(localStorage.getItem('points4')) + 
parseInt(localStorage.getItem('points5'));

document.getElementById("totalPoints").innerHTML = totalPoints;

if(totalPoints == 0){
    document.getElementById("tulos").innerHTML = "Sinun kannattaa keskittyä tunneilla enemmän.";
}
if(totalPoints == 1){
    document.getElementById("tulos").innerHTML = "Sinun kannattaa vielä harjoitella luonnontiedon asioita.";
}
if(totalPoints == 2){
    document.getElementById("tulos").innerHTML = "Tietosi luonnontieteestä ovat kohtalaiset.";
}
if(totalPoints == 3){
    document.getElementById("tulos").innerHTML = "Hyvä! Luonnontiede on sinulle aiheena melko tuttu.";
}
if(totalPoints == 4){
    document.getElementById("tulos").innerHTML = "Hienosti tehty! 4/5 on todella hyvä tulos. Tiedät paljon luonnontieteestä!";
}
if(totalPoints == 5){
    document.getElementById("tulos").innerHTML = "Mahtavaa! Tunnet luonnontieteen asiat kuin omat taskusi!";
}