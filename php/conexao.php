<?php
$servidor = "localhost";
$usuario = "root"; // Usuário padrão do XAMPP/WAMP
$senha = ""; // Senha padrão do XAMPP/WAMP
$banco = "hocworks_db";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}
?>