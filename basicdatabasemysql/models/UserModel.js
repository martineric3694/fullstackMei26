const {pool} = require("../config/database");

class UserModel{
    static async getAll(){
        const [rows] = await pool.query(
            "SELECT * FROM users"
        );
        return rows;
    }

    static async create(nama, email){

        const sql = "INSERT INTO users (name, email) VALUES (?,?)";
        const [result] = await pool.query(sql,[nama,email]);

        return {
            id : result.insertId,
            nama,
            email
        };
    }

    static async update(id, nama, email){

        console.log("===="+id+" "+nama+" "+email);

        const sql = "UPDATE users SET name = 'Lisa',email = ? WHERE name = ?";

        const [result] = await pool.query(sql,[email, nama]);

        console.log(result.affectedRows)

        return {
            id : id,
            nama : nama,
            email : email
        }
    }

    static async findOne(id){
        const sql = "SELECT * FROM users WHERE id = ?";

        const [result] = await pool.query(sql,id);

        return result;
    }

    static async delete(id){
        const sql = "DELETE FROM users WHERE id = ?";

        await pool.query(sql,id);

        return true;
    }
}

module.exports = UserModel;