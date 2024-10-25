class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    // Método estático
    static tipoDeCuenta() {
        return 'Cuenta de Ahorros';
    }

    imprimirInfo() {
        console.log(`Titular: ${this.titular}, Saldo: $${this.saldo}`);
    }
}

// Creación de un objeto
const cuenta1 = new CuentaBancaria('Yancy', 2500);
cuenta1.imprimirInfo(); // Imprime: Titular: Yancy, Saldo: $2500
console.log(CuentaBancaria.tipoDeCuenta()); // Imprime: Cuenta de Ahorros
