// Crea un archivo JS que contenga las siguientes líneas

const { resolveModuleName } = require("typescript");

// - Una función sin parámetros que devuelva siempre "true"
function myFunction(){
    return true;
}
console.log(myFunction());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const myPromise = new Promise((resolve,reject) => { 
    setTimeout(()=>{        
        return resolve()
    }, 5000);
});

myPromise.then(()=>console.log("Hola soy una promesa"))
        
        
// - Una función generadora de índices pares automáticos
function* generaIndex(){
    let idx = 0;
    while(true){
        idx++;       
        if(idx % 2 === 0){            
            yield idx;
        }

    }
}


const gen = generaIndex();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);