class BankAccount {
    constructor(saldoawal = 1000) {
        this.saldo = saldoawal;
    }

    deposit(jumlah) {
        if (jumlah > 0) {
            this.saldo += jumlah;
            alert(`Deposit sebesar ${jumlah}, Saldo saat ini: ${this.saldo}`);
        } else {
            alert('Masukkan jumlah yang valid');
        }
    }

    withdraw(jumlah) {
        if (jumlah > 0 && jumlah <= this.saldo) {
            this.saldo -= jumlah;
            alert(`Withdraw sebesar ${jumlah}, Saldo saat ini: ${this.saldo}`);
        } else {
            alert('Masukkan jumlah yang valid dan di bawah total saldo');
        }
    }

    getSaldo() {
        return this.saldo;
    }
}

export default BankAccount