<?php


$cedula = filter_var($_POST['cedula'],FILTER_SANITIZE_STRING);
$clave = filter_var($_POST['clave'],FILTER_SANITIZE_STRING);
$opciones = array(
    'cost' => 12
);
$hash_password = password_hash($clave, PASSWORD_BCRYPT, $opciones);


try {
    require_once "conexion.php";
    $stmt = $conn->prepare("INSERT INTO perfiles (per_cedula, per_contraseña ) VALUES (?, ?)");
    $stmt->bind_param("ss", $cedula, $hash_password );
    $stmt->execute();
    if($stmt->affected_rows > 0) {
         $respuesta = array(
              'respuesta' => 'correcto',
              
             
         );
    }
    else {
        $respuesta = array(
            'respuesta' => 'incorrecto',
           
           
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