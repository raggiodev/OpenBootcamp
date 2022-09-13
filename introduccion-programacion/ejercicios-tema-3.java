// Ejercicios Tema 3 - Curso de Introducción a la programación - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
public class Main {
  
  public static void main(String[] args) {
    suma(10,-20,30);
      
    Coche coche = new Coche();
      
    coche.agregarPuerta();
    System.out.println("El número de puertas que posee el coche ahora es: " + coche.puertas + ".");
  }
  
  // Primera parte:
  public static void suma(int num1, int num2, int num3) {
    int resultado;
    
    resultado = num1 + num2 + num3;
    System.out.println("El resultado de la suma entre estos tres números es: " + resultado + ".");
  }
}

//Segunda parte:
class Coche {
  public int puertas = 4;
    
  public void agregarPuerta() {
    this.puertas++;
  }
}
