// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const yo = {
    nombre: 'Marcos',
    apellido: 'Ruiz',
    edad: 28,
    altura: 160,
    eresDesarrollador: true,
}

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = yo.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const friend_1 = {
    nombre: 'Alberto',
    apellido: 'Alvarez',
    edad: 33,
    altura: 190,
    eresDesarrollador: false,
}
const friend_2 = {
    nombre: 'Juan',
    apellido: 'Paenza',
    edad: 66,
    altura: 170,
    eresDesarrollador: false,
}

const myList = [yo, friend_1, friend_2];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const peopleSortedByEdad = myList.sort((person1, person2) => person2.edad - person1.edad);
console.log(peopleSortedByEdad);