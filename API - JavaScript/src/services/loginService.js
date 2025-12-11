import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginRepository } from "../repositories/loginRepository.js";

export const loginService = async (email, password) => {
    //Verificar os campos
    if (!email || !password) {
        throw { status: 400, message: "Preencha todos os campos!" };
    }

    //Encontrar o usuário
    const user = await loginRepository.findByEmail(email);
    if (!user) {
        throw { status: 404, message: "E-mail não cadastrado!" };
    }

    //Verificar a senha
    const senhaCorreta = await bcrypt.compare(password, user.password);
    if (!senhaCorreta) {
        throw { status: 401, message: "Senha inválida!" };
    }

    //Gerar o token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Responder
    return {
        message: "Login efetuado com sucesso!",
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    };
};
