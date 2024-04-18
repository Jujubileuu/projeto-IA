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
        document.getElementById("popUpText").innerHTML = "teste3";
        document.getElementById("popUpImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5yf9d35OUjrxlQIpIhXop9rc9DN749axHenYIPlMk-aAzQrRDy94Ciins7zcfZfhE6o&usqp=CAU";
    } else if(idCard == "4") {
        document.getElementById("popUpText").innerHTML = "teste4";
        document.getElementById("popUpImg").src = "https://thumbs.dreamstime.com/b/imagem-bonita-da-silhueta-da-natureza-65000328.jpg";
    } else if(idCard == "5") {
        document.getElementById("popUpText").innerHTML = "teste5";
        document.getElementById("popUpImg").src = "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png";
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