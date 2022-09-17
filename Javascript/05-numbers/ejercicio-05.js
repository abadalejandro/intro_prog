// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 198;
// - Una variable que contenga tu altura en metros (número de coma flotante)
let altura_mt = 1.98;
// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 65.50;
// - Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_mt_rounded = Math.ceil(altura_mt);
console.log(altura_mt_rounded);
// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_kg_rounded = Math.floor(peso_kg);
console.log(peso_kg_rounded);
// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let result =  (Number.MAX_VALUE === (Number.MAX_VALUE +1));
console.log(result);