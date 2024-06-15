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
        document.getElementById("popUpTitle").innerHTML = "Stuart Russel";
        document.getElementById("popUpText").innerHTML = "“[...] sistemas de inteligências artificiais que recebem objetivos que não levam em conta todos os elementos que humanos se preocupam [...]”.";
        document.getElementById("popUpImg").src = "../../img/pessoas/StuartRussell.jpg";
    } else if(idCard == "2") {
        document.getElementById("popUpTitle").innerHTML = "Stephen Hawking";
        document.getElementById("popUpText").innerHTML = "“Uma vez que os humanos desenvolvessem inteligência artificial, ela decolaria por conta própria e redesenhar-se a uma taxa cada vez maior. Os seres humanos, que são limitados por processos biológicos lentos de evolução, não poderiam competir e seriam substituídos”.";
        document.getElementById("popUpImg").src = "../../img/pessoas/StephenHawking.webp";
    } else if(idCard == "3") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“E sobre altruísmo e ajudar os outros em necessidade, especialmente seu irmão? Uma máquina pode ensinar isso a eles? Eu acho que não [...]”";
        document.getElementById("popUpImg").src = "../../img/pessoas/Anonimo.jpg";
    } else if(idCard == "4") {
        document.getElementById("popUpTitle").innerHTML = "Gordon Matthew";
        document.getElementById("popUpText").innerHTML = "“Essa será uma batalha que todos nós teremos que travar nos próximos dois anos: defender nosso capital humano contra a IA”.";
        document.getElementById("popUpImg").src = "../../img/pessoas/Sting.jpg";
    } else if(idCard == "5") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“Podemos confiar nela tecnicamente, mas nunca na sua ‘humanidade’”.";
        document.getElementById("popUpImg").src = "../../img/pessoas/Anonimo.jpg";
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
        document.getElementById("audioButton").src = "../../img/audioDisabledIcon.png";
    } else {
        document.getElementById("audioTag").play();
        document.getElementById("audioTag").classList.remove("disabled");
        document.getElementById("audioTag").classList.add("enabled");
        document.getElementById("audioButton").src = "../../img/audioEnabledIcon.png";
    }
}