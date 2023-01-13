<?php


function actualizarFactura($codigo = null,$estado = null,$id = null )
{
    include 'conexion.php';
    try {
                        
        require_once "conexion.php";
        $stmt = $conn->prepare("UPDATE detalle_compra set codigo = ?, estado=? WHERE id_registro_cuenta = ? ");
        $stmt->bind_param("ssi", $codigo,$estado, $id);
        $stmt->execute();
        if($stmt->affected_rows > 0) {
            $respuesta = array(
                'respuesta' => 'correcto'
            );
        }  else {
            $respuesta = array(
                'respuesta' => 'error'
            );
        }
        $stmt->close();
        $conn->close();
    } catch(Exception $e) {
        // En caso de un error, tomar la exepcion
        $respuesta = array(
            'error' => $e->getMessage()
        );
    }
    
}
 