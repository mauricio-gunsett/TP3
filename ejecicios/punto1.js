"use strict";
/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

Output: */

// TERMINADO

const meses = [
    "Enero",
    "Ferebero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  document.write("<ul>")
  meses.forEach((mes)=>{
    document.write(`<li>${mes}</li>`)
  })
  document.write("</ul>")


  var x = 3;

switch(x){
case 1:
document.write(x);
break;
case 2:
document.write(x+2);
break;
default:
document.write(x+5);
}