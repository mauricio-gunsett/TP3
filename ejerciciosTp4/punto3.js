"use strict"
/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulos {
    constructor(id,
      alto,
      ancho,
      ) {
        this.id = id;
        this.alto = alto;
        this.ancho = ancho;
      }
      modificar(){
        let altoModificado = prompt("Ingrese el alto");
        this.alto = parseInt(altoModificado);
        console.log(this.alto);
        let anchoModificado = prompt("Ingrese el ancho");
        this.ancho = parseInt(anchoModificado);
        console.log(this.ancho);
      }
      propiedades(){
        document.write(`Alto: ${this.alto}, Ancho: ${this.ancho}`)
      }
      perimetro() {
        return 2 * (this.alto + this.ancho);
        
      }
      area() {
        return this.alto * this.ancho;
      }

   }

   let rectangulo1 = new Rectangulos(1, 15, 20)
  console.log(rectangulo1)
  document.write(`<h1>El alto es ${rectangulo1.alto}</h1>`);
  document.write(`<h2>El ancho es ${rectangulo1.ancho}</h2>`);
  rectangulo1.modificar();
  document.write(`<h3>Nuevo alto es ${rectangulo1.alto}</h3>`);
  document.write(`<h3>Nuevo ancho es ${rectangulo1.ancho}</h3>`);
  rectangulo1.propiedades();
  document.write(`<p>Perímetro: ${rectangulo1.perimetro()}</p>`);
  document.write(`<p>Área: ${rectangulo1.area()}</p>`);



 