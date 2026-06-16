// Jika berhasil

// function login() {
//     return new Promise((resolve, reject) => {
//         console.log("Login...");
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 username: "martin"
//             });
//         }, 2000);
//     });
// }

// function getProfile(userId) {
//     return new Promise((resolve, reject) => {
//         console.log("Mengambil profile...");
//         setTimeout(() => {
//             resolve({
//                 id: userId,
//                 nama: "Martin",
//                 umur: 30
//             });
//         }, 2000);
//     });
// }

// login()
//     .then(user => {
//         return getProfile(user.id);
//     })
//     .then(profile => {
//         console.log(profile);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// Jika gagal

function login() {
    return new Promise((resolve, reject) => {
        console.log("Login...");
        setTimeout(() => {
            const berhasil = true;
            if (berhasil) {
                resolve({
                    id: 1,
                    username: "martin"
                });
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}

function getProfile(userId) {
    return new Promise((resolve, reject) => {
        console.log("Mengambil profile...");
        setTimeout(() => {
            const berhasil = false;
            if(berhasil){
                resolve({
                    id: userId,
                    nama: "Martin",
                    umur: 30
                });
            }else{
                reject("User tidak aktif");
            }
        }, 2000);
    });
}

login()
    .then(user => {
        return getProfile(user.id);
    })
    .then(profile => {
        console.log(profile);
    })
    .catch(error => {
        console.log("ERROR1:", error);
    });