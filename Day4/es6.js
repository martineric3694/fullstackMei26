var hello;

console.log(hello); // undefined

hello = "Hello World";

console.log(hello); // Hello World



halo = "Halo Dunia";
console.log(halo); // undefined

var angka = 10;
angka = 100;

console.log(angka);

var angka = 1000;
console.log(angka);

let angka2 = 20;
angka2 = 200;

console.log(angka2);

// let angka2 = 2000; // error karena sudah dideklarasikan sebelumnya
// console.log(angka2);

// perbedaan var dan let

var nilai = 10;

if(true){
    var nilai1 = 100;
}
console.log(nilai); // 10
console.log(nilai1); // 100 karena var memiliki scope global atau function

console.log("===================================");

let nilai2 = 10;

if(true){
    let nilai2 = 100;
    console.log("=====")
    console.log(nilai2); // 100 karena let memiliki scope block
    //  nilai2 = 100; // ini akan merubah nilai2 yang di luar blok if karena let memiliki scope block
}
console.log(nilai2); 
// console.log(nilai3); 

const nilai3 = 30;
// nilai3 = 30;
console.log(nilai3); // error karena nilai3 adalah const yang tidak bisa diubah nilainya

let pesan = ()=> console.log("Hello World");

pesan();

let tambah = (a,b) => a+b;

// function tambah(a,b){
//     return a + b;
// }

console.log(tambah(5,10));


// Object Destructuring
let cece ={
    nama: "Caca",
    umur: 20,
    jurusan: "Teknik Informatika",
    hobi: ["membaca", "bermain game", "berkebun"],
    domisili: {
        kota: "Bandung",
        provinsi: "Jawa Barat",
    }
};

let {umur, jurusan} = cece;

let {domisili:{kota}} = cece;
let {domisili} = cece;

console.log("Umur : "+umur);
console.log("Jurusan : "+jurusan);

console.log("Kota : "+kota);
console.log("Domisili : "+domisili.kota+", "+domisili.provinsi);

let {hobi} = cece;
console.log("Hobi : "+hobi.join(", "));

// Array Destructuring

let data = ["Rizky", 20, "Teknik Informatika","Bandung"];

let [nama, , ,lokasi] = data;

console.log("Nama : "+nama);
// console.log("Prodi : "+prodi);
console.log("Lokasi : "+lokasi);

const score = [90, 85, 88, 92, 80];

let minVal = Math.min(score);
let minVal1 = Math.min(...score);

console.log("Nilai Terendah : "+minVal);
console.log("Nilai Terendah 1 : "+minVal1);

const original = [1, 2, 3];
const copy = [0, original,4];

copy.pop();
console.log("Original : "+original);
console.log("Copy : "+copy);