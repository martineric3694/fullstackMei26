let data1 = ["Budi", "Siti", "Joko"];
let data2 = data1;

console.log("== Before Modification ==");
console.log(data1); // Output: ["Budi", "Siti", "Joko"]
console.log(data2); // Output: ["Budi", "Siti", "Joko"]

data2.push("Ani");

console.log("== After Modification ==");
console.log(data1); // Output: ["Budi", "Siti", "Joko", "Ani"]
console.log(data2); // Output: ["Budi", "Siti", "Joko", "Ani"]

let data3 = [...data1];

console.log("== Shallow Copy ==");
console.log(data1);
console.log(data3);

data3.push("Dewi");

console.log("== After Modifying data3 ==");
console.log(data1); // Output: ["Budi", "Siti", "Joko", "Ani"]
console.log(data3); // Output: ["Budi", "Siti", "Joko", "Ani", "Dewi"]

let data4 = ["Kadir", "Rina", "Sari"];
let data5 = [...data1, ...data4];
console.log("== Merging Arrays ==");
console.log(data5); // Output: ["Budi", "Siti", "Joko", "Ani", "Kadir", "Rina", "Sari"]

let objData1 = { name: "Budi", age: 30 };
let objData2 = { ...objData1, city: "Jakarta" };

console.log("== Object Spread ==");
console.log(objData2);

let objData3 = { ...objData2 ,name: "Siti"};

console.log("== Object Spread with Override ==");
console.log(objData3); // Output: { name: "Siti", age: 30 }

// Edit data => ambil data dari database
// kolom id, nama, umur, tempat tinggal
// if(nama !== "") nama: inputan

data1.forEach(nama=>console.log(nama));

for(let nama of data1){
    console.log(nama);
}