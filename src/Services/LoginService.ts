const API_URL = 'http://localhost:8080/usuarios/login';

//interface de requisição do login
interface LoginRequest {
    email: string;
    senha: string;
}

//interface para resposta do Login, trazendo o nome
interface LoginResponse {
    message: string;
    nome?: string; 
}

//funcao assincrona para fazer a requisição do login
export const loginUsuario = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    try {
        //Featch faz a requisicao post para a api
        const response = await fetch(API_URL, {
            method: 'POST',
            //Define que o corpo da requisicao será em JSON
            headers: {
                'Content-Type': 'application/json',
            },
            //converte o loginRequest para uma string JSON
            body: JSON.stringify(loginRequest),
        });

        //verifica se resposta para api foi bem sucedida
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro na resposta do servidor:', errorText);
            throw new Error('Erro ao realizar login: ' + errorText);
        }
        
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data: LoginResponse = await response.json();
            console.log('Resposta do servidor:', data);
            if (data.nome) {
                localStorage.setItem('usuarioNome', data.nome);
            }
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
