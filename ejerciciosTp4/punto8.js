/*8- Crea una clase llamada "Persona" que tenga las propiedades 
"nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse".
 Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades
  y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
    despedirse(){
        console.log("Nos vemos.");
    }
}


const nelson = new Persona("Nelson", 20, "Programador");
const lucas = new Persona("Lucas", 25, "Doctor");

nelson.saludar();
nelson.despedirse();
lucas.saludar();
lucas.despedirse();