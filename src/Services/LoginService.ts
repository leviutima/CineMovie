const API_URL = 'http://localhost:8080/usuarios/login';

interface LoginRequest {
    email: string;
    senha: string;
}

interface LoginResponse {
    message: string;
    nome?: string; // Adicionei 'nome' como opcional
}

export const loginUsuario = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginRequest),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro na resposta do servidor:', errorText);
            throw new Error('Erro ao realizar login: ' + errorText);
        }

        // Verifique o tipo de conteúdo da resposta
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data: LoginResponse = await response.json();
            console.log('Resposta do servidor:', data);
            return data;
        } else {
            const textResponse = await response.text();
            console.log('Resposta do servidor (texto):', textResponse);
            return { message: textResponse };
        }
    } catch (error) {
        console.error('Erro durante o login:', error);
        throw new Error('Erro ao conectar-se com o servidor, tente novamente ou verifique a conexão com a internet');
    }
};

