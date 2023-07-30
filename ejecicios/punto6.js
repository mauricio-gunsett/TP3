"use strict";

/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y 
mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58
 */
// TERMINADO


const perimetro = function (valor1,valor2){
    let resultado = 2* (parseInt(valor1)+parseInt(valor2));
document.write(`El resueltado es ${resultado}`);

}

let valor1 = prompt("Ingresa el valor del primer lado de tu rectángulo");
let valor2 = prompt("Ingresa el valor del segundo lado de tu rectángulo");
perimetro(valor1,valor2);
