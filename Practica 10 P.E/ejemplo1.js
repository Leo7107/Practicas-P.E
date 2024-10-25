// Definición de la clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para imprimir información en consola
    imprimirInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// Creación de un objeto
const persona1 = new Persona('Yancy', 25);
persona1.imprimirInfo(); // Imprime: Nombre: Yancy, Edad: 25
