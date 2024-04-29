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
        document.getElementById("tutorialSlide").innerHTML = "2";
        document.getElementById("tutorialImg").src = "/img/school.jpg";
        document.getElementById('firstSlide').id = 'secondSlide';
        //document.getElementById("tutorialText").innerHTML = "";
    } else if (document.getElementById("secondSlide")){
        document.getElementById("tutorialSlide").innerHTML = "3";
        document.getElementById("tutorialImg").src = "/img/war.jpg";
        document.getElementById('secondSlide').id = 'thirdSlide';
        //document.getElementById("tutorialText").innerHTML = "";
    }
}
function recedeSlide(){
    if (document.getElementById("thirdSlide")){
        document.getElementById("tutorialSlide").innerHTML = "2";
        document.getElementById("tutorialImg").src = "/img/school.jpg";
        document.getElementById('thirdSlide').id = 'secondSlide';
        //document.getElementById("tutorialText").innerHTML = "";
    } else if (document.getElementById("secondSlide")){
        document.getElementById("tutorialSlide").innerHTML = "1";
        document.getElementById("tutorialImg").src = "/img/bank.jpg";
        document.getElementById('secondSlide').id = 'firstSlide';
        //document.getElementById("tutorialText").innerHTML = "";
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