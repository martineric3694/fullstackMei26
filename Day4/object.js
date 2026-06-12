// var siswa = {
//     nama: "Rizky",
//     umur: 20,
//     jurusan: "Teknik Informatika",
// }

// console.log(siswa.nama);
// console.log(siswa["umur"]);
// console.log(siswa.jurusan);

// siswa.nama = "Budi";
// console.log("Perubahan nama : "+siswa.nama);

// var siswa2 = {
//     nama: "Dewi",
//     umur: 22,
//     jurusan: "Sistem Informasi",
//     nilai: [90, 85, 88],
// }

// console.log("Nama : "+siswa2.nama);
// console.log("Umur "+siswa2["umur"]+" tahun");
// console.log("Jurusan : "+siswa2.jurusan);
// console.log("Nilai : "+siswa2.nilai.join(", "));

function convertToObject(arr) {
    var result = {};
    result.jenis = arr[0];
    result.harga = arr[1]*1.1;
    result.tersedia = arr[2];
    return result;
}

// fungsi untuk apa saja yang lebih singkat
function convertToObject1(arr) {
    return{
        jenis: arr[0],
        harga: arr[1]*1.1,
        tersedia: arr[2]
    }
}


var buah =["durian",75000,true];

// console.log(convertToObject(buah));
console.log(convertToObject1(buah));
console.log("Jenis : "+convertToObject1(buah).jenis);

var result = convertToObject1(buah);

// for(var i = 0; i<Object.keys(result).length; i++){
//     var key = Object.keys(result)[i];
//     console.log(key + " : "+result[key]);
// }

// for(var key in result){ 
//     // console.log(key+" : "+typeof key); 
//     console.log(key + " : "+result[key]);
// }

// Nama: 	caca
// Berat: 	45 kg
// Tinggi: 	155 cm
// Hobi: 	Nonton, makan

var caca = {
    nama: "caca",
    berat: "45 kg",
    tinggi: "155 cm",
    sebutkanHobi: function(hobi){
        return "Hobi : "+hobi.join(", ");
        // console.log("Hobi :");
        // for(var i = 0; i<hobi.length; i++){
        //     console.log("- "+hobi[i]);
        // }
    },
}

var hobi = ["Nonton", "makan"];

console.log(caca.sebutkanHobi(hobi));
caca.sebutkanHobi(hobi);