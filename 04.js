/*
Creator:  Luis Cerda S
Date: 24/10/2024
Version: 0.1

Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación. (3 Puntos)
● La suma de todos los números.
● El promedio de los 5 números ingresados.
 */

/* Enable the next line only for console testing, the prompt function is not available in nodejs
install with "npm install prompt-sync"
*/
//const prompt = require("prompt-sync")();

let numbers = []; // Create an array to store the numbers
let sum = 0;

for (let i = 1; i <= 5; i++) {
  let num = parseFloat(prompt("Ingrese número " + i + " de 5: "));

  // Validate input
  while (isNaN(num)) {
    num = parseFloat(prompt("Ingrese un número válido: "));
  }

  // Store the valid number in the array
  numbers.push(num);
}

// calculate sum using forEach() method
numbers.forEach((num) => {
  sum += num;
});

// calculate average of the numbers

let prom = sum / numbers.length;

// Print results
console.log("La suma de los números ingresados es: " + sum);
console.log("El promedio de los números ingresados es: " + prom.toFixed(2));
