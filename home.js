function overlayHover(idArea) {
    if (idArea == "firstArea") {
        document.getElementById("firstArea").style.zIndex = 10;
        document.getElementById("eticaTitle").style.display = "flex";
    } else if (idArea == "secondArea") {
        document.getElementById("secondArea").style.zIndex = 10;
        document.getElementById("economiaTitle").style.display = "flex";
    } else if (idArea == "thirdArea") {
        document.getElementById("thirdArea").style.zIndex = 10;
        document.getElementById("guerraTitle").style.display = "flex";
    }
    document.getElementById("overlay").style.opacity = 1;
}

function overlayHoverOff() {
    document.getElementById("firstArea").style.zIndex = 0;
    document.getElementById("secondArea").style.zIndex = 0;
    document.getElementById("thirdArea").style.zIndex = 0;
    document.getElementById("eticaTitle").style.display = "none";
    document.getElementById("economiaTitle").style.display = "none";
    document.getElementById("guerraTitle").style.display = "none";
    document.getElementById("overlay").style.opacity = 0;
}