inputBuscador = document.querySelector('#buscador');
eventListeners();

function eventListeners() {


    inputBuscador.addEventListener('input', buscarContactos);


}

function buscarContactos(e) {

    //console.log(e.target.valu);
    const expresion = new RegExp(e.target.value, "i");
    //const registros =document.querySelectorAll('#principal');
    // elementos como teclados mouse cpu 

    const camaras = document.querySelector('#camaras');
    const teclado = document.querySelector('#teclado');
    const parlantes = document.querySelector('#parlantes');
    const mouse = document.querySelector('#mouse');
    const cpu = document.querySelector('#cpu');
    const laptops = document.querySelector('#laptops');
    const computadora = document.querySelector('#computadoraEscritorio');



    teclado.style.display = 'none';
    camaras.style.display = 'none';
    parlantes.style.display = 'none';
    mouse.style.display = 'none';
    cpu.style.display = 'none';
    laptops.style.display = 'none';
    computadora.style.display = 'none';
    console.log(camaras.childNodes);

    if (camaras.childNodes[5].textContent.replace(/\s/g, " ").search(expresion) != -1) {
        camaras.style.display = 'block';
    }
    if (teclado.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
        teclado.style.display = 'block';
    }
    if (parlantes.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
        parlantes.style.display = 'block';
    }
    if (mouse.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
        mouse.style.display = 'block';
    }
    if (cpu.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
        cpu.style.display = 'block';
    }
    if (laptops.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
        laptops.style.display = 'block';
    }
    if (computadora.childNodes[1].textContent.replace(/\s/g, " ").search(expresion) != -1) {
        computadora.style.display = 'block';
    }








}