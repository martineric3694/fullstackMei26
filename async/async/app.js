// function login() {

//     return new Promise((resolve) => {

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

//     return new Promise((resolve) => {

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

// async function main() {

//     const user = await login();

//     const profile = await getProfile(user.id);

//     console.log(profile);

// }

// main();



// Jika gagal
function login() {
    return new Promise((resolve, reject) => {
        console.log("Login...");
        setTimeout(() => {
            const sukses = true;
            if (sukses) {
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
            const sukses = true;
            if (sukses) {
                resolve({
                    id: userId,
                    nama: "Martin",
                    umur: 30
                });
            } else {
                reject("Profile tidak ditemukan");
            }
        }, 2000);
    });
}

async function main() {
    try {
        const user = await login();
        const profile = await getProfile(user.id);
        console.log(profile);
    } catch (error) {
        console.log("Terjadi error:");
        console.log(error);
    }
}

main();