// http://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los arboles"
console.log(texto_largo.match(/\bno\b/g));

console.log(texto_largo.includes("prefiere"));
console.log(texto_largo.includes("hoja"));

console.log(texto_largo.startsWith("hoja"));
console.log(texto_largo.endsWith("arboles"));

console.log(texto_largo.includes("Tito"));

