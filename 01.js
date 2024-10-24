/* 
Creator:  Luis Cerda S
Date: 23/10/2024
Version: 0.1

Exercise Description:

Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente: (2 Puntos)
● Suma
● Resta
● División
● Multiplicación
● Módulo
 */

/* Enable the next line only for console testing, the prompt function is not available in nodejs
install with "npm install prompt-sync"
*/
//const prompt = require("prompt-sync")();

// Request first number and validate input
let num1 = parseFloat(
  prompt("Ingresa el primer número (debe ser mayor a 0): ")
);
while (isNaN(num1) || num1 <= 0) {
  num1 = parseFloat(prompt("Ingrese un número válido: "));
}

// Request second number, validate input and value not equal to num1
let num2 = parseFloat(
  prompt(
    "Ingresa el segundo número (debe ser mayor a 0 y distinto del anterior): "
  )
);
while (isNaN(num2) || num2 <= 0 || num2 === num1) {
  num2 = parseFloat(prompt("Ingrese un número válido: "));
}

// Print results
console.log(`Suma: ` + (num1 + num2));
console.log(`Resta: ` + (num1 - num2));
console.log(`División: ` + (num1 / num2).toFixed(2));
console.log(`Multiplicación: ` + num1 * num2);
console.log(`Módulo: ` + (num1 % num2)); // if num2 is bigger than num1 the module always is going to be equal to num1
