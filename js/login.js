eventoLogin();

function eventoLogin() {
    document.querySelector("#inicio").addEventListener("submit", validar);

}


function validar(e) {
    e.preventDefault();
    var cedula = document.querySelector('#cedula').value;
    clave = document.querySelector('#clave').value;


    // console.log(clave);
    //console.log(cedula);

    if (cedula === '' || clave === '') {

        swal({
            type: 'error',
            title: 'Error!',
            text: ' Campos son obligatorios!'
        })

    } else {

        var xhr = new XMLHttpRequest();

        var datos = new FormData();
        datos.append('cedula', cedula);
        datos.append('clave', clave);




        xhr.open('POST', '../inc/modelo-inicio.php', true);


        xhr.onload = function() {
            if (this.status === 200) {


                var respuesta = JSON.parse(xhr.responseText);




                console.log(respuesta);
                if (respuesta.respuesta === 'Usuario no existe') {
                    swal({
                        type: 'error',
                        title: 'Error!',
                        text: 'Usuario no existe!'
                    });

                }
                if (respuesta.respuesta === 'clave Incorrecto') {
                    swal({
                        type: 'error',
                        title: 'Error!',
                        text: 'Clave incorrecta!'
                    });

                }
                if (respuesta.respuesta === 'correcto') {
                    swal({
                        type: 'success',
                        title: 'Bienvenido(a)',
                        text: 'Acceso correcto'
                    });
                    window.location.href = 'administrador.php';


                }
                if (respuesta.respuesta === 'admin') {
                    swal({
                        type: 'success',
                        title: 'Bienvenido(a)',
                        text: 'Acceso correcto'
                    });
                    window.location.href = 'administrador.php';


                }







            }






        }


        xhr.send(datos);









    }







    document.querySelector("#inicio").reset();
}