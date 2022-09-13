// Ejercicios Tema 9 - Curso de Introducción a la programación - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
public class Main {
    
    public static void main(String args[]) {
        
      Cliente cliente = new Cliente(); 
      Trabajador trabajador = new Trabajador();
      
      // Creo un objeto de la clase "Cliente" que tiene como propiedades el nombre, la edad, el telefono y el credito, le doy valor y lo muestro por pantalla:
      cliente.nombre = "Fernando";
      cliente.edad = 23;
      cliente.cel = 37725638;
      cliente.credito = 333.3;
      System.out.println("Hola! Soy " + cliente.nombre + ", tengo " + cliente.edad + " años y mi número de celular es " + cliente.cel
                         + ". Mi crédito disponible es $" + cliente.credito + " dólares.");
      
      // Hago lo mismo con la clase "Trabajador", hereda de "Persona" con la variable "salario" que solo le pertenece a esta clase:
      trabajador.nombre = "Beto";
      trabajador.edad = 64;
      trabajador.cel = 37721090;
      trabajador.salario = 4666.65;
      System.out.println("Hola. Soy " + trabajador.nombre + ", tengo " + trabajador.edad + " años y mi número de celular es " + trabajador.cel
                         + ". Mi salario es de $" + trabajador.salario + " dólares.");
    }
}

// Creo clase "Persona" y sus tres variables:
class Persona {
    String nombre;
    int edad;
    int cel;
}

// Creo nueva clase "Cliente" que hereda sus atributos de la superclase "Persona". Esta nueva clase tiene la variable "credito" solo para ella:
class Cliente extends Persona {
    double credito;
}

class Trabajador extends Persona {
    double salario;
}
