"use strict";

/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado
 una cadena de texto 
que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
/* 1 definir funcion 
   2 promt
   3  
*/

// terminado



const ingresar2 = function(numero){

    if ( numero === "" || numero === null || isNaN(numero))  {
       alert("Ingresa un número válido")
       return;  
    } 
      
      if (numero % 2 === 0) {
        document.write("El número es Par");
    } else {
        document.write("El número es impar")
    }
}

let numero = prompt("Ingresa un numero entero");

ingresar2(numero);