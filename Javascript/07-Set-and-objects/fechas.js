// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const now = new Date();
console.log(now);

// - La fecha de tu nacimiento
const myBirthDate = new Date("1980-01-01");
console.log(myBirthDate);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let todayIsLater = (now > myBirthDate);
console.log(todayIsLater);

// - Una variable que contenga el día de tu nacimiento
let dayOfMyBirth = myBirthDate.getDate();
console.log(dayOfMyBirth);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let monthOfMyBirth = myBirthDate.getMonth();
console.log(monthOfMyBirth);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let yearOfMyBirth = myBirthDate.getFullYear();
console.log(yearOfMyBirth);