"use strict"
/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
 */

const auto = {
    color: "blanco",
    modelo: "147",
    marca: "fiat",
    año: "2022",
    encenderAuto() {
      console.log("El auto está encendido");
    },
    apagarAuto() {
      console.log("El auto está apagado");
    },
  };
  console.log(auto);
  
  auto.encenderAuto();
  auto.apagarAuto();