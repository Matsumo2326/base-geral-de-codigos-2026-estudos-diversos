<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Clientes</title>
</head>
<body>

    <?php 
        include("../conexao.php");
        // 1º passo monatar a consulta SQL
        $Query = "select * from clientes";

        // 2º passo enviar a consulta SQL
        $Resultado = mysqli_query($ConexaoId, $Query) or Die("Não foi possível selecionara base");

        // receber os dados dos registros
        $Colunas = mysqli_num_fields($Resultado); // total de Campos do BD
        $Total = mysqli_num_rows($Resultado); // total de registros do BD

         $LPP = 10;
         $paginas = ceil($Total/$LPP);
         print("<br><font color=red><b>CLIENTES</b></font><br><br>");
         
         /*Pega o número da página atual via GET e valida para evitar valores inválidos
         */
         $pagina = isset($_GET['pagina'])?intval($_GET['pagina']) : 1;
         if($pagina < 1) $pagina = 1;

         $Inicio = ($pagina -1) * $LPP;
         // cinsulta com limit para paginação

         $Query = "Select * from clientes limit $Inicio,$LPP";

         $Resultado = mysqli_query($ConexaoId, $Query);

         print("<center><table border='1'>");
         print("<tr>");
         print("<th>Codigo</th><th>Nome</th><th>Cidade</th><th>Estado</th><th>Email</th><th>Login</th><th>Senha</th><th>Validado</th>
         <th>Validar</th><th>Editar</th><th>Excluir</th></tr>");
       

         while($Registros = mysqli_fetch_array($Resultado)){
            print("<tr>");
            for($Cont = 0; $Cont < $Colunas; $Cont++){
                print("<td>$Registros[$Cont]</td>");
            }
            print("<td><a href=validar_cliente.php?CodCliente=$Registros[CodCliente]>$Registros[CodCliente]</a> </td>");

            print("<td><a href=edt_cliente.php?CodCliente=$Registros[CodCliente]>$Registros[CodCliente]</a> </td>");

            print("<td><a href=del_cliente.php?CodCliente=$Registros[CodCliente]>$Registros[CodCliente]</a> </td>");

            print("</tr>");

         }

         print("</table>");


    ?>
    
</body>
</html>
