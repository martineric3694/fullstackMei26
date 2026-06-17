const UserModel = require("./models/userModel");

async function main() {

    try {

        console.log("=== INSERT ===");

        const user = await UserModel.create(
            "Martin",
            "martin@gmail.com"
        );

        console.log(user);

        console.log("\n=== SELECT ALL ===");

        const users = await UserModel.getAll();

        console.log(users);

        console.log("\n=== SELECT BY ID ===");

        const detail = await UserModel.getById(user.id);

        console.log(detail);

        console.log("\n=== UPDATE ===");

        const updated = await UserModel.update(
            user.id,
            "Martin Update",
            "update@gmail.com"
        );

        console.log(updated);

        // console.log("\n=== DELETE ===");

        // const deleted = await UserModel.delete(
        //     user.id
        // );

        // console.log(deleted);

    } catch (err) {

        console.error(err);

    }
}

main();