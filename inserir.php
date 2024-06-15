<?php
    include('./database/conexao.php');

    if (isset($_POST['submit'])) {
        $inputReceio = $_POST['inputReceio'];
    
        if ($inputReceio == "" || empty($inputReceio)) {
            header('location:home.php?message=Informe seu medo primeiro');
        } else {
            $query = "insert into `comentarios` (`comentario`) values ('$inputReceio')";

            $result = mysqli_query($connection, $query);

            if (!$result) {
                die("Query erro".mysqli_error());
            } else {
                header('location:home.php?insert_msg=Comentario Salvo');
            }
            
        }
    }
?>