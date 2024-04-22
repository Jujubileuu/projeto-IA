function openCard(idCard){
    document.getElementById("popUp").style.display = "block";
    document.getElementById("overlay").style.opacity = 0.5;
    document.getElementById("overlay").classList.add("animatedFadeIn");

    changeContent(idCard);
}
function closeCard(){
    document.getElementById("popUp").style.display = "none";
    document.getElementById("overlay").style.opacity = 0;
    document.getElementById("overlay").classList.remove("animatedFadeIn");
}

function changeContent(idCard){
    if(idCard == "1") {
        document.getElementById("popUpText").innerHTML = "teste1";
        document.getElementById("popUpImg").src = "https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg";
    } else if(idCard == "2") {
        document.getElementById("popUpText").innerHTML = "teste2";
        document.getElementById("popUpImg").src = "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png";
    } else if(idCard == "3") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“Funcionários robôs não pagam impostos e reduzem os custos de mão de obra, com isso as empresas multinacionais vão voltar a seus países de origem o que provoca uma desindustrialização de países mais pobres.”";
        document.getElementById("popUpImg").src = "/img/pessoas/Anonimo.jpg";
    } else if(idCard == "4") {
        document.getElementById("popUpText").innerHTML = "teste4";
        document.getElementById("popUpImg").src = "https://thumbs.dreamstime.com/b/imagem-bonita-da-silhueta-da-natureza-65000328.jpg";
    } else if(idCard == "5") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“A automatização de certos serviços por inteligências artificiais vai acabar gerando desemprego em massa.”";
        document.getElementById("popUpImg").src = "/img/pessoas/Anonimo.jpg";
    }
}

window.onload = function() {
    document.getElementById("audioTag").play();
}

function audioOnOff() {
    if (document.getElementById("audioTag").classList.contains("enabled")) {
        document.getElementById("audioTag").pause();
        document.getElementById("audioTag").classList.remove("enabled");
        document.getElementById("audioTag").classList.add("disabled");
        document.getElementById("audioButton").src = "/img/audioDisabledIcon.png";
    } else {
        document.getElementById("audioTag").play();
        document.getElementById("audioTag").classList.remove("disabled");
        document.getElementById("audioTag").classList.add("enabled");
        document.getElementById("audioButton").src = "/img/audioEnabledIcon.png";
    }
}