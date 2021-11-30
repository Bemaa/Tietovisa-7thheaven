let points = [];

function anwser(){
    if(document.getElementById("vastaus1").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeHirvi.Joni.html")
    }
    if(document.getElementById("vastaus2").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeIlves.Joni.html")
    }
    if(document.getElementById("vastaus3").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeTiikeri.Joni.html")
        points.push(1);
    }
    if(document.getElementById("vastaus4").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeHuuhkaja.Joni.html")
    }
    if(document.getElementById("vastaus5").checked){
        window.location.replace("../../Luonnontiede/Kysymys1/infoSivut/LuonnontiedeKettu.Joni.html")
    }
    document.getElementById("points").innerHTML = points.length;
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
        window.location.replace("../../Luonnontiede/Kysymys2/infoSivut2/LuonnontiedeLaava.html")
        points.push(1);
    }
    if(document.getElementById("vastaus10").checked){
        window.location.replace("../../Luonnontiede/Kysymys2/infoSivut2/LuonnontiedeGraniitti.html")
    }
};
function anwser3(){
    if(document.getElementById("vastaus11").checked){
        window.location.replace("../../Luonnontiede/Kysymys3/infoSivut3/LuonnontiedeSinivalas.html")
        points.push(1);
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
};
function anwser4(){
    if(document.getElementById("vastaus16").checked){
        window.location.replace("../../Luonnontiede/Kysymys4/infoSivut4/LuonnontiedeLaulujoutsen.html")
    }
    if(document.getElementById("vastaus17").checked){
        window.location.replace("../../Luonnontiede/Kysymys4/infoSivut4/LuonnontiedeKarhu.html")
        points.push(1);
    }
    if(document.getElementById("vastaus18").checked){
        window.location.replace("../../Luonnontiede/Kysymys4/infoSivut4/LuonnontiedeAhven.html")
    }
};
function anwser5(){
    if(document.getElementById("vastaus19").checked){
        window.location.replace("../../Luonnontiede/Kysymys5/infoSivut5/LuonnontiedeKissankello.html")
    }
    if(document.getElementById("vastaus20").checked){
        window.location.replace("../../Luonnontiede/Kysymys5/infoSivut5/LuonnontiedeMaitohorsma.html")
    }
    if(document.getElementById("vastaus21").checked){
        window.location.replace("../../Luonnontiede/Kysymys5/infoSivut5/LuonnontiedeKielo.html")
    }
};