// Penerapan dari kumpulan object yang dibungkus menggunakan array
// Menampilkan isi dari array of object

var makanan = [
    { jenis: "nasi goreng", harga: 15000, tersedia: true },
    { jenis: "mie goreng", harga: 12000, tersedia: false },
    { jenis: "sate ayam", harga: 20000, tersedia: true }
];

for(var i = 0; i<makanan.length; i++){
    if(i<2){
        for(var key in makanan[i]){
                console.log(key+" : "+makanan[i][key]);
        }
    }
}