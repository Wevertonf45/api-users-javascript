import { loginService } from "../services/loginService.js";

export const loginController = async (req, res) => {
    try {
        //Salvar a requisição
        const { email, password } = req.body;

        //Enviar para o service
        const result = await loginService(email, password);

        //Responder
        return res.status(200).json(result);

    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({ message: error.message || "Erro no servidor!" });
    }
};

