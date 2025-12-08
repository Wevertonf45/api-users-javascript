import { registerRepository } from "../repositories/registerRepository"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'


dotenv.config()

export const registerService = async ({ name, email, password, code }) => {
    //Verificar os dados
    if (!name || !email || !password || !code) {
        throw {
            status: 400,
            message: 'Preencha todos os campos!'
        }
    }

    //Verificar o código
    if (code !== process.env.CODE) {
        throw {
            status: 403,
            message: 'Código inválido!'
        }
    }

    //Verificar se já existe o email
    const existingEmail = await registerRepository.findByEmail(email)
    if (existingEmail) {
        throw {
            status: 409,
            message: 'E-mail já cadastrado'
        }
    }

    //Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10)

    //Criar o usuário e retornar
    const id = await registerRepository.create(name, email, hashedPassword)
    return { id, name, email}
}
