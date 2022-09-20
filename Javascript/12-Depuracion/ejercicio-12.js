// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una función que admita un parámetro "num", 
// y devuelva una lista con esa cantidad de números 
// de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function fibonacci(num) {
    let number1 = 0;
    let number2 = 1;
    const result = [1];

    for (i = 0; i < num; i++) {
      let current = number1 + number2;
      number1 = number2;
      number2 = current;
      result.push(current);
    }
    return result;
  }

console.log(fibonacci(7));