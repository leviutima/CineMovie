import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../../Services/LoginService';
import Botao from "../../components/Botao/Botao";
import { InputContainer, InputStyle, FormContainer, LinkStyleButton } from "../../components/GlobalStyle/GlobalStyle";
import { CardForm, CardLogin, SectionLogin, TextDiv } from "./LoginPage.styled";

const LoginPage = () => {
    //State para guardar o valor digitado pelo usuario e atualiza-lo
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    //navigate para navegação de paginas
    const navigate = useNavigate();

    //funcao assincriona quando o usuario clicar em login
    const handleLogin = async () => {
        //caso a resposta seja bem sucedida 
        try {
            const loginResponse = await loginUsuario({ email, senha });
            if (loginResponse.message === 'Login successful') {
                // Aqui você pode salvar o nome do usuário no estado global ou no localStorage
                console.log('Nome do usuário:', loginResponse.nome);
                navigate('/Home');
            //caso a tentativa seja invalida
            } else {
                alert('Email ou senha inválidos');
            }
        //caso ocorra algum erro desconhecido como contato com servidor ou internet
        } catch (error: unknown) {
            // Fazendo uma verificação de tipo para garantir que error tem a propriedade message
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert('Erro desconhecido ocorreu');
            }
        }
    };

    return (
        <SectionLogin>
            <CardLogin>
                <TextDiv>
                    <h2>BEM VINDO</h2>
                </TextDiv>
                <CardForm>
                    <h2>LOGIN</h2>
                    <FormContainer>
                        <InputContainer>
                            <span>Email</span>
                            <InputStyle
                                type="email"
                                placeholder="Digite seu email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <span>Senha</span>
                            <InputStyle
                                type="password"
                                placeholder="Digite sua senha..."
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </InputContainer>
                    </FormContainer>
                    <Botao onClick={handleLogin} width="7vw" height="4.5vh">Entrar</Botao>
                </CardForm>
            </CardLogin>
            <span>Ainda não tem uma conta? Clique <LinkStyleButton to="/Cadastro">AQUI</LinkStyleButton> para se cadastrar</span>
        </SectionLogin>
    );
};

export default LoginPage;
