/* 
Creator:  Luis Cerda S
Date: 24/10/2024
Version: 0.1

Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera
de un número decimal.
*/

/* Enable the next line only for console testing, the prompt function is not available in nodejs
install with "npm install prompt-sync"
*/
//const prompt = require("prompt-sync")();

// Request first number and validate input
let num = parseFloat(prompt("Ingrese el numero de días: "));
while (isNaN(num) || num <= 0) {
  num = parseFloat(prompt("Ingrese un numero valido: "));
}

// define function years 
function years() {
  return Math.floor(num / 365);
}
// define function weeks using module 
function weeks() {
  return Math.floor((num % 365) / 7);
}
// define function days using module 
function days() {
  return (num % 365) % 7;
}

// Print results
console.log(
  "El numero de días ingresado corresponde a " +
    years() +
    " años, " +
    weeks() +
    " semanas y " +
    days() +
    " " +
    (days() === 1 ? "día" : "días") // if number os days is equal to 1 use día instead of días
);
