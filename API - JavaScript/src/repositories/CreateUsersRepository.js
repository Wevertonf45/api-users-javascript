import { connection } from "../configs/database.js"

export const createUserRepository = {
    //Encontrar email
    findByEmail: async (email) => {
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email])
        return rows[0]
    },

    //Criar usuário
    create: async (firstName, lastName, email) => {
        const [result] = await connection.execute(
            'INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)',
            [firstName, lastName, email]
        )

        return result.insertId
    }
}