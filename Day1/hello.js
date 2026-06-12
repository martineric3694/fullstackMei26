console.log("Hello, World!");

var nama = "John Doe";
console.log("Nama saya adalah " + nama);

var nilai = 10;
var nilai2 = 20+nilai;
var nilai3 = nilai2 + 10;
console.log("Nilai 3 : "+nilai3);

var a = 10;
var b = 20;
var c = a + b;
console.log("Hasil penjumlahan a dan b adalah : " + c);

var d = 3-2+10*20/5;
console.log("Hasil dari operasi matematika adalah : " + d);

var diameter = 10;
var luasLingkaran = Math.PI * (diameter/2) * (diameter/2);
console.log("Luas lingkaran adalah : " + luasLingkaran);

if (nilai3 > 30) {
    console.log("Nilai 3 lebih besar dari 30");
} else {
    console.log("Nilai 3 tidak lebih besar dari 30");
}

if(nilai3>30){
    if(nilai3<40){
        console.log("Nilai 3 berada di antara 30 dan 40");
    }else{
        console.log("Nilai 3 lebih besar dari 40");
    }
}

switch (nilai3) {
    case 30:
        console.log("Nilai 3 adalah 30");
        break;
    case 40:
        console.log("Nilai 3 adalah 40");
        break;
    default:
        console.log("Nilai 3 tidak diketahui");
}

console.log("Nilai 3 : "+nilai3);

switch(true){
    case (nilai3 > 30 && nilai3 < 40):
        console.log("Nilai 3 berada di antara 30 dan 40");
        break;
    case (nilai3 >= 40):
        console.log("Nilai 3 lebih besar dari 40");
        break;
    default:
        console.log("Nilai 3 tidak diketahui");
}