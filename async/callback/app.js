function login(callback) {
    console.log("Login...");
    setTimeout(() => {
        const user = {
            id: 1,
            username: "martin"
        };
        callback(user);
    }, 2000);
}

function getProfile(userId, callback) {
    console.log("Mengambil profile...");
    setTimeout(() => {
        const profile = {
            id: userId,
            nama: "Martin",
            umur: 30
        };
        callback(profile);
    }, 2000);
}

login(function(user) {
    getProfile(user.id, function(profile) {
        console.log(profile);
    });
});

// function sapa(nama) {
//     console.log("Halo " + nama);
// }

// function proses(callback) {
//     callback("Martin");
// }

// proses(sapa); // manggil fungsi
// proses(nama=>{console.log("Halo "+nama)}); // arrow function


// function jalankan(fn) {
//     fn();
// }

// jalankan(function() {
//     console.log("Halo");
// });

// const data = [1, 2, 3];

// data.forEach(function(item) {
//     console.log(item);
// });
// Arrow Function
// data.forEach(item=>{console.log(item)})

// const angka = [1, 2, 3];

// const hasil = angka.map(function(item) {
//     return item * 2;
// });

// console.log(hasil);


// Arrow Function
// setTimeout(() => {
//     console.log("Hello");
// }, 3000);

// [1, 2, 3].forEach(item => {
//     console.log(item);
// });