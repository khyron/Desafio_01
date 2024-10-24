/* 
Creator:  Luis Cerda S
Date: 23/10/2024
Version: 0.1

Exercise Description:

Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit. (2 Puntos)
Se debe considerar la siguiente información respecto a la equivalencia de las escalas de temperatura:
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F
*/

/* Enable the next line only for console testing, the prompt function is not available in nodejs
install with "npm install prompt-sync"
*/
//const prompt = require("prompt-sync")();

// Request first number and validate input
let temp = parseFloat(
  prompt("Ingrese la temperatura a convertir en grados Celcius: ")
);
while (isNaN(temp)) {
  temp = parseFloat(prompt("Ingrese una temperatura válida: "));
}

//define funtion °C --> °K
function kelvin() {
  return temp + 273.15;
}

// Define function °C --> °F
function fahrenheit() {
  return temp * (9 / 5) + 32;
}

// Print results
console.log("Temperatura equivalente en grados Kelvin: " + kelvin().toFixed(2) + " °K");
console.log(
  "temperatura equivalente en grados Fahrenheit: " + fahrenheit().toFixed(2) + " °F"
);
