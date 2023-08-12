/*Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres 
son iguales.

Una agenda de contactos está formada por un conjunto de contactos. 
Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar
 por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */

class Contacto {
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamaño){
        // if(tamaño){
        //     this.tamaño = tamaño;
        // } else {
        //     this.tamaño = 10;
        // }
        this.tamañoMaximo = tamaño || 2;
        this.contactos= [];
    }
    añadirContacto(contacto){
        if (this.contactos.length === this.tamañoMaximo){
            console.log("No se pueden almacenar más contactos");
        return;
        } 
         this.contactos.push(contacto);

    }

    existeContacto(nombre){
       const coincidencia = this.contactos.find((item)=>{
           return item.nombre.toLowerCase() === nombre.toLowerCase();
        });
        if (coincidencia){
            console.log("Existe el contacto");
        } else {
            console.log("No existe el constacto");
        }
    }

   listarConatctos(){
    this.contactos.forEach((item)=>{
        console.log(`${item.nombre}: ${item.telefono}`)
    })
}

buscarContacto(nombre){
    const contacto = this.contactos.find((item)=>{
        return item.nombre.toLowerCase() === nombre.toLowerCase();
     });
if(!contacto){
    console.log("No existe el contacto buscado")
  } else {

    console.log((`${contacto.nombre}: ${contacto.telefono}`))
  }
 }

 agendaLlena(){
    if (this.contactos.length === this.tamañoMaximo){
        console.log("La agenda está llena");
    
 } else {
    console.log("Se pueden agregar mas contactos")
 }
  
}
huecosLibres(){
    if(this.contactos.length != this.tamañoMaximo){

    const huecos= this.tamañoMaximo-this.contactos.length ;
        console.log(`La agenda tiene ${huecos} huecos libres`);
    } else {
        console.log("La agenda esta llena elimina un contacto");
    }
} 
// SI LA AGENDA NO TIENE EL TAMAÑO MAXIMO MOSTRA CUANTOS LUGARES QUEDAN
 eliminarContacto(){
     if (this.contactos.length === this.tamañoMaximo){
         this.contactos.shift();
  console.log(`El primer contacto fue eliminado`)
     } else {
        console.log("No se elimino ningun contacto")
    }
 }  
 
}
const agenda = new Agenda ();
const jorge = new Contacto ( "Jorge", 1234);
const marta = new Contacto ( "Marta", 12345);
const marta1 = new Contacto ( "Marta", 123456);

console.log(agenda);

agenda.añadirContacto(jorge);
agenda.añadirContacto(marta);

console.log(agenda);

agenda.existeContacto("Jorge");

agenda.listarConatctos();

agenda.buscarContacto("marta")
agenda.agendaLlena();
agenda.huecosLibres()
 agenda.eliminarContacto();
console.log(agenda);


