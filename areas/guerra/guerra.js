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
        document.getElementById("popUpTitle").innerHTML = "Noam Chomsky";
        document.getElementById("popUpText").innerHTML = "“Este é o ataque mais radical ao pensamento crítico, à inteligência crítica e particularmente à ciência que eu jamais vi”.";
        document.getElementById("popUpImg").src = "/img/pessoas/NoamChomsky.webp";
    } else if(idCard == "2") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“Então, o que impediria os robôs de nos escravizarem ou de dizimarem a nossa espécie?”";
        document.getElementById("popUpImg").src = "/img/pessoas/Anonimo.jpg";
    } else if(idCard == "3") {
        document.getElementById("popUpTitle").innerHTML = "Elon Musk";
        document.getElementById("popUpText").innerHTML = "“IAs são mais perigosas que, digamos, um design mal-feito de avião ou de carro, no sentido de que tem o potencial — por menor que seja, embora não-trivial — elas tem o potencial de destruir a civilização.”";
        document.getElementById("popUpImg").src = "/img/pessoas/ElonMusk.jpg";
    } else if(idCard == "4") {
        document.getElementById("popUpTitle").innerHTML = "Mark Bishop";
        document.getElementById("popUpText").innerHTML = "“Em meu papel como especialista em IA no Comitê Internacional para Controle de Armas de Robôs, estou particularmente preocupado com a potencial implantação de sistemas de armas robóticas que pode engajar militarmente sem intervenção humana [...]”";
        document.getElementById("popUpImg").src = "/img/pessoas/MarkBishop.jpg";
    } else if(idCard == "5") {
        document.getElementById("popUpTitle").innerHTML = "Sam Altman";
        document.getElementById("popUpText").innerHTML = "“A inteligência artificial provavelmente irá causar o fim do mundo, mas enquanto isso não acontece, existirão grandes empresas”.";
        document.getElementById("popUpImg").src = "/img/pessoas/SamAltman.jpg";
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