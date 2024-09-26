import BankAccount from './bank_account.js';


const akunSaya = new BankAccount();


document.getElementById('saldo').innerText = akunSaya.getSaldo();

function tambahSaldo() {
    let tambah = parseFloat(prompt("Masukkan jumlah untuk menambah saldo:"));
    setTimeout(() => {
        akunSaya.deposit(tambah);
        document.getElementById('saldo').innerText = akunSaya.getSaldo();
    }, 2000);
}


function kurangiSaldo() {
    let kurang = parseFloat(prompt("Masukkan jumlah untuk mengurangi saldo:"));
    setTimeout(() => {
        akunSaya.withdraw(kurang);
        document.getElementById('saldo').innerText = akunSaya.getSaldo();
    }, 2000);
}
window.tambahSaldo = tambahSaldo;
window.kurangiSaldo = kurangiSaldo;