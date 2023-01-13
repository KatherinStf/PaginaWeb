
<?php
include 'sesiones.php';
?>






<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://file.myfontastic.com/gya2YWftjT8i7utHYd6M73/icons.css" rel="stylesheet">
    <link rel="icon" type="icon/jpg" href="../img/icon.png">
    <link rel="stylesheet" href="../css/inicio.css" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>Registro</title>
</head>

<body>
 <header class="main-header">
   <div class="color">
   <div class="container container--flex">
            <div class="logo-container column column--50"> 
                <h1 class="logo"><a href="index.html" class="style">ServiCompu</a></h1>
            </div>
        <div class="main-header__contactInfo column column--50">
            <p class="main-header__contactInfo__phone">
                <a class="menu__login" href="administrador.php"> Volver al administrador</a>
             
            </p>
            <p class="main-header__contactInfo__address">
                <span class="icon-location"> Solanda OE-3 Quito-Ecuador </span>
            </p>
        </div>
    </div>
</div>
</header>
    <!--inicio del formulario-->
 
  <div class="container--form">

   
  
  <div class="formulario1">
    <h2>Cambiar Contraseña</h2>
     <form id="registro" method="post">
  <input type="text" name="cedula" id="cedula" placeholder="Ingrese Usuario">
  <input type="password" name="clave" id="clave" placeholder="Digite contraseña actual" >
  <input type="password" name="clave" id="claveC" placeholder="Digite su nueva contraseña" >
  <input type="password" name="clave" id="claveC" placeholder="Confirme su nueva contraseña" >
  
  <input type="submit" name="enviar" value="Cambiar Contraseña">
  </form>
</div>

  </div>
  
  
  
  
    
           
    <!--Terminacion del formulario-->        
     
  <!-- <footer class="main-footer">

     <div class="container container--flex">

     <div class="column column--33">
        <h2 class="column__title">Contáctanos</h2>
        <p class="column__txt">Av. Joaquin Barreiro OE34 Quito-Ecuador</p>
        <p class="column__txt">0987654321</p>
        <p class="column__txt">servicompu32 @gmail.com</p>
     </div>
     <div class="column column--33">
        <h2 class="column__title">Siguenos en Nuestras Redes sociales</h2>
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
    </footer>-->

        <script src="https://kit.fontawesome.com/4ebf57fa64.js" crossorigin="anonymous"></script>
        <script src="../js/sweetalert2.all.min.js" crossorigin="anonymous"></script>
        <script src="../js/sweetalert2.all.min.js"></script>
        <script src="../js/registro.js"></script>
</body>

</html>
     
