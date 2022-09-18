// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia
const familyNames = new Set(['Alberto', 'Pepe', 'Marta', 'Hugo', 'Alejandro']);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familyNames.add('Alejandro');
console.log(familyNames);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familyNames.add('Javascript');
console.log(familyNames);