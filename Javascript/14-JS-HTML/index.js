new TypeIt("#myElement", {
    strings: "This is what will be typed!",
  }).go();



const a = 4;

console.log(a);


const p = document.getElementById('parrafo');
console.log(p)


const form = document.getElementById("form");
form.addEventListener('submit', event => {
    console.log(event);
    event.preventDefault();
})