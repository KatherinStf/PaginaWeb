//alert("esta funcionando");
eventoFormulario();

function eventoFormulario() {
    document.querySelector("#formulario").addEventListener("submit",validar);
    
}
function validar(e) {
    e.preventDefault();
    var nombre = document.querySelector('#nombre').value,
        apellido = document.querySelector('#apellido').value,
        correo = document.querySelector('#correo').value;
        numero = document.querySelector('#numero').value,
        direccion = document.querySelector('#direccion').value,
        sugerencia = document.querySelector('#sugerencia').value;

       /* console.log(nombre);
        console.log(apellido);
        console.log(numero);
        console.log(direccion);
        console.log(sugerencia);
        console.log(correo);
    */
   if(nombre === '' || apellido === '' || correo === '' || numero === '' || direccion === '' || sugerencia === ''){
       
    swal({
      type: 'error',
      title: 'Error!',
      text: ' Campos son obligatorios!'
    })
    document.querySelector("#formulario").reset();
} else {
    if (correo.indexOf("@") > -1) {
        console.log("registro exitoso");
        var xhr = new XMLHttpRequest();
           
        var datos = new FormData();
        datos.append('nombre', nombre);
        datos.append('apellido', apellido);
        datos.append('correo', correo);
        datos.append('numero', numero);
        datos.append('direccion', direccion);
        datos.append('sugerencia', sugerencia);

      
        
        xhr.open('POST', '../inc/sugerencia.php', true);
        
        
        xhr.onload = function() {
            if(this.status === 200) {
                swal({
                    type: 'success',
                    title: 'Sugerencia',
                    text: 'Se envio su sugerencia ' 
                  });
             
                var respuesta = xhr.responseText;
              console.log(respuesta);
              
               
              /*  if(resultado === 'correcto') {
                    swal({
                        title: 'Proyecto Creado',
                        text: 'El proyecto: ' + proyecto + ' se creó correctamente',
                        type: 'success'
                    })
                    .then(resultado => {
                        // redireccionar a la nueva URL
                        if(resultado.value) {
                            window.location.href = 'index.php?id_proyecto=' + id_proyecto;
                        }
                    })
                    
                  
                   
                } else {
                    // hubo un error
                    swal({
                      type: 'error',
                      title: 'Error!',
                      text: 'Hubo un error!'
                    })
                }*/
            }
            else{
                swal({
                    type: 'error',
                    title: 'Error!',
                    text: 'Hubo un error!'
                  });

            }





        }
        
        
        xhr.send(datos);

      
     
                   
   
    }
    else{
        //console.log("debe tener colocar un correo valido");
        swal({
            title: 'Error',
            text: 'Debe ingresar un correo válido',
            type: 'error'
        })
        document.querySelector("#formulario").reset();

    }
}


document.querySelector("#formulario").reset();
    
}// cierre de la funcion 
            
        


