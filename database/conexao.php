<?php
// conexao com o banco de dados


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $comentario = $_POST['inputReceio'];

    // Conectar ao banco de dados
    $conexao = mysqli_connect('localhost','root','','comentarios.sql');

    // Inserir os dados no banco de dados
    $query = "INSERT INTO comentarios (comentario) VALUES ('$comentario')";

    $result = mysqli_query($conexao, $query);

    if ($result) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro ao cadastrar: " . mysqli_error($con);
    }
    

    mysqli_close($conexao);
}
?>