const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  throw new Error("Error, el valor tiene que ser un numero...");
};

try {
  console.log(miFuncion("hola"));
} catch (e) {
  console.error(e);
} finally{
    console.log("Yo siempre me ejecuto");
}


// InternalError, SyntaxError, TypeError, RangeError y ReferenceError

