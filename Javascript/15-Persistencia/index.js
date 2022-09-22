localStorage.setItem('name', 'Gorka');
localStorage.setItem('name', 'Pedro');
const name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('name');


document.cookie = 'nombreCookie=GorkaCookie';
// document.cookie = "nombreCaducidad=Nombre; 
// expires ="  + new Date(2023,0,1).toUTCString();
