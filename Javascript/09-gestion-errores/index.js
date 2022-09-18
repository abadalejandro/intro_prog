// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch

let logger = require('./logger');

function sum(a,b){
    if(typeof a !== 'number' || typeof b !== 'number') throw new Error('Atención, a y b tienen que ser numeros...');

    return a + b;
}


try{
    sum("1", 2);
}catch(e){       
    logger.error('A y B tienen que ser números');
}