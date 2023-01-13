
<?php
    session_start();
    if(isset($_GET['cerrar_sesion'])) {
        $_SESSION = array();
    }
?>





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&display=swap" rel="stylesheet">
    <link href="https://file.myfontastic.com/gya2YWftjT8i7utHYd6M73/icons.css" rel="stylesheet">
    <link rel="icon" type="icon/jpg" href="../img/icon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/inicio.css" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>Iniciar Sesión</title>
</head>

<body>
    <header class="main-header">
        <div class="color">
   <div class="container container--flex">
            <div class="logo-container column column--50"> 
                <h1 class="logo"><a href="../html/index.html" class="style">ServiCompu</a></h1>
            </div>
        <div class="main-header__contactInfo column column--50">
            <p class="main-header__contactInfo__phone">
                <span class="icon-phone"> 999-999-999 </span>
             
            </p>
            <p class="main-header__contactInfo__address">
                <span class="icon-location"> Solanda OE-3 Quito-Ecuador </span>
            </p>
        </div>
    </div>
</div>
</header>
<div class="container--form">
    
    <div class="style--form">
        <h2></h2>
    </div>
    <div class="formulario1">
        <h2>Iniciar Sesión</h2>
        <form id="inicio" action="" method="POST"> 
         <input type="text" name="cedula" id="cedula"  placeholder="Ingrese su Usuario">
         <input type="password" name="clave" id="clave"  placeholder="Ingrese Contraseña">
         <input type="submit" name="enviar" value="Iniciar Sesión">
       </form>
</div>
</div>


        <script src="https://kit.fontawesome.com/4ebf57fa64.js" crossorigin="anonymous"></script>
        <script src="../js/sweetalert2.all.min.js" crossorigin="anonymous"></script>
        <script src="../js/sweetalert2.all.min.js"></script>
        <script src="../js/login.js"></script>
</body>

</html>