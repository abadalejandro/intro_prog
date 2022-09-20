class Persona {
    // Private => #
    #nombre
    #edad

    // Protected => _
    // Solo se puede acceder desde una clase hija
    _isDeveloper = true;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.isDeveloper = isDeveloper;
  }

  getName(){
    return this.#nombre;
  }

  getEdad(){
    return this.#edad;
  }

  saludo() {
    console.log("Hola");
  }
}

const ale = new Persona('Alejandro', 34, true);




