import { createUserService } from "../services/createUsersServices.js"

export const createUser = async (req, res) => {
    try {
        //Salvar a requisição
        const { firstName, lastName, email } = req.body

        //Enviar para o service
        const user = await createUserService({ firstName, lastName, email })

        //Responder
        return res.status(201).json({ message: 'Usuário criado com sucesso!', user })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Erro no servidor!' })
    }
}