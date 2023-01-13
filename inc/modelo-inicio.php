<?php

//echo json_encode($_POST);

$cedula = filter_var($_POST['cedula'],FILTER_SANITIZE_STRING);
$clave = filter_var($_POST['clave'],FILTER_SANITIZE_STRING);


try {
    require_once "conexion.php";
    $stmt = $conn->prepare("SELECT per_cedula , per_contraseña FROM perfiles WHERE per_cedula = ?");
    $stmt->bind_param('s', $cedula);
    $stmt->execute();
    $stmt->bind_result($cedula_usuario, $pass_usuario);
    $stmt->fetch();
    if($cedula_usuario){
      
        if ($cedula_usuario=='admin' &&  $pass_usuario=='admin') {
            session_start();
            $_SESSION['nombre'] = $cedula_usuario;
            $_SESSION['login'] = true;
            $respuesta = array(
                'respuesta' => 'admin',
                
                
            );
        }
        else{
            if(password_verify($clave,$pass_usuario )){
                session_start();
                $_SESSION['nombre'] = $cedula_usuario;
                $_SESSION['login'] = true;
            
                    
                $respuesta = array(
                    'respuesta' => 'correcto',
                    
                    
                );
            } else {
                // Login incorrecto, enviar error
                $respuesta = array(
                        'respuesta' => 'clave Incorrecto'
                );
            }



        }

    } else {
        $respuesta = array(
            'respuesta' => 'Usuario no existe'
        );
    }
    $stmt->close();
    $conn->close();
} catch(Exception $e) {
    // En caso de un error, tomar la exepcion
    $respuesta = array(
        'pass' => $e->getMessage()
    );
}



echo json_encode( $respuesta);

?>