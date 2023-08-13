/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */
"use strict"

class Libro{
    constructor(isbn, titulo, autor, paginas){
        this.isbn = isbn;
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas;
    }
    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} crado por el autor ${this.autor} tiene páginas ${this.paginas}`);
    }
}

const historiasDeDivan = new Libro(9783442748600,"Historias de diván", "Gabriel Rolón", 456);
const elPrincipito =new Libro(9788478887200, "El principito", "Antoine de Saint-Exupéry", 120);

historiasDeDivan.mostrarLibro();
elPrincipito.mostrarLibro();

if(historiasDeDivan.paginas > elPrincipito.paginas){
    console.log("El libro con más páginas es Historias de diván");
} else if(historiasDeDivan.paginas<elPrincipito.paginas){
    console.log("El libro con más páginas es El principito");
} else{
    console.log("Los libros tienen las mismas paginas");
}