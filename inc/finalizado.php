
<?php
include 'actualizar.php';
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
    <link rel="stylesheet" href="../css/productos.css" />
    <link rel="stylesheet" href="../css/colorbox.css" />
    <link rel="stylesheet" href="../css/contacto.css" />

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
                    <span class="icon-location"> Solanda OE-3 Quito-Ecuador </span>
                </p>
            </div>
        </div>
    </header>
    <nav class="main-nav">
        <div class="container container--flex">
            <span class="icon-menu" id="btnmenu"></span>
            <ul class="menu" id="menu">
                <li class="menu__item"><a href="../html/index.html" class="menu__link menu__link--select">Inicio</a></li>
                <li class="menu__item"><a href="../html/quienesSomos.html" class="menu__link">Quiénes Somos</a></li>
                <li class="menu__item"><a href="../html/contactanos.html" class="menu__link">Contáctanos</a></li>

            </ul>
            <div class="social-icon">
                <a target="_BLANCK" href="https://www.facebook.com/ServiCompu-110841714100530/?modal=admin_todo_tour" class="social-icon__link"><span class="fab fa-facebook-square"></span></a>
                <a target="_BLANCK" href="https://twitter.com/ServiCompu10" class="social-icon__link"><span class="fab fa-twitter-square"></span></a>
                <a target="_BLANCK" href="https://www.instagram.com/servicompu.32/" class="social-icon__link"><span class="fab fa-instagram-square"></span></a>


                <a target="_BLANCK" href="login.php" class="icon-sign-in menu__login"> Iniciar Sesión</a></p>
                <!-- <a target="_BLANCK" href="login.html" class="menu__login icon-sign-in ">Iniciar Sesión</a>
               <a  href="registro.html"> Registro </a>
                <a  href="login.html"> Iniciar Sesion </a>-->


            </div>

        </div>

    </nav>

    <section class="banner">
        <img src="../img/titulo.jpg" alt="" class="banner__img">
        <div class="banner__content"> Productos de Calidad a tu Alcance.</div>
    </section>

    <main class="main">
        <section class="group group--color">
            <div class="container">
                <h2 class="main__title">Bienvenido a ServiCompu</h2>
                <p class="main__txt">Estado del Pago con PayPal </p>
            </div>
        </section>
        <!---------------------BUSCADOR--------------------------->
        


    </main>
    <!-- ------------------------------------------------------ -->
    <div class="flexPromocionIcono">
            <h2>Pagos con Paypal</h2>
            <?php
                $resultado = (bool) $_GET['exito'];
                $paymentId = $_GET['paymentId'];
                $id = (int) $_GET['num'];
                $estado = "pagado";
                $codigo = (string) $paymentId ;
            
    

                if($resultado == true) {
                      echo "El pago se realizo correctamente! ";
                      echo "<br>";
                      echo "El id es {$paymentId} ";
                      echo "<br>";
                      echo $id;
                      //UPDATE DEL CODIGO DE PAGO EN LA BASE DE DATOS 
                     
                      actualizarFactura($codigo,$estado,$id );

    







                }
            
             ?>
        </div>

  

  
   
    
 
   



    <!-- ------------------------------------------ -->

    <!---HTML DE LA FACTURA INICIO -->
    <?php
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";
    echo "<br>";

?>


    <!---HTML DE LA FACTURA INICIO -->
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
                    <h2 class="column__title bajo">Últimos Tweets</h2>
                   <a class="twitter-timeline" data-height="300" data-theme="dark" href="https://twitter.com/ServiCompu10?ref_src=twsrc%5Etfw">Tweets by ServiCompu10</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </div>
            <p class="copy"> &copy; ServiCompu2020 | Derechos reservados</p>
        </div>
    </footer>

    <script src="../js/jquery-1.12.0.min.js"></script>
    <script src="../js/jquery.colorbox.js"></script>
    <script src="https://kit.fontawesome.com/4ebf57fa64.js" crossorigin="anonymous"></script>
    <script src="../js/buscadorPrincipal.js"></script>
    <script src="../js/menu.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/comprarFInal.js"></script>
    <script src="../js/sweetalert2.all.min.js" crossorigin="anonymous"></script>
    <script src="../js/sweetalert2.all.min.js"></script>

</body>

</html>





