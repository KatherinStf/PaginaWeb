<?php

function obtenerIdCliente($id = null) {
    include 'conexion.php';
    try {
        require_once "conexion.php";
        $stmt = $conn->prepare("SELECT id_registro_cuenta FROM registro_cuenta WHERE cedula_cliente = ?");
        $stmt->bind_param("s", $id );
        $stmt->execute();
        $stmt->bind_result($id_registro);
        $stmt->fetch();
        if ($id_registro) {
          $id_registro_final = $id_registro;
        }
       
       
        $stmt->close();
        $conn->close();
      } catch(Exception $e) {
        $respuesta = array(
            'error' => $e->getMessage()
        );
      }

return $id_registro_final;



   
}










?>

