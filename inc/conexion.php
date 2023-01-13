<?php
$conn = new mysqli('localhost', 'root', '', 'proyecto_bd');

if($conn->connect_error){
    echo $conn->connect_error;
}
else {
  //  echo "conexion exitosa";
}

$conn->set_charset('utf8');
?>