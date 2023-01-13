<?php

//echo json_encode($_POST);


$nombre = filter_var($_POST['nombre'],FILTER_SANITIZE_STRING);
$apellido = filter_var($_POST['apellido'],FILTER_SANITIZE_STRING);
$correo = filter_var($_POST['correo'],FILTER_SANITIZE_STRING);
$telefono = filter_var($_POST['numero'],FILTER_SANITIZE_STRING);
$direccion = filter_var($_POST['direccion'],FILTER_SANITIZE_STRING);
$sugerencia = filter_var($_POST['sugerencia'],FILTER_SANITIZE_STRING);

//echo "<pre>";
//var_dump($_POST);
//echo "</pre>";

/*
$datos = array(
    'nombre' => $nombre,
    'apellido' => $apellido,
    'telefono' => $telefono,
    'direccion' => $direccion

);
echo json_encode($datos);
*/
//var_dump($datos);

/*$nombre ='pedro' ;
$apellido = 'galarza' ;
$correo = 'ytrtryt@gmail.com' ;
$telefono ='2783875' ;
$direccion = 'esquina y la que cruza' ;
$sugerencia = 'vender tablets ' ;
*/



try {
    require_once "conexion.php";
    $stmt = $conn->prepare("INSERT INTO formulario_contacto (Nombre, Apellido, Correo, Telefono, Direccion, Sugerencia_consulta) VALUES (?, ?, ?, ?,?,?)");
    $stmt->bind_param("ssssss", $nombre, $apellido,$correo, $telefono,$direccion,$sugerencia);
    $stmt->execute();
    if($stmt->affected_rows > 0) {
         $respuesta = array(
              'respuesta' => 'correcto',
              'letra' => 'a'
             
         );
    }
    else {
        $respuesta = array(
            'respuesta' => 'incorrecto',
            'letra' => 'b'
           
       );
        
    }
    $stmt->close();
    $conn->close();
} catch(Exception $e) {
    $respuesta = array(
        'error' => $e->getMessage()
    );
}
    
echo json_encode($respuesta);


?>