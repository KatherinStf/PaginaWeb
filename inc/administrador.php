<?php
include 'sesiones.php';
?>





<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />

    <link rel="icon" type="icon/jpg" href="../img/icon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css" />
    <link href="https://file.myfontastic.com/gya2YWftjT8i7utHYd6M73/icons.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/colorbox.css" />
    <link rel="stylesheet" href="../css/contacto.css" />
    <link rel="stylesheet" href="../css/productos.css" />
    <link rel="stylesheet" href="../css/administrador.css" />

    <title>ServiCompu</title>

</head>

<body>
    <header class="main-header">
        <div class="container container--flex">
            <div class="logo-container column column--50">
                <h1 class="logo">ServiCompu</h1>
            </div>
            <div class="main-header__contactInfo column column--50">
                <p class="main-header__contactInfo__phone">
                    <span class="icon-phone"> 999-999-999 </span>
                    <!-- <a target="_BLANCK" href="login.html" class="icon-sign-in social-icon__link derecha menu__login"> Iniciar Sesión</a>-->
                </p>
                <p class="main-header__contactInfo__address">
                <a class="fa fa-sign-out menu__login" href="login.php?cerrar_sesion=true">Cerrar Sesión</a>
                </p>
            </div>
        </div>
    </header>


    <section class="banner">
        <img src="../img/titulo.jpg" alt="" class="banner__img">
        <div class="banner__content">Bienvenido al Área Administrativa</div>
    </section>

    <main class="main">
        <section class="group group--color">
            <div class="container">
                <h2 class="main__title">Administración de ServiCompu</h2>
                <p class="main__txt">A continuacion tendrás diferentes opciones para administrar la página, tales como: </p>
            </div>
        </section>
  <div class="contenedor">      
<div class="container container--flex alto">
     <div class="flexPromocionIcono ">
        <img class="espaciado" src="../img/clave.jpg">
       <a href="registro.php" class="styleadmin">Cambiar contraseña</a>
     </div>
     
     <div class="flexPromocionIcono">
        <img class="espaciado" src="../img/pagos.jpg">
       <a href="detalle.php" class="styleadmin">Ver Detalle de compras</a>
   </div>
   <div class="flexPromocionIcono">
        <img class="espaciado" src="../img/pagos.jpg">
       <a href="administrador_sugerencia.php" class="styleadmin">Ver Sugerencias</a>
   </div>
</div>
</div>
 </main>     

<footer class="main-footer">

        <div class="container container--flex">

            <div class="column column--33">
                <h2 class="column__title">Contáctanos</h2>
                <p class="column__txt">Av. Joaquin Barreiro OE34 Quito-Ecuador</p>
                <p class="column__txt">0987654321</p>
                <p class="column__txt">servicompu32 @gmail.com</p>
            </div>
            <div class="column column--33">
                <h2 class="column__title">Síguenos en Nuestras Redes sociales</h2>
                <p class="column__txt "><a target="_BLANCK" href="https://www.facebook.com/ServiCompu-110841714100530/?modal=admin_todo_tour" class="icon-facebook">Facebook</a></p>
                <p class="column__txt "><a target="_BLANCK" href="https://twitter.com/ServiCompu10" class="icon-twitter"> Twitter</a></p>
                <p class="column__txt"><a target="_BLANCK" href="https://www.instagram.com/servicompu.32/" class="icon-instagrem">Instagram</a></p>
            </div>
            <div class="column column--33">
                <div id="twiiter" class="pieParte">
                    <h2 class="column__title">Sección destinada a Twitter</h2>
                </div>
            </div>
            <p class="copy"> &copy; ServiCompu2020 | Derechos reservados</p>
        </div>
    </footer>
    </body>
</html>