const UserModel = require("./models/UserModel");

async function main(){
    console.log("==== SELECT ALL ====");
    const row = await UserModel.getAll();

    console.log(row);

    console.log("==== INSERT DATA ====");
    const user = await UserModel.create(
        "Joko",
        "budi@asd.com"
    );
    console.log(user);

    console.log("==== UPDATE DATA ====");
    const update = await UserModel.update(1, "Joko", "iman@qwe.com");

    console.log(update);

    console.log("==== SELECT ALL ====");
    const rowupdate = await UserModel.getAll();

    console.log(rowupdate);

    console.log("==== DELETE DATA ====")
    const deleted = await UserModel.delete(13);
    if(deleted){
        console.log("Data berhasil dihapus");
    }

    console.log("==== SELECT ALL ====");
    const rowdelete = await UserModel.getAll();

    console.log(rowdelete);
}

main();