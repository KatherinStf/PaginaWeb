//alert("esta en archivo tregistro");
eventoRegistro();

function eventoRegistro() {
    document.querySelector("#registro").addEventListener("submit", validar);

}

function validar(e) {
    e.preventDefault();

    alert("hola como estas");


    clave = document.querySelector('#clave').value;
    cedula = document.querySelector('#cedula').value;
    claveC = document.querySelector('#claveC').value;


    console.log(nombre);
    console.log(apellido);
    console.log(telefono);
    console.log(direccion);
    console.log(cedula);
    console.log(correo);
    console.log(clave);
    console.log(claveC);


    console.log("esta en la consola");
    if (cedula === '' || clave === '' || claveC === '') {

        swal({
            type: 'error',
            title: 'Error!',
            text: ' Campos son obligatorios!'
        })

    } else {

        if (clave === claveC) { // validadin de la cont5seña 
            console.log("correo valido");
            var xhr = new XMLHttpRequest();
            var datos = new FormData();
            datos.append('cedula', cedula);
            datos.append('clave', clave);
            xhr.open('POST', '../inc/modelo-registro.php', true);

            xhr.onload = function() {
                if (this.status === 200) {
                    var respuesta = xhr.responseText;
                    console.log(respuesta);
                    //console.log("paso al 200");

                    swal({
                        title: 'Registro correcto',
                        text: 'Ahora puede realizar sus compras con nosotros ',
                        type: 'success'
                    });
                }


            }
            xhr.send(datos);




        } else {

            swal({
                type: 'error',
                title: 'Error!',
                text: 'Claves no son iguales!'
            });


        } // cierre de la contraseña




    } // cierre de la primera validacion 





    document.querySelector("#registro").reset();
} // cierre de la funcion