  <?php
 if(!isset($_POST['totalFac'], $_POST['detalleFac'], $_POST['cedula'],$_POST['nombre'] )) {
  exit("hubo un error");
}
include 'busqueda.php';
include 'insertarFactura.php';

// insertar en la base de datos el detalle de la factura en la tabla registro_cuenta
$nombre = filter_var($_POST['nombre'],FILTER_SANITIZE_STRING);
$apellido = filter_var($_POST['apellido'],FILTER_SANITIZE_STRING);
$direccion = filter_var($_POST['direccion'],FILTER_SANITIZE_STRING);
$cedula = filter_var($_POST['cedula'],FILTER_SANITIZE_STRING);
$correo  =filter_var($_POST['mail'],FILTER_SANITIZE_STRING);
$id_registro_final =0;

try {
  require_once "conexion.php";
  $stmt = $conn->prepare("INSERT INTO registro_cuenta (cedula_cliente,  Nombre, Apellido, Correo,  Direccion) VALUES (?, ?, ?, ?,?)");
  $stmt->bind_param("sssss", $cedula ,$nombre, $apellido,$correo,$direccion);
  $stmt->execute();
  if($stmt->affected_rows > 0) {
       
  }
  else {
      echo "error, no se inserto la cabecera  de la factura";
      
  }
  $stmt->close();
  $conn->close();
} catch(Exception $e) {
  $respuesta = array(
      'error' => $e->getMessage()
  );
}
//BUSQUEDA DEL ID DEL REGISTRO_CUENTA PARA INSERTAR EN EL DETALLE DE LA FACTURA 
$id_registro_final= obtenerIdCliente($cedula);



// INSERCCION DEL DETALLE DE LA FACTURA EN LA TABLA DETALLE_COMPRA
$detalle = $_POST['detalleFac'];
$total =$_POST['totalFac'];
$estado ="pendiente";
$codigo="sin codigo";
$id = $id_registro_final;
$num = $id;

insertarDetalleFactura($detalle , $total ,$estado ,$id, $codigo);

//pago de paypal 
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;


require 'config.php';
/* nombre
apelldio
cedula
mail
direccion
totalFac
detalleFac*/

$producto = $_POST['detalleFac'];
$precio = $_POST['totalFac'];
$envio = 0;
$total = $precio + $envio;

$compra = new Payer();
$compra->setPaymentMethod('paypal');


$articulo = new Item();
$articulo->setName($producto)
      ->setCurrency('USD')
      ->setQuantity(1)
      ->setPrice($precio);
      
      
$listaArticulos = new ItemList();
$listaArticulos->setItems(array($articulo));
  
$detalles = new Details();
$detalles->setShipping($envio)
          ->setSubtotal($precio); 
          
          
$cantidad = new Amount();
$cantidad->setCurrency('USD')
          ->setTotal($total)
          ->setDetails($detalles);
          
$transaccion = new Transaction();
$transaccion->setAmount($cantidad)
               ->setItemList($listaArticulos)
               ->setDescription('Pago ')
               ->setInvoiceNumber(uniqid());
               

$redireccionar = new RedirectUrls();
$redireccionar->setReturnUrl(URL_SITIO . "/finalizado.php?exito=true&num={$num}")
              ->setCancelUrl(URL_SITIO . "/finalizado.php?exito=false&num={$num}");
              
              
$pago = new Payment();
$pago->setIntent("sale")
     ->setPayer($compra)
     ->setRedirectUrls($redireccionar)
     ->setTransactions(array($transaccion));
     
     try {
       $pago->create($apiContext);
     } catch (PayPal\Exception\PayPalConnectionException $pce) {
       // Don't spit out errors or use "exit" like this in production code
       echo '<pre>';print_r(json_decode($pce->getData()));exit;
   }

$aprobado = $pago->getApprovalLink();


header("Location: {$aprobado}");

  



 













?>