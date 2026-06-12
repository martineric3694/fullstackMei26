// Buat sistem untuk menghitung nilai dari siswa
// 1. Menghitung rata-rata nilai
// 2. Menemukan nilai tertinggi
// 3. Menemukan nilai terendah

// var score = [50,100,30,70,40];


// var murid = [
//       [1, "Vincent", 3.5],
//       [2, "Udin", 3.0],
//       [3, "Mamang", 2.1]
// ];

// var result = "";
// for(var i = 0; i < murid.length; i++) {
//     for(var j = 0; j < murid[i].length; j++) {
//         var status = ""
//         if(j >= 3) {
//             status = "Lulus";
//         } else {
//             status = "Tidak Lulus";
//         }
//     }
//     result+=i+"."+murid[i][1]+","+murid[i][2]+","+status+" ";
//     result+="\n";
// }
// console.log(result);


function splitWord(word) {
    var result = word.split(" ");
    return result;
}

function countArray(word){
    var result = splitWord(word);
    return result.length;
}

console.log(countArray("Selamat Pagi Hello World"));

// Latihan
// Buat sistem untuk menghitung total lembur karyawan 
// (gunakan function untuk penerapannya)
// Input : gaji pokok, tunjangan lembur dan durasi lembur
// Output : total gaji dan lemburan -> 
// "Total gaji : 1000000, Total lembur : 500000"

// Latihan
// Sistem Kasir (array dan function)
// Inputan : Barang = [[Nama Barang1, Jumlah Barang1],
// [Nama Barang2, Jumlah Barang2]]
// Ada 3 barang yang sudah didefinisikan harganya A = 10000, B = 20000, C = 30000
// Buat fungsi untuk menghitung total belanjaan dengan konsep fungsi modular
// Output : "Total belanjaan : 100000"

function cekHarga(barang) {
    if(barang === "Kulkas"){
        return 10000;
    }else if(barang === "TV"){
        return 20000;
    }else if(barang === "Mesin Cuci"){
        return 30000;
    }else {
        return 0;
    }
}