<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexao com o banco</title>
</head>
<body>
    <?php
    
    $Host = "localhost"; // 127.0.0.1
    $Usuario = "root";
    $Senha = "admin";
    $Banco = "super_26";


    $ConexaoId = mysqli_connect($Host, $Usuario, $Senha, $Banco) or die("Não foi possivel conectar com o SGBDR");

    //echo " id da conexão : $ConexaoId";

    printf("informação Host: %s\n", $ConexaoId->host_info);






    
    
    
    
    ?>
</body>
</html>