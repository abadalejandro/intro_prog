package Ejercicio9;

public class Trabajador extends Persona{
    public int salario;

    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }


    public static void main(String[] args) {
        Trabajador trabajador1 = new Trabajador();
        trabajador1.setNombre("Carlos");
        trabajador1.setEdad(40);
        trabajador1.setTelefono(123423423);
        trabajador1.setSalario(2000);
        System.out.println("Nombre Trabajador: " + trabajador1.getNombre());
        System.out.println("Edad: " + trabajador1.getEdad());
        System.out.println("Telefono: " + trabajador1.getTelefono());
        System.out.println("Salario: " + trabajador1.getSalario());


    }
}
