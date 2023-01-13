<?php 

//url aquispe
define('URL_SITIO', 'http://localhost:81/kv/tendencias/inc');
// ESTA ES TU DIRECCION PARA QUE FUNCIONE EL FINALIZADO.PHP http://localhost:81/kv/tendencias/inc

require 'paypal/autoload.php';

$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        'AUl6XmdH-yB9vLoEigRuXVcs2vC5Tux-F2XxjZCuni6vxhVs6kJVttkdPuuexIS5KNGXQ73xa7R6g-P5',     // ClientID
        'EDb6PzzV-0gaFzcsvtY7sXeyqNC-XTK3g-5JyYzcxNpqfvJIF8gn_wmi_5HYTJksq8RH3MU-CvTp44Jp'      // ClientSecret
    )
);