<?php
  include '../templates/header.php';
?>
<legend class="centrado "> LOGIN</legend>
<form id="inicio" class="centrado " method="post">
 <label for="cedula" >Cedula</label>   
<input type="text" name="cedula" id="cedula" placeholder="Digite su cedula">
<label for="clave" >Contraseña</label>  
<input type="password" name="clave" id="clave" placeholder="Digite su Contraseña" >
<input type="submit" name="enviar">
</form>
<div class="centradoSecundario">
<a href="registro.php">Compra por primera vez, registrece</a>
</div>







<script 
src="../js/sweetalert2.all.min.js">
   
    </script>
     <script src="../js/inicio.js">
    
     </script>
    
   
    
    
   



<?php

  include '../templates/footer.php';
?>







