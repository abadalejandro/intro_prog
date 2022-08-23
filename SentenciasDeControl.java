public class SentenciasDeControl {
    public static void main(String[] args) {
        System.out.println("*************************************************");
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
        // Ejercicio 2
        // Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
        // Incrementar el valor de la variable en uno cada vez que se ejecute.
        // Mostrarlo por pantalla cada vez que se ejecute.
        
        int numeroWhile = 0;
        while(numeroWhile < 3){
            numeroWhile++;
            System.out.println("Numero While: " + numeroWhile);
        }
        System.out.println("*************************************************");

        // Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
        do{
            System.out.println("Numero While: " + numeroWhile);            
        }while(numeroWhile < 3);
        System.out.println("*************************************************");
    }


   

}
