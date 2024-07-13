import { Usuario } from "../pages/CadastroPage/CadastroPage";

const API_URL = 'http://localhost:8080/usuarios';

export const createUsuario = async (usuario: Usuario): Promise<void> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar conta, tente novamente');
        }
    } catch (error) {
        throw new Error('Erro ao conectar-se com o servidor, tente novamente ou verifique a conexão com a internet ou com servidor');
    }
};
