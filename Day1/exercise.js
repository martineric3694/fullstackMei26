// Buat aplikasi untuk cek kelayakan seseorang membuat KTP berdasarkan umur

// const tanggal1 = new Date('2026-05-01');
// const tanggal2 = new Date('2026-05-29');

// // Hitung selisih dalam milidetik
// const selisihMilidetik = tanggal2.getTime() - tanggal1.getTime();

// // Konversi ke hari
// const selisihHari = selisihMilidetik / (1000 * 60 * 60 * 24);
// console.log(selisihHari); // Output: 28

console.log("Tanggal Saat Ini : " + new Date());

// Sistem Bonus Karyawan
// 1. Jika nilai diatas dari 95 dan absensi sama dengan 100% maka dapat bonus 5jt
// 2. Jika nilai diatas dari 75 dan absensi lebih dari 80% maka dapat bonus 2jt
// 3. Jika nilai diatas dari 50 dan absensi lebih dari 80% maka dapat bonus 500rb
// 4. Jika tidak masuk kriteria diatas maka tidak dapat bonus
// 5. Jika nilai terpenuhi dari 3 kriteria diatas tapi memiliki SP (Surat Peringatan) 
// maka bonus tidak keluar

// Inputan Nilai, absensi, SP

var nilai = 80;
var absensi = 80;
var sp = false;
var flag = 0;

if(nilai > 95 && absensi === 100){ 
    flag =  1;
}else if(nilai > 75 && absensi >= 80){
    flag = 2;
}else if(nilai > 50 && absensi >= 80){
    flag = 3;
}else{
    flag = 0;
}

if(sp === false){
    switch(flag){
        case 1:
            console.log("Bonus 5jt");
            break;
        case 2:
            console.log("Bonus 2jt");
            break;
        case 3:
            console.log("Bonus 500rb");
            break;
        default:
            console.log("Tidak dapat bonus");
    }
} else {
    console.log("Tidak dapat bonus karena memiliki SP");
}