<?php
function insertarDetalleFactura($detalle = null, $total = null,$estado = null,$id = null,$codigo = null) {
  include 'conexion.php';
  /* echo $detalle;
   echo $total;
   echo $estado;
   echo $id; */
   try {
    
    require_once "conexion.php";
    $stmt = $conn->prepare("INSERT INTO detalle_compra (detalle, total, estado,id_registro_cuenta,codigo) VALUES (?, ?, ?, ?,?)");
    $stmt->bind_param("sssis", $detalle ,$total, $estado,$id,$codigo );
    $stmt->execute();
    if($stmt->affected_rows > 0) {
         
    }
    else {
        echo "error, no se inserto el detalla   de la factura";
        
    }
    $stmt->close();
    $conn->close();
  } catch(Exception $e) {
    $respuesta = array(
        'error' => $e->getMessage()
    );
  }





   
}
