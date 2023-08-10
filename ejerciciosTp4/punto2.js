"use strict"
/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
 */


const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar() {
      let importe = Number(prompt("Ingresa tu dinero"));
  
      if (isNaN(importe) || importe <= 0) {
        alert("Ingrese un billetin");
      } else {
        this.saldo += importe;
        document.write(`<h1>El importe de su cuenta es ${this.saldo}</h1>`);
        
      }
    },
    extraer() {
      let retirar = Number(prompt("Ingrese el importe a retirar"));
  
      if (isNaN(retirar)) {
        alert("Ingrese un importe válido");
      } else if (this.saldo >= retirar) {
        document.write(`<h2>Usted a retirado ${retirar}</h2>`);
        this.saldo -= retirar;
      } else {
        alert("No cuenta con el saldo suficienta para realizar la extracción");
      }
    },
    informar() {
      document.write(`<h3>El saldo total de la cuenta es ${this.saldo}</h3>`);
    },
  };
  console.log(cuenta);
  cuenta.ingresar();
  cuenta.extraer();
  cuenta.informar();