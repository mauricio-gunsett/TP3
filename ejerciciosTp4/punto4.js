"use strict"
/* Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Productos {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimedatos(){
        document.write(  `<h2>El código es: ${this.codigo}</h2>`)
        document.write(  `<h2>El nombre es: ${this.nombre}</h2>`)
        document.write(  `<h2>El precio es: ${this.precio}</h2>`)
    }
  }
  let array = [];
  let gaseosa = new Productos (123, "Coca-cola", 950)
  array.push(gaseosa);

  let fernet = new Productos (1234, "Branca", 1500)
  array.push(fernet);
  let hielo = new Productos (12345, "Buby", 500)
  console.log(hielo);
  array.push(hielo);
  for (let i = 0; i < array.length; i++) {
    array[i].imprimedatos();
  }