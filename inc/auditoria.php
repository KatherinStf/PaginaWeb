<?php
$cancelado = filter_var($_POST['negado'],FILTER_SANITIZE_STRING);
$fecha =  filter_var($_POST['fecha'],FILTER_SANITIZE_STRING);

try {
    require_once "conexion.php";
    $stmt = $conn->prepare("INSERT INTO auditoria (fecha , negacion ) VALUES (?,?)");
    $stmt->bind_param("ss",$fecha, $cancelado );
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
