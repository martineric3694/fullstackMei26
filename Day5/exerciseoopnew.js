// Sistem perhitungan gaji
// Jenis : Programmer, Admin, Manager
// Gaji pokok dimasukan saat inisialisasi object
// Masa kerja di set terpisah
// Bonus berdasarkan jenis, potongan Pajak berbeda-beda, serta masa kerja

// Programmer(1000000, 5)
// Gaji programmer adalah 1000000+500000-(5% x gajiPokok)

// Penerapan
// 1. Encapsulation
// 2. Inheritance

class Karyawan{
    constructor(nama,pekerjaan,gaji,durasi){
        this._nama = nama;
        this._pekerjaan = pekerjaan;
        this._gaji = gaji;
        this._durasi = durasi;
    }

    set Nama(nama){
        console.log("===="+nama)
        this._nama = nama;
    }
    get Nama(){
        return this._nama;
    }
    set Pekerjaan(pekerjaan){
        this._pekerjaan = pekerjaan;
    }
    get Pekerjaan(){
        return this._pekerjaan;
    }
    set Gaji(gaji){
        this._gaji = gaji;
    }
    get Gaji(){
        return this._gaji;
    }
    set Durasi(durasi){
        this._durasi = durasi;
    }
    get Durasi(){
        return this._durasi;
    }
    tampilkanInformasiKaryawan(){
        let result = {
            nama : this._nama,
            pekerjaan : this.Pekerjaan,
            gaji : this.Gaji,
            durasi : this.durasi,
        };
        return this._nama;
    }
}

class Programmer extends Karyawan{
    bonus(){
        this._bonus = 5000000;
    }

    hitungGaji(){
        // console.log();
        if(this._bonus === undefined){
            this._bonus = 0;
        }
        return ((this._gaji + this._bonus)-(this._gaji*0.05));
    }
}

class Admin extends Karyawan{
    bonus(){
        this._bonus = 500000;
    }

    hitungGaji(){
        return ((this._gaji + this.bonus)-(this._gaji*0.01));
    }
}

class Manager extends Karyawan{
    bonus(){
        this._bonus = 5000000;
    }

    hitungGaji(){
        return ((this._gaji + this.bonus)-(this._gaji*0.1));
    }
}

let BudiProg = new Programmer();
BudiProg.Nama="Budi";
BudiProg.Pekerjaan="Programmer";
BudiProg.Gaji=5000000;

// for(let data of BudiProg.tampilkanInformasiKaryawan ){
console.log(BudiProg.tampilkanInformasiKaryawan());
// }

// BudiProg.bonus();
BudiProg.hitungGaji();
console.log(BudiProg.Nama+" "+BudiProg.hitungGaji());
