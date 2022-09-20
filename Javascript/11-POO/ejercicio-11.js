class Estudiante{
    nombre;
    asignaturas = ['Javascript', 'HTML', 'CSS'];

    constructor(nombre){
        this.nombre = nombre;
    }

    obtenDatos(){
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas,
        }
    } 

}

const student1 = new Estudiante('Roque');
console.log(student1.obtenDatos());