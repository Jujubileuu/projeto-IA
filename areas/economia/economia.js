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
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“A adoção desigual da IA pode agravar a desigualdade econômica. Se apenas algumas empresas ou países tiverem acesso à tecnologia avançada, isso pode criar disparidades significativas em termos de crescimento econômico e oportunidades para diferentes grupos de pessoas.”";
        document.getElementById("popUpImg").src = "/img/pessoas/Anonimo.jpg";
    } else if(idCard == "2") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“À medida que a IA é cada vez mais usada para análise de dados e tomada de decisões surge a preocupação pelas informações pessoais como dados bancários, já que sistemas de IA podem ser mais vulneráveis a ataques.”";
        document.getElementById("popUpImg").src = "/img/pessoas/Anonimo.jpg";
    } else if(idCard == "3") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“Funcionários robôs não pagam impostos e reduzem os custos de mão de obra, com isso as empresas multinacionais vão voltar a seus países de origem o que provoca uma desindustrialização de países mais pobres.”";
        document.getElementById("popUpImg").src = "/img/pessoas/Anonimo.jpg";
    } else if(idCard == "4") {
        document.getElementById("popUpTitle").innerHTML = "Anônimo";
        document.getElementById("popUpText").innerHTML = "“A IA é treinada com base em dados históricos, e esses dados podem conter preconceitos e discriminação. Existe o medo que sistemas de IA possam perpetuar esses vieses, resultando em decisões injustas ou desiguais em áreas como contratação, crédito e justiça.”";
        document.getElementById("popUpImg").src = "/img/pessoas/Anonimo.jpg";
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