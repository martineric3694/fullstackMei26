const db = require("../config/database");

class UserModel {

    // CREATE
    static async create(nama, email) {

        const sql = `
            INSERT INTO users (nama,email)
            VALUES ($1,$2)
            RETURNING *
        `;

        const result = await db.query(sql, [nama, email]);

        return result.rows[0];
    }

    // READ ALL
    static async getAll() {

        const result = await db.query(
            "SELECT * FROM users ORDER BY id"
        );

        return result.rows;
    }

    // READ BY ID
    static async getById(id) {

        const result = await db.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        );

        return result.rows[0];
    }

    // UPDATE
    static async update(id, nama, email) {

        const sql = `
            UPDATE users
            SET nama = $1,
                email = $2
            WHERE id = $3
            RETURNING *
        `;

        const result = await db.query(
            sql,
            [nama, email, id]
        );

        return result.rows[0];
    }

    // DELETE
    static async delete(id) {

        const result = await db.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [id]
        );

        return result.rows[0];
    }
}

module.exports = UserModel;