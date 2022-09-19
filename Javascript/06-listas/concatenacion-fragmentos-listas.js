let array = [1,2,3,4,5];

const array2 = [1,2,3,4,5,6];


// Eliminar valores
array2.splice(2,4);
console.log(array2);

// Añadir valores
array2.splice(2,0,"hello");
console.log(array2);


// Modificar valores
array2.splice(2,1,3);
console.log(array2);