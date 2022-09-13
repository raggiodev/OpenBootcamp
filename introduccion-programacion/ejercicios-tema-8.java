// Ejercicios Tema 8 - Curso de Introducción a la programación - OpenBootcamp | @JoeTheorium - Raggio Fernando Andres
public class Main {
  
  public static void main(String[] args) {
    // Creo objeto "persona" en el "main", utilizo los "get" y "set" para darles valores a las propiedades y las muestro por consola:
    Persona persona = new Persona();
    persona.setNombre("Fernando");
    System.out.println("Hola! Mi nombre es " + persona.getNombre() + ".");
    persona.setEdad(23);
    System.out.println("Tengo " + persona.getEdad() + " años.");
    persona.setTelefono(37725638);
    System.out.println("Mi número de teléfono es " + persona.getTelefono() + ".");
  }
}

// Creo clase "Persona", sus tres variables privadas y les doy y obtengo atributos de cada propiedad:
class Persona {
  private String nombre;
  private int edad;
  private int telefono;
  
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
        
  public String getNombre() {
    return nombre;
  }
    
  public void setEdad(int edad) {
    this.edad = edad;
  }
    
  public int getEdad() {
    return edad;
  }
    
  public void setTelefono(int telefono) {
    this.telefono = telefono;
  }
    
  public int getTelefono() {
    return telefono;
  }
}
