"use strict";

/*2-  Crear un script que solicite 
al usuario mediante un prompt el nombre 
de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar 
se debe mostrar el arreglo generado, 
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems 
de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que 
ocupa la segunda posición.
Sustituye el elemento que ocupa la 
segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
 */

/* 1 crear un promnt 
   2  crar un 
   3 cuandoi cancela motrar el arreglo 
*/


// TERMINADO



let ciudades = [];

while (true) {
  let ciudad = prompt("Ingresa el nombre de una ciudad (deja en blanco para terminar):");
  
 
  if (ciudad === "" || ciudad === null) {
    break;
  }
  
 
  ciudades[ciudades.length] = ciudad;
}


console.log("Ciudades ingresadas:", ciudades);

document.write(`El arreglo tiene ${ciudades.length} elementos`);






document.write("<ul>");
    document.write(`<li>Elemento 1er posición: ${ciudades[0]}</li>`);
    document.write(`<li>Elemento 3er posición: ${ciudades[2]}</li>`);
    document.write(`<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`);
    document.write("</ul>");

ciudades.push("Paris");
console.log(ciudades);
document.write("último elemento del array es:  ", ciudades[ciudades.length - 1]);




document.write("<ul>");
    
    document.write(`<li>Elemento 2da posición: ${ciudades[1]}</li>`);
    
    document.write("</ul>");




ciudades.splice(1, 0,"Barcelona");






    document.write("<ul>")
ciudades.forEach((ciudades)=>{
  document.write(`<li>Elemento: ${ciudades} </li>`)
  

})
document.write("</ul>")


