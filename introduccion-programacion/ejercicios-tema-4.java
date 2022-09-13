// Ejercicios Tema 4 - Curso de Introducción a la programación - OpenBootcamp | @JoeTheorium - Raggio Fernando Andres
public class Main {
  
  public static void main(String[] args) {
    // 1)  if, else if, else
    int numeroIf = 0;
        
    if(numeroIf > 0) {
      System.out.println("La variable 'numeroIf' " + numeroIf + " es positiva.");
    }
    else if(numeroIf < 0) {
      System.out.println("La variable 'numeroIf' " + numeroIf + " es negativa.");
    } else {
      System.out.println("La variable 'numeroIf' es cero.");
    }
    
    // 2) while
    int numeroWhile = 1;
    
    while(numeroWhile < 3) {
      numeroWhile++;
      System.out.println("La variable 'numeroWhile' es: " + numeroWhile + ".");
    }
    
    // 3) do while
    int numeroDoWhile = 3;
    
    do {
      numeroDoWhile++;
      System.out.println("La variable 'numeroDoWhile' es " + numeroDoWhile + ".");
    }while(numeroDoWhile < 3);
    
    // 4) for
    for(int numeroFor = 0; numeroFor <= 3; numeroFor++) {
      System.out.println("La variable 'numeroFor' es " + numeroFor + ".");
    }
    
    // 5) switch
    String estacion = "Invierno";
    
    switch (estacion) {
      case "Verano":
        System.out.println("Estamos en verano!");
        break;
      case "Otoño":
        System.out.println("Estamos en otoño!");
        break;
      case "Invierno":
        System.out.println("Estamos en invierno!");
        break;
      case "Primavera":
        System.out.println("Estamos en primavera!");
        break;
      default:
        System.out.println("Estacion inválida");
    }
  }
}
