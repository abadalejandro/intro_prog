public class SentenciasDeControl {
    public static void main(String[] args) {
        // Ejercicio 1
        // Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
        // Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
        int numeroIf = 10;
        String result = "";
        if(numeroIf > 0){
            result = "Es positivo";
        }else if(numeroIf < 0){
            result = "Es negativo";
        }else {
            result = "Es 0";
        }

        System.out.println(result);
        System.out.println("*************************************************");



    }


   

}
