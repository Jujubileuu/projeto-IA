function overlayHover(idArea) {
    if (idArea == "firstArea") {
        document.getElementById("firstArea").style.zIndex = 10;
        document.getElementById("eticaTitle").style.display = "flex";
        document.getElementById("eticaTitle").classList.add("animatedFadeIn");
    } else if (idArea == "secondArea") {
        document.getElementById("secondArea").style.zIndex = 10;
        document.getElementById("economiaTitle").style.display = "flex";
        document.getElementById("economiaTitle").classList.add("animatedFadeIn");
    } else if (idArea == "thirdArea") {
        document.getElementById("thirdArea").style.zIndex = 10;
        document.getElementById("guerraTitle").style.display = "flex";
        document.getElementById("guerraTitle").classList.add("animatedFadeIn");
    }
    document.getElementById("overlay").style.opacity = 0.5;
    document.getElementById("overlay").classList.add("animatedFadeIn");
}

function overlayHoverOff() {
    document.getElementById("firstArea").style.zIndex = 0;
    document.getElementById("secondArea").style.zIndex = 0;
    document.getElementById("thirdArea").style.zIndex = 0;
    document.getElementById("eticaTitle").style.display = "none";
    document.getElementById("economiaTitle").style.display = "none";
    document.getElementById("guerraTitle").style.display = "none";
    document.getElementById("overlay").style.opacity = 0;
    document.getElementById("overlay").classList.remove("animatedFadeIn");
}

function openForm(){
    document.getElementById("popUp").style.display = "block";
}
function closeForm(){
    document.getElementById("popUp").style.display = "none";
}

function openTutorial(){
    document.getElementById("tutorial").style.display = "table";
}
function closeTutorial(){
    document.getElementById("tutorial").style.display = "none";
}

function passSlide(){
    if (document.getElementById("firstSlide")){
        document.getElementById("tutorialSlide").innerHTML = "2/3";
        document.getElementById("tutorialImg").src = "./img/prints/printArea.png";
        document.getElementById('firstSlide').id = 'secondSlide';
        document.getElementById("tutorialText").innerHTML = "Ao entrar em uma das áreas você irá se deparar com cinco cards, cada card contém algum medo ou receio referente a inteligência artificial de alguma pessoa famosa ou anônima.";
    } else if (document.getElementById("secondSlide")){
        document.getElementById("tutorialSlide").innerHTML = "3/3";
        document.getElementById("tutorialImg").src = "./img/prints/printSeuReceio.png";
        document.getElementById('secondSlide').id = 'thirdSlide';
        document.getElementById("tutorialText").innerHTML = "Voltando a página principal existe a parte onde você pode informar algum medo ou receio seu ao mundo, para acessar essa parte clique na parte inferior do site.";
    }
}
function recedeSlide(){
    if (document.getElementById("thirdSlide")){
        document.getElementById("tutorialSlide").innerHTML = "2/3";
        document.getElementById("tutorialImg").src = "./img/prints/printArea.png";
        document.getElementById('thirdSlide').id = 'secondSlide';
        document.getElementById("tutorialText").innerHTML = "Ao entrar em uma das áreas você irá se deparar com cinco cards, cada card contém algum medo ou receio referente a inteligência artificial de alguma pessoa famosa ou anônima.";
    } else if (document.getElementById("secondSlide")){
        document.getElementById("tutorialSlide").innerHTML = "1/3";
        document.getElementById("tutorialImg").src = "./img/prints/printHome.png";
        document.getElementById('secondSlide').id = 'firstSlide';
        document.getElementById("tutorialText").innerHTML = "Na página principal do site terão três estruturas e cada uma delas levará para uma área diferente do site, não existe uma ordem certa para visualizar. Na parte superior estão ícones que da esquerda para à direita estão um link para abrir o projeto de pesquisa que antecede esse projeto, um botão para mutar a música da página e um botão de ajuda que reabrirá o tutorial.";
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
        document.getElementById("audioButton").src = "./img/audioDisabledIcon.png";
    } else {
        document.getElementById("audioTag").play();
        document.getElementById("audioTag").classList.remove("disabled");
        document.getElementById("audioTag").classList.add("enabled");
        document.getElementById("audioButton").src = "./img/audioEnabledIcon.png";
    }
}