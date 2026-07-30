<!DOCTYPE html>
<html lang="pt-br
">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body background="#757575">

<font size=5>

<?php 

include("./conexao.php");
 if($_POST){

    $SenhaUsuario = $_POST["SenhaUsuario"];
    $LoginUsuario = $_POST["LoginUsuario"];

    if(!$LoginUsuario or !$SenhaUsuario){
        print("é necessario digitar login e senha");
    }else{
        $Query = "SELECT * from clientes where ";
        $Query .="Login = '$LoginUsuario'";
        $Query .=" AND Senha = '$SenhaUsuario'"; 
        $Resultado = mysqli_query($ConexaoId, $Query);
        $Registro = mysqli_fetch_array($Resultado);

        print("<br> Login = $LoginUsuario <br> Senha=$SenhaUsuario");

        if($Registro['Login']== $LoginUsuario and $Registro['Senha'] == $SenhaUsuario){
            if($Registro['Login']== "admin" and $Registro['Senha'] == "123"){

                echo("<script>");
                    print("window.open('./adm/opcoes.html')");
                echo("</script>");
            }else{
                print("<br><a href='./ver_produto.php?CodCliente=$Registro[CodCliente] '>PRODUTOS</a> ");
            }
        }else{
            echo"<script>window.alert('Senha ou login incorretos')</script>";
            echo"<script>";
            print("window.open('./login.html')");
            echo"</script>";
        }
    }
 }

// passo pra consultar os treco do banco slk 

 // monta a consulta
 //envia consulta
 // recebe a consulta


 // forma de controlar os lance dos user é por sessão e o modo simples é manda junto pelo link 

 // ? envio de uma variavel junto com o link 
?>



</font>


    
</body>
</html>