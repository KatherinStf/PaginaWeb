// inicio dela parte de las camaras 
// DECLARACION DE LOS VARIABLES ´PARA LOS BOTONES DE LA PAGINA DE TECLADOS
// variables de las camaras 
var camaraUno = document.querySelectorAll("#camaraUno div ul button ")[0];
var camaraDos = document.querySelectorAll("#camaraDos div ul button ")[0];
var camaraTres = document.querySelectorAll("#camaraTres div ul button ")[0];
var camaraCuatro = document.querySelectorAll("#camaraCuatro div ul button ")[0];
//variables de del cpu 
// variables del CPU
var cpuUno = document.querySelectorAll("#cpuUno div ul button ")[0];
var cpuDos = document.querySelectorAll("#cpuDos div ul button ")[0];
var cpuTres = document.querySelectorAll("#cpuTres div ul button ")[0];
var escritorioUno = document.querySelectorAll("#escritorioUno div ul button ")[0];
var escritorioDos = document.querySelectorAll("#escritorioDos div ul button ")[0];
var escritorioTres = document.querySelectorAll("#escritorioTres div ul button ")[0];

// VARIABLE DE LAPTO
var laptopUno = document.querySelectorAll("#laptopUno div ul button ")[0];
var laptopDos = document.querySelectorAll("#laptopDos div ul button ")[0];
var laptopTres = document.querySelectorAll("#laptopTres div ul button ")[0];
var laptopCuatro = document.querySelectorAll("#laptopCuatro div ul button ")[0];

// VARIABLE DE MOUSE 
var mouseUno = document.querySelectorAll("#mouseUno div ul button ")[0];
var mouseDos = document.querySelectorAll("#mouseDos div ul button ")[0];
var mouseTres = document.querySelectorAll("#mouseTres div ul button ")[0];
var mouseCuatro = document.querySelectorAll("#mouseCuatro div ul button ")[0];
var mouseQuinto = document.querySelectorAll("#mouseQuinto div ul button ")[0];
// VARIABLE DE PARLANTES 
var parlanteUno = document.querySelectorAll("#parlanteUno div ul button ")[0];
var parlanteDos = document.querySelectorAll("#parlanteDos div ul button ")[0];
var parlanteTres = document.querySelectorAll("#parlanteTres div ul button ")[0];
var parlanteCuatro = document.querySelectorAll("#parlanteCuatro div ul button ")[0];

// VARIABLE DE TECLADOS 
var tecladoUno = document.querySelectorAll("#tecladoUno div ul button ")[0];
var tecladoDos = document.querySelectorAll("#tecladoDos div ul button ")[0];
var tecladoTres = document.querySelectorAll("#tecladoTres div ul button ")[0];
var tecladoCuatro = document.querySelectorAll("#tecladoCuatro div ul button ")[0];
var tecladoQuinto = document.querySelectorAll("#tecladoQuinto div ul button ")[0];
//VARIABLE PARA EL DETALLE DE LA FACTURA
var detalleFactura = document.getElementById("detalle");
var totalDetalle = document.getElementById("total");
var idFactura = document.getElementById("factura");
//VARIABLE PARA EL BOTON DE PAGAR Y CANCELAR 
var btnPagar = document.querySelector("#facturaFormulario");
var btnCancelar = document.querySelector("#cancelar");
var btnConfirmar = document.querySelector("#confirmar");
var btnSubmit = document.getElementById("pagarP");;

// VARIABLES OCULTAS PARA ENVIAR LOS VALORES 
var detalleP = document.getElementById("detalleF");
var totalP = document.getElementById("totalF");

eventListenersMouse();


function eventListenersMouse() {
    // EVENTOS DE LAS CAMARAS 
    camaraUno.addEventListener("click", datoCamaraUno);
    camaraDos.addEventListener("click", datoCamaraDos);
    camaraTres.addEventListener("click", datoCamaraTres);
    camaraCuatro.addEventListener("click", datoCamaraCuatro);
    // EVENTOS DE LOS CPU
    cpuUno.addEventListener("click", datoCpuUno);
    cpuDos.addEventListener("click", datoCpuDos);
    cpuTres.addEventListener("click", datoCpuTres);
    // EVENTOS DE LA COMPUTADORA DE ESCRITORIO 
    escritorioUno.addEventListener("click", datoEscritorioUno);
    escritorioDos.addEventListener("click", datoEscritorioDos);
    escritorioTres.addEventListener("click", datoEscritorioTres);
    // EVENTOS DE LAPTO 
    laptopUno.addEventListener("click", datoLaptopUno);
    laptopDos.addEventListener("click", datoLaptopDos);
    laptopTres.addEventListener("click", datoLaptopTres);
    laptopCuatro.addEventListener("click", datoLaptopCuatro);
    // EVENTOS DE LAS MOUSE
    mouseUno.addEventListener("click", datoMouseUno);
    mouseDos.addEventListener("click", datoMouseDos);
    mouseTres.addEventListener("click", datoMouseTres);
    mouseCuatro.addEventListener("click", datoMouseCuatro);
    mouseQuinto.addEventListener("click", datoMouseQuinto);
    // EVENTOS DE LAS PARLANTES
    parlanteUno.addEventListener("click", datoParlanteUno);
    parlanteDos.addEventListener("click", datoParlanteDos);
    parlanteTres.addEventListener("click", datoParlanteTres);
    parlanteCuatro.addEventListener("click", datoParlanteCuatro);

    // EVENTOS DE LAS TECLADOS 

    tecladoUno.addEventListener("click", datoTecladoUno);
    tecladoDos.addEventListener("click", datoTecladoDos);
    tecladoTres.addEventListener("click", datoTecladoTres);
    tecladoCuatro.addEventListener("click", datoTecladoCuatro);
    tecladoQuinto.addEventListener("click", datoTecladoQuinto);

    //EVENTO PARA PAGAR Y CANCELAR 
    btnConfirmar.addEventListener("click", confirmar);
    btnCancelar.addEventListener("click", cancelar);
    // btnSubmit.addEventListener("click", borrar);








}



//VARIABLES PARA CALCULAR 
detalleFactura.innerHTML = " ";
totalDetalle.innerHTML = " ";
var total = 0;
var detalle = "";

// FUNCIONES PARA LAS CAMARAS 

function datoCamaraUno() {

    console.log("hiciste click en el boton de la camara numero uno");
    const camaraUnoPrecios = document.querySelectorAll("#camaraUno div ul li ")[4];
    const camaraSUnoTitulo = document.querySelectorAll("#camaraUno div div p ")[0];

    console.log(camaraUnoPrecios.innerText);
    console.log(camaraSUnoTitulo.innerText);

    var camaraSUnoTituloF = camaraSUnoTitulo.innerText;
    var camaraUnoPreciosF = camaraUnoPrecios.innerText;
    var camaraUnoPreciosFF = Number(camaraUnoPreciosF.split(" ")[2]);


    console.log(camaraSUnoTituloF);
    console.log(camaraUnoPreciosFF);
    total += camaraUnoPreciosFF;
    detalle += camaraSUnoTituloF + "/";
    detalleFactura.innerHTML += camaraSUnoTituloF + "<br>";

    totalDetalle.innerHTML = total;
    detalleP.value = detalle;
    totalP.value = total;



    //total.innerHTML =   + "<br>";
    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + camaraSUnoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            


            swal(
                'Factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )
           


        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })


    btnPagar.reset();

}

function datoCamaraDos() {

    console.log("hiciste click en el boton de la camara numero dos ");
    const camaraDosPrecio = document.querySelectorAll("#camaraDos div ul li ")[4];
    const camaraDostTitulo = document.querySelectorAll("#camaraDos div div p ")[0];
    console.log(camaraDosPrecio.innerText);
    console.log(camaraDostTitulo.innerText);

    var camaraDostTituloF = camaraDostTitulo.innerText;
    var camaraDosPrecioF = camaraDosPrecio.innerText;
    var camaraDosPrecioFF = Number(camaraDosPrecioF.split(" ")[2]);

    console.log(camaraDostTituloF);

    console.log(camaraDosPrecioFF);
    detalleFactura.innerHTML += camaraDostTituloF + "<br>";
    total += camaraDosPrecioFF;
    detalle += camaraDostTituloF + "/";
    totalDetalle.innerHTML = total;
    detalleP.value = detalle;
    totalP.value = total;

    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + camaraDostTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'Factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })


    btnPagar.reset();

}

function datoCamaraTres() {

    console.log("hiciste click en el boton de la camara numero tres");
    const camaraTresPrecio = document.querySelectorAll("#camaraTres div ul li ")[5];
    const camaraTrestTitulo = document.querySelectorAll("#camaraTres div div p ")[0];
    console.log(camaraTresPrecio.innerText);
    console.log(camaraTrestTitulo.innerText);

    var camaraTrestTituloF = camaraTrestTitulo.innerText;
    var camaraTresPrecioF = camaraTresPrecio.innerText;
    var camaraTresPrecioFF = Number(camaraTresPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += camaraTrestTituloF + "<br>";
    total += camaraTresPrecioFF;
    detalle += camaraTrestTituloF + "/";
    totalDetalle.innerHTML = total;
    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + camaraTrestTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'Factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoCamaraCuatro() {

    console.log("hiciste click en el boton de la camara numero cuatro");
    const camaraCuatroPrecio = document.querySelectorAll("#camaraCuatro div ul li ")[6];
    const camaraCuatrotTitulo = document.querySelectorAll("#camaraCuatro div div p ")[0];
    console.log(camaraCuatroPrecio.innerText);
    console.log(camaraCuatrotTitulo.innerText);

    var camaraCuartotTituloF = camaraCuatrotTitulo.innerText;
    var camaraCuartoPrecioF = camaraCuatroPrecio.innerText;
    var camaraCuartoPrecioFF = Number(camaraCuartoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += camaraCuartotTituloF + "<br>";
    total += camaraCuartoPrecioFF;
    detalle += camaraCuartotTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + camaraCuartotTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'Factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })

    btnPagar.reset();

}
//FUNCIONES PARA LOS CPU
function datoCpuUno() {

    console.log("hiciste click en el boton del CPU numero uno");
    const cpuUnoPrecios = document.querySelectorAll("#cpuUno div ul li ")[4];
    const cpuUnoTitulo = document.querySelectorAll("#cpuUno div div p ")[0];

    console.log(cpuUnoPrecios.innerText);
    console.log(cpuUnoTitulo.innerText);


    var cpuUnoTituloF = cpuUnoTitulo.innerText;
    var cpuUnoPrecioF = cpuUnoPrecios.innerText;
    var cpuUnoPrecioFF = Number(cpuUnoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += cpuUnoTituloF + "<br>";
    total += cpuUnoPrecioFF;
    detalle += cpuUnoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + cpuUnoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })

    btnPagar.reset();


}

function datoCpuDos() {

    console.log("hiciste click en el boton del CPU numero dos ");
    const cpuDosPrecio = document.querySelectorAll("#cpuDos div ul li ")[5];
    const cpuDostTitulo = document.querySelectorAll("#cpuDos div div p ")[0];
    console.log(cpuDosPrecio.innerText);
    console.log(cpuDostTitulo.innerText);

    var cpuDosTituloF = cpuDostTitulo.innerText;
    var cpuDosPrecioF = cpuDosPrecio.innerText;
    var cpuDosPrecioFF = Number(cpuDosPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += cpuDosTituloF + "<br>";
    total += cpuDosPrecioFF;
    detalle += cpuDosTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + cpuDosTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })

    btnPagar.reset();
}

function datoCpuTres() {

    console.log("hiciste click en el boton del CPU numero tres");
    const cpuTresPrecio = document.querySelectorAll("#cpuTres div ul li ")[4];
    const cpuTrestTitulo = document.querySelectorAll("#cpuTres div div p ")[0];
    console.log(cpuTresPrecio.innerText);
    console.log(cpuTrestTitulo.innerText);

    var cpuTresTituloF = cpuTrestTitulo.innerText;
    var cpuTresPrecioF = cpuTresPrecio.innerText;
    var cpuTresPrecioFF = Number(cpuTresPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += cpuTresTituloF + "<br>";
    total += cpuTresPrecioFF;
    detalle += cpuTresTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + cpuTresTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}
// FUNCIONES DE COMPUTADORA DE ESCRITORIO
function datoEscritorioUno() {
    console.log("hiciste click en el boton de la computadora de escritorio numero uno");
    const escritorioUnoPrecio = document.querySelectorAll("#escritorioUno div ul li ")[3];
    const escritorioUnotTitulo = document.querySelectorAll("#escritorioUno div div p ")[0];
    console.log(escritorioUnoPrecio.innerText);
    console.log(escritorioUnotTitulo.innerText);

    var escritorioUnoTituloF = escritorioUnotTitulo.innerText;
    var escritorioUnoPrecioF = escritorioUnoPrecio.innerText;
    var escritorioUnoPrecioFF = Number(escritorioUnoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += escritorioUnoTituloF + "<br>";
    total += escritorioUnoPrecioFF;
    detalle += escritorioUnoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + escritorioUnoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();
}

function datoEscritorioDos() {

    console.log("hiciste click en el boton del teclado numero dos ");
    const escritorioDosPrecio = document.querySelectorAll("#escritorioDos div ul li ")[6];
    const escritorioDostTitulo = document.querySelectorAll("#escritorioDos div div p ")[0];
    console.log(escritorioDosPrecio.innerText);
    console.log(escritorioDostTitulo.innerText);

    var escritorioDosTituloF = escritorioDostTitulo.innerText;
    var escritorioDosPrecioF = escritorioDosPrecio.innerText;
    var escritorioDosPrecioFF = Number(escritorioDosPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += escritorioDosTituloF + "<br>";
    total += escritorioDosPrecioFF;
    detalle += escritorioDosTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + escritorioDosTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();
}

function datoEscritorioTres() {

    console.log("hiciste click en el boton del teclado numero tres");
    const escritorioTresPrecio = document.querySelectorAll("#escritorioTres div ul li ")[6];
    const escritorioTrestTitulo = document.querySelectorAll("#escritorioTres div div p ")[0];
    console.log(escritorioTresPrecio.innerText);
    console.log(escritorioTrestTitulo.innerText);

    var escritorioTresTituloF = escritorioTrestTitulo.innerText;
    var escritorioTresPrecioF = escritorioTresPrecio.innerText;
    var escritorioTresPrecioFF = Number(escritorioTresPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += escritorioTresTituloF + "<br>";
    total += escritorioTresPrecioFF;
    detalle += escritorioTresTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + escritorioTresTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();
}

function datoLaptopUno() {

    console.log("hiciste click en el boton de la laptop numero uno");
    const laptopUnoPrecios = document.querySelectorAll("#laptopUno div ul li ")[6];
    const laptopSUnoTitulo = document.querySelectorAll("#laptopUno div div p ")[0];

    console.log(laptopUnoPrecios.innerText);
    console.log(laptopSUnoTitulo.innerText);

    var laptopUnoTituloF = laptopSUnoTitulo.innerText;
    var laptopUnoPrecioF = laptopUnoPrecios.innerText;
    var laptopUnoPrecioFF = Number(laptopUnoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += laptopUnoTituloF + "<br>";
    total += laptopUnoPrecioFF;
    detalle += laptopUnoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + laptopUnoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();
}

function datoLaptopDos() {

    console.log("hiciste click en el boton de la laptop numero dos ");
    const laptopDosPrecio = document.querySelectorAll("#laptopDos div ul li ")[6];
    const laptopDostTitulo = document.querySelectorAll("#laptopDos div div p ")[0];
    console.log(laptopDosPrecio.innerText);
    console.log(laptopDostTitulo.innerText);

    var laptopDosTituloF = laptopDostTitulo.innerText;
    var laptopDosPrecioF = laptopDosPrecio.innerText;
    var laptopDosPrecioFF = Number(laptopDosPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += laptopDosTituloF + "<br>";
    total += laptopDosPrecioFF;
    detalle += laptopDosTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + laptopDosTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoLaptopTres() {

    console.log("hiciste click en el boton de la laptop numero tres");
    const laptopTresPrecio = document.querySelectorAll("#laptopTres div ul li ")[6];
    const laptopTrestTitulo = document.querySelectorAll("#laptopTres div div p ")[0];
    console.log(laptopTresPrecio.innerText);
    console.log(laptopTrestTitulo.innerText);

    var laptopTresTituloF = laptopTrestTitulo.innerText;
    var laptopTresPrecioF = laptopTresPrecio.innerText;
    var laptopTresPrecioFF = Number(laptopTresPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += laptopTresTituloF + "<br>";
    total += laptopTresPrecioFF;
    detalle += laptopTresTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + laptopTresTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoLaptopCuatro() {

    console.log("hiciste click en el boton de la laptop numero cuatro");
    const laptopCuatroPrecio = document.querySelectorAll("#laptopCuatro div ul li ")[5];
    const laptopCuatrotTitulo = document.querySelectorAll("#laptopCuatro div div p ")[0];
    console.log(laptopCuatroPrecio.innerText);
    console.log(laptopCuatrotTitulo.innerText);

    var laptopCuatroTituloF = laptopCuatrotTitulo.innerText;
    var laptopCuatroPrecioF = laptopCuatroPrecio.innerText;
    var laptopCuatroPrecioFF = Number(laptopCuatroPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += laptopCuatroTituloF + "<br>";
    total += laptopCuatroPrecioFF;
    detalle += laptopCuatroTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + laptopCuatroTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}
//FUNCIONES DE MOUSE 

function datoMouseUno() {

    console.log("hiciste click en el boton del mouse numero uno");
    const mouseUnoPrecios = document.querySelectorAll("#mouseUno div ul li ")[4];
    const mouseSUnoTitulo = document.querySelectorAll("#mouseUno div div p ")[0];

    console.log(mouseUnoPrecios.innerText);
    console.log(mouseSUnoTitulo.innerText);

    var mouseUnoTituloF = mouseSUnoTitulo.innerText;
    var mouseUnoPrecioF = mouseUnoPrecios.innerText;
    var mouseUnoPrecioFF = Number(mouseUnoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += mouseUnoTituloF + "<br>";
    total += mouseUnoPrecioFF;
    detalle += mouseUnoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + mouseUnoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoMouseDos() {

    console.log("hiciste click en el boton del mouse numero dos ");
    const mouseDosPrecio = document.querySelectorAll("#mouseDos div ul li ")[4];
    const mouseDostTitulo = document.querySelectorAll("#mouseDos div div p ")[0];
    console.log(mouseDosPrecio.innerText);
    console.log(mouseDostTitulo.innerText);

    var mouseDosTituloF = mouseDostTitulo.innerText;
    var mouseDosPrecioF = mouseDosPrecio.innerText;
    var mouseDosPrecioFF = Number(mouseDosPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += mouseDosTituloF + "<br>";
    total += mouseDosPrecioFF;
    detalle += mouseDosTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + mouseDosTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoMouseTres() {

    console.log("hiciste click en el boton del mouse numero tres");
    const mouseTresPrecio = document.querySelectorAll("#mouseTres div ul li ")[5];
    const mouseTrestTitulo = document.querySelectorAll("#mouseTres div div p ")[0];
    console.log(mouseTresPrecio.innerText);
    console.log(mouseTrestTitulo.innerText);

    var mouseTresTituloF = mouseTrestTitulo.innerText;
    var mouseTresPrecioF = mouseTresPrecio.innerText;
    var mouseTresPrecioFF = Number(mouseTresPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += mouseTresTituloF + "<br>";
    total += mouseTresPrecioFF;
    detalle += mouseTresTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + mouseTresTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoMouseCuatro() {

    console.log("hiciste click en el boton del mouse numero cuatro");
    const mouseCuatroPrecio = document.querySelectorAll("#mouseCuatro div ul li ")[5];
    const mouseCuatrotTitulo = document.querySelectorAll("#mouseCuatro div div p ")[0];
    console.log(mouseCuatroPrecio.innerText);
    console.log(mouseCuatrotTitulo.innerText);

    var mouseCuatroTituloF = mouseCuatrotTitulo.innerText;
    var mouseCuatroPrecioF = mouseCuatroPrecio.innerText;
    var mouseCuatroPrecioFF = Number(mouseCuatroPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += mouseCuatroTituloF + "<br>";
    total += mouseCuatroPrecioFF;
    detalle += mouseCuatroTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + mouseCuatroTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoMouseQuinto() {

    console.log("hiciste click en el boton del mouse numero quinto");
    const mouseQuintoPrecio = document.querySelectorAll("#mouseQuinto div ul li ")[4];
    const mouseQuintotTitulo = document.querySelectorAll("#mouseQuinto div div p ")[0];
    console.log(mouseQuintoPrecio.innerText);
    console.log(mouseQuintotTitulo.innerText);

    var mouseQuintoTituloF = mouseQuintotTitulo.innerText;
    var mouseQuintoPrecioF = mouseQuintoPrecio.innerText;
    var mouseQuintoPrecioFF = Number(mouseQuintoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += mouseQuintoTituloF + "<br>";
    total += mouseQuintoPrecioFF;
    detalle += mouseQuintoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + mouseQuintoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}
// FUNCIONES DE PARLANTES 
function datoParlanteUno() {

    console.log("hiciste click en el boton del parlante numero uno");
    const parlanteUnoPrecios = document.querySelectorAll("#parlanteUno div ul li ")[6];
    const parlanteSUnoTitulo = document.querySelectorAll("#parlanteUno div div p ")[0];

    console.log(parlanteUnoPrecios.innerText);
    console.log(parlanteSUnoTitulo.innerText);

    var parlanteUnoTituloF = parlanteSUnoTitulo.innerText;
    var parlanteUnoPrecioF = parlanteUnoPrecios.innerText;
    var parlanteUnoPrecioFF = Number(parlanteUnoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += parlanteUnoTituloF + "<br>";
    total += parlanteUnoPrecioFF;
    detalle += parlanteUnoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + parlanteUnoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();
}

function datoParlanteDos() {

    console.log("hiciste click en el boton del parlante numero dos ");
    const parlanteDosPrecio = document.querySelectorAll("#parlanteDos div ul li ")[5];
    const parlanteDostTitulo = document.querySelectorAll("#parlanteDos div div p ")[0];
    console.log(parlanteDosPrecio.innerText);
    console.log(parlanteDostTitulo.innerText);


    var parlanteDosTituloF = parlanteDostTitulo.innerText;
    var parlanteDosPrecioF = parlanteDosPrecio.innerText;
    var parlanteDosPrecioFF = Number(parlanteDosPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += parlanteDosTituloF + "<br>";
    total += parlanteDosPrecioFF;
    detalle += parlanteDosTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + parlanteDosTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();
}

function datoParlanteTres() {

    console.log("hiciste click en el boton del parlante numero tres");
    const parlanteTresPrecio = document.querySelectorAll("#parlanteTres div ul li ")[5];
    const parlanteTrestTitulo = document.querySelectorAll("#parlanteTres div div p ")[0];
    console.log(parlanteTresPrecio.innerText);
    console.log(parlanteTrestTitulo.innerText);

    var parlanteTresTituloF = parlanteTrestTitulo.innerText;
    var parlanteTresPrecioF = parlanteTresPrecio.innerText;
    var parlanteTresPrecioFF = Number(parlanteTresPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += parlanteTresTituloF + "<br>";
    total += parlanteTresPrecioFF;
    detalle += parlanteTresTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + parlanteTresTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoParlanteCuatro() {

    console.log("hiciste click en el boton del paralante numero cuatro");
    const parlanteCuatroPrecio = document.querySelectorAll("#parlanteCuatro div ul li ")[5];
    const parlanteCuatrotTitulo = document.querySelectorAll("#parlanteCuatro div div p ")[0];
    console.log(parlanteCuatroPrecio.innerText);
    console.log(parlanteCuatrotTitulo.innerText);

    var parlanteCuatroTituloF = parlanteCuatrotTitulo.innerText;
    var parlanteCuatroPrecioF = parlanteCuatroPrecio.innerText;
    var parlanteCuatroPrecioFF = Number(parlanteCuatroPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += parlanteCuatroTituloF + "<br>";
    total += parlanteCuatroPrecioFF;
    detalle += parlanteCuatroTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + parlanteCuatroTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}
//FUNCIONES DE TECLADO 
function datoTecladoUno() {

    // console.log("hiciste click en el boton del teclado numero uno");
    const tecladoUnoPrecio = document.querySelectorAll("#tecladoUno div ul li ")[3];
    const tecladoUnotTitulo = document.querySelectorAll("#tecladoUno div div p ")[0]

    console.log(tecladoUnoPrecio.innerText);
    console.log(tecladoUnotTitulo.innerText);

    var tecladoUnoTituloF = tecladoUnotTitulo.innerText;
    var tecladoUnoPrecioF = tecladoUnoPrecio.innerText;
    var tecladoUnoPrecioFF = Number(tecladoUnoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += tecladoUnoTituloF + "<br>";
    total += tecladoUnoPrecioFF;
    detalle += tecladoUnoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + tecladoUnoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();
}

function datoTecladoDos() {

    console.log("hiciste click en el boton del teclado numero dos ");
    const tecladoDosPrecio = document.querySelectorAll("#tecladoDos div ul li ")[5];
    const tecladoDostTitulo = document.querySelectorAll("#tecladoDos div div p ")[0];
    console.log(tecladoDosPrecio.innerText);
    console.log(tecladoDostTitulo.innerText);

    var tecladoDosTituloF = tecladoDostTitulo.innerText;
    var tecladoDosPrecioF = tecladoDosPrecio.innerText;
    var tecladoDosPrecioFF = Number(tecladoDosPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += tecladoDosTituloF + "<br>";
    total += tecladoDosPrecioFF;
    detalle += tecladoDosTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + tecladoDosTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoTecladoTres() {

    console.log("hiciste click en el boton del teclado numero tres");
    const tecladoTresPrecio = document.querySelectorAll("#tecladoTres div ul li ")[4];
    const tecladoTrestTitulo = document.querySelectorAll("#tecladoTres div div p ")[0];
    console.log(tecladoTresPrecio.innerText);
    console.log(tecladoTrestTitulo.innerText);

    var tecladoTresTituloF = tecladoTrestTitulo.innerText;
    var tecladoTresPrecioF = tecladoTresPrecio.innerText;
    var tecladoTresPrecioFF = Number(tecladoTresPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += tecladoTresTituloF + "<br>";
    total += tecladoTresPrecioFF;
    detalle += tecladoTresTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + tecladoTresTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoTecladoCuatro() {

    console.log("hiciste click en el boton del teclado numero cuatro");
    const tecladoCuatroPrecio = document.querySelectorAll("#tecladoCuatro div ul li ")[4];
    const tecladoCuatrotTitulo = document.querySelectorAll("#tecladoCuatro div div p ")[0];
    console.log(tecladoCuatroPrecio.innerText);
    console.log(tecladoCuatrotTitulo.innerText);

    var tecladoCuatroTituloF = tecladoCuatrotTitulo.innerText;
    var tecladoCuatroPrecioF = tecladoCuatroPrecio.innerText;
    var tecladoCuatroPrecioFF = Number(tecladoCuatroPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += tecladoCuatroTituloF + "<br>";
    total += tecladoCuatroPrecioFF;
    detalle += tecladoCuatroTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + tecladoCuatroTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}

function datoTecladoQuinto() {

    console.log("hiciste click en el boton del teclado numero quinto");
    const tecladoQuintoPrecio = document.querySelectorAll("#tecladoQuinto div ul li ")[5];
    const tecladoQuintotTitulo = document.querySelectorAll("#tecladoQuinto div div p ")[0];
    console.log(tecladoQuintoPrecio.innerText);
    console.log(tecladoQuintotTitulo.innerText);


    var tecladoQuintoTituloF = tecladoQuintotTitulo.innerText;
    var tecladoQuintoPrecioF = tecladoQuintoPrecio.innerText;
    var tecladoQuintoPrecioFF = Number(tecladoQuintoPrecioF.split(" ")[2]);

    detalleFactura.innerHTML += tecladoQuintoTituloF + "<br>";
    total += tecladoQuintoPrecioFF;
    detalle += tecladoQuintoTituloF + "/";
    totalDetalle.innerHTML = total;

    detalleP.value = detalle;
    totalP.value = total;


    swal({
        title: 'Producto agregado al carrito de compras',
        text: "Compró " + tecladoQuintoTituloF,
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Pagar producto ',
        cancelButtonText: 'Deseo comprar más'
    }).then((result) => {
        if (result.value) {
            idFactura.style.display = "flex";
            swal(
                'La factura se encuentra al final de la página',
                'Puede serguir agregando productos',
                'success'
            )



        } else {
            swal(
                'Buena elección',
                'Continue con su compra',
                'success'
            )



        }
    })
    btnPagar.reset();

}
//FUNCION QUE ENVIA LOS PAGOS AL ARCHIVO PAGAR.PHP
function confirmar() {

    var nombreFac = document.querySelector('#nombre').value;
    var apellidoFac = document.querySelector('#apellido').value;
    var correoFac = document.querySelector('#correo').value;
    var cedulaFac = document.querySelector('#cedula').value;
    var direccionFac = document.querySelector('#direccion').value;
    var totalFac = total;
    var detalleFac = detalle;

    /*
        console.log(nombreFac);
        console.log(apellidoFac);
        console.log(correoFac);
        console.log(cedulaFac);
        console.log(direccionFac);
        console.log(totalFac);
        console.log(detalleFac);
    */
    if (nombreFac === '' || apellidoFac === '' || correoFac === '' || cedulaFac === '' || direccionFac === '') {

        swal({
            type: 'error',
            title: 'Error!',
            text: ' Campos son obligatorios!'
        })
        btnPagar.reset();




    } else {
        swal(
            'Confirmación Exitosa',
            'A su lado derecho le aparecerá la opcion pagar, para finalizar su compra',
            'success'
        )
        btnSubmit.style.display = "block";

    }




}

function cancelar() {

    btnPagar.reset();
    total = 0;
    detalle = "";
    detalleFactura.innerHTML = " ";
    totalDetalle.innerHTML = " ";
    detalleP.value = detalle;
    totalP.value = total;
    idFactura.style.display = "none";
    var cancelado = "cancelopago"
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var mes = fecha.getMonth();
    var dia = fecha.getDate();

    var fechaF = anio + "-" + mes + "-" + dia;

    //ENVIO DE DATOS PARA EL ARCHIO AUDITORIA.PHP
    var xhr = new XMLHttpRequest();

    var datos = new FormData();
    datos.append('negado', cancelado);
    datos.append('fecha', fechaF);



    xhr.open('POST', '../inc/auditoria.php', true);


    xhr.onload = function() {
        if (this.status === 200) {


            var respuesta = xhr.responseText;
            console.log(respuesta);






        }






    }


    xhr.send(datos);







    swal(
        'Compra cancelada',
        'Esperamos verlo de nuevo',
        'success'
    )


}