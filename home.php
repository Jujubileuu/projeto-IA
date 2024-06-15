<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./home.css">
    <script src="./home.js"></script>
    <title>Document</title>
</head>
<body>
<?php include('./database/conexao.php')?>
    <audio src="./audios/FeedTheMachine.mp3" type="audio/mpeg" loop="loop" id="audioTag" class="enabled"></audio>
    <header>
        <div class="headerSpace">
            <a href="./pdf.html">
                <img src="./img/documentIcon.png" alt="" class="headerIcon">
            </a>
            <img src="./img/audioEnabledIcon.png" alt="" class="headerIcon" id="audioButton" onclick="audioOnOff()">
            <img src="./img/iIcon.png" alt="" class="headerIcon" onclick="openTutorial()">
        </div>
    </header>
    <main>
        <div class="tutorial animatedGetUp" id="tutorial">
            <div class="tutorialHeader">
                <h2 class="tutorialSlide" id="tutorialSlide">1/3</h2>
                <h1 class="tutorialTitle">TUTORIAL</h1>
                <h2 class="popUpClose tutorialClose" onclick="closeTutorial()">X</h2>
            </div>
            <div class="tutorialMain">
                <div class="verticalCenter">
                    <img src="./img/setaIcon.png" alt="" class="recede" id="recede" onclick="recedeSlide()">
                </div>
                <div class="verticalCenter" id="firstSlide">
                    <img src="./img/prints/printHome.png" alt="" class="tutorialImg" id="tutorialImg">
                    <p class="tutorialText" id="tutorialText" name="firstSlide">Na página principal do site terão três estruturas e cada uma delas levará para uma área diferente do site, não existe uma ordem certa para visualizar. Na parte superior estão ícones que da esquerda para à direita estão um link para abrir o projeto de pesquisa que antecede esse projeto, um botão para mutar a música da página e um botão de ajuda que reabrirá o tutorial.</p>
                </div>
                <div class="verticalCenter">
                    <img src="./img/setaIcon.png" alt="" class="pass" id="pass" onclick="passSlide()">
                </div>
            </div>
        </div>
        <div class="firstArea" id="firstArea" onmouseover="overlayHover(this.id)" onmouseleave="overlayHoverOff()">
            <h1 class="tituloArea" id="eticaTitle">ETICA</h1>
            <a href="./areas/etica/etica.html">
                <img src="./img/escolaEstrutura.png" alt="" class="escolaEstrutura">
            </a>
        </div>
        <div class="thirdArea" id="thirdArea" onmouseover="overlayHover(this.id)" onmouseleave="overlayHoverOff()">
            <h1 class="tituloArea" id="guerraTitle">GUERRA</h1>
            <a href="./areas/guerra/guerra.html">
                <img src="./img/predioEstrutura.png" alt="" class="predioEstrutura">
            </a>
        </div>
        <div class="secondArea" id="secondArea" onmouseover="overlayHover(this.id)" onmouseleave="overlayHoverOff()">
            <h1 class="tituloArea" id="economiaTitle">ECONOMIA</h1>
            <a href="./areas/economia/economia.html">
                <img src="./img/bancoEstrutura.png" alt="" class="bancoEstrutura">
            </a>
        </div>

        <div class="openForm" onclick="openForm()"></div>
        <div class="popUp animatedGetUp" id="popUp">
            <div class="popUpHeader">
                <h1 class="popUpTitle">Seu Receio</h1>
                <h2 class="popUpClose" onclick="closeForm()">X</h2>
            </div>
            <hr>
            <div class="popUpMain">
                <div class="scrollArea" id="comentariosSR" style="overflow-y: scroll; height: 60vh; width: 100%;">
                    <?php
                        $query = "select * from `comentarios`";

                        $result = mysqli_query($connection, $query);

                        if (!$result) {
                            die("query failed".mysqli_error());
                        } else{
                            while ($row = mysqli_fetch_assoc($result)) {
                                ?>
                                    <p class="popUpText"><?php echo $row['comentario']; ?></p>
                                    <hr class="textHr">
                                <?php
                            }
                        }
                    ?>
                </div>
            </div>
            <hr>
            
            <form action="./inserir.php" method="post">
                <div class="popUpFooter">
                    <input type="text" name="inputReceio" id="inputReceio" placeholder="Informe seu receio sobre as IAs:">
                    <input type="submit" name="submit"  value="Enviar" id="enviar"/>
                </div>
            </form>
        </div>
        <div id="overlay" onmouseover="overlayHover()"></div>
    </main>
</body>
</html>