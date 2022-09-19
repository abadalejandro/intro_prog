const array = [1,2,3,4,5, 'hola'];

const miSet = new Set(array);
console.log(array);
console.log(miSet);

miSet.add(9);
miSet.delete(2);
console.log(miSet);
// miSet.clear();
// console.log(miSet);
miSet.forEach(value => console.log(value));


// Date.toLocaleDateString('en-GB');