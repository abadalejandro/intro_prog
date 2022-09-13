function factorial(num) {
  var result = num;

  while (num > 1) {
    if (num === 0 || num === 1) {
        result = 1;
        break
    
    };

    num--;
    result *= num;
  }
  return result;
}
console.log(factorial(5));
