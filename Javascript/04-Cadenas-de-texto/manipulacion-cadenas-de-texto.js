let input = "Escorpio";
let db = "escorpio";

console.log(input.toLowerCase() === db.toLowerCase());

// Formas de concatenar
let str_1 = "Hola, soy la primera cadena";
let str_2 = "Hola, soy la segunda cadena";

str_1.concat(" ", str_2);
let result = str_1 + " " + str_2;
result = `${str_1} ${str_2}`;
console.log(result);

// Eliminar espacios
let str_3 = 'Hola como estas otra vez estas estas    ';

console.log(str_3.trim());

// Obtener el caracter que hay en cierta posicion
console.log(str_3.charAt(1));
console.log(str_3.indexOf('estas'));
console.log(str_3.lastIndexOf('estas'));
