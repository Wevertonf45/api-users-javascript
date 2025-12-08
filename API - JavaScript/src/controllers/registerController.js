import { registerService } from "../services/registerService";

export const registerController = async (req, res) => {
    try {
        //Salvar a requisição
        const { name, email, password, code } = req.body;

        //Enviar para o service
        const user = await registerService({ name, email, password, code })

        //Responder
        return res.status(201).json({
            message: 'Usuário  cadastrado com sucesso!',
            user
        })

    } catch (error) {
        console.error(error);
        return res.status(error.status || 500).json({ message: error.message || 'Erro no servidor!' });
    }
}