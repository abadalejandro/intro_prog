let firstName = "Alejandro";
let lasttName = "Abad";
let estudiante = firstName.concat(' ', lasttName);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let estudiante_total_characters = estudiante.length;
console.log(estudiante_total_characters);

let first_character = estudiante.charAt(0);
console.log(first_character);

let last_character = estudiante.charAt(estudiante.length-1);
console.log(last_character);

console.log(estudiante.replace(/\s/g, ''));
console.log(estudiante.includes(firstName));

