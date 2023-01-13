<?php
  include '../templates/header.php';
?>

<div class="centradoSecundario">
<a href="registro.php">Compra por primera vez, registrece</a>
</div>
<h1>FACTURA DE SU COMPRA</h1>

<?php
echo json_encode($_POST);
?>


<button>Realizar pago</button>



<?php

  include '../templates/footer.php';
?>