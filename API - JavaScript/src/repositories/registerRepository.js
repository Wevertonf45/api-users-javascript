import { connection } from "../configs/database.js"

export const registerRepository = {
    //Encontrar pelo email
    findByEmail: async (email) => {
        const [rows] = await connection.execute('SELECT * FROM admin WHERE email = ?', [email])
        return rows.length > 0 ? rows[0] : null
    },

    //Criar o usuário
    create: async (name, email, hashedPassword) => {
        const [result] = await connection.execute('INSERT INTO admin (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword])
        return result.insertId
    }
}