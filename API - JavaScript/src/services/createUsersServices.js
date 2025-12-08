import { createUserRepository } from "../repositories/CreateUsersRepository.js"

export const createUserService = async ({ firstName, lastName, email }) => {
    //Verificar os campos
    if (!firstName || !lastName || !email) {
        throw {
            status: 400,
            message: 'Preencha todos os campos!'
        }
    }

    //Verificar se o e-mail já existe
    const existingEmail = await createUserRepository.findByEmail(email)
    if (existingEmail) {
        throw {
            status: 409,
            message: 'E-mail já cadastrado!'
        }
    }

    //Criar o usuário e retornar
    const id = await createUserRepository.create(firstName, lastName, email)
    return { id, firstName, lastName, email }
}