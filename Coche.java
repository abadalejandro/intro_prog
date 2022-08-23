public class Coche{
    private int puertas;

    public int addPuertas(int puertas){
        this.puertas += puertas;
        return this.puertas;
    }

    public int getPuertas(){
        return this.puertas;
    }




    public static void main(String[] args) {
        Coche miCoche = new Coche();         
        miCoche.addPuertas(1);
        System.out.println("Mi coche tiene " + miCoche.getPuertas() + " puerta/s");
    }
}