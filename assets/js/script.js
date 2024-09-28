let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');

let cajaA = document.querySelector('#cajaA');
let cajaB = document.querySelector('#cajaB');
let cajaC = document.querySelector('#cajaC');


const parrafo = document.querySelector('#parrafo');
const btnvalidar = document.querySelector('#btnvalidar');

btnvalidar.addEventListener('click', () => {
    let suma = parseInt(uno.value) + parseInt(dos.value) + parseInt(tres.value);
    if (suma > 10) {
        parrafo.innerHTML = 'Llevas demasiados stickers';
    } else {
        parrafo.innerHTML = 'Llevas ' + suma + ' stickers';
    }
});

const parrafoPass = document.querySelector('#parrafoPass');
const btnPass = document.querySelector('#btnPass');

btnPass.addEventListener('click', () => {
    let pass = cajaA.value + cajaB.value + cajaC.value;
    if (pass === '911') {
        parrafoPass.innerHTML ='Password 1 es correcto';
    } else if (pass === '714'){
        parrafoPass.innerHTML = 'Password 2 es correcto';
    }
    else {
        parrafoPass.innerHTML = 'Password incorrecto';
    }
});
