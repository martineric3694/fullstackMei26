// Sistem Rekening Bank

class Rekening{
    constructor(nama,saldo){
        this.nama = nama;
        this.saldo = saldo;
    }
    setor(jumlah){
        this.saldo += jumlah;
    }
    tarik(jumlah){
        if(jumlah<this.saldo){
            this.saldo -= jumlah;
        }else{
            console.log("Saldo Tidak Cukup");
        }
    }
    cekSaldo(){
        return this.saldo;
    }
}

class RekeningTabungan extends Rekening{
    potonganAdmin(){
        this.saldo -=10000;
    }
}

let budi = new Rekening("budi",20000);
console.log(budi.cekSaldo());

budi.setor(5000);
console.log(budi.cekSaldo());

budi.tarik(100000);
console.log(budi.cekSaldo());

let susi = new RekeningTabungan("Susi",500000);
console.log("Saldo "+ susi.nama+" saat ini adalah "+ susi.cekSaldo());
susi.potonganAdmin();
console.log("Saldo "+ susi.nama+" saat ini adalah "+ susi.cekSaldo());
susi.tarik(50000);
console.log("Saldo "+ susi.nama+" saat ini adalah "+ susi.cekSaldo());
susi.tarik(7000000);
console.log("Saldo "+ susi.nama+" saat ini adalah "+ susi.cekSaldo());