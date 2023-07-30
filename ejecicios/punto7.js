"use strict";

/* 7- Escriba un script que muestre la tabla de multiplicar 
de un número ingresado por pantalla, la creación de la tabla debe 
ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

*/
// TERMINADO


const tabla = function (numero){
for (let i = 0; i <= 10; i++) {
    const resultadoDeLaMultiplicacion = numero * i;
    if(isNaN(numero)|| numero===null|| numero === "" ){
        alert("Ingresa un número");
        break;
    } else{
        document.write("<ul>");
    document.write(`<li> ${numero} x ${i}  =  ${resultadoDeLaMultiplicacion}</li>`)
    document.write("</ul>");
}
}

}
let pedir = prompt("Ingresar un número");
tabla(pedir)