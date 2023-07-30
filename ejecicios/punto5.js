"use strict";

/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas.
 */
// PROCESO

const cadenaDeTexto = (texto) => {
  let mayusculas = 0, minusculas = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === texto.charAt(i).toLowerCase()) {
      minusculas++;
    } else if (texto.charAt(i) === texto.charAt(i).toUpperCase()) {
      mayusculas++;
    }
  }

  if (mayusculas === texto.length) {
    return "Está formado únicamente por mayúsculas";
  } else if (minusculas === texto.length) {
    return "Está formado únicamente por minúsculas";
  } else {
    return "Está formado por una mezcla de ambas";
  }
}

let texto = prompt("Ingrese una cadena de texto");
console.log(cadenaDeTexto(texto));
  