package Ejercicio9;
// import Ejercicio9.Persona;

public class Cliente extends Persona {
    public int credito;

    public Cliente(){
        super();
    }

    public int getCredito() {
        return credito;
    }

    public void setCredito(int credito) {
        this.credito = credito;
    }


    public static void main(String[] args) {
        Cliente cliente1 = new Cliente();
        cliente1.setNombre("Juan");
        cliente1.setEdad(35);
        cliente1.setTelefono(23423423);
        cliente1.setCredito(1000);
        System.out.println("Nombre cliente: " + cliente1.getNombre());
        System.out.println("Edad: " + cliente1.getEdad());
        System.out.println("Telefono: " + cliente1.getTelefono());
        System.out.println("Credito: " + cliente1.getCredito());
       
    }
}
