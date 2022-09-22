let name = 'Alejandro';
let lastName = 'Abad';
const person = {
    name: name,
    lastName: lastName
}

sessionStorage.setItem('person', JSON.stringify(person));
localStorage.setItem('person', JSON.stringify(person));
let now = new Date();
let time = now.getTime();
let expireTime = time + 1000*120;
now.setTime(expireTime);

document.cookie = "person=" + JSON.stringify(person) + ';expires=' + now.toUTCString();

