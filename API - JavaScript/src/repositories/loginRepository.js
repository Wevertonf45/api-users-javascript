import { connection } from "../configs/database.js";

export const loginRepository = {
    findByEmail: async (email) => {
        const [rows] = await connection.execute('SELECT * FROM admin WHERE email = ?', [email]);
        return rows[0];
    }
};
