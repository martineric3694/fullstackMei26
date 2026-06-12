function cekAngka(angka){
    if(angka % 2 === 0) {
        console.log("Genap"); //1
        // return "Genap"; //2
    } else {
        console.log("Ganjil"); //1
        // return "Ganjil"; //2
    }
    if(angka > 100) {
        console.log("Angka lebih besar dari 100"); //1
        // return "Angka lebih besar dari 100"; //2
    }
}

var nilai = 5555;
cekAngka(nilai);
// console.log(cekAngka(nilai));